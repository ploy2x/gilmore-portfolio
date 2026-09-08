import { person } from '../data/site'
import { HashLink } from '../lib/router'
import { Container } from './ui'

const footerLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-line border-t py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="text-ink text-base font-extrabold">{person.fullName}</p>
            <p className="text-muted mt-1.5 text-sm leading-relaxed">
              {person.role} · {person.location} · Remote
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <HashLink
                key={link.href}
                to={link.href}
                className="text-muted hover:text-accent text-sm transition-colors"
              >
                {link.label}
              </HashLink>
            ))}
          </nav>
        </div>

        <p className="text-faint border-line/70 mt-10 border-t pt-6 text-xs">
          © {new Date().getFullYear()} {person.shortName}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
