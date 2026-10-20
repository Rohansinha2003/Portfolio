import { createFileRoute, Link } from '@tanstack/react-router'
import { lazy, Suspense, useEffect, useState } from 'react'
import { projects, site } from '~/data/site'
import { GithubActivity } from '~/components/GithubActivity'
import { AskAssistant } from '~/components/AskAssistant'
import { Terminal } from '~/components/Terminal'

export const Route = createFileRoute('/')({ component: Home })

// Three.js is browser-only, so load the carousel on the client.
const ProjectCarousel = lazy(() =>
  import('~/components/ProjectCarousel').then((m) => ({ default: m.ProjectCarousel })),
)

const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Hi ${site.firstName}, I'd like to chat about a role`)}`

function Chapter({ n, title }: { n: string; title: string }) {
  return (
    <div className="chapter">
      <span className="num">{n} · Chapter</span>
      <h2>{title}</h2>
    </div>
  )
}

function Home() {
  const [sel, setSel] = useState(0)
  const [client, setClient] = useState(false)
  useEffect(() => setClient(true), [])
  const p = projects[sel]
  const marquee = [...site.marquee, ...site.marquee].map((t, i) => <span key={i}>{t} ★</span>)

  return (
    <>
      <nav className="nav">
        <a className="logo" href="#top">{site.name}</a>
        <div className="links">
          <Link className="hide-sm" to="/resume">Résumé</Link>
          <Link className="hide-sm" to="/side-quest">Side quest</Link>
          <a className="btn primary" href={mailto}>Hire me →</a>
        </div>
      </nav>
      <div className="dots">
        <a href="#origin">Origin</a><a href="#github">GitHub</a><a href="#projects">Arsenal</a>
        <a href="#ask">Ask</a><a href="#shelf">Side quest</a><a href="#contact">Contact</a>
      </div>

      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="kicker">Chapter 00 · Portfolio / 2026</div>
            <h1>{site.firstName.toUpperCase()}<br /><span>{site.lastName.toUpperCase()}</span></h1>
            <p className="lead">{site.tagline}</p>
            <div className="cta">
              <a className="btn" href="#ask">Ask me ↴</a>
              <a className="btn primary" href={mailto}>Hire me →</a>
              <Link className="btn" to="/resume">Résumé →</Link>
              <a className="btn" href={`https://github.com/${site.github}`} target="_blank" rel="noreferrer">GitHub →</a>
            </div>
            <div className="stats">
              {site.stats.map((s) => (
                <div key={s.label}><b>{s.value}</b><small>{s.label}</small></div>
              ))}
            </div>
          </div>
          <div className="portrait">
            <img src="/portrait.png" alt={site.name} />
            <div className="badge">{site.handle} · {site.city.toLowerCase()}</div>
          </div>
        </div>
      </header>

      <div className="marquee"><div>{marquee}</div></div>

      <section id="origin">
        <div className="wrap">
          <Chapter n="01" title="Origin Story" />
          <div className="origin-grid">
            <div>
              <blockquote>“{site.quote}”</blockquote>
              {site.origin.map((t, i) => <p key={i}>{t}</p>)}
            </div>
            <div className="cards">
              {site.originCards.map((c) => (
                <div className="card" key={c.title}>
                  <small>{c.label}</small>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <Chapter n="02" title="Power Levels" />
          <p className="sub">Honest tiers: what you lean on daily, what you are comfortable with, and what you are still learning.</p>
          {site.tiers.map((t) => (
            <div className="tier" key={t.tier}>
              <div className="letter">{t.tier}</div>
              <div>
                <small>Tier · {t.name}</small>
                <div className="chips">{t.skills.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="github">
        <div className="wrap">
          <Chapter n="03" title="Live Code Activity" />
          <p className="sub">Not hardcoded. Pulled live from the GitHub API when the page loads, so it is what you actually shipped.</p>
          <GithubActivity />
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <Chapter n="04" title="The Arsenal" />
          <p className="sub">Click any card for details, or open the full case study for the problem, constraints and trade-offs.</p>
          {client ? (
            <Suspense fallback={<div className="stage" />}>
              <ProjectCarousel projects={projects} selected={sel} onSelect={setSel} />
            </Suspense>
          ) : (
            <div className="stage" />
          )}
          <div className="picker">
            {projects.map((x, i) => (
              <button key={x.slug} className={i === sel ? 'on' : ''} onClick={() => setSel(i)}>{x.title}</button>
            ))}
          </div>
          <div className="detail">
            <div>
              <div className="kicker" style={{ color: p.color }}>{p.eyebrow}</div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="chips">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
              <div className="row-btns" style={{ marginTop: 22 }}>
                <Link className="btn primary" to="/projects/$slug" params={{ slug: p.slug }}>Case study →</Link>
                {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live site ↗</a>}
              </div>
            </div>
            <div className="dstats" style={{ alignContent: 'center' }}>
              {p.stats.map((s) => (
                <div key={s.label}><b style={{ color: p.color }}>{s.value}</b><small>{s.label}</small></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ask">
        <div className="wrap">
          <Chapter n="05" title={`Ask ${site.firstName}`} />
          <p className="sub">In a hurry? Skip the scroll and ask the assistant. It only knows the resume and projects.</p>
          <AskAssistant />
        </div>
      </section>

      <section id="shelf">
        <div className="wrap">
          <Chapter n="06" title="Side Quest" />
          <Link to="/side-quest" className="quest">
            <div className="kicker">{site.sideQuest.kicker}</div>
            <h3>{site.sideQuest.title}</h3>
            <p>{site.sideQuest.body}</p>
            <span className="btn">Open the shelf</span>
          </Link>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <Chapter n="07" title="Let's Build Something" />
          <Terminal />
          <p className="sub" style={{ marginTop: 28 }}>An algorithm to crack, a product to ship, or the latest thing you are into. Drop a line.</p>
          <div className="socials">
            <a className="btn" href={`https://github.com/${site.github}`} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={site.x} target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© 2026 · {site.name} · Portfolio </span>
          <span>Built with ❤️ by Rohan Sinha</span>
        </div>
      </footer>
    </>
  )
}
