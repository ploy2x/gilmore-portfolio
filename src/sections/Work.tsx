import { caseStudies, experience, services, type ServiceGroup } from '../data/site'
import { projects, projectsSection } from '../data/projects'
import { Link } from '../lib/router'
import {
  ArrowUpRightIcon,
  Chip,
  Reveal,
  Section,
  SectionHeading,
} from '../components/ui'

const GROUP_ORDER: ServiceGroup[] = ['Development', 'Optimization', 'Operations']

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow={services.eyebrow}
        heading={services.heading}
        intro={services.intro}
      />

      <div className="mt-12 space-y-12">
        {GROUP_ORDER.map((group) => {
          const items = services.items.filter((s) => s.group === group)
          return (
            <div key={group}>
              <Reveal>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-ink text-sm font-bold tracking-tight">{group}</h3>
                  <span className="bg-line h-px flex-1" />
                  <span className="text-faint tnum font-mono text-xs">
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, i) => (
                  <Reveal key={service.title} delay={i * 50}>
                    <article className="card card-hover h-full p-5">
                      <h4 className="text-ink text-base font-bold">{service.title}</h4>
                      <p className="text-muted mt-2 text-sm leading-relaxed">
                        {service.body}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" bleed>
      <SectionHeading
        eyebrow={projectsSection.eyebrow}
        heading={projectsSection.heading}
        intro={projectsSection.intro}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 70}>
            <article className="card card-hover flex h-full flex-col p-6">
              <p className="text-faint font-mono text-[0.65rem] tracking-wider uppercase">
                Project
              </p>
              <h3 className="text-ink mt-2 text-xl font-bold">{project.title}</h3>
              <p className="text-muted mt-2.5 flex-1 text-sm leading-relaxed">
                {project.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <li key={tag}>
                    <Chip>{tag}</Chip>
                  </li>
                ))}
              </ul>

              <div className="border-line mt-5 flex items-center justify-between border-t pt-4">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-accent text-sm font-semibold hover:underline"
                >
                  Read case →
                </Link>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink inline-flex items-center gap-1 text-sm transition-colors"
                >
                  Visit site
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <SectionHeading
        eyebrow={caseStudies.eyebrow}
        heading={caseStudies.heading}
        intro={caseStudies.intro}
      />

      <div className="mt-12 space-y-4">
        {caseStudies.items.map((study, i) => (
          <Reveal key={study.index} delay={i * 60}>
            <article className="card card-hover p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="text-accent/35 tnum font-mono text-4xl leading-none font-extrabold sm:text-5xl">
                  {study.index}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-ink text-xl font-bold">{study.title}</h3>
                    {study.client && (
                      <span className="text-faint text-xs">Client: {study.client}</span>
                    )}
                  </div>
                  <p className="text-muted mt-2 text-sm leading-relaxed sm:text-base">
                    {study.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {study.highlights.map((h) => (
                      <li key={h}>
                        <Chip>{h}</Chip>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {study.metric && (
                      <span className="text-accent text-sm font-bold">{study.metric}</span>
                    )}
                    {study.slug ? (
                      <Link
                        to={`/projects/${study.slug}`}
                        className="text-accent text-sm font-semibold hover:underline"
                      >
                        View project →
                      </Link>
                    ) : (
                      <span className="text-faint text-sm italic">{study.note}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" bleed>
      <SectionHeading
        eyebrow={experience.eyebrow}
        heading={experience.heading}
        intro={experience.intro}
      />

      <ol className="border-line/70 mt-12 space-y-4 border-l pl-6 sm:pl-10">
        {experience.items.map((item, i) => (
          <Reveal key={item.period} delay={i * 60}>
            <li className="relative">
              {/* Timeline node, sitting in a pressed dimple on the rail. */}
              <span
                aria-hidden="true"
                className="well absolute top-5 -left-[1.65rem] grid size-4 place-items-center rounded-full sm:-left-[2.65rem]"
              >
                <span
                  className={`size-1.5 rounded-full ${
                    item.current ? 'bg-accent' : 'bg-faint'
                  }`}
                />
              </span>
              <article className="card p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-accent tnum font-mono text-xs font-medium tracking-wide">
                    {item.period}
                  </p>
                  {item.current && (
                    <span className="chip text-accent text-[0.65rem] font-semibold">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-ink mt-1.5 text-lg font-bold">{item.role}</h3>
                <p className="text-muted mt-2 max-w-2xl text-sm leading-relaxed">
                  {item.body}
                </p>
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
