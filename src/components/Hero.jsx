import Icon from './Icon'
import { profile } from '../data/profile'
import { useRotatingText } from '../hooks/useReveal'

const codeLines = [
  { t: 'kw', v: 'class ' , n: [{ t: 'cls', v: 'Developer' }, { t: 'p', v: ':' }] },
  { indent: 1, t: 'attr', v: 'name', n: [{ t: 'p', v: ' = ' }, { t: 'str', v: '"Deekshith Poojary"' }] },
  { indent: 1, t: 'attr', v: 'role', n: [{ t: 'p', v: ' = ' }, { t: 'str', v: '"Python Backend Developer"' }] },
  { indent: 1, t: 'attr', v: 'stack', n: [{ t: 'p', v: ' = [' }, { t: 'str', v: '"Django"' }, { t: 'p', v: ', ' }, { t: 'str', v: '"PostgreSQL"' }, { t: 'p', v: ']' }] },
  { blank: true },
  { indent: 1, t: 'kw', v: 'def ', n: [{ t: 'fn', v: 'build' }, { t: 'p', v: '(self, idea):' }] },
  { indent: 2, t: 'kw', v: 'return ', n: [{ t: 'fn', v: 'ship' }, { t: 'p', v: '(idea, tested=' }, { t: 'bool', v: 'True' }, { t: 'p', v: ')' }] },
]

const tone = {
  kw: 'text-[#c792ea]',
  cls: 'text-[#ffcb6b]',
  fn: 'text-[#82aaff]',
  str: 'text-[#c3e88d]',
  attr: 'text-[#f07178]',
  bool: 'text-[#f78c6c]',
  p: 'text-dim',
}

export default function Hero() {
  const tagline = useRotatingText(profile.taglines)

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="bg-noise absolute inset-0 opacity-[0.035]" />
        <div className="glow animate-float-slow top-[-14rem] left-[-8rem] h-[30rem] w-[30rem] bg-accent/25" />
        <div className="glow animate-float-slower top-[-6rem] right-[-10rem] h-[26rem] w-[26rem] bg-accent-2/25" />
        <div className="glow bottom-[-16rem] left-1/3 h-[22rem] w-[22rem] bg-accent-3/10" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ── Left: the pitch ── */}
        <div className="reveal is-visible">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent-3/25 bg-accent-3/8 px-3.5 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-3" />
            <span className="font-mono text-[0.7rem] tracking-wider text-accent-3 uppercase">
              Open to opportunities
            </span>
          </div>

          <p className="mb-3 font-mono text-sm text-muted">Hi, I&apos;m</p>

          <h1 className="text-[2.6rem] leading-[1.04] font-black tracking-tight sm:text-6xl lg:text-[4.2rem]">
            <span className="text-gradient">Deekshith</span>
            <br />
            Poojary
          </h1>

          {/* Rotating role line */}
          <div className="mt-5 flex h-8 items-center gap-2 font-mono text-base text-accent sm:text-lg">
            <span className="text-dim select-none">&gt;</span>
            <span key={tagline} className="reveal is-visible">
              {tagline}
            </span>
            <span className="caret inline-block h-[1.15em] w-[2px] translate-y-[2px] bg-accent" />
          </div>

          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-muted">
            I build backend services in Python and Django — clean APIs, well-shaped databases and
            data-driven features. Currently engineering at{' '}
            <span className="font-medium text-text">SKY360.Ai Tech LLP</span>, Mangalore.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-bold text-ink shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:brightness-110"
            >
              View my work
              <Icon
                name="arrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 text-sm font-semibold text-text transition-all hover:border-accent/50 hover:bg-surface"
            >
              <Icon name="download" className="h-4 w-4" />
              Download résumé
            </a>
          </div>

          {/* Socials + location */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2">
              {profile.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  title={s.name}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  <Icon name={s.icon} className="h-[1.05rem] w-[1.05rem]" />
                </a>
              ))}
            </div>
            <span className="hidden h-5 w-px bg-line sm:block" />
            <p className="flex items-center gap-1.5 text-sm text-dim">
              <Icon name="pin" className="h-4 w-4" />
              {profile.location}
            </p>
          </div>
        </div>

        {/* ── Right: code card ── */}
        <div className="reveal is-visible relative lg:pl-4" style={{ '--reveal-delay': '120ms' }}>
          <div className="card relative overflow-hidden shadow-2xl shadow-black/50">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-line bg-ink-2/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-dim">developer.py</span>
            </div>

            <pre className="overflow-x-auto px-4 py-5 font-mono text-[0.78rem] leading-[1.85] sm:px-6 sm:text-[0.85rem]">
              <code>
                {codeLines.map((line, i) =>
                  line.blank ? (
                    <div key={i}>&nbsp;</div>
                  ) : (
                    <div key={i} className="whitespace-pre">
                      <span className="mr-4 inline-block w-3 text-right text-[0.7rem] text-dim/50 select-none">
                        {i + 1}
                      </span>
                      {'    '.repeat(line.indent || 0)}
                      <span className={tone[line.t]}>{line.v}</span>
                      {line.n?.map((part, j) => (
                        <span key={j} className={tone[part.t]}>
                          {part.v}
                        </span>
                      ))}
                    </div>
                  ),
                )}
              </code>
            </pre>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent" />
          </div>

          {/* Stats strip */}
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="card card-hover px-3 py-3.5 text-center"
              >
                <dt className="text-xl font-extrabold tracking-tight text-gradient sm:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-0.5 text-[0.68rem] leading-tight tracking-wide text-dim uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
