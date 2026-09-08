# Gilmore Dasmariñas — Portfolio

Personal portfolio for **Gilmore Jason S. Dasmariñas**, Shopify & WordPress Website
Operations Specialist. One homepage plus nine case study pages, built as a static site
and deployed to GitHub Pages.

**Stack:** Vite 8 · React 19 · TypeScript · Tailwind CSS 4

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, bundle, then generate sitemap/robots/404
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Before going live

Three values need updating — all in the same two files:

| What | Where |
| --- | --- |
| Contact email (powers the contact form) | `CONTACT_EMAIL` in `src/data/site.ts` |
| Canonical/OG origin | `SITE_URL` in `src/data/site.ts` |
| Hard-coded URLs in the SEO head + JSON-LD | `index.html` (search for `example.github.io`) |

In CI the origin is overridden by `VITE_SITE_URL`, so the deployed sitemap and canonical
tags are already correct — the constants matter for local builds and as a fallback.

## Project layout

```
src/
  data/site.ts        All homepage copy — headings, services, FAQ, skills, contact
  data/projects.ts    The nine case studies (card + detail page share one record)
  lib/router.tsx      ~90-line History API router (Link, HashLink, useRouter)
  lib/hooks.ts        Theme, scroll-reveal, active-section, scroll-lock
  components/         Header, Footer, shared UI primitives and inline icons
  sections/           Homepage sections, grouped Intro / Work / Close
  pages/ProjectPage   Case study detail template
scripts/seo.mjs       Post-build: sitemap.xml, robots.txt, 404.html, .nojekyll
```

**Editing content should mean editing `src/data/`, not the components.** Adding a project
to `src/data/projects.ts` gives you a card on the homepage grid, a `/projects/<slug>`
page, and a sitemap entry — no other file needs to change.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which lints, builds and
publishes to GitHub Pages. Enable it once under **Settings → Pages → Source →
GitHub Actions**.

The workflow sets `VITE_BASE` to `/<repo>/` because project sites are served from a
subpath. Moving to a custom domain means setting `VITE_BASE: /`, pointing `VITE_SITE_URL`
at the domain, and adding a `public/CNAME` file containing it.

### Why 404.html

GitHub Pages has no SPA rewrite rule, so a hard refresh on `/projects/giftsplaza` would
404. `scripts/seo.mjs` copies `index.html` to `404.html`; Pages serves that for unknown
paths, the app boots, and the router reads the real path off `window.location`. The URL
is never rewritten, so it stays clean and indexable.

## Contact form

The site is static, so the form composes a message in the visitor's mail client via
`mailto:`. To use a real endpoint instead, point the `<form>` in `src/sections/Close.tsx`
at a Formspree/Netlify Forms URL with `method="post"` and delete the `handleSubmit`
handler.

## Accessibility & performance notes

- Light/dark theme is applied by an inline `<head>` script before first paint, so there
  is no flash of the wrong palette; the choice persists in `localStorage`.
- Every `localStorage` access is wrapped in `try/catch` — private mode and blocked site
  data must not break the page.
- All entrance animations are gated behind `prefers-reduced-motion`.
- Skip link, labelled form fields, `aria-expanded` on the FAQ and mobile menu, and a
  visible focus ring on every interactive element.
- Icons are inline SVG and fonts are preconnected, so the only network requests are the
  document, one CSS file, one JS file, and the two font families.
