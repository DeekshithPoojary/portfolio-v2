import Section, { Reveal } from './Section'
import Icon from './Icon'
import { skills } from '../data/profile'

// One flat list for the scrolling ticker under the grid.
const ticker = skills.flatMap((g) => g.items)

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolkit"
      description="What I reach for day to day, grouped by where it sits in the stack."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="card card-hover group h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-ink-2 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                  <Icon name={group.icon} />
                </span>
                <h3 className="text-[0.98rem] font-semibold">{group.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Infinite ticker — duplicated once so the loop is seamless */}
      <Reveal delay={120}>
        <div className="marquee-mask mt-12 flex overflow-hidden py-2 select-none">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-8 font-mono text-sm whitespace-nowrap text-dim"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-accent/40" />
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
