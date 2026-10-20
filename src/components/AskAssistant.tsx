import { useRef, useState } from 'react'
import { projects, site } from '~/data/site'

// A tiny rule-based assistant that only knows what is in src/data/site.ts.
// Swap `answer()` for a call to your own API route if you want a real LLM later.
function answer(q: string): string {
  const s = q.toLowerCase()
  if (/(avail|intern|hire|job|role|open to)/.test(s)) return site.assistantFacts.available
  if (/(gpa|course|study|educat|college|univers|degree)/.test(s)) return site.assistantFacts.education
  if (/(best|strongest|top|proud)/.test(s)) {
    const p = projects[0]
    return `${p.title}: ${p.blurb}`
  }
  const hit = projects.find((p) => s.includes(p.title.toLowerCase()) || s.includes(p.slug.replace(/-/g, ' ')))
  if (hit) return `${hit.title}: ${hit.blurb} Built with ${hit.tags.join(', ')}.`
  if (/(skill|tech|stack|language|tool)/.test(s))
    return site.tiers.map((t) => `${t.name}: ${t.skills.join(', ')}`).join('. ') + '.'
  if (/(project|built|made|work)/.test(s)) return `Projects: ${projects.map((p) => p.title).join(', ')}.`
  if (/(contact|email|reach|linkedin|github)/.test(s)) return `Best way to reach him is the Hire me button, or the contact section below.`
  return "I only know what's on this site: background, projects, skills and availability. Try one of the suggestions below."
}

type M = { from: 'bot' | 'me'; text: string }

export function AskAssistant() {
  const [log, setLog] = useState<M[]>([
    {
      from: 'bot',
      text: "Hi, I'm the assistant for this portfolio. I only know what's on the resume and in the projects. Ask me about background, projects, or availability.",
    },
  ])
  const [q, setQ] = useState('')
  const box = useRef<HTMLDivElement>(null)

  const send = (text: string) => {
    const t = text.trim()
    if (!t) return
    setLog((l) => [...l, { from: 'me', text: t }, { from: 'bot', text: answer(t) }])
    setQ('')
    setTimeout(() => box.current?.scrollTo({ top: 99999, behavior: 'smooth' }), 30)
  }

  const suggestions = [
    "What's the strongest project?",
    'Is available for internships?',
    'What are the skills?',
    "What's the GPA and coursework?",
  ]

  return (
    <div className="chat">
      <div className="chat-head">
        <span>assistant · <i>online</i></span>
        <span>answers stay grounded</span>
      </div>
      <div className="log" ref={box}>
        {log.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>{m.text}</div>
        ))}
      </div>
      <div className="suggest">
        {suggestions.map((s) => (
          <button key={s} onClick={() => send(s)}>{s}</button>
        ))}
      </div>
      <form
        className="ask-row"
        onSubmit={(e) => {
          e.preventDefault()
          send(q)
        }}
      >
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ask anything about the portfolio…" aria-label="Ask a question" />
        <button type="submit">Ask</button>
      </form>
    </div>
  )
}
