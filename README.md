# ELMEC Infrastructure — Corporate Website

Founder-led site for a newly established London firm: Home, About, Services (overview + three discipline pages via one `ServiceDetailPage` template), Experience (founder track record), Sectors (overview + `SectorDetailPage` template ×6), Sustainability/ESG, Contact (validated `ContactForm`, single London head office), and four compliance pages via one `LegalPage` template.
React 18 + Vite + Tailwind CSS + React Router.

## ⚠️ Accuracy constraint (permanent)

ELMEC is a **newly founded company**. The landmark programmes referenced across the site (HS2, Crossrail, M25, King's Cross, Waterloo, and the Indian pipeline/marine/power projects) were delivered by the firms that employed the founder, **Mukhtar Mohsin**, before ELMEC existed. All copy and data must present them as the **founder's personal career experience** — never as ELMEC's own delivered work. The `/experience` section, homepage stats band, About timeline and every "related experience" strip carry explicit attribution; do not remove or weaken it when editing (see the warning blocks in `src/data/experience.js`, `src/data/stats.js`, `src/data/about.js`). Likewise: one London office only, sustainability figures are **commitments/targets** (not achievements), and global reach is framed as ambition.

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
│   ├── home.js / about.js       # page editorial copy (founder positioning)
│   ├── experience.js            # ⚠ FOUNDER track record — attributed, never ELMEC projects
│   ├── servicesPages.js  # services overview + 3 discipline detail entries
│   ├── sectorsPages.js   # sectors overview + 6 sector detail entries
│   ├── stats.js          # ⚠ founder-attributed trust-band figures
│   ├── sustainability.js # ESG commitments/targets (startup-honest)
│   ├── contact.js        # single London head office, enquiry types
│   └── legal.js          # 4 compliance pages (⚠ placeholder legal copy)
├── components/
│   ├── index.js   # component barrel — everything exports from here
│   ├── ui/        # Button, Container, Section, SectionReveal, SectionHeading, Icon
│   ├── layout/    # Layout, Header, Footer
│   ├── sections/  # Hero, StatBand, CTABand, Timeline
│   ├── cards/     # ServiceCard, ExperienceCard, SectorTile, SectorCard,
│   │              # ValueCard, TeamCard (future hires), MetricCard, OfficeCard
│   ├── contact/   # ContactForm (validated, accessible)
│   └── templates/ # ServiceDetailPage, SectorDetailPage, LegalPage (data-driven)
├── pages/         # Home, About, Services, Experience, Sectors, Sustainability,
│                  # Contact (+ PlaceholderPage for 404s)
└── App.jsx        # router — every destination resolves; sector routes are dynamic
```

## Adding pages later

1. Create the page in `src/pages/`, composing from `src/components/index.js`.
2. Register the route in `App.jsx`; add content as data in `src/data/` — components stay presentation-only.
3. News and Careers were removed deliberately for the startup stage — reintroduce them only as real sections, and restore the removed components from git history if needed.

## Integration points (search for these comments)

- `PLACEHOLDER IMAGE` / `HERO PHOTOGRAPHY SLOT` — swap Unsplash placeholders for commissioned/licensed photography.
- `src/data/stats.js` / `src/data/experience.js` — PLACEHOLDER founder figures and programme details, to be confirmed by the founder.
- `BACKEND INTEGRATION POINT` — newsletter POST (`Footer.jsx`) and contact form POST (`ContactForm.jsx`).
- `ASSET INTEGRATION POINT` (`src/data/sustainability.js`) — the Sustainability Report when published.
- `MAP INTEGRATION POINT` (`ContactPage.jsx`) — embedded head-office map.
- ⚠️ `src/data/legal.js` — placeholder legal copy; **must be replaced with vetted legal content before launch**.
- Logo slot (`Header.jsx`, `Footer.jsx`) — replace the text mark with the ELMEC SVG lockup.
- `src/data/site.js` / `src/data/contact.js` / `src/data/about.js` — real London address, phone, email and social URLs.

## Accessibility (WCAG 2.1 AA)

Semantic HTML5 landmarks, one `<h1>` per page with ordered heading hierarchy, skip link, full keyboard navigation (mega-menus: Enter/Escape/Tab; mobile menu: focus trap + focus return), `aria-expanded`/`aria-controls` on disclosure controls, alt text on all images, visible focus rings, AA-verified contrast pairs, `prefers-reduced-motion` honoured, live region on form validation.
