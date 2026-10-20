import { useState } from 'react'
import { site } from '~/data/site'

export function Terminal() {
  const [open, setOpen] = useState(false)
  return (
    <div className="term">
      <div><span className="p">$</span> whoami</div>
      <div>{site.handle}@portfolio:~$ {site.role.toLowerCase().replace(/ /g, '_')}</div>
      <div><span className="p">$</span> cat contact.sh</div>
      <div>
        {open ? (
          <a href={`mailto:${site.email}`}>{site.email}</a>
        ) : (
          <button className="cmd" onClick={() => setOpen(true)}>
            [ contact locked: click cat contact.sh to decrypt ]
          </button>
        )}
      </div>
      <div><span className="p">$</span> ./transmit.sh <span className="cursor">▍</span></div>
    </div>
  )
}
