import Section, { Reveal } from './Section'
import Icon from './Icon'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="Roles held, and what I was actually responsible for in each."
    >
      <ol className="relative space-y-5 before:absolute before:top-2 before:bottom-2 before:left-[19px] before:w-px before:bg-gradient-to-b before:from-accent/50 before:via-line before:to-transparent">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="relative pl-12 sm:pl-14">
            {/* Timeline node */}
            <span
              className={`absolute top-6 left-[11px] grid h-[18px] w-[18px] place-items-center rounded-full border-2 ${
                job.current
                  ? 'pulse-dot border-accent-3 bg-ink'
                  : 'border-line bg-ink'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${job.current ? 'bg-accent-3' : 'bg-dim'}`}
              />
            </span>

            <Reveal delay={i * 90}>
              <article className="card card-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight sm:text-xl">{job.role}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.9rem]">
                      <span className="font-semibold text-accent">{job.company}</span>
                      <span className="text-line">•</span>
                      <span className="text-dim">{job.location}</span>
                    </p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.7rem] whitespace-nowrap ${
                      job.current
                        ? 'border-accent-3/30 bg-accent-3/10 text-accent-3'
                        : 'border-line bg-white/[0.02] text-dim'
                    }`}
                  >
                    <Icon name="briefcase" className="h-3.5 w-3.5" />
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.9rem] leading-relaxed text-muted">
                      <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
