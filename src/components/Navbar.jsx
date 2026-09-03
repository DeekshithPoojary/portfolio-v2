import { useEffect, useState } from 'react'
import Icon from './Icon'
import { navLinks, profile } from '../data/profile'
import { useActiveSection, useScrollProgress } from '../hooks/useReveal'

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const progress = useScrollProgress()
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Don't let the page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line/80 bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      {/* Reading-progress bar */}
      <div
        className="absolute bottom-0 left-0 h-px origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})`, width: '100%' }}
      />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface font-mono text-sm font-bold text-accent transition-colors group-hover:border-accent/60">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-text' : 'text-muted hover:text-text'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full border border-accent/25 bg-accent/10" />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-all hover:border-accent/70 hover:bg-accent/20 sm:inline-flex"
          >
            <Icon name="download" className="h-4 w-4" />
            Résumé
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-text md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-[0.95rem] font-medium text-muted transition-colors hover:bg-surface hover:text-text"
              >
                {link.label}
                <Icon name="arrowRight" className="h-4 w-4 opacity-40" />
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent"
            >
              <Icon name="download" className="h-4 w-4" />
              Download Résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
