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

export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState(false)

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
      })
      .catch(() => !off && setError(true))
    return () => {
      off = true
    }
  }, [])

  if (error)
    return (
      <p className="muted">
        Could not load GitHub right now. Check that <code>github</code> in <code>src/data/site.ts</code> is a real username.
      </p>
    )
  if (!repos || !user) return <p className="muted">fetching live github data…</p>

  const stars = repos.reduce((a, r) => a + r.stargazers_count, 0)
  return (
    <>
      <div className="gh-head">
        <div><b>{user.public_repos}</b><small>public repos</small></div>
        <div><b>{user.followers}</b><small>followers</small></div>
        <div><b>{stars}</b><small>stars (recent)</small></div>
      </div>
      <div className="gh-grid">
        {repos.map((r) => (
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
    </>
  )
}
