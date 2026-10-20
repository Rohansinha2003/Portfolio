import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { Project } from '~/data/site'

type Props = {
  projects: Project[]
  selected: number
  onSelect: (i: number) => void
}

function wrap(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxW: number, lh: number) {
  const words = text.split(' ')
  let line = ''
  let yy = y
  for (const w of words) {
    const test = line ? `${line} ${w}` : w
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, yy)
      line = w
      yy += lh
    } else line = test
  }
  ctx.fillText(line, x, yy)
  return yy
}

function makeCardTexture(p: Project, index: number, total: number) {
  const c = document.createElement('canvas')
  c.width = 640
  c.height = 840
  const g = c.getContext('2d')!
  g.fillStyle = '#131315'
  g.fillRect(0, 0, c.width, c.height)
  g.strokeStyle = p.color
  g.lineWidth = 6
  g.strokeRect(14, 14, c.width - 28, c.height - 28)

  g.fillStyle = p.color
  g.font = '600 26px monospace'
  g.fillText(`${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`, 50, 90)

  g.fillStyle = '#8d8a82'
  g.font = '600 24px monospace'
  g.fillText(p.eyebrow.toUpperCase(), 50, 140)

  g.fillStyle = '#f4f1ea'
  g.font = '92px Anton, Impact, sans-serif'
  const endY = wrap(g, p.title.toUpperCase(), 50, 280, c.width - 100, 100)

  g.fillStyle = '#c8c5bd'
  g.font = '26px sans-serif'
  wrap(g, p.blurb, 50, endY + 80, c.width - 100, 38)

  g.fillStyle = p.color
  g.font = '28px monospace'
  g.fillText(p.tags.join(' · '), 50, c.height - 70)

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

export function ProjectCarousel({ projects, selected, onSelect }: Props) {
  const host = useRef<HTMLDivElement>(null)
  const api = useRef<{ goTo: (i: number) => void } | null>(null)
  const onSelectRef = useRef(onSelect)
  onSelectRef.current = onSelect

  useEffect(() => {
    const el = host.current
    if (!el) return
    const n = projects.length
    const step = (Math.PI * 2) / n
    const R = 4.6

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0.4, R + 7)
    camera.lookAt(0, 0, R * 0.3)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const meshes: THREE.Mesh[] = []
    const textures: THREE.Texture[] = []
    const build = () => {
      projects.forEach((p, i) => {
        const tex = makeCardTexture(p, i, n)
        textures.push(tex)
        const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide })
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.4), mat)
        const a = i * step
        mesh.position.set(Math.sin(a) * R, 0, Math.cos(a) * R)
        mesh.rotation.y = a
        mesh.userData.index = i
        group.add(mesh)
        meshes.push(mesh)
      })
    }
    // wait for fonts so the canvas text uses Anton
    ;(document.fonts?.ready ?? Promise.resolve()).then(() => {
      if (!disposed) build()
    })

    let rot = 0
    let target = 0
    let vel = 0
    let dragging = false
    let moved = 0
    let lastX = 0
    let snapping = false
    let disposed = false

    const nearest = (r: number) => Math.round(-r / step)
    const targetFor = (i: number, from: number) => {
      // choose equivalent angle closest to current rotation
      const base = -i * step
      const k = Math.round((from - base) / (Math.PI * 2))
      return base + k * Math.PI * 2
    }
    api.current = {
      goTo: (i: number) => {
        target = targetFor(i, rot)
        snapping = true
      },
    }

    const resize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    const canvas = renderer.domElement
    const down = (e: PointerEvent) => {
      dragging = true
      snapping = false
      moved = 0
      lastX = e.clientX
      vel = 0
      canvas.setPointerCapture(e.pointerId)
    }
    const move = (e: PointerEvent) => {
      if (!dragging) return
      const dx = e.clientX - lastX
      lastX = e.clientX
      moved += Math.abs(dx)
      vel = dx * 0.006
      rot += vel
    }
    const raycaster = new THREE.Raycaster()
    const up = (e: PointerEvent) => {
      if (!dragging) return
      dragging = false
      if (moved < 6) {
        const r = canvas.getBoundingClientRect()
        const m = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
        raycaster.setFromCamera(m, camera)
        const hit = raycaster.intersectObjects(meshes)[0]
        if (hit) {
          const i = hit.object.userData.index as number
          target = targetFor(i, rot)
          snapping = true
          onSelectRef.current(i)
          return
        }
      }
      const idx = nearest(rot + vel * 14)
      target = targetFor(((idx % n) + n) % n, rot + vel * 14)
      snapping = true
      onSelectRef.current(((idx % n) + n) % n)
    }
    canvas.addEventListener('pointerdown', down)
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerup', up)
    canvas.addEventListener('pointercancel', up)

    let raf = 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tick = () => {
      if (!dragging) {
        if (snapping) {
          rot += (target - rot) * 0.1
          if (Math.abs(target - rot) < 0.0005) snapping = false
        } else if (!reduce) {
          rot += 0.0015
        }
      }
      group.rotation.y = rot
      // dim cards away from the front
      meshes.forEach((m) => {
        const wp = new THREE.Vector3()
        m.getWorldPosition(wp)
        const t = THREE.MathUtils.clamp((wp.z + R) / (2 * R), 0.25, 1)
        ;(m.material as THREE.MeshBasicMaterial).color.setScalar(t)
      })
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      canvas.removeEventListener('pointerdown', down)
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerup', up)
      canvas.removeEventListener('pointercancel', up)
      meshes.forEach((m) => {
        m.geometry.dispose()
        ;(m.material as THREE.Material).dispose()
      })
      textures.forEach((t) => t.dispose())
      renderer.dispose()
      el.removeChild(canvas)
    }
  }, [projects])

  useEffect(() => {
    api.current?.goTo(selected)
  }, [selected])

  return (
    <div className="stage" ref={host}>
      <div className="hint">Drag to spin. Click a card to open it.</div>
      <div className="count">
        {String(selected + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} · {projects[selected].title}
      </div>
    </div>
  )
}
