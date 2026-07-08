# ELMEC Infrastructure — Corporate Website

**Stage One:** design system, global components, homepage.
**Stage Two:** About, Services (overview + three discipline pages via one `ServiceDetailPage` template), Projects (filterable portfolio + `CaseStudyPage` template with gallery/lightbox).
**Stage Three (site complete):** Sectors (overview + `SectorDetailPage` template), Sustainability/ESG, Careers (filterable `JobListings`, ATS-ready), News (filterable index + `ArticlePage` template), Contact (validated `ContactForm`, office directory, map slot), and the four compliance pages via one `LegalPage` template. Every nav, footer and mega-menu link now resolves to a real page.
React 18 + Vite + Tailwind CSS + React Router.

```bash
npm install
npm run dev      # local development
npm run build    # production build
npm run preview  # serve the production build
```

## Design system

All tokens live in `tailwind.config.js` — the single source of truth. Components never hardcode hex values or arbitrary font sizes.

### Color tokens

| Token | Value | Use |
|---|---|---|
| `navy` | `#0E1B2C` | Base dark — header (scrolled), footer, dark bands |
| `navy-800` / `navy-700` | derived | Raised panels / borders on navy |
| `ink` | `#1A1A1A` | Body text on light backgrounds |
| `steel` | `#2E5C8A` | **The accent — CTAs, links, active states only** |
| `steel-600` | `#254B72` | Accent hover/pressed |
| `steel-300` | `#8FB4D9` | Accent on dark surfaces (AA on navy — never use default `steel` text on navy) |
| `steel-100` | `#E8EFF6` | Faint accent tint (tags, washes) |
| `mist` | `#F5F6F8` | Light section background |
| `grey-100…600` | scale | Borders, dividers, muted text (`grey-500` is the AA muted-on-white; `grey-300` the AA muted-on-navy) |

### Typography

- **Display:** Archivo (geometric grotesque) — headings, numerals, logo. Tight letter-spacing on display/H1/H2.
- **Body:** Inter — copy and UI, generous 1.7 line-height.

Type scale (use as `text-<token>`): `display`, `h1`, `h2`, `h3`, `h4`, `body-lg`, `body`, `caption`, plus `stat` for trust-band numerals. Display/H1/H2/stat are fluid via `clamp()`.

### Layout & rhythm

- `<Container>` — 1280px max width, responsive gutters. All alignment flows through it.
- `<Section tone="white|mist|navy">` — one vertical cadence (`py-20 → py-32`) for every section.

### Motion

Restrained: 250ms hover transitions (`duration-250`), one fade-and-rise scroll reveal via `<SectionReveal>` (IntersectionObserver, fires once, honours `prefers-reduced-motion`).

## Structure

```
src/
├── data/          # ALL content as plain data — swap for CMS/API calls
│   ├── site.js    #   nav, footer, contact, legal links
│   ├── home.js / about.js / projectsPage.js   # page editorial copy
│   ├── servicesPages.js  # services overview + 3 discipline detail entries
│   ├── sectorsPages.js   # sectors overview + 6 sector detail entries
│   ├── projects.js       # 12 full case studies + filter vocabularies
│   ├── news.js           # 10 articles with structured rich-text bodies
│   ├── careers.js        # employer brand + jobs array (ATS slot)
│   ├── sustainability.js # ESG copy + placeholder metrics
│   ├── contact.js        # offices, enquiry types, general enquiries
│   └── legal.js          # 4 compliance pages (⚠ placeholder legal copy)
├── components/
│   ├── index.js   # component barrel — everything exports from here
│   ├── ui/        # Button, Container, Section, SectionReveal, SectionHeading, Icon
│   ├── layout/    # Layout, Header, Footer
│   ├── sections/  # Hero, StatBand, CTABand, Timeline, Gallery
│   ├── cards/     # ServiceCard, ProjectCard, SectorTile, SectorCard, NewsCard,
│   │              # ValueCard, TeamCard, MetricCard, QuoteCard, OfficeCard
│   ├── projects/  # ProjectFilter (shared filter control: projects/jobs/news)
│   ├── careers/   # JobListings (filterable, expandable, ATS-ready)
│   ├── contact/   # ContactForm (validated, accessible)
│   └── templates/ # ServiceDetailPage, CaseStudyPage, SectorDetailPage,
│                  # ArticlePage, LegalPage (data-driven page templates)
├── pages/         # Home, About, Services, Projects, Sectors, Sustainability,
│                  # Careers, News, Contact (+ PlaceholderPage for 404s)
└── App.jsx        # router — every destination resolves; detail routes are dynamic
```

## Adding pages in later stages

1. Create the page in `src/pages/`, composing from `src/components/index.js`.
2. In `App.jsx`, replace that route's `<PlaceholderPage>` element. Paths never change.
3. Add content as data in `src/data/` — components stay presentation-only.

## Integration points (search for these comments)

- `PLACEHOLDER IMAGE` / `HERO PHOTOGRAPHY SLOT` — swap Unsplash placeholders for commissioned photography.
- `PLACEHOLDER METRICS` (`src/data/stats.js`, `src/data/sustainability.js`, project `results`) — audited figures.
- `BACKEND INTEGRATION POINT` — newsletter POST (`Footer.jsx`) and contact form POST (`ContactForm.jsx`).
- `ATS INTEGRATION POINT` (`src/data/careers.js`, `JobListings.jsx`) — careers API feed + application URLs.
- `ASSET INTEGRATION POINT` (`src/data/sustainability.js`) — the real Sustainability Report download.
- `MAP INTEGRATION POINT` (`ContactPage.jsx`) — embedded HQ map.
- `SHARE INTEGRATION POINT` (`ArticlePage.jsx`) — canonical URLs for social sharing.
- ⚠️ `src/data/legal.js` — placeholder legal copy; **must be replaced with vetted legal content before launch**.
- Logo slot (`Header.jsx`, `Footer.jsx`) — replace the text mark with the ELMEC SVG lockup.
- `src/data/site.js` / `src/data/contact.js` — real contact details, office directory and social URLs.

## Accessibility (WCAG 2.1 AA)

Semantic HTML5 landmarks, one `<h1>` per page with ordered heading hierarchy, skip link, full keyboard navigation (mega-menus: Enter/Escape/Tab; mobile menu: focus trap + focus return), `aria-expanded`/`aria-controls` on disclosure controls, alt text on all images, visible focus rings, AA-verified contrast pairs, `prefers-reduced-motion` honoured, live region on form validation.
