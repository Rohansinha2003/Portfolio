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
          Download or preview Rohan Sinha's official engineering résumé below, covering machine learning architectures, models shipped, and technical background.
        </p>
        <div className="row-btns" style={{ marginTop: 24 }}>
          <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">Open PDF ↗</a>
          <a className="btn" href={`mailto:${site.email}`}>Email me</a>
        </div>
      </div>
    </main>
  )
}
