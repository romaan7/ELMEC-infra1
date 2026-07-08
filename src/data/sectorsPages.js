/**
 * Sectors pages content — overview page + the six sector detail entries.
 *
 * FRAMING NOTE: sector copy describes ELMEC's genuine, present-tense
 * CAPABILITY (expertise derived from the founder's domains). Where
 * landmark programmes are referenced, they are attributed to the
 * FOUNDER'S career with prior employers — never claimed as ELMEC
 * contracts. Related-experience strips are rendered with explicit
 * founder attribution by the SectorDetailPage template.
 *
 * PLACEHOLDER COPY & IMAGERY — replace with approved messaging and
 * commissioned photography. CMS-ready.
 */

export const sectorsOverview = {
  hero: {
    eyebrow: 'Sectors',
    headline: 'Deep in the sectors that matter to us.',
    subhead:
      'Six sector strengths, formed across twenty years of rail, highways, energy, marine and industrial work — and carried into every ELMEC engagement.',
    /* HERO PHOTOGRAPHY SLOT — replace with commissioned photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80',
    imageAlt: 'City infrastructure at dusk seen from above',
  },
  intro: {
    eyebrow: 'Sector strengths',
    heading: 'Expertise you can trace',
    lede: 'Every sector below maps directly to work our founder has estimated, planned or commercially led. We claim strength where we can show the experience behind it — and nowhere else.',
  },
};

/** Rich overview tiles (SectorCard) + detail template data, keyed by slug. */
export const sectorDetails = [
  {
    id: 'transport-rail',
    slug: 'transport-rail',
    name: 'Transport & Rail',
    href: '/sectors/transport-rail',
    descriptor: 'Stations, trackside civils and rail systems — our deepest strength.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Railway tracks converging toward the horizon in warm light',
    hero: {
      eyebrow: 'Sectors — Transport & Rail',
      headline: 'Our home ground.',
      subhead:
        'Stations, trackside civil works and rail systems — the sector where our founder’s career runs deepest, from King’s Cross to HS2.',
      image:
        'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Railway corridor stretching toward the horizon',
    },
    overview: {
      heading: 'Station and trackside expertise, formed on the landmark programmes',
      paragraphs: [
        'Rail is where ELMEC’s capability is strongest, because it is where our founder’s career was made: estimating and commercial leadership on King’s Cross Northern Ticket Hall, Crossrail’s central stations, Network Rail works at Waterloo and station estimates for HS2 — with the firms that delivered them. ELMEC brings that formation to bear as a firm: station civils, trackside works and rail systems, planned and priced by people who know what this work truly costs.',
        'We understand possessions, isolations and the discipline of the operating railway — and we understand the estimate that survives contact with all three. For station buildings, platform works, trackside civils and rail MEP, ELMEC offers tier-one method at founder-led scale.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Station civils, platforms, trackside structures and earthworks.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Rail electrical systems, station power and low-voltage installations.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Station ventilation, building services and plant installation.',
      },
    ],
    cta: {
      headline: 'A rail package to price or deliver?',
      subhead: 'Start with the people who estimated the landmark stations.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'See the founder’s rail track record', href: '/experience' },
    },
  },
  {
    id: 'highways',
    slug: 'highways',
    name: 'Highways',
    href: '/sectors/highways',
    descriptor: 'Motorway widening, pavements and highway structures.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Major highway structure works with cranes',
    hero: {
      eyebrow: 'Sectors — Highways',
      headline: 'Live-traffic engineering.',
      subhead:
        'Motorway widening, pavement and highway structures — capability formed on M25-scale works where the road never closed.',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Highway structures under construction',
    },
    overview: {
      heading: 'Widening, structures and pavement — priced from first principles',
      paragraphs: [
        'Highway work is unforgiving on cost: traffic management, phasing and possessions can swing a tender further than the permanent works themselves. Our founder’s estimating and commercial roles on the M25 widening with Balfour Beatty taught exactly where those swings hide — and ELMEC prices them from first principles rather than benchmark optimism.',
        'We offer capability across carriageway widening, pavement works, highway structures and bridges, with temporary works design and construction planning treated as core disciplines rather than afterthoughts.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Widening, earthworks, pavements, structures and bridge works.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Highway lighting, signage power and technology ducting.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Drainage plant, pumping installations and tunnel M&E.',
      },
    ],
    cta: {
      headline: 'A highways scheme that must stay live?',
      subhead: 'We plan and price around the traffic, not despite it.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'See the founder’s highways track record', href: '/experience' },
    },
  },
  {
    id: 'energy-power',
    slug: 'energy-power',
    name: 'Energy & Power',
    href: '/sectors/energy-power',
    descriptor: 'Solar and power infrastructure, from civils to connection.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Renewable energy infrastructure across open land',
    hero: {
      eyebrow: 'Sectors — Energy & Power',
      headline: 'The transition needs builders.',
      subhead:
        'Solar and power infrastructure — capability spanning our founder’s recent solar bid leadership and his early-career power projects in India.',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Wind and solar generation at first light',
    },
    overview: {
      heading: 'Power capability at both ends of a career',
      paragraphs: [
        'ELMEC’s energy credentials bracket our founder’s career: construction engineering on power and nuclear-ancillary projects in India with L&T and Hindustan Construction at one end; bid management and cost leadership across solar portfolios at Enable Infrastructure at the other. The firm carries both — heavy power civils and the fast, repeatable delivery economics of renewables.',
        'For solar farms, power project civils and the balance-of-plant works around generation, ELMEC offers integrated civil, electrical and mechanical capability with estimates built from production rates, not hope.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Solar DC/AC systems, connections and power distribution.',
      },
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Foundations, access, cable routes and heavy power civils.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Balance-of-plant mechanical systems and installations.',
      },
    ],
    cta: {
      headline: 'An energy scheme to cost or build?',
      subhead: 'Generation economics live or die at estimate stage — start there, with us.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'See the founder’s energy track record', href: '/experience' },
    },
  },
  {
    id: 'ports-marine',
    slug: 'ports-marine',
    name: 'Ports & Marine',
    href: '/sectors/ports-marine',
    descriptor: 'Breakwaters, jetties and marine civil works.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Waterfront infrastructure at dusk',
    hero: {
      eyebrow: 'Sectors — Ports & Marine',
      headline: 'Engineering against the sea.',
      subhead:
        'Breakwaters, jetties and marine civil works — grounded in our founder’s construction engineering on major Indian port programmes.',
      image:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Coastal infrastructure at dusk',
    },
    overview: {
      heading: 'Marine works, understood from the water line',
      paragraphs: [
        'Marine civil engineering punishes assumptions: weather windows, armour logistics and plant availability dominate cost in ways land-based benchmarks never capture. Our founder’s early career included construction engineering on port breakwater works in India with L&T and Hindustan Construction — experience in exactly those realities.',
        'ELMEC offers capability in breakwaters, jetties, quay works and coastal protection, with estimating and planning that treat the marine environment as the first constraint, not a risk-register footnote.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Breakwaters, armouring, quays, jetties and coastal structures.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Marine plant installations, moorings and handling equipment.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Quayside power, lighting and navigation systems.',
      },
    ],
    cta: {
      headline: 'Marine works on the horizon?',
      subhead: 'Price the sea state before it prices you.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'See the founder’s marine track record', href: '/experience' },
    },
  },
  {
    id: 'industrial-buildings',
    slug: 'industrial-buildings',
    name: 'Industrial & Buildings',
    href: '/sectors/industrial-buildings',
    descriptor: 'Plants, factories and station buildings.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Large industrial plant hall during works',
    hero: {
      eyebrow: 'Sectors — Industrial & Buildings',
      headline: 'Buildings that work for a living.',
      subhead:
        'Plants, factories and station buildings — from Tata Motors plant expansion to the great London station structures of our founder’s career.',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Industrial building interior during installation works',
    },
    overview: {
      heading: 'Industrial logic, applied to structures',
      paragraphs: [
        'ELMEC approaches buildings the way industry does: as assets with a job, where structure, services and programme serve production or passengers rather than architecture awards. Our founder’s experience spans both ends — industrial plant expansion with Tata Motors in India, and the station buildings of King’s Cross, Crossrail and HS2 with their delivery contractors.',
        'We offer capability in industrial plants, factories, depots and transport buildings, with the integrated civil, electrical and mechanical delivery that services-dense buildings demand.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Foundations, frames, floors and heavy structural works.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'HVAC, process installations and building services.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Power distribution, lighting and control systems.',
      },
    ],
    cta: {
      headline: 'A building with a job to do?',
      subhead: 'We engineer for its output, not just its opening.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'See the founder’s industrial track record', href: '/experience' },
    },
  },
  {
    id: 'water-pipelines',
    slug: 'water-pipelines',
    name: 'Water & Pipelines',
    href: '/sectors/water-pipelines',
    descriptor: 'Major pipeline infrastructure and associated works.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Linear utility infrastructure stretching toward the horizon',
    hero: {
      eyebrow: 'Sectors — Water & Pipelines',
      headline: 'Linear infrastructure, done in kilometres.',
      subhead:
        'Major pipeline infrastructure and associated civil works — where our founder’s engineering career began.',
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Pipeline corridor infrastructure at dusk',
    },
    overview: {
      heading: 'Pipeline delivery is a production line — treat it like one',
      paragraphs: [
        'A pipeline is a factory laid on its side: the economics live in production rates, crossings and reinstatement, not in the pipe itself. Our founder began his career on major cross-country pipeline programmes in India with L&T and Hindustan Construction — the kind of work that teaches linear-infrastructure discipline permanently.',
        'ELMEC offers capability in pipeline civils, crossings, pumping installations and associated water infrastructure, with estimates and construction plans built around achievable daily production, weather and land access.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Trenching, crossings, thrust bores and reinstatement.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Pipework, pumping stations and valve installations.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Pump power, instrumentation and control systems.',
      },
    ],
    cta: {
      headline: 'Kilometres to lay?',
      subhead: 'Talk to us before the production rate is a guess in someone’s tender.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'See the founder’s pipeline track record', href: '/experience' },
    },
  },
];

/** Look up a sector detail entry by URL slug. */
export function getSectorBySlug(slug) {
  return sectorDetails.find((s) => s.slug === slug);
}
