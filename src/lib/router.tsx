import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'

/**
 * A ~90-line History API router. The site is one homepage plus nine static case
 * study pages, so a routing library would cost more bytes than it saves.
 *
 * Everything here works in terms of *app paths* ("/projects/giftsplaza"), with
 * the Vite base ("/gilmore-portfolio/" on a GitHub Pages project site) stripped
 * on read and re-applied on write.
 */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function toAppPath(href: string): string {
  const path = href.startsWith(BASE) ? href.slice(BASE.length) : href
  return path.startsWith('/') ? path : `/${path}`
}

export function toHref(appPath: string): string {
  return `${BASE}${appPath}`
}

const RouteContext = createContext<{
  path: string
  navigate: (appPath: string) => void
}>({ path: '/', navigate: () => {} })

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => toAppPath(window.location.pathname))

  const navigate = useCallback((appPath: string) => {
    if (toAppPath(window.location.pathname) === appPath) return
    window.history.pushState({}, '', toHref(appPath))
    setPath(appPath)
  }, [])

  useEffect(() => {
    const onPop = () => setPath(toAppPath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const value = useMemo(() => ({ path, navigate }), [path, navigate])
  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
}

export function useRouter() {
  return useContext(RouteContext)
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
  children: ReactNode
}

/** Internal link. Same-tab left clicks are intercepted; everything else (new
 *  tab, middle click, modifier keys) falls through to the browser. */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter()
  return (
    <a
      href={toHref(to)}
      onClick={(event) => {
        onClick?.(event)
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return
        }
        event.preventDefault()
        navigate(to)
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

/**
 * Links to a section of the homepage. On the homepage it is a plain in-page
 * anchor; from a case study page it routes home first, then scrolls to the
 * section once it has rendered.
 */
export function HashLink({ to, children, onClick, ...rest }: LinkProps) {
  const { path, navigate } = useRouter()
  const hash = to.startsWith('#') ? to : `#${to}`

  return (
    <a
      href={path === '/' ? hash : `${toHref('/')}${hash}`}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.button !== 0) {
          return
        }
        if (path === '/') return // let the browser handle the anchor natively
        event.preventDefault()
        navigate('/')
        requestAnimationFrame(() => {
          document
            .querySelector(hash)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
