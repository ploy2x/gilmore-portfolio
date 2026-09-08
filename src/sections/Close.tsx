import { useState, type FormEvent } from 'react'
import {
  beyondWork,
  contact,
  CONTACT_EMAIL,
  faq,
  person,
  resume,
  skills,
  testimonials,
  whyWorkWithMe,
} from '../data/site'
import { HashLink } from '../lib/router'
import { Chip, PlusIcon, Reveal, Section, SectionHeading } from '../components/ui'

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading eyebrow={testimonials.eyebrow} heading={testimonials.heading} />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.items.map((item, i) => (
          <Reveal key={item.author} delay={i * 80}>
            <figure className="card flex h-full flex-col p-7">
              <span aria-hidden="true" className="text-accent/25 text-5xl leading-none font-serif">
                “
              </span>
              <blockquote className="text-ink -mt-3 flex-1 text-base leading-relaxed">
                {item.quote}
              </blockquote>
              <figcaption className="border-line mt-6 border-t pt-5">
                <p className="text-ink text-sm font-bold">{item.author}</p>
                <p className="text-muted mt-0.5 text-xs">{item.role}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {item.traits.map((t) => (
                    <li key={t}>
                      <Chip>{t}</Chip>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function WhyWorkWithMe() {
  return (
    <Section bleed>
      <SectionHeading
        eyebrow={whyWorkWithMe.eyebrow}
        heading={whyWorkWithMe.heading}
        intro={whyWorkWithMe.intro}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyWorkWithMe.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 70}>
            <article className="card card-hover h-full p-6">
              <h3 className="text-ink text-base font-bold">{item.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function BeyondWork() {
  return (
    <Section>
      <SectionHeading
        eyebrow={beyondWork.eyebrow}
        heading={beyondWork.heading}
        intro={beyondWork.intro}
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <Reveal>
          <article className="card h-full p-6">
            <h3 className="text-accent font-mono text-xs font-medium tracking-wider uppercase">
              {beyondWork.workingStyleLabel}
            </h3>
            <p className="text-muted mt-3 text-sm">{beyondWork.workingStyleIntro}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {beyondWork.workingStyle.map((t) => (
                <li key={t}>
                  <Chip>{t}</Chip>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="card h-full p-6">
            <h3 className="text-accent font-mono text-xs font-medium tracking-wider uppercase">
              {beyondWork.outsideLabel}
            </h3>
            <p className="text-ink mt-3 text-sm leading-relaxed">{beyondWork.outside}</p>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <article className="card h-full p-6">
            <h3 className="text-accent font-mono text-xs font-medium tracking-wider uppercase">
              {beyondWork.headingLabel}
            </h3>
            <p className="text-ink mt-3 text-sm leading-relaxed">{beyondWork.heading2}</p>
          </article>
        </Reveal>
      </div>
    </Section>
  )
}

export function Resume() {
  return (
    <Section id="resume" bleed>
      <SectionHeading eyebrow={resume.eyebrow} heading={resume.heading} />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {resume.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <article className="card card-hover flex h-full flex-col p-6">
              <h3 className="text-ink text-base font-bold">{item.title}</h3>
              <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">{item.body}</p>
              <HashLink
                to="#contact"
                className="text-accent mt-5 text-sm font-semibold hover:underline"
              >
                {item.cta}
              </HashLink>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`

  return (
    <div className="border-line border-b">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-ink group-hover:text-accent text-base font-semibold transition-colors">
            {q}
          </span>
          <PlusIcon
            className={`text-accent size-4 shrink-0 transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        hidden={!open}
        className="text-muted pb-5 text-sm leading-relaxed sm:pr-10"
      >
        {a}
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <Section>
      <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} intro={faq.intro} />
      <Reveal delay={80}>
        <div className="border-line mt-12 border-t">
          {faq.items.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" bleed>
      <SectionHeading eyebrow={skills.eyebrow} heading={skills.heading} intro={skills.intro} />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 70}>
            <article className="card h-full p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-ink text-base font-bold">{group.title}</h3>
                <span className="text-faint tnum font-mono text-xs">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

const FIELD =
  'w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none'

export function Contact() {
  const [sent, setSent] = useState(false)

  /**
   * No backend on a static host: compose the message in the visitor's mail
   * client. Swap this for a Formspree/Netlify endpoint by pointing the <form>
   * at it and dropping this handler — see README.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const company = String(data.get('company') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = `Website enquiry from ${name || 'a visitor'}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Website: ${company}`,
      '',
      message,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <Section id="contact">
      <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} intro={contact.intro} />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="card p-7 sm:p-8">
            <h3 className="text-ink text-lg font-bold">{contact.formHeading}</h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">{contact.formIntro}</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-ink mb-1.5 block text-xs font-semibold">
                    Name
                  </label>
                  <input id="name" name="name" required autoComplete="name" className={FIELD} />
                </div>
                <div>
                  <label htmlFor="email" className="text-ink mb-1.5 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={FIELD}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="text-ink mb-1.5 block text-xs font-semibold">
                  Company / Website
                </label>
                <input id="company" name="company" autoComplete="organization" className={FIELD} />
              </div>

              <div>
                <label htmlFor="message" className="text-ink mb-1.5 block text-xs font-semibold">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required className={FIELD} />
              </div>

              <button
                type="submit"
                className="bg-accent text-accent-ink w-full rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 sm:w-auto"
              >
                {contact.submitLabel}
              </button>

              <p aria-live="polite" className="text-muted min-h-5 text-xs">
                {sent && 'Opening your email client — send the drafted message to reach me.'}
              </p>
            </form>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <dl className="card h-full space-y-6 p-7">
            <div>
              <dt className="eyebrow">Availability</dt>
              <dd className="text-ink mt-2 text-sm font-semibold">{person.availability}</dd>
            </div>
            <div className="border-line border-t pt-6">
              <dt className="eyebrow">Timezone</dt>
              <dd className="text-ink mt-2 text-sm font-semibold">{person.timezone}</dd>
            </div>
            <div className="border-line border-t pt-6">
              <dt className="eyebrow">Preferred Roles</dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-1.5">
                  {person.preferredRoles.map((role) => (
                    <li key={role}>
                      <Chip>{role}</Chip>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
