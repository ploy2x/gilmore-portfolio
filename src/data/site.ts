/**
 * Single source of truth for every piece of copy on the site.
 * Editing the portfolio should mean editing this file — not the components.
 */

// ---------------------------------------------------------------------------
// TODO(gilmore): set these three before going live.
// CONTACT_EMAIL powers the contact form and the JSON-LD Person record.
// SITE_URL must match the deployed origin for canonical + Open Graph tags.
// ---------------------------------------------------------------------------
export const CONTACT_EMAIL = 'your-email@example.com'
export const SITE_URL = 'https://ploy2x.github.io/gilmore-portfolio'

export const person = {
  name: 'Gilmore Jason Dasmariñas',
  fullName: 'Gilmore Jason S. Dasmariñas',
  shortName: 'Gilmore Dasmariñas',
  role: 'Shopify & WordPress Website Operations Specialist',
  eyebrow: 'Senior Ecommerce Operations Specialist',
  location: 'Philippines',
  timezone: 'Philippines (GMT+8)',
  availability: 'Full Time · Remote',
  tagline:
    'I help ecommerce businesses build, optimize and grow high-performing Shopify and WordPress websites through technical SEO, Core Web Vitals optimization and proactive website management.',
  heroStack: [
    'Shopify 2.0',
    'Shopify Markets',
    'WordPress',
    'Technical SEO',
    'Core Web Vitals',
  ],
  preferredRoles: [
    'Shopify Developer',
    'Technical SEO',
    'Website Operations',
    'WordPress Developer',
    'Ecommerce Operations',
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

// --- Why hire me ------------------------------------------------------------

export const whyHire = {
  eyebrow: 'Why me',
  heading: 'Why hire me instead of another developer?',
  intro:
    "Most developers wait to be told what to build. I operate your website like it's my own — proactively, thoroughly, and with the long term in mind.",
  points: [
    {
      title: 'I Take Ownership',
      body: "I don't wait for instructions. I proactively identify opportunities to improve performance, SEO, and usability.",
    },
    {
      title: 'I Solve Problems',
      body: 'From Shopify Liquid to Core Web Vitals and technical SEO, I investigate issues thoroughly and work toward practical solutions.',
    },
    {
      title: 'I Think Long-Term',
      body: 'I document improvements, build reusable processes, and continuously look for ways to reduce manual work.',
    },
  ],
}

// --- Featured wins + stats --------------------------------------------------

export const wins = {
  eyebrow: 'Featured Wins',
  heading: "A few things I've shipped",
  intro:
    'Concrete outcomes from the last few years of Shopify, WordPress, and technical SEO work.',
  items: [
    { icon: '🚀', text: 'Built Magical.com from Figma in 2 weeks.' },
    { icon: '⚡', text: 'Improved GiftsPlaza to 95–99 Lighthouse Performance.' },
    { icon: '🌎', text: 'Rolled out Shopify Markets across 9 countries for a DTC brand.' },
    { icon: '🛒', text: 'Managed SEO across 10,000+ ecommerce products.' },
    { icon: '📈', text: 'Migrated 50+ WordPress websites with no major downtime.' },
  ],
}

export const stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '10,000+', label: 'Products Managed' },
  { value: '50+', label: 'Website Migrations' },
  { value: '95–99', label: 'Google Lighthouse Score' },
  { value: '100+', label: 'WordPress Articles Published' },
]

// --- About ------------------------------------------------------------------

export const about = {
  eyebrow: 'About',
  heading: "I own websites. I don't just build them.",
  intro:
    "I'm Gilmore — a senior Shopify and WordPress operations specialist based in the Philippines. For 14+ years I've helped ecommerce brands, agencies and founders keep their websites fast, indexed, and improving week over week.",
  cards: [
    {
      title: 'Who I am',
      body: 'A hands-on operator with deep Shopify 2.0, WordPress, and technical SEO experience across 50+ migrations and a 10,000+ product catalog.',
    },
    {
      title: 'How I work',
      body: 'I audit continuously, prioritize by business impact, ship in small batches, and measure with GA4, GSC and Lighthouse — no drama, no surprises.',
    },
    {
      title: 'Why clients hire me',
      body: "I don't wait for instructions. I find improvements that reduce founder workload while improving website performance and SEO.",
    },
  ],
  missionLabel: 'My mission',
  mission:
    'Help businesses build faster, more reliable websites that generate long-term growth through technical excellence, SEO, and continuous improvement.',
  values: [
    'Ownership',
    'Reliability',
    'Curiosity',
    'Continuous Improvement',
    'Honest Communication',
    'Long-term Thinking',
  ],
}

// --- Services ---------------------------------------------------------------

export type ServiceGroup = 'Development' | 'Optimization' | 'Operations'

export const services = {
  eyebrow: 'Services',
  heading: 'How I Help Ecommerce Teams Grow',
  intro:
    'A full spectrum of website operations — from theme code to technical SEO to performance and automation.',
  items: [
    {
      title: 'Shopify Development',
      body: 'Theme 2.0 development, sections, metaobjects and app integrations.',
      group: 'Development' as ServiceGroup,
    },
    {
      title: 'WordPress Development',
      body: 'Custom builds on Elementor, Divi, Gutenberg with clean, maintainable structure.',
      group: 'Development' as ServiceGroup,
    },
    {
      title: 'Technical SEO',
      body: 'Crawl health, schema, redirects and site architecture at scale.',
      group: 'Optimization' as ServiceGroup,
    },
    {
      title: 'Website Operations',
      body: 'Own the storefront day-to-day so founders can focus on the business.',
      group: 'Operations' as ServiceGroup,
    },
    {
      title: 'Core Web Vitals',
      body: 'LCP, CLS and INP work targeting sustained mid-to-high 90s Lighthouse.',
      group: 'Optimization' as ServiceGroup,
    },
    {
      title: 'Performance Optimization',
      body: 'App audits, script deferral, image pipelines, and theme diet.',
      group: 'Optimization' as ServiceGroup,
    },
    {
      title: 'CRO',
      body: 'PDP, collection and landing page optimization grounded in analytics.',
      group: 'Optimization' as ServiceGroup,
    },
    {
      title: 'Website Maintenance',
      body: 'Proactive updates, monitoring, and change management.',
      group: 'Operations' as ServiceGroup,
    },
    {
      title: 'Content Management',
      body: 'Editorial ops for Shopify and WordPress at high cadence.',
      group: 'Operations' as ServiceGroup,
    },
    {
      title: 'Landing Pages',
      body: 'Fast, conversion-focused pages via GemPages, PageFly, Elementor.',
      group: 'Development' as ServiceGroup,
    },
    {
      title: 'Product SEO',
      body: 'Structured product data and PDP SEO across large catalogs.',
      group: 'Optimization' as ServiceGroup,
    },
    {
      title: 'Shopify Markets',
      body: 'Multi-country, multi-currency Shopify Markets rollouts.',
      group: 'Operations' as ServiceGroup,
    },
    {
      title: 'Automation',
      body: 'Make.com, HubSpot and Shopify Flow to remove manual work.',
      group: 'Operations' as ServiceGroup,
    },
  ],
}

// --- Case studies (homepage list) -------------------------------------------

export const caseStudies = {
  eyebrow: 'Case Studies',
  heading: 'Outcomes, not just outputs',
  intro:
    'The work that best illustrates how I take ownership of Shopify and WordPress websites and move the numbers that matter.',
  items: [
    {
      index: '01',
      title: 'GiftsPlaza',
      summary: 'Core Web Vitals & product SEO at 10,000+ products',
      highlights: [
        'Core Web Vitals Optimization',
        'Technical SEO',
        'Product SEO',
        '10,000+ Products',
      ],
      metric: 'Google Lighthouse 96',
      slug: 'giftsplaza',
    },
    {
      index: '02',
      title: 'Magical',
      summary: 'Homepage built from Figma in ~2 weeks',
      highlights: ['Built from Figma', '~2 week timeline', 'Homepage Development'],
      slug: 'magical',
    },
    {
      index: '03',
      title: 'RightKey Solutions',
      summary: 'Migrated 50+ WordPress websites with zero major downtime',
      highlights: ['50+ WordPress migrations', 'Zero major downtime'],
      note: 'Details on request',
      slug: null,
    },
    {
      index: '04',
      title: 'My Secret Drawer',
      summary: 'WordPress operations for a boutique Australian ecommerce brand',
      highlights: ['WordPress theme support', 'Boutique ecommerce', 'Australian brand'],
      client: 'David Wilks',
      slug: 'my-secret-drawer',
    },
    {
      index: '05',
      title: 'Now4',
      summary: 'WordPress support & optimization for an Australian retail brand',
      highlights: ['WordPress operations', 'Performance optimization', 'Australian retail'],
      client: 'David Wilks',
      slug: 'now4',
    },
  ],
}

// --- Experience -------------------------------------------------------------

export const experience = {
  eyebrow: 'Experience',
  heading: '14+ years operating websites',
  intro:
    "A timeline of the teams and projects where I've owned Shopify, WordPress and technical SEO work.",
  items: [
    {
      period: '2010–2015',
      role: 'Virtual Assistant · Brian Riley',
      body: 'Property rental management, data entry and medical transcription. Completed a 15-page medical transcription project with full accuracy — early proof that reliability compounds.',
    },
    {
      period: '2015–2020',
      role: 'WordPress Developer · RightKey Solutions',
      body: 'Migrated 50+ WordPress domains with no major downtime. Published hundreds of SEO articles, ran ongoing maintenance and rank-and-rent websites.',
    },
    {
      period: '2017–2024',
      role: 'Shopify / WordPress Developer',
      body: 'Website redesigns, Shopify 1.0 → 2.0 migrations, technical SEO, 404 fixes, redirects and performance work. Led major redesigns including Growth Activists.',
    },
    {
      period: '2024',
      role: 'Shopify Web Developer · Magical / MagicalButter',
      body: 'Built Magical.com from Figma in ~2 weeks as sole developer. CRO improvements, landing pages and homepage optimization.',
    },
    {
      period: '2024–2025',
      role: 'Shopify Web Developer · DTC Electronics Brand',
      body: 'GemPages development, Shopify updates, product management and theme improvements. Localized products across 9 international Shopify Markets.',
    },
    {
      period: '2025–Present',
      role: 'Website Operations Specialist · GiftsPlaza',
      body: 'Complete ownership of Shopify operations, technical SEO, product SEO and Core Web Vitals. Optimized 10,000+ products, Lighthouse 95–99 on desktop, ~1s load on optimized pages.',
      current: true,
    },
  ],
}

// --- Testimonials -----------------------------------------------------------

export const testimonials = {
  eyebrow: 'Testimonials',
  heading: 'What employers say',
  items: [
    {
      quote:
        'Gilmore worked with us for 10 weeks when we were underwater on our workload. He is knowledgeable, helpful, and reliable.',
      author: 'David Wilks',
      role: 'My Secret Drawer & Now4',
      traits: ['Knowledgeable', 'Helpful', 'Reliable'],
    },
    {
      quote:
        'Gilmore completes tasks quickly and has flexible hours. Whenever I need something done, I can feel confident in giving him the work.',
      author: 'Francis',
      role: 'Employer',
      traits: ['Fast delivery', 'Flexible', 'Trusted with work'],
    },
  ],
}

// --- Why work with me -------------------------------------------------------

export const whyWorkWithMe = {
  eyebrow: 'Why work with me',
  heading: 'Why Clients Keep Working With Me',
  intro:
    'Skills are table stakes. These are the working traits clients actually rehire me for.',
  items: [
    {
      title: 'Ownership',
      body: "I treat every website like it's mine — decisions get made, work gets shipped.",
    },
    {
      title: 'Problem Solving',
      body: 'I dig into root causes, not just symptoms, especially on SEO and CWV work.',
    },
    {
      title: 'Independent Research',
      body: "I don't wait for answers — I find them and share the trade-offs.",
    },
    {
      title: 'Business Mindset',
      body: 'Every change is judged against revenue, traffic and operational cost.',
    },
    {
      title: 'Performance Focus',
      body: 'Fast is a feature — I ship for Lighthouse mid-to-high 90s.',
    },
    {
      title: 'Communication',
      body: 'Clear, concise updates. No surprises for founders.',
    },
    {
      title: 'Continuous Improvement',
      body: 'Small, consistent wins that compound — weekly, not quarterly.',
    },
  ],
}

// --- Beyond work ------------------------------------------------------------

export const beyondWork = {
  eyebrow: 'Beyond work',
  heading: 'Life outside the browser tab',
  intro:
    'A little context on how I work with clients and what keeps me sharp between projects.',
  workingStyleLabel: 'Working style',
  workingStyleIntro: 'Clients describe me as:',
  workingStyle: [
    'Independent',
    'Technical',
    'Reliable',
    'Easy to work with',
    'Proactive',
    'Fast learner',
    'Long-term focused',
  ],
  outsideLabel: 'Outside work',
  outside:
    'Outside of work I spend time with my family, read manga and manhwa, learn new technologies, and stay active through fitness and weight-loss goals. I like researching future trends in web development, AI and SEO — often experimenting with new ideas before they become mainstream.',
  headingLabel: "Where I'm heading",
  heading2:
    "Long term, I'm building toward becoming a Technical Website Operations Consultant, running my own digital agency, and eventually growing a family business focused on agriculture — while continuing to help businesses grow online.",
}

// --- Resume -----------------------------------------------------------------

export const resume = {
  eyebrow: 'Resume',
  heading: 'Take my work with you',
  items: [
    {
      title: 'Download Resume',
      body: 'Standard 1–2 page CV with core roles and skills.',
      cta: 'Request file →',
    },
    {
      title: 'Download Executive Resume',
      body: 'Extended, results-focused resume for senior roles.',
      cta: 'Request file →',
    },
    {
      title: 'Download Portfolio PDF',
      body: 'Case studies and project screenshots in a shareable PDF.',
      cta: 'Request file →',
    },
  ],
}

// --- FAQ --------------------------------------------------------------------

export const faq = {
  eyebrow: 'FAQ',
  heading: 'Frequently Asked Questions',
  intro:
    'The questions I get most often from hiring managers and founders before we start.',
  items: [
    {
      q: 'Can you work independently?',
      a: 'Yes. I own the roadmap, prioritize by business impact, and ship without hand-holding.',
    },
    {
      q: 'Can you work with existing developers?',
      a: 'Yes. I integrate into existing dev teams, respect their conventions, and coordinate through Git, Linear, Jira, or whatever you use.',
    },
    {
      q: 'Can you join meetings?',
      a: 'Yes. Standups, sprint reviews, client calls — I show up prepared and follow through in writing.',
    },
    {
      q: 'Can you improve an existing Shopify store?',
      a: 'Yes. Most of my work is inheriting live stores and steadily improving performance, SEO, and merchandising without breaking anything.',
    },
    {
      q: 'Can you handle SEO?',
      a: 'Yes. Technical SEO, Core Web Vitals, schema, redirects, product SEO at 10,000+ SKU scale, GSC and GA4 analysis.',
    },
    {
      q: 'Can you migrate a Shopify 1.0 theme to 2.0?',
      a: "Yes. I've migrated multiple stores from Shopify 1.0 to 2.0 — sections, metaobjects, and clean theme architecture included.",
    },
    {
      q: 'Can you work during our timezone?',
      a: "Yes. I'm based in the Philippines (GMT+8) and flexible with overlap for US, EU, AU teams.",
    },
  ],
}

// --- Skills -----------------------------------------------------------------

export const skills = {
  eyebrow: 'Skills',
  heading: 'Technologies I Use',
  intro:
    'Deep experience across Shopify, WordPress, technical SEO, automation and the tooling around modern ecommerce operations.',
  groups: [
    {
      title: 'Shopify',
      items: [
        'Liquid',
        'Theme Development',
        'Shopify 2.0',
        'Shopify Flow',
        'Shopify Markets',
        'Metaobjects',
        'Metafields',
        'GemPages',
        'PageFly',
        'Product SEO',
        'Bulk SEO',
      ],
    },
    {
      title: 'WordPress',
      items: [
        'Elementor',
        'Divi',
        'WooCommerce',
        'ACF',
        'Gutenberg',
        'RankMath',
        'Yoast',
        'Custom CSS',
        'Migrations',
      ],
    },
    {
      title: 'SEO',
      items: [
        'Google Search Console',
        'GA4',
        'GTM',
        'Core Web Vitals',
        'Schema / JSON-LD',
        'Internal Linking',
        'Redirect Mapping',
        '404 Cleanup',
        'Ahrefs',
        'SEMrush',
        'Screaming Frog',
      ],
    },
    {
      title: 'Development',
      items: [
        'HTML',
        'CSS',
        'Liquid',
        'JavaScript (basic)',
        'Responsive Design',
        'Cross-browser',
        'Git',
        'VS Code',
      ],
    },
    {
      title: 'Automation & AI',
      items: [
        'Make.com',
        'HubSpot',
        'Mailchimp',
        'AI-assisted SEO workflows',
        'Claude',
        'ChatGPT',
        'Bulk Content Optimization',
      ],
    },
    {
      title: 'Design & Hosting',
      items: [
        'Figma',
        'Canva',
        'Photoshop',
        'Cloudways',
        'SiteGround',
        'Hostinger',
        'cPanel',
      ],
    },
  ],
}

// --- Contact ----------------------------------------------------------------

export const contact = {
  eyebrow: 'Contact',
  heading: 'Ready to hand your website to someone you can trust?',
  intro:
    "I'm open to full-time remote roles with Shopify agencies, ecommerce brands, WordPress agencies, SEO agencies, SaaS companies and startup founders.",
  formHeading: 'Get in touch',
  formIntro:
    'Send a short note about your website and what you need owned or improved. I usually reply within one business day.',
  submitLabel: 'Send message →',
}
