import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Container, Reveal } from './components/ui'
import { person, SITE_URL } from './data/site'
import { projectsBySlug } from './data/projects'
import { ProjectPage } from './pages/ProjectPage'
import { Link, toHref, useRouter } from './lib/router'
import { About, Hero, WhyHire, Wins } from './sections/Intro'
import { CaseStudies, Experience, Projects, Services } from './sections/Work'
import {
  BeyondWork,
  Contact,
  Faq,
  Resume,
  Skills,
  Testimonials,
  WhyWorkWithMe,
} from './sections/Close'

/** Keeps <title>, the meta description and the canonical URL in sync with the
 *  current route — a single-page app still has to get this right for sharing. */
function useDocumentHead(title: string, description: string, appPath: string) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    const url = `${SITE_URL.replace(/\/$/, '')}${appPath === '/' ? '/' : appPath}`
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
  }, [title, description, appPath])
}

function Home() {
  useDocumentHead(
    `${person.shortName} — ${person.role}`,
    person.tagline,
    '/',
  )

  return (
    <>
      <Hero />
      <WhyHire />
      <Wins />
      <About />
      <Services />
      <Projects />
      <CaseStudies />
      <Experience />
      <Testimonials />
      <WhyWorkWithMe />
      <BeyondWork />
      <Resume />
      <Faq />
      <Skills />
      <Contact />
    </>
  )
}

function NotFound() {
  useDocumentHead(
    `Page not found — ${person.shortName}`,
    'The page you were looking for does not exist.',
    '/404',
  )

  return (
    <Container className="py-28 text-center">
      <Reveal>
        <p className="eyebrow">404</p>
        <h1 className="text-ink mt-3 text-4xl font-extrabold">Page not found</h1>
        <p className="text-muted mx-auto mt-4 max-w-md leading-relaxed">
          That page doesn’t exist — it may have moved. Everything lives on the portfolio
          homepage.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          ← Back to portfolio
        </Link>
      </Reveal>
    </Container>
  )
}

function ProjectRoute({ slug }: { slug: string }) {
  const project = projectsBySlug.get(slug)

  useDocumentHead(
    project
      ? `${project.title} — Case Study | ${person.shortName}`
      : `Page not found — ${person.shortName}`,
    project?.overview ?? 'Case study not found.',
    `/projects/${slug}`,
  )

  if (!project) return <NotFound />
  return <ProjectPage project={project} />
}

export default function App() {
  const { path } = useRouter()
  const projectMatch = path.match(/^\/projects\/([a-z0-9-]+)\/?$/)

  return (
    <>
      <a
        href={`${toHref('/')}#main`}
        className="focus:bg-accent focus:text-accent-ink sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        {projectMatch ? (
          <ProjectRoute slug={projectMatch[1]} />
        ) : path === '/' ? (
          <Home />
        ) : (
          <NotFound />
        )}
      </main>

      <Footer />
    </>
  )
}
