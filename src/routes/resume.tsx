import { createFileRoute, Link } from '@tanstack/react-router'
import { site } from '~/data/site'

export const Route = createFileRoute('/resume')({
  head: () => ({ meta: [{ title: `Résumé · ${site.name}` }] }),
  component: Resume,
})

function Resume() {
  return (
    <main className="page">
      <div className="wrap">
        <Link to="/" className="back">← Back to portfolio</Link>
        <h1>Résumé</h1>
        <p>
          Put your PDF at <code>public/resume.pdf</code> and it will be linked below.
        </p>
        <div className="row-btns" style={{ marginTop: 24 }}>
          <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">Open PDF ↗</a>
          <a className="btn" href={`mailto:${site.email}`}>Email me</a>
        </div>
      </div>
    </main>
  )
}
