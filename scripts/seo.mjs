/**
 * Post-build SEO + GitHub Pages plumbing.
 *
 *  1. Pre-renders each /projects/<slug> route to its own dist/projects/<slug>/
 *     index.html — a copy of the app shell with that project's <title>,
 *     description and canonical baked in. GitHub Pages then serves it with a
 *     200 (not the SPA 404 fallback), so the case studies are crawlable and
 *     link previews resolve. The same JS bundle hydrates the right view.
 *  2. sitemap.xml / robots.txt generated from the real project slugs.
 *  3. 404.html — a copy of index.html, the catch-all for any other unknown
 *     path so a mistyped URL still lands in the app.
 *  4. .nojekyll — stops Pages stripping Vite's _-prefixed asset files.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const DIST = join(ROOT, 'dist')

// --- Pull the fields we need straight out of the data file -----------------
// slug / title / summary are the first three lines of every project object and
// none contain an apostrophe, so a line-anchored regex is enough — no TS loader.
const projectsSource = readFileSync(join(ROOT, 'src/data/projects.ts'), 'utf8')
const grab = (field) =>
  [...projectsSource.matchAll(new RegExp(`^\\s{4}${field}: '([^']+)',$`, 'gm'))].map(
    (m) => m[1],
  )
const slugs = grab('slug')
const titles = grab('title')
const summaries = grab('summary')

if (slugs.length !== titles.length || slugs.length !== summaries.length) {
  throw new Error(
    `seo.mjs: parsed ${slugs.length} slugs, ${titles.length} titles, ${summaries.length} summaries — expected equal counts. Check src/data/projects.ts formatting.`,
  )
}

const siteUrl = (
  process.env.VITE_SITE_URL ??
  readFileSync(join(ROOT, 'src/data/site.ts'), 'utf8').match(
    /export const SITE_URL = '([^']+)'/,
  )?.[1] ??
  'https://example.com'
).replace(/\/$/, '')

const shell = readFileSync(join(DIST, 'index.html'), 'utf8')

/** Swap the head tags that must differ per page. */
function renderShell({ title, description, canonical }) {
  return shell
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${description}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${title}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${description}$2`,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${canonical}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${title}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${description}$2`,
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${canonical}$2`,
    )
}

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

slugs.forEach((slug, i) => {
  const dir = join(DIST, 'projects', slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(
    join(dir, 'index.html'),
    renderShell({
      title: escapeAttr(`${titles[i]} — Case Study | Gilmore Dasmariñas`),
      description: escapeAttr(summaries[i]),
      canonical: `${siteUrl}/projects/${slug}`,
    }),
  )
})

// --- sitemap.xml / robots.txt ---------------------------------------------
const today = new Date().toISOString().slice(0, 10)
const urls = [
  { loc: `${siteUrl}/`, priority: '1.0' },
  ...slugs.map((slug) => ({ loc: `${siteUrl}/projects/${slug}`, priority: '0.8' })),
]

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join('\n')}
</urlset>
`,
)

writeFileSync(
  join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)

// --- catch-all + Jekyll opt-out -----------------------------------------
copyFileSync(join(DIST, 'index.html'), join(DIST, '404.html'))
writeFileSync(join(DIST, '.nojekyll'), '')

console.log(
  `SEO: pre-rendered ${slugs.length} project pages, sitemap with ${urls.length} URLs at ${siteUrl}, plus 404.html and .nojekyll.`,
)
