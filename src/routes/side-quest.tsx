import { createFileRoute, Link } from '@tanstack/react-router'
import { site } from '~/data/site'

export const Route = createFileRoute('/side-quest')({
  head: () => ({ meta: [{ title: `${site.sideQuest.title} · ${site.name}` }] }),
  component: SideQuest,
})

function SideQuest() {
  return (
    <main className="page">
      <div className="wrap">
        <Link to="/" className="back">← Back to portfolio</Link>
        <div className="kicker">{site.sideQuest.kicker}</div>
        <h1>{site.sideQuest.title}</h1>
        <p>{site.sideQuest.body}</p>
        <div className="shelf">
          {site.sideQuest.items.map((t) => <div className="spine" key={t}>{t}</div>)}
        </div>
      </div>
    </main>
  )
}
