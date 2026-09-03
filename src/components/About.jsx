import Section, { Reveal } from './Section'
import Icon from './Icon'
import { achievements, education, profile } from '../data/profile'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Backend engineering, with a data background"
      description="A short version of how I got here and what I like working on."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Narrative */}
        <Reveal>
          <div className="card h-full p-6 sm:p-8">
            <p className="text-[1rem] leading-[1.75] text-muted">{profile.summary}</p>

            <div className="my-7 hairline" />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: 'server', title: 'APIs that stay readable', body: 'Predictable endpoints, sane error handling, documented behaviour.' },
                { icon: 'database', title: 'Data modelled properly', body: 'Normalised schemas and queries that scale past the demo.' },
                { icon: 'chart', title: 'Analysis, not just numbers', body: 'Cleaning and validation first — then charts worth trusting.' },
                { icon: 'cpu', title: 'Fundamentals first', body: 'DS&A and OOP as working tools, not interview trivia.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent/8 text-accent">
                    <Icon name={item.icon} className="h-[1.05rem] w-[1.05rem]" />
                  </span>
                  <div>
                    <h3 className="text-[0.925rem] font-semibold">{item.title}</h3>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-dim">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Education + achievements */}
        <div className="space-y-6">
          <Reveal delay={90}>
            <div className="card p-6 sm:p-7">
              <h3 className="mb-5 flex items-center gap-2.5 text-sm font-bold tracking-[0.14em] text-muted uppercase">
                <Icon name="graduation" className="h-4 w-4 text-accent" />
                Education
              </h3>

              <ol className="space-y-5">
                {education.map((e) => (
                  <li key={e.degree} className="border-l border-line pl-4">
                    <p className="text-[0.95rem] leading-snug font-semibold">{e.degree}</p>
                    <p className="mt-1 text-[0.85rem] text-muted">{e.school}</p>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[0.72rem] text-dim">
                      <span>{e.period}</span>
                      <span className="text-line">•</span>
                      <span className="text-accent-3">{e.score}</span>
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card p-6 sm:p-7">
              <h3 className="mb-5 flex items-center gap-2.5 text-sm font-bold tracking-[0.14em] text-muted uppercase">
                <Icon name="trophy" className="h-4 w-4 text-accent-2" />
                Achievements
              </h3>

              <ul className="space-y-4">
                {achievements.map((a) => (
                  <li key={a.title} className="border-l border-line pl-4">
                    <p className="text-[0.95rem] leading-snug font-semibold">{a.title}</p>
                    <p className="mt-1.5 text-[0.85rem] leading-relaxed text-dim">{a.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
