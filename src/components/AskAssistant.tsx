import { useRef, useState } from 'react'
import { answerWithRag, type RagResult } from '~/utils/ragEngine'

type Message = {
  from: 'bot' | 'me'
  text: string
  sources?: RagResult['sources']
  links?: RagResult['links']
}

export function AskAssistant() {
  const [log, setLog] = useState<Message[]>([
    {
      from: 'bot',
      text: "Hi, I'm Rohan's AI assistant powered by a grounded RAG knowledge engine. I have full context on his LeetCode problem solving, Kaggle ML pipelines, 57+ GitHub repos, and models like the 51M Coding Model and DeepNova AI. Ask me anything!",
      sources: [{ title: 'Portfolio RAG Index', category: 'background' }],
    },
  ])
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    setTimeout(() => {
      if (box.current) {
        box.current.scrollTo({ top: 99999, behavior: 'smooth' })
      }
    }, 40)
  }

  const send = (text: string) => {
    const query = text.trim()
    if (!query || loading) return

    // 1. Append user message
    setLog((prev) => [...prev, { from: 'me', text: query }])
    setQ('')
    setLoading(true)
    scrollToBottom()

    // 2. Simulate realistic neural retrieval & generation latency (300ms)
    setTimeout(() => {
      const ragResult = answerWithRag(query)
      setLog((prev) => [
        ...prev,
        {
          from: 'bot',
          text: ragResult.answer,
          sources: ragResult.sources,
          links: ragResult.links,
        },
      ])
      setLoading(false)
      scrollToBottom()
    }, 320)
  }

  const suggestions = [
    "What are Rohan's LeetCode & DSA strengths?",
    'Tell me about the 51M Coding Model',
    'What Kaggle & ML projects has Rohan built?',
    'What is DeepNova AI?',
    'Is Rohan open to internships or full-time roles?',
  ]

  return (
    <div className="chat">
      <div className="chat-head">
        <span>
          assistant · <i>RAG online</i>
        </span>
        <span>grounded knowledge · LeetCode, Kaggle, GitHub</span>
      </div>

      <div className="log" ref={box}>
        {log.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>
            <div style={{ whiteSpace: 'pre-line' }}>{m.text}</div>

            {m.sources && m.sources.length > 0 && (
              <div className="msg-sources">
                {m.sources.map((s, idx) => (
                  <span key={idx} className="source-tag" title={`Category: ${s.category}`}>
                    Source: {s.title}
                  </span>
                ))}
              </div>
            )}

            {m.links && m.links.length > 0 && (
              <div className="msg-links">
                {m.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noreferrer">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="msg bot">
            <span className="chat-loading">retrieving context & synthesizing response… ▍</span>
          </div>
        )}
      </div>

      <div className="suggest">
        {suggestions.map((s) => (
          <button key={s} onClick={() => send(s)} disabled={loading}>
            {s}
          </button>
        ))}
      </div>

      <form
        className="ask-row"
        onSubmit={(e) => {
          e.preventDefault()
          send(q)
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask about LeetCode, Kaggle, GitHub repos, models, or hiring…"
          aria-label="Ask a question"
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? '…' : 'Ask'}
        </button>
      </form>
    </div>
  )
}
