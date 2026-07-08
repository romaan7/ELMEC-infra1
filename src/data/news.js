/**
 * News & insights — the full newsroom dataset.
 * Drives the homepage news strip (first three entries), the filterable
 * news index and the article detail pages (/news/:slug).
 *
 * PLACEHOLDER ARTICLES — replace with the real newsroom feed (CMS-ready:
 * same-shape API swap). `body` is a structured block array so a CMS rich-
 * text field maps cleanly: { type: 'p' | 'h2' | 'quote' | 'list', ... }.
 */

/** Canonical categories (also used by the index filter). */
export const NEWS_CATEGORIES = ['Company News', 'Projects', 'Insights', 'Sustainability', 'People', 'Awards'];

export const news = [
  {
    id: 'net-zero-roadmap',
    slug: 'net-zero-delivery-roadmap',
    title: 'ELMEC publishes 2040 net-zero delivery roadmap',
    category: 'Sustainability',
    date: '2026-06-18',
    dateLabel: '18 June 2026',
    author: 'ELMEC Newsroom',
    excerpt:
      'A science-based pathway covering all scopes, with interim targets reported annually and executive pay tied to progress.',
    href: '/news/net-zero-delivery-roadmap',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Solar panels in rows under a bright sky',
    body: [
      { type: 'p', text: 'ELMEC Infrastructure has published its roadmap to net-zero emissions by 2040, setting interim targets for 2030 across all three scopes and committing to annual, externally assured reporting against them.' },
      { type: 'p', text: 'The roadmap prioritises engineering measures over offsetting: low-carbon concrete as the group default, electrified plant across major sites, and carbon budgets assigned to every project alongside cost budgets.' },
      { type: 'quote', text: 'A commitment that is not measured is a slogan. This roadmap is measured.', attribution: 'Thomas Beck, Group Director, HSE & Sustainability' },
      { type: 'h2', text: 'What changes on projects' },
      { type: 'list', items: ['Carbon budgets set at tender stage and tracked monthly', 'Low-carbon concrete specified as the default mix group-wide', 'Renewable site power on all projects where grid or storage allows', 'Supplier emissions data required from 2027 procurement onwards'] },
      { type: 'p', text: 'The full methodology is set out in the Sustainability Report, available from the Sustainability page.' },
    ],
  },
  {
    id: 'metro-award',
    slug: 'al-qasr-structural-completion',
    title: 'Al Qasr Metro Extension reaches structural completion',
    category: 'Projects',
    date: '2026-05-29',
    dateLabel: '29 May 2026',
    author: 'ELMEC Newsroom',
    excerpt:
      'Fourteen kilometres of elevated alignment completed above a live urban corridor — without a single full road closure.',
    href: '/news/al-qasr-structural-completion',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Modern architectural structure with repeating geometric façade',
    body: [
      { type: 'p', text: 'The Al Qasr Metro Extension has reached structural completion, with all fourteen kilometres of elevated viaduct and nine station structures now in place across the city’s eastern districts.' },
      { type: 'p', text: 'Erection was carried out overnight from within a moving possession, keeping one of the city’s busiest arterial corridors open to traffic throughout four years of construction.' },
      { type: 'h2', text: 'Next: systems' },
      { type: 'p', text: 'ELMEC’s integrated electrical teams now move to traction power energisation and systems commissioning, ahead of trial running. At opening, the extension will add capacity for forty million passengers a year.' },
      { type: 'quote', text: 'The corridor never closed. That was the promise, and the team kept it every night for four years.', attribution: 'Amira Haddad, Managing Director, Middle East' },
    ],
  },
  {
    id: 'graduate-intake',
    slug: 'record-graduate-intake',
    title: 'Record graduate intake joins ELMEC engineering programmes',
    category: 'People',
    date: '2026-05-12',
    dateLabel: '12 May 2026',
    author: 'ELMEC Newsroom',
    excerpt:
      '280 graduates across five regions begin the two-year rotational programme — the group’s largest ever intake.',
    href: '/news/record-graduate-intake',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Engineer in safety equipment reviewing plans on site',
    body: [
      { type: 'p', text: 'Two hundred and eighty graduate engineers have joined ELMEC across all five operating regions — the largest intake in the group’s history and a 30% increase on last year.' },
      { type: 'p', text: 'The two-year programme rotates graduates across civil, electrical and mechanical delivery, with funded chartership and a dedicated mentor from day one. First postings this year include the Meridian Estuary Crossing and the Delta Ridge substation programme.' },
      { type: 'h2', text: 'Building the pipeline' },
      { type: 'p', text: 'Applications for the 2027 programme open in September through the Careers page. Last year the programme received over forty applications per place.' },
    ],
  },
  {
    id: 'meridian-commissioning',
    slug: 'meridian-crossing-final-commissioning',
    title: 'Meridian Estuary Crossing enters final commissioning',
    category: 'Projects',
    date: '2026-04-22',
    dateLabel: '22 April 2026',
    author: 'ELMEC Newsroom',
    excerpt:
      'Load testing complete and systems proving under way, with the crossing on track to open ahead of schedule.',
    href: '/news/meridian-crossing-final-commissioning',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Cable-stayed bridge over a river at dusk',
    body: [
      { type: 'p', text: 'The Meridian Estuary Crossing has completed structural load testing and entered final systems commissioning, keeping the project on course to open ahead of its consented programme.' },
      { type: 'p', text: 'The 2.4-kilometre cable-stayed crossing was delivered with embodied carbon 30% below the consented baseline, and without a single unplanned closure of the estuary’s navigation channel across four years of marine works.' },
      { type: 'h2', text: 'A corridor transformed' },
      { type: 'p', text: 'Once open, the crossing is forecast to remove fourteen minutes from average freight journeys on the corridor and take an estimated 8,000 daily vehicle movements off the existing tunnel route.' },
    ],
  },
  {
    id: 'safety-milestone',
    slug: 'fifty-million-hours-milestone',
    title: 'ELMEC passes 50 million hours without a lost-time incident',
    category: 'Company News',
    date: '2026-03-30',
    dateLabel: '30 March 2026',
    author: 'ELMEC Newsroom',
    excerpt:
      'A group-wide milestone spanning every region — and a reminder that the streak matters less than the system behind it.',
    href: '/news/fifty-million-hours-milestone',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Construction site with cranes under a clear sky',
    body: [
      { type: 'p', text: 'ELMEC has passed fifty million work hours without a lost-time incident across its global operations — a run spanning every region and more than sixty live projects.' },
      { type: 'quote', text: 'We celebrate this for one day, then treat tomorrow like day zero. Complacency is how streaks end.', attribution: 'David Okonkwo, Chief Operating Officer' },
      { type: 'p', text: 'The group credits the milestone to its stop-work authority — held equally by every person on site — and to near-miss reporting rates that have tripled since 2022 as workers trust the system enough to use it.' },
    ],
  },
  {
    id: 'harborview-award',
    slug: 'harborview-water-project-of-the-year',
    title: 'Harborview upgrade named Water Project of the Year',
    category: 'Awards',
    date: '2026-03-05',
    dateLabel: '5 March 2026',
    author: 'ELMEC Newsroom',
    excerpt:
      'Judges cited the staged-cutover delivery that raised capacity 40% without a single day of supply interruption.',
    href: '/news/harborview-water-project-of-the-year',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Major infrastructure works with cranes at dawn',
    body: [
      { type: 'p', text: 'The Harborview Water Treatment Works upgrade has been named Water Project of the Year at the International Infrastructure Awards. PLACEHOLDER: confirm award name and citation with the real awarding body.' },
      { type: 'p', text: 'The judges highlighted the project’s staged-cutover methodology, which rebuilt treatment capacity around a live plant serving 1.8 million people — raising capacity 40% and cutting energy per megalitre 18%, with zero days of supply interruption.' },
      { type: 'h2', text: 'Method over luck' },
      { type: 'p', text: 'Each of the fourteen cutovers was rehearsed on a digital model of the works before execution — a discipline the team credits for a defect-free commissioning record.' },
    ],
  },
  {
    id: 'digital-twins-insight',
    slug: 'digital-twins-delivery-baseline',
    title: 'Why digital twins are becoming the delivery baseline',
    category: 'Insights',
    date: '2026-02-17',
    dateLabel: '17 February 2026',
    author: 'Rajan Mehta, Group Engineering Director',
    excerpt:
      'The question has flipped: not whether a major programme can afford a digital twin, but whether it can afford to be built twice.',
    href: '/news/digital-twins-delivery-baseline',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Engineer reviewing technical systems in an industrial facility',
    body: [
      { type: 'p', text: 'Every major asset now gets built twice: once in the model, once in the ground. The programmes that struggle are the ones that skip the first build — discovering their clashes, sequence conflicts and commissioning gaps at site rates instead of screen rates.' },
      { type: 'h2', text: 'What a twin actually buys you' },
      { type: 'list', items: ['Interface clashes resolved before mobilisation, when they cost hours not weeks', 'Cutover and possession sequences rehearsed without risk to live operations', 'Commissioning logic proven against the model before energisation', 'A handover asset the operator can actually use'] },
      { type: 'p', text: 'On the Harborview works, every one of fourteen live cutovers was rehearsed digitally first. The result was not just zero supply interruptions — it was a commissioning programme that finished early, because nothing was being discovered for the first time on site.' },
      { type: 'quote', text: 'The twin is not the innovation. Refusing to build without one is.', attribution: 'Rajan Mehta' },
    ],
  },
  {
    id: 'grid-connections-insight',
    slug: 'grid-is-the-bottleneck',
    title: 'The grid is the bottleneck: connecting renewables faster',
    category: 'Insights',
    date: '2026-01-28',
    dateLabel: '28 January 2026',
    author: 'ELMEC Energy & Power team',
    excerpt:
      'Generation is being consented faster than it can be connected. Three delivery practices that close the gap.',
    href: '/news/grid-is-the-bottleneck',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'High-voltage transmission infrastructure at dusk',
    body: [
      { type: 'p', text: 'Across every market ELMEC operates in, the constraint on the energy transition has moved: it is no longer planning consent for generation, it is the queue for connection. Gigawatts of consented wind and solar are waiting on substations and reinforcement that have not been built.' },
      { type: 'h2', text: 'Closing the gap' },
      { type: 'list', items: ['Standardised digital substation designs that cut engineering and outage time', 'Generation and connection delivered under one programme, killing the interface risk', 'Pre-commissioned bays that compress energisation windows from weeks to days'] },
      { type: 'p', text: 'None of this is exotic. It is the discipline of treating the connection as half the project rather than someone else’s problem — which is how ELMEC delivered first power at Northfield four months ahead of the subsidy deadline.' },
    ],
  },
  {
    id: 'denver-office',
    slug: 'elmec-opens-denver-office',
    title: 'ELMEC opens Denver office as North American business grows',
    category: 'Company News',
    date: '2025-12-10',
    dateLabel: '10 December 2025',
    author: 'ELMEC Newsroom',
    excerpt:
      'A second North American office supports a growing industrial and district-energy portfolio across the region.',
    href: '/news/elmec-opens-denver-office',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'City skyline at dusk',
    body: [
      { type: 'p', text: 'ELMEC has opened its second North American office, in Denver, as the region’s portfolio grows across advanced manufacturing, district energy and utilities work.' },
      { type: 'p', text: 'The office will serve as the delivery hub for the western United States, complementing the regional headquarters in Toronto. The North American business has doubled in three years and now employs more than 800 people.' },
      { type: 'p', text: 'Recruitment for delivery, commercial and HSE roles is under way through the Careers page.' },
    ],
  },
  {
    id: 'stem-scholarships',
    slug: 'engineering-scholarship-programme-expands',
    title: 'ELMEC engineering scholarship programme doubles in size',
    category: 'People',
    date: '2025-11-14',
    dateLabel: '14 November 2025',
    author: 'ELMEC Newsroom',
    excerpt:
      '120 fully funded engineering scholarships across five regions, prioritising students from communities near our projects.',
    href: '/news/engineering-scholarship-programme-expands',
    /* PLACEHOLDER IMAGE — replace with article photography. */
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Young engineer studying technical drawings',
    body: [
      { type: 'p', text: 'ELMEC’s engineering scholarship programme will double to 120 fully funded places from next academic year, with priority given to students from communities near the group’s live projects.' },
      { type: 'p', text: 'Scholars receive tuition funding, paid site placements each summer and a guaranteed graduate-programme interview. Two-thirds of previous cohorts have joined the group after graduating.' },
      { type: 'quote', text: 'The best social-value line in any project budget is a local engineer who stays one.', attribution: 'Mukhtar Mohsin, Chief Executive Officer' },
    ],
  },
];

/** Look up an article by its URL slug (used by the article route). */
export function getArticleBySlug(slug) {
  return news.find((n) => n.slug === slug);
}
