import Section, { Reveal } from './Section'
import Icon from './Icon'
import { projects } from '../data/profile'

function ProjectCard({ project, index }) {
  const { links = {} } = project

  return (
    <Reveal delay={index * 80} className="h-full">
      <article className="card card-hover group flex h-full flex-col overflow-hidden p-6 sm:p-7">
        {/* Accent wash that fades in on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.08] via-transparent to-accent-2/[0.08] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Sits above the wash */}
        <div className="relative flex h-full flex-col">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip !border-accent/30 !bg-accent/8 !text-accent">{project.tag}</span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 font-mono text-[0.66rem] tracking-wider text-accent-2 uppercase">
                  <Icon name="sparkles" className="h-3 w-3" />
                  Featured
                </span>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-1.5">
              {links.repo && (
                <a
                  href={links.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} source code`}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-all hover:border-accent/50 hover:text-accent"
                >
                  <Icon name="github" className="h-4 w-4" />
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} live demo`}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-all hover:border-accent/50 hover:text-accent"
                >
                  <Icon name="arrowUpRight" className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-lg font-bold tracking-tight text-balance">{project.title}</h3>
          <p className="mt-2.5 text-[0.89rem] leading-relaxed text-muted">{project.blurb}</p>

          <ul className="mt-5 space-y-2.5">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 text-[0.85rem] leading-relaxed text-dim">
                <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A full-stack booking platform, a predictive model, and an analysis project — the work behind the skills above."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-dim">More code, experiments and work in progress live on GitHub.</p>
          <a
            href="https://github.com/DeekshithPoojary"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-2.5 text-sm font-semibold transition-all hover:border-accent/50 hover:bg-surface"
          >
            <Icon name="github" className="h-4 w-4" />
            Browse the repositories
            <Icon
              name="arrowUpRight"
              className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
