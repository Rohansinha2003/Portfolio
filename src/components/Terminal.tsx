
import { useState } from 'react'
import { site } from '~/data/site'

export function Terminal() {
  const [open, setOpen] = useState(false)

  const formattedRole = site.role
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '_')

  return (
    <div className="term">
      <div>
        <span className="p">$</span> whoami
      </div>

      <div>
        {site.handle}@portfolio:~$ {formattedRole}
      </div>

      <div>
        <span className="p">$</span> cat contact.sh
      </div>

      <div>
        {open ? (
          <a href={`mailto:${site.email}`}>
            {site.email}
          </a>
        ) : (
          <button
            type="button"
            className="cmd"
            onClick={() => setOpen(true)}
            aria-expanded={open}
          >
            [ contact locked: click to decrypt ]
          </button>
        )}
      </div>

      <div>
        <span className="p">$</span> ./transmit.sh{' '}
        <span className="cursor" aria-hidden="true">
          ▍
        </span>
      </div>
    </div>
  )
}

