import { useReveal } from '../hooks/useReveal'

/** Wraps children in a scroll-triggered fade-up. `delay` staggers grids. */
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/** A page section with a consistent eyebrow / heading / description block. */
export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <Reveal>
        <div className="mb-12 sm:mb-16">
          {eyebrow && (
            <p className="mb-3 flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] text-accent uppercase">
              <span className="h-px w-7 bg-accent/60" />
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-[2.6rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-[0.975rem] leading-relaxed text-muted">{description}</p>
          )}
        </div>
      </Reveal>

      {children}
    </section>
  )
}
