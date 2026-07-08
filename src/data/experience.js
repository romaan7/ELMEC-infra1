/**
 * Experience — the FOUNDER'S career track record.
 *
 * ⚠️ ATTRIBUTION CONSTRAINT — PERMANENT ⚠️
 * ------------------------------------------------------------------------
 * Every programme in this file was delivered by the firms that employed
 * Mukhtar Mohsin BEFORE he founded ELMEC (Balfour Beatty, Volker
 * Fitzpatrick, Hochtief, VGC, Network Rail supply chain, HS2 delivery
 * partners, Enable Infrastructure, L&T, Hindustan Construction, Tata
 * Motors). ELMEC did NOT deliver, build, lead or hold contracts for any
 * of them. All site copy rendering this data MUST frame it as the
 * founder's personal career experience ("Our founder's experience
 * includes…", "Before establishing ELMEC…"). Never present these as
 * ELMEC projects. Do not remove this framing when editing.
 * ------------------------------------------------------------------------
 *
 * `sector` values match src/data/sectors.js names; `disciplines` match
 * service titles — both drive the "related experience" strips on sector
 * and service pages. `group` splits the UK landmark programmes from the
 * earlier India career. CMS-ready: same-shape swap.
 */

export const experiencePage = {
  hero: {
    eyebrow: 'Experience',
    headline: 'A track record that predates the company.',
    subhead:
      'ELMEC is newly founded. The experience behind it is not — two decades across the UK’s landmark rail and highways programmes, and heavy civil works in India before that.',
    /* HERO PHOTOGRAPHY SLOT — replace with commissioned photography. */
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
    imageAlt: 'Major infrastructure works under construction at dawn',
  },
  /* The visible attribution statement — must remain prominent on the page. */
  attribution: {
    heading: 'The founder’s career, plainly attributed',
    text: 'The programmes below were delivered by the firms that employed our founder, Mukhtar Mohsin, before he established ELMEC — they are presented as his personal career experience, not as ELMEC contracts. What ELMEC offers is that experience: the estimating discipline, commercial rigour and delivery judgement formed on some of the most demanding infrastructure programmes in the UK and India.',
  },
  cta: {
    headline: 'Put that experience on your programme.',
    subhead: 'Talk to us about estimating, bid strategy or integrated delivery — the response comes from the founder’s desk, not a bid factory.',
    primary: { label: 'Contact us', href: '/contact' },
  },
};

export const experienceGroups = [
  { id: 'uk', title: 'UK landmark programmes', note: 'Founder roles in estimating, bid management and commercial leadership.' },
  { id: 'india', title: 'India — the early career', note: 'Heavy civil site and construction engineering with L&T, Hindustan Construction and Tata Motors.' },
];

export const experience = [
  /* ---------------- UK landmark programmes ---------------- */
  {
    id: 'hs2-stations',
    name: 'HS2 Stations Programme',
    sector: 'Transport & Rail',
    disciplines: ['Civil Infrastructure'],
    location: 'London & Birmingham, UK',
    group: 'uk',
    employer: 'HS2 delivery partners', // founder's employer — NOT ELMEC
    role: 'Senior Estimator — first-principles station estimates for Euston, Old Oak Common, Curzon Street and Interchange.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Large station structure with precise repeating architectural geometry',
  },
  {
    id: 'crossrail-stations',
    name: 'Crossrail Central Stations',
    sector: 'Transport & Rail',
    disciplines: ['Civil Infrastructure'],
    location: 'London, UK',
    group: 'uk',
    employer: 'Volker Fitzpatrick · Hochtief · VGC', // founder's employers — NOT ELMEC
    role: 'Estimating and commercial roles across Tottenham Court Road, Liverpool Street and Moorgate station works.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Railway alignment converging toward a city terminus',
  },
  {
    id: 'kings-cross-nth',
    name: 'King’s Cross Northern Ticket Hall',
    sector: 'Transport & Rail',
    disciplines: ['Civil Infrastructure'],
    location: 'London, UK',
    group: 'uk',
    employer: 'Balfour Beatty Civil Engineering', // founder's employer — NOT ELMEC
    role: 'Estimator — complex station civils beneath one of Europe’s busiest interchanges.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'City station district at dusk',
  },
  {
    id: 'm25-widening',
    name: 'M25 Widening',
    sector: 'Highways',
    disciplines: ['Civil Infrastructure'],
    location: 'London orbital, UK',
    group: 'uk',
    employer: 'Balfour Beatty Civil Engineering', // founder's employer — NOT ELMEC
    role: 'Estimating and commercial administration — live-carriageway motorway widening and structures.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Major highway structure works with cranes',
  },
  {
    id: 'waterloo-station',
    name: 'Network Rail — Waterloo',
    sector: 'Transport & Rail',
    disciplines: ['Civil Infrastructure'],
    location: 'London, UK',
    group: 'uk',
    employer: 'Network Rail supply chain', // founder's engagement — NOT ELMEC
    role: 'Commercial and estimating roles on station and infrastructure works at the UK’s busiest station.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Construction works within a live station environment',
  },
  {
    id: 'enable-multisite',
    name: 'Multi-Site Rail, Road & Solar Portfolio',
    sector: 'Energy & Power',
    disciplines: ['Civil Infrastructure', 'Electrical Works'],
    location: 'UK & Ireland',
    group: 'uk',
    employer: 'Enable Infrastructure', // founder's employer — NOT ELMEC
    role: 'Bid management and cost leadership across rail, road, solar, bridges and tunnels, including Irish multi-site trackside works.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Solar array under a bright sky',
  },

  /* ---------------- India — the early career ---------------- */
  {
    id: 'india-pipeline',
    name: 'Cross-Country Pipeline Programme',
    sector: 'Water & Pipelines',
    disciplines: ['Civil Infrastructure', 'Mechanical Works'],
    location: 'India',
    group: 'india',
    employer: 'L&T / Hindustan Construction', // founder's employers — NOT ELMEC
    role: 'Site and construction engineering on major pipeline infrastructure.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Linear utility infrastructure stretching toward the horizon',
  },
  {
    id: 'india-breakwaters',
    name: 'Port Breakwater Works',
    sector: 'Ports & Marine',
    disciplines: ['Civil Infrastructure'],
    location: 'India',
    group: 'india',
    employer: 'L&T / Hindustan Construction', // founder's employers — NOT ELMEC
    role: 'Construction engineering — marine works and breakwater armouring.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Waterfront infrastructure at dusk',
  },
  {
    id: 'india-bridges',
    name: 'Major Bridge Projects',
    sector: 'Highways',
    disciplines: ['Civil Infrastructure'],
    location: 'India',
    group: 'india',
    employer: 'L&T / Hindustan Construction', // founder's employers — NOT ELMEC
    role: 'Site engineering on long-span concrete bridge construction.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Bridge under construction with tower cranes',
  },
  {
    id: 'india-power',
    name: 'Power & Nuclear-Ancillary Projects',
    sector: 'Energy & Power',
    disciplines: ['Civil Infrastructure', 'Electrical Works'],
    location: 'India',
    group: 'india',
    employer: 'L&T / Hindustan Construction', // founder's employers — NOT ELMEC
    role: 'Construction engineering on power projects and nuclear-ancillary civil works.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Power generation infrastructure across open land',
  },
  {
    id: 'tata-plant',
    name: 'Tata Motors Plant Expansion',
    sector: 'Industrial & Buildings',
    disciplines: ['Civil Infrastructure', 'Mechanical Works'],
    location: 'India',
    group: 'india',
    employer: 'Tata Motors', // founder's employer — NOT ELMEC
    role: 'Industrial plant expansion — civil and installation works engineering.',
    /* PLACEHOLDER IMAGE — replace with licensed programme photography. */
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Large industrial plant hall during works',
  },
];
