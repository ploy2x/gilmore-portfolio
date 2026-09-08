import type { Project } from '../data/projects'
import { Link } from '../lib/router'
import {
  ArrowUpRightIcon,
  Chip,
  Container,
  Reveal,
  TickList,
} from '../components/ui'

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal>
      <section className="border-line border-t py-8">
        <h2 className="text-accent font-mono text-xs font-medium tracking-wider uppercase">
          {title}
        </h2>
        <div className="mt-4">{children}</div>
      </section>
    </Reveal>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="text-ink max-w-3xl text-base leading-relaxed">{children}</p>
}

export function ProjectPage({ project }: { project: Project }) {
  return (
    <article className="pt-10 pb-20">
      <Container>
        <Reveal>
          <Link
            to="/"
            className="text-muted hover:text-accent inline-block text-sm transition-colors"
          >
            ← Back to portfolio
          </Link>

          <p className="eyebrow mt-8">Case Study</p>
          <h1 className="text-ink mt-3 text-4xl font-extrabold sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed">
            {project.summary}
          </p>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Chip>{tag}</Chip>
              </li>
            ))}
          </ul>
        </Reveal>

        {project.metrics && (
          <Reveal delay={80}>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="card p-5">
                  <dt className="text-accent tnum text-3xl font-extrabold">
                    {metric.value}
                  </dt>
                  <dd className="text-muted mt-1.5 text-xs leading-snug">{metric.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div>
            <Block title="Overview">
              <Prose>{project.overview}</Prose>
            </Block>

            <Block title="Background">
              <Prose>{project.background}</Prose>
            </Block>

            <Block title="Problem">
              <Prose>{project.problem}</Prose>
            </Block>

            <Block title="Responsibilities">
              <TickList items={project.responsibilities} />
            </Block>

            <Block title="Approach">
              <Prose>{project.approach}</Prose>
            </Block>

            <Block title="Solutions">
              <TickList items={project.solutions} />
            </Block>

            <Block title="Challenges">
              <TickList items={project.challenges} />
            </Block>

            <Block title="Results">
              <TickList items={project.results} />
            </Block>

            <Block title="Lessons Learned">
              <ul className="space-y-3">
                {project.lessons.map((lesson) => (
                  <li
                    key={lesson}
                    className="border-accent text-ink border-l-2 pl-4 text-base leading-relaxed font-medium"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </Block>

            {project.gallery && (
              <Block title="Gallery">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.gallery.map((caption) => (
                    <li
                      key={caption}
                      className="card text-muted p-5 text-sm leading-relaxed"
                    >
                      {caption}
                    </li>
                  ))}
                </ul>
              </Block>
            )}
          </div>

          {/* Sidebar: sticky on desktop so the live link stays reachable. */}
          <Reveal delay={100}>
            <aside className="lg:sticky lg:top-24">
              <div className="card space-y-6 p-6">
                {project.client && (
                  <div>
                    <h2 className="eyebrow">Client</h2>
                    <p className="text-ink mt-2 text-sm leading-relaxed">{project.client}</p>
                  </div>
                )}

                <div className={project.client ? 'border-line border-t pt-6' : ''}>
                  <h2 className="eyebrow">Tools Used</h2>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Chip>{tag}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-line border-t pt-6">
                  <h2 className="eyebrow">Live site</h2>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent mt-2 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                  >
                    Visit website
                    <ArrowUpRightIcon className="size-3.5" />
                  </a>
                </div>
              </div>

              <div className="border-accent/25 bg-accent-soft mt-4 rounded-xl border p-6">
                <p className="text-ink text-sm font-bold">Have a similar project?</p>
                <Link
                  to="/"
                  onClick={() => {
                    requestAnimationFrame(() =>
                      document
                        .getElementById('contact')
                        ?.scrollIntoView({ behavior: 'smooth' }),
                    )
                  }}
                  className="text-accent mt-2 inline-block text-sm font-semibold hover:underline"
                >
                  Get in touch →
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </article>
  )
}
