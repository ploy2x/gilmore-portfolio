import { about, person, stats, whyHire, wins } from '../data/site'
import { HashLink } from '../lib/router'
import { Chip, Container, Reveal, Section, SectionHeading } from '../components/ui'

/** Lighthouse-style score ring. Uses a stroke-dashoffset arc so it stays crisp
 *  at any size and animates in without layout work. */
function ScoreRing({ score }: { score: number }) {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  return (
    <div className="relative grid size-28 place-items-center">
      <svg className="size-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          className="text-line"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          className="text-accent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - score / 100)}
        />
      </svg>
      <span className="text-ink tnum absolute text-3xl font-extrabold">{score}</span>
    </div>
  )
}

function HeroPanel() {
  return (
    <div className="card p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow">Measured, not claimed</p>
        <span className="bg-accent/10 text-accent rounded-full px-2.5 py-1 font-mono text-[0.65rem] font-medium">
          giftsplaza.com
        </span>
      </div>

      <div className="mt-6 flex items-center gap-6">
        <ScoreRing score={98} />
        <div>
          <p className="text-ink text-sm font-semibold">Lighthouse Performance</p>
          <p className="text-muted mt-1 text-sm leading-relaxed">
            Sustained on key Shopify templates across a 10,000+ product catalog.
          </p>
        </div>
      </div>

      <dl className="border-line mt-6 grid grid-cols-3 gap-4 border-t pt-5">
        {[
          { k: 'LCP', v: '0.9s' },
          { k: 'CLS', v: '0.001' },
          { k: 'Impressions', v: '77.8K' },
        ].map((m) => (
          <div key={m.k}>
            <dt className="text-faint font-mono text-[0.65rem] tracking-wider uppercase">
              {m.k}
            </dt>
            <dd className="text-ink tnum mt-1 text-lg font-bold">{m.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Soft accent wash behind the fold. Purely decorative. */}
      <div
        aria-hidden="true"
        className="from-accent/8 pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b to-transparent"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">{person.eyebrow}</p>
              <h1 className="text-ink mt-4 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
                {person.name}
              </h1>
              <p className="text-accent mt-4 text-lg font-semibold sm:text-xl">
                {person.role}
              </p>
              <p className="text-muted mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
                {person.tagline}
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-8 flex flex-wrap gap-3">
                <HashLink
                  to="#projects"
                  className="bg-accent text-accent-ink rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  View My Work →
                </HashLink>
                <HashLink
                  to="#resume"
                  className="border-line text-ink hover:border-accent/60 rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
                >
                  Download Resume
                </HashLink>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-faint mt-8 font-mono text-xs leading-relaxed tracking-wide">
                {person.heroStack.join('  ·  ')}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:justify-self-end lg:pl-4">
            <HeroPanel />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export function WhyHire() {
  return (
    <Section bleed>
      <SectionHeading
        eyebrow={whyHire.eyebrow}
        heading={whyHire.heading}
        intro={whyHire.intro}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {whyHire.points.map((point, i) => (
          <Reveal key={point.title} delay={i * 80}>
            <article className="card card-hover h-full p-6">
              <span className="text-accent font-mono text-xs font-medium">
                0{i + 1}
              </span>
              <h3 className="text-ink mt-3 text-lg font-bold">{point.title}</h3>
              <p className="text-muted mt-2.5 text-sm leading-relaxed">{point.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Wins() {
  return (
    <Section>
      <SectionHeading eyebrow={wins.eyebrow} heading={wins.heading} intro={wins.intro} />

      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {wins.items.map((win, i) => (
          <Reveal key={win.text} delay={i * 60}>
            <li className="card card-hover flex h-full items-center gap-4 p-5">
              <span aria-hidden="true" className="text-2xl leading-none">
                {win.icon}
              </span>
              <span className="text-ink text-sm leading-relaxed font-medium">
                {win.text}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <dl className="border-line mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-accent tnum text-3xl font-extrabold sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="text-muted mt-2 text-xs leading-snug sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}

// Served from public/ so the same file backs the <img>, the og:image and the
// JSON-LD Person.image without a build-hashed name to thread through.
const PORTRAIT = `${import.meta.env.BASE_URL}gilmore.jpg`

export function About() {
  return (
    <Section id="about" bleed>
      <div className="grid items-center gap-10 lg:grid-cols-[19rem_1fr] lg:gap-14">
        <Reveal className="mx-auto w-full max-w-72 lg:mx-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="bg-accent-soft absolute -inset-3 -z-10 rounded-[1.75rem]"
            />
            <img
              src={PORTRAIT}
              alt="Gilmore Jason Dasmariñas"
              width={640}
              height={669}
              loading="lazy"
              decoding="async"
              className="border-line h-auto w-full rounded-3xl border object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="text-ink mt-3 text-3xl font-extrabold sm:text-4xl">
            {about.heading}
          </h2>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
            {about.intro}
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {about.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 80}>
            <article className="card h-full p-6">
              <h3 className="text-accent font-mono text-xs font-medium tracking-wider uppercase">
                {card.title}
              </h3>
              <p className="text-ink mt-3 text-sm leading-relaxed">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <figure className="border-accent bg-surface mt-10 rounded-r-xl border-l-2 p-7 sm:p-9">
          <figcaption className="eyebrow">{about.missionLabel}</figcaption>
          <blockquote className="text-ink mt-3 text-lg leading-relaxed font-semibold sm:text-xl">
            “{about.mission}”
          </blockquote>
        </figure>
      </Reveal>

      <Reveal delay={140}>
        <ul className="mt-8 flex flex-wrap gap-2">
          {about.values.map((value) => (
            <li key={value}>
              <Chip>{value}</Chip>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
