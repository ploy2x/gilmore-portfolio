import { useEffect, useState } from 'react'
import { navLinks, person } from '../data/site'
import { useActiveSection, useScrolled, useScrollLock, useTheme } from '../lib/hooks'
import { HashLink, Link, useRouter } from '../lib/router'
import { CloseIcon, Container, MenuIcon, MoonIcon, SunIcon } from './ui'

const SECTION_IDS = navLinks.map((l) => l.href.slice(1))

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === 'dark'}
      onClick={toggle}
      aria-label="Toggle dark theme"
      className="switch"
    >
      <span className="switch__icons" aria-hidden="true">
        <SunIcon className="size-3" />
        <MoonIcon className="size-3" />
      </span>
      <span className="switch__knob" />
    </button>
  )
}

export function Header() {
  const { path } = useRouter()
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const isHome = path === '/'
  const active = useActiveSection(SECTION_IDS, isHome)

  // Close the mobile menu when the route changes. Adjusting during render (the
  // documented pattern) rather than in an effect avoids a second paint with the
  // menu still open.
  const [lastPath, setLastPath] = useState(path)
  if (lastPath !== path) {
    setLastPath(path)
    setOpen(false)
  }

  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'bg-paper/90 shadow-[0_10px_24px_-16px_var(--nm-dark)] backdrop-blur-xl'
          : ''
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="text-ink shrink-0 text-[0.95rem] font-extrabold tracking-tight"
          >
            {person.shortName}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              const isActive = isHome && active === id
              return (
                <HashLink
                  key={link.href}
                  to={link.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition-[color,box-shadow] ${
                    isActive
                      ? 'text-accent pressed font-semibold'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </HashLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <HashLink to="#contact" className="btn-primary btn-sm hidden sm:inline-flex">
              Hire Me
            </HashLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className={`text-ink grid size-9 place-items-center rounded-full transition-shadow lg:hidden ${
                open ? 'pressed' : 'card'
              }`}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="bg-paper section-bleed max-h-[calc(100dvh-4rem)] overflow-y-auto lg:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <HashLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-ink border-line/60 border-b py-3 text-[0.95rem] last:border-b-0"
                >
                  {link.label}
                </HashLink>
              ))}
            </nav>
            <HashLink
              to="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 mb-2 flex w-full"
            >
              Hire Me
            </HashLink>
          </Container>
        </div>
      )}
    </header>
  )
}
