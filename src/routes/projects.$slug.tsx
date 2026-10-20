import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { projects } from '~/data/site'

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.title} · Case study` : 'Case study' }],
  }),
  component: CaseStudy,
  notFoundComponent: () => (
    <main className="page"><div className="wrap">
      <Link to="/" className="back">← Back</Link>
      <h1>Not found</h1>
    </div></main>
  ),
})

function CaseStudy() {
  const p = Route.useLoaderData()
  return (
    <main className="page case">
      <div className="wrap">
        <Link to="/" className="back">← Back to portfolio</Link>
        <div className="kicker" style={{ color: p.color }}>{p.eyebrow}</div>
        <h1>{p.title}</h1>
        <p>{p.blurb}</p>
        <div className="dstats">
          {p.stats.map((s) => (
            <div key={s.label}><b style={{ color: p.color }}>{s.value}</b><small>{s.label}</small></div>
          ))}
        </div>
        <div className="chips">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
        <h3>The problem</h3><p>{p.problem}</p>
        <h3>What I built</h3><p>{p.built}</p>
        <h3>Trade-offs</h3><p>{p.tradeoffs}</p>
        {p.live && (
          <div className="row-btns" style={{ marginTop: 32 }}>
            <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Live site ↗</a>
          </div>
        )}
      </div>
    </main>
  )
}
