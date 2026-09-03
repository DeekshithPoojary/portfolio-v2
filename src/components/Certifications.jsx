import { useState } from 'react'
import Section, { Reveal } from './Section'
import Icon from './Icon'
import Lightbox from './Lightbox'
import { certifications } from '../data/profile'

function CertCard({ cert, index, onOpen }) {
  // Degrade one step at a time: certificate scan → Credly badge → plain icon.
  // A file that 404s flips these, so nothing ever renders as a broken image.
  const [coverOk, setCoverOk] = useState(Boolean(cert.documents?.length))
  const [badgeOk, setBadgeOk] = useState(Boolean(cert.badge))

  const cover = cert.documents?.[0]
  const showCover = cover && coverOk
  const showBadge = cert.badge && badgeOk
  const canOpen = showCover || showBadge
  const docCount = cert.documents?.length ?? 0

  return (
    <Reveal delay={index * 70} className="h-full">
      <article className="card card-hover group flex h-full flex-col overflow-hidden">
        {/* ── Cover ── */}
        {showCover ? (
          <button
            type="button"
            onClick={() => onOpen(cert)}
            aria-label={`View the ${cert.title} certificate`}
            className="relative block w-full cursor-zoom-in overflow-hidden bg-white"
          >
            <img
              src={cover.src}
              alt={`${cert.title} certificate`}
              /* Not lazy: a missing file must hit onError immediately so the
                 badge fallback swaps in before the user ever sees a gap. */
              decoding="async"
              onError={() => setCoverOk(false)}
              className="aspect-[1.4/1] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <ViewHint label={docCount > 1 ? `View ${docCount} certificates` : 'Click to enlarge'} />
          </button>
        ) : showBadge ? (
          <button
            type="button"
            onClick={() => onOpen(cert)}
            aria-label={`View the ${cert.title} badge`}
            className="relative flex aspect-[1.75/1] w-full cursor-zoom-in items-center justify-center overflow-hidden border-b border-line bg-ink-2/70"
          >
            <img
              src={cert.badge}
              alt={`${cert.title} badge`}
              decoding="async"
              onError={() => setBadgeOk(false)}
              className="h-[78%] w-auto rounded-lg shadow-lg shadow-black/40 transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <ViewHint label="Click to enlarge" />
          </button>
        ) : (
          <div className="flex aspect-[2.6/1] items-center justify-center border-b border-line bg-ink-2/60">
            <Icon name="award" className="h-10 w-10 text-accent-2/60" />
          </div>
        )}

        {/* ── Details ── */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start gap-3.5">
            {/* Credly badge — only when the cover already showed the certificate,
                so the badge is never rendered twice on the same card. */}
            {showCover && showBadge && (
              <img
                src={cert.badge}
                alt={`${cert.title} Credly badge`}
                loading="lazy"
                decoding="async"
                onError={() => setBadgeOk(false)}
                className="h-14 w-14 shrink-0 rounded-lg object-contain shadow-md shadow-black/40"
              />
            )}

            <div className="min-w-0 flex-1">
              <h3 className="text-[0.95rem] leading-snug font-semibold text-balance">{cert.title}</h3>
              <p className="mt-1 text-[0.8rem] leading-snug text-muted">{cert.issuer}</p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {cert.id && <span className="chip">{cert.id}</span>}
            {cert.level && (
              <span className="chip !border-accent-2/30 !bg-accent-2/8 !text-accent-2">{cert.level}</span>
            )}
            {cert.date && <span className="font-mono text-[0.7rem] text-dim">{cert.date}</span>}
          </div>

          {cert.note && <p className="mt-3 text-[0.8rem] leading-relaxed text-dim">{cert.note}</p>}

          {/* Actions pinned to the bottom so cards line up */}
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
            {canOpen && (
              <button
                type="button"
                onClick={() => onOpen(cert)}
                className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-accent transition-opacity hover:opacity-80"
              >
                <Icon name="search" className="h-3.5 w-3.5" />
                View
                {docCount > 1 && <span className="text-dim">({docCount})</span>}
              </button>
            )}
            {cert.verify && (
              <a
                href={cert.verify}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-muted transition-colors hover:text-accent"
              >
                <Icon name="shield" className="h-3.5 w-3.5" />
                Verify
                <Icon name="arrowUpRight" className="h-3 w-3 opacity-60" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

/** The "click to enlarge" cue that fades in on hover. */
function ViewHint({ label }) {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/85 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-ink/85 px-2.5 py-1.5 text-[0.72rem] font-semibold text-text backdrop-blur-sm">
        <Icon name="search" className="h-3.5 w-3.5" />
        {label}
      </span>
    </span>
  )
}

export default function Certifications() {
  const [active, setActive] = useState(null)

  if (!certifications.length) return null

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified credentials"
      description="IBM Skills Network and VTU coursework backing the Python and data side of my work. Click any credential to see the certificate, or verify it at the source."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} onOpen={setActive} />
        ))}
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </Section>
  )
}
