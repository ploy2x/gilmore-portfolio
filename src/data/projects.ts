/**
 * The nine project case studies. Each one renders both the card on the homepage
 * grid and its own /projects/<slug> detail page, so the data lives together.
 */

export type Metric = { value: string; label: string }

export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  liveUrl: string
  client?: string
  metrics?: Metric[]
  overview: string
  background: string
  problem: string
  responsibilities: string[]
  approach: string
  solutions: string[]
  challenges: string[]
  results: string[]
  lessons: string[]
  gallery?: string[]
}

export const projects: Project[] = [
  {
    slug: 'giftsplaza',
    title: 'GiftsPlaza',
    summary: 'Shopify operations & technical SEO for a 10,000+ product catalog',
    tags: ['Shopify 2.0', 'Liquid', 'GA4', 'GSC', 'Ahrefs', 'Screaming Frog'],
    liveUrl: 'https://giftsplaza.com',
    client: 'GiftsPlaza — high-volume gifting store on Shopify',
    metrics: [
      { value: '98', label: 'Lighthouse Performance' },
      { value: '0.9s', label: 'LCP' },
      { value: '0.001', label: 'CLS' },
      { value: '77.8K', label: 'GSC Impressions (3mo)' },
    ],
    overview:
      'Own end-to-end Shopify operations for a high-volume gifting store — from Core Web Vitals to product SEO and merchandising at scale.',
    background:
      'GiftsPlaza runs a large, fast-moving gifting catalog on Shopify. The operations bar is high: merchandising changes ship daily, and every regression hits SEO and CWV directly.',
    problem:
      'The site needed an operator who could own the storefront — not just build features — and continually push technical SEO and performance forward without burning founder time.',
    responsibilities: [
      'Daily Shopify operations & theme maintenance',
      'Technical SEO across 10,000+ products',
      'Core Web Vitals optimization',
      'Collection & metafield structure',
      'Site-wide performance auditing',
    ],
    approach:
      'I embedded into the daily workflow: audit → prioritize → ship → measure. Every change is judged against Core Web Vitals, crawl health, and merchandising impact.',
    solutions: [
      'Rebuilt critical templates for LCP wins',
      'Cleaned metafield & schema coverage across products',
      'Introduced repeatable QA before publishing theme changes',
    ],
    challenges: [
      'Preventing template regressions at 10K+ product scale',
      'Balancing merchandising apps with page speed',
      'Getting Lighthouse into the mid-90s on product templates',
    ],
    results: [
      'Google Lighthouse score of 96 sustained on key templates',
      'Consistent Core Web Vitals pass across product & collection pages',
      'Cleaner product SEO surface area at 10,000+ SKUs',
    ],
    lessons: [
      'At 10K+ products, systems beat heroics — templates and guardrails do the work.',
      'Owning CWV means owning the app stack, not just the theme.',
    ],
    gallery: [
      'Lighthouse: Performance 98 · LCP 0.9s · CLS 0.001',
      'GSC 3-month view: 77.8K impressions, 359 clicks',
    ],
  },
  {
    slug: 'magical',
    title: 'Magical',
    summary: 'Homepage built from Figma in ~2 weeks',
    tags: ['Figma', 'Shopify', 'Liquid', 'HTML/CSS/JS'],
    liveUrl: 'https://magical.com',
    overview:
      'Translated a high-fidelity Figma design into a production homepage — pixel-accurate, responsive, and shipped fast.',
    background:
      'Magical needed a homepage translated from a polished Figma file into a live storefront on a tight timeline.',
    problem:
      'Design fidelity + speed of delivery, without cutting corners on responsiveness.',
    responsibilities: [
      'Figma-to-code homepage build',
      'Responsive implementation',
      'Performance & accessibility pass',
    ],
    approach:
      'Component-first build, mobile-first CSS, and a strict Figma inspection loop before shipping each section.',
    solutions: [
      'Section-by-section build with review gates',
      'Reusable partials for repeating patterns',
    ],
    challenges: ['Tight ~2 week window', 'Preserving design fidelity across breakpoints'],
    results: ['Homepage shipped on time', 'Design-accurate on mobile, tablet & desktop'],
    lessons: [
      'Figma-to-code speed comes from ruthless componentization, not typing faster.',
    ],
  },
  {
    slug: 'magicalbutter',
    title: 'MagicalButter',
    summary: 'Shopify storefront operations & optimization',
    tags: ['Shopify', 'Liquid', 'GA4'],
    liveUrl: 'https://magicalbutter.com',
    client: 'MagicalButter — specialty consumer brand',
    overview:
      'Ongoing Shopify support, merchandising and performance work for a specialty consumer brand.',
    background:
      'MagicalButter runs a Shopify storefront that needed steady, senior operations support.',
    problem: 'Reduce founder workload while keeping the storefront fast and merchandisable.',
    responsibilities: [
      'Theme maintenance',
      'Merchandising updates',
      'Performance monitoring',
      'CRO improvements',
    ],
    approach: 'Proactive audits, small consistent improvements, clear change logs.',
    solutions: ['App audit & cleanup', 'Template performance passes'],
    challenges: ['Keeping a mature theme fast as apps accumulate'],
    results: ['Stable CWV', 'Faster iteration on merchandising'],
    lessons: ['Consistency compounds — small weekly wins beat quarterly rewrites.'],
  },
  {
    slug: 'my-secret-drawer',
    title: 'My Secret Drawer',
    summary: 'WordPress operations for a boutique Australian ecommerce brand',
    tags: ['WordPress', 'Elementor', 'HTML/CSS/JS'],
    liveUrl: 'https://mysecretdrawer.com.au/',
    client: 'David Wilks — boutique ecommerce portfolio',
    overview:
      'Ongoing WordPress support, theme updates, and product merchandising for a curated Australian online store.',
    background:
      'My Secret Drawer is a boutique Australian ecommerce brand that needed dependable WordPress operations support.',
    problem:
      'The store needed a reliable operator to handle theme edits, product updates, and day-to-day WordPress tasks without breaking the customer experience.',
    responsibilities: [
      'WordPress theme updates',
      'Product merchandising',
      'Storefront optimizations',
      'Technical troubleshooting',
    ],
    approach:
      'Small, safe updates with clear communication and a focus on keeping the storefront stable and presentable.',
    solutions: [
      'Theme maintenance and iterative improvements',
      'Product and collection page updates',
    ],
    challenges: ['Maintaining a polished storefront without disrupting daily trading'],
    results: [
      'Reliable theme updates',
      'Consistent product presentation',
      'Faster turnaround on storefront tasks',
    ],
    lessons: ['Reliability and clear communication are what boutique clients value most.'],
  },
  {
    slug: 'now4',
    title: 'Now4',
    summary: 'WordPress support & optimization for an Australian retail brand',
    tags: ['WordPress', 'Elementor', 'GA4'],
    liveUrl: 'https://now4.com.au/',
    client: 'David Wilks — Australian retail portfolio',
    overview:
      'WordPress operations, theme tweaks, and performance-focused updates for an Australian ecommerce site.',
    background:
      'Now4 is an Australian retail brand that needed hands-on WordPress support to keep the storefront running smoothly.',
    problem:
      'Regular theme and product updates were creating risk for the live store; the owner needed a safe pair of hands.',
    responsibilities: [
      'WordPress theme support',
      'Performance optimization',
      'Product page updates',
      'Technical QA',
    ],
    approach:
      'Measured, tested changes with a performance lens and thorough QA before publishing.',
    solutions: ['Safe theme update workflow', 'Performance-focused optimization passes'],
    challenges: ['Keeping a live store fast while shipping regular updates'],
    results: [
      'Stable storefront performance',
      'Quicker iteration cycles',
      'Fewer regressions on live theme changes',
    ],
    lessons: ['A disciplined update process protects revenue on live ecommerce stores.'],
  },
  {
    slug: 'growth-activists',
    title: 'Growth Activists',
    summary: 'WordPress build & ongoing optimization',
    tags: ['WordPress', 'Elementor', 'RankMath'],
    liveUrl: 'https://growthactivists.com',
    overview: 'WordPress development and technical SEO support for a growth-focused agency.',
    background:
      'Growth Activists needed a WordPress partner who could own the site rather than just build it.',
    problem: 'Reduce time spent managing the site while improving SEO fundamentals.',
    responsibilities: ['Theme & page builds', 'SEO hygiene', 'Performance tuning'],
    approach: 'Weekly audits, tight change management, and measurable SEO deliverables.',
    solutions: ['Redirect map cleanup', 'Schema rollout', 'Speed passes'],
    challenges: ['Balancing page builder flexibility with performance'],
    results: ['Cleaner site architecture', 'Improved page speed'],
    lessons: ['Page builders are fine — undisciplined stacks are not.'],
  },
  {
    slug: 'sacucci',
    title: 'Sacucci',
    summary: 'Shopify storefront & merchandising',
    tags: ['Shopify', 'Liquid', 'Metaobjects'],
    liveUrl: 'https://sacucci.com.au',
    overview:
      'Shopify storefront work with a focus on merchandising and clean product data.',
    background: 'Sacucci needed disciplined Shopify operations to keep the storefront tight.',
    problem: 'Merchandising velocity without breaking the theme.',
    responsibilities: ['Storefront updates', 'Product data hygiene', 'Merchandising'],
    approach: 'Metaobject-driven content, guardrails around theme edits.',
    solutions: ['Metaobject content model', 'PDP polish'],
    challenges: ['Consistent product presentation at catalog scale'],
    results: ['Cleaner PDPs', 'Faster merchandising cycles'],
    lessons: ['Metaobjects unlock non-dev merchandising when the model is right.'],
  },
  {
    slug: 'marketiers',
    title: 'Marketiers',
    summary: 'WordPress operations for an agency site',
    tags: ['WordPress', 'Yoast', 'Elementor'],
    liveUrl: 'https://marketiers.com.au',
    overview: 'Ongoing WordPress operations, content publishing, and technical SEO.',
    background: 'Marketiers publishes frequently and needed a hands-on operator.',
    problem: 'Keep publishing velocity high while protecting SEO.',
    responsibilities: ['Content publishing', 'SEO hygiene', 'Site maintenance'],
    approach: 'Editorial guardrails + technical SEO checks on every publish.',
    solutions: ['Publishing checklist', 'Internal linking passes'],
    challenges: ['High publishing cadence without SEO regressions'],
    results: ['Consistent publishing', 'Stable SEO health'],
    lessons: ['Editorial + technical SEO are one job, not two.'],
  },
  {
    slug: 'adamstown-car-doctors',
    title: 'Adamstown Car Doctors',
    summary: 'WordPress site build & local SEO',
    tags: ['WordPress', 'Elementor', 'RankMath'],
    liveUrl: 'https://adamstowncardoctors.com.au',
    overview: 'WordPress build with a focus on local SEO and lead capture.',
    background: 'Local automotive business that needed a modern, lead-focused site.',
    problem: 'Convert local search traffic into booked appointments.',
    responsibilities: ['Site build', 'Local SEO setup', 'Lead form integration'],
    approach: 'Fast, mobile-first site + local SEO fundamentals.',
    solutions: ['Local schema', 'Optimized service pages'],
    challenges: ['Standing out in a competitive local market'],
    results: ['Improved local visibility', 'Better lead flow'],
    lessons: ['Local SEO wins are mostly hygiene, done consistently.'],
  },
]

export const projectsBySlug = new Map(projects.map((p) => [p.slug, p]))

export const projectsSection = {
  eyebrow: 'Featured Projects',
  heading: 'Selected work',
  intro:
    "A sample of Shopify and WordPress projects where I've owned operations, technical SEO, or end-to-end delivery.",
}
