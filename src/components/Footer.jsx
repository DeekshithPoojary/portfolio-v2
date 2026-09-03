import Icon from './Icon'
import { navLinks, profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow bottom-[-14rem] left-1/2 h-[22rem] w-[26rem] -translate-x-1/2 bg-accent/12" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface font-mono text-sm font-bold text-accent">
                {profile.initials}
              </span>
              <span className="text-sm font-semibold">{profile.name}</span>
            </a>
            <p className="mt-3 max-w-xs text-[0.84rem] leading-relaxed text-dim">
              {profile.role} · {profile.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.85rem] text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {profile.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer noopener"
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-all hover:border-accent/50 hover:text-accent"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-[0.75rem] text-dim">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[0.75rem] text-dim">
            Built with React, Tailwind &amp; Vite · deployed on Netlify
          </p>
        </div>
      </div>
    </footer>
  )
}
