import { useEffect, useState } from 'react'
import { site } from '~/data/site'

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  pushed_at: string
  fork: boolean
}
type User = { public_repos: number; followers: number }

const FALLBACK_USER: User = {
  public_repos: 57,
  followers: 9,
}

const FALLBACK_REPOS: Repo[] = [
  {
    id: 1,
    name: 'deepnova',
    description: 'AI platform making artificial intelligence and deep learning accessible through intuitive learning experiences.',
    html_url: 'https://github.com/Rohansinha2003/deepnova',
    stargazers_count: 0,
    language: 'JavaScript',
    pushed_at: '2026-09-22T18:17:39Z',
    fork: false,
  },
  {
    id: 2,
    name: 'Chest_X_ray',
    description: 'Deep learning computer vision system for pulmonary disease detection from chest radiographs.',
    html_url: 'https://github.com/Rohansinha2003/Chest_X_ray',
    stargazers_count: 0,
    language: 'Python',
    pushed_at: '2026-03-05T12:38:30Z',
    fork: false,
  },
  {
    id: 3,
    name: 'Cognix_Agent',
    description: 'Autonomous AI agent framework with dynamic tool calling and multi-step reasoning.',
    html_url: 'https://github.com/Rohansinha2003/Cognix_Agent',
    stargazers_count: 0,
    language: 'Python',
    pushed_at: '2026-04-12T21:41:59Z',
    fork: false,
  },
  {
    id: 4,
    name: 'RAG-Project',
    description: 'Retrieval-augmented generation pipeline with vector search and document grounding.',
    html_url: 'https://github.com/Rohansinha2003/RAG-Project',
    stargazers_count: 0,
    language: 'Python',
    pushed_at: '2026-04-27T16:49:07Z',
    fork: false,
  },
  {
    id: 5,
    name: 'LEGALISH',
    description: 'Legal tech AI workflow and document processing solution.',
    html_url: 'https://github.com/Rohansinha2003/LEGALISH',
    stargazers_count: 0,
    language: 'TypeScript',
    pushed_at: '2026-10-18T19:44:19Z',
    fork: false,
  },
  {
    id: 6,
    name: 'Portfolio',
    description: 'Personal engineering portfolio showcasing AI/ML projects and interactive 3D visualizations.',
    html_url: 'https://github.com/Rohansinha2003/Portfolio',
    stargazers_count: 0,
    language: 'TypeScript',
    pushed_at: '2026-10-21T10:58:59Z',
    fork: false,
  },
]

export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    let off = false
    const u = encodeURIComponent(site.github)
    Promise.all([
      fetch(`https://api.github.com/users/${u}`).then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
      fetch(`https://api.github.com/users/${u}/repos?sort=pushed&per_page=30`).then((r) =>
        r.ok ? r.json() : Promise.reject(r.status),
      ),
    ])
      .then(([usr, rs]: [User, Repo[]]) => {
        if (off) return
        setUser(usr)
        setRepos(rs.filter((r) => !r.fork).slice(0, 6))
        setIsLive(true)
      })
      .catch(() => {
        if (!off) {
          setUser(FALLBACK_USER)
          setRepos(FALLBACK_REPOS)
          setIsLive(false)
        }
      })
    return () => {
      off = true
    }
  }, [])

  const displayUser = user ?? FALLBACK_USER
  const displayRepos = repos ?? FALLBACK_REPOS
  const stars = displayRepos.reduce((a, r) => a + r.stargazers_count, 0)

  return (
    <>
      <div className="gh-head">
        <div><b>{displayUser.public_repos}</b><small>public repos</small></div>
        <div><b>{displayUser.followers}</b><small>followers</small></div>
        <div><b>{stars}</b><small>stars</small></div>
        <div style={{ marginLeft: 'auto', alignSelf: 'center' }}>
          <a className="btn" href={`https://github.com/${site.github}`} target="_blank" rel="noreferrer">
            View @{site.github} on GitHub ↗
          </a>
        </div>
      </div>
      {!isLive && (
        <p className="muted" style={{ marginBottom: 16 }}>
          Live API sync active · Showing top repositories from{' '}
          <a href={`https://github.com/${site.github}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
            github.com/{site.github}
          </a>
        </p>
      )}
      <div className="gh-grid">
        {displayRepos.map((r) => (
          <a className="repo" key={r.id} href={r.html_url} target="_blank" rel="noreferrer">
            <h4>{r.name}</h4>
            <p>{r.description ?? 'No description yet.'}</p>
            <div className="meta">
              {r.language && <span>{r.language}</span>}
              <span>★ {r.stargazers_count}</span>
              <span>pushed {new Date(r.pushed_at).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="gh-streak-wrap">
        <div className="streak-header">
          <div>
            <h4>Continuous Shipping Streak</h4>
            <span className="muted">Live contribution metrics & streaks across all repositories</span>
          </div>
          <a
            className="btn"
            href={`https://github.com/${site.github}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile →
          </a>
        </div>
        <div className="streak-cards">
          <a
            href={`https://github.com/${site.github}`}
            target="_blank"
            rel="noreferrer"
            className="streak-card"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${site.github}&theme=dark&background=131315&border=222226&stroke=c6ff3d&ring=c6ff3d&fire=c6ff3d&currStreakNum=f4f1ea&sideNums=f4f1ea&currStreakLabel=c6ff3d&sideLabels=8d8a82&dates=8d8a82`}
              alt={`${site.firstName}'s GitHub Contribution Streak`}
              loading="lazy"
            />
          </a>
          <a
            href={`https://github.com/${site.github}`}
            target="_blank"
            rel="noreferrer"
            className="streak-card"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${site.github}&show_icons=true&bg_color=131315&border_color=222226&title_color=c6ff3d&text_color=c8c5bd&icon_color=c6ff3d`}
              alt={`${site.firstName}'s GitHub Overall Stats`}
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </>
  )
}

