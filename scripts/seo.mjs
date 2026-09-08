/**
 * Post-build SEO + GitHub Pages plumbing.
 *
 *  1. sitemap.xml / robots.txt generated from the real project slugs, so adding
 *     a case study to src/data/projects.ts is enough to get it indexed.
 *  2. 404.html — a byte-for-byte copy of index.html. GitHub Pages serves it for
 *     unknown paths, which is what lets /projects/<slug> survive a hard refresh.
 *  3. .nojekyll — stops Pages from stripping Vite's _-prefixed asset files.
 */
import { copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DIST = join(process.cwd(), 'dist')

// Read the slugs straight out of the data file — no build-time import needed.
const projectsSource = readFileSync(join(process.cwd(), 'src/data/projects.ts'), 'utf8')
const slugs = [...projectsSource.matchAll(/^\s{4}slug: '([a-z0-9-]+)',$/gm)].map((m) => m[1])

const siteUrl = (
  process.env.VITE_SITE_URL ??
  readFileSync(join(process.cwd(), 'src/data/site.ts'), 'utf8').match(
    /export const SITE_URL = '([^']+)'/,
  )?.[1] ??
  'https://example.com'
).replace(/\/$/, '')

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

copyFileSync(join(DIST, 'index.html'), join(DIST, '404.html'))
writeFileSync(join(DIST, '.nojekyll'), '')

console.log(
  `SEO: sitemap with ${urls.length} URLs at ${siteUrl}, plus 404.html and .nojekyll.`,
)
