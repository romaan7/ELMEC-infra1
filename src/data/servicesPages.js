/**
 * Services pages content — the overview page and the three discipline
 * detail pages. Each detail entry drives one instance of the shared
 * ServiceDetailPage template.
 *
 * FRAMING NOTE: copy describes ELMEC's present-tense CAPABILITY and
 * approach. Landmark programmes are attributed to the FOUNDER'S career
 * with prior employers — never claimed as ELMEC contracts. Related
 * experience strips are rendered with founder attribution by the
 * template. PLACEHOLDER COPY & IMAGERY — CMS-ready.
 * `relatedSectorIds` reference src/data/sectors.js.
 */

/** Services overview page (/services). */
export const servicesOverview = {
  hero: {
    eyebrow: 'Services',
    headline: 'Three disciplines, engineered as one.',
    subhead:
      'Civil, electrical and mechanical delivery under a single management system — because complex infrastructure does not fail by discipline, it fails between them.',
    /* HERO PHOTOGRAPHY SLOT — replace with commissioned photography. */
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80',
    imageAlt: 'Expansive construction site with multiple cranes at first light',
  },
  intro: {
    eyebrow: 'The integrated model',
    heading: 'Why one firm, not three contractors',
    lede: 'Most programmes stitch their disciplines together through subcontract interfaces. ELMEC is built to remove them — with cost certainty as the connective discipline.',
    points: [
      {
        id: 'accountability',
        title: 'One accountable team',
        description:
          'A single delivery organisation owns the scope end to end — no interface claims, no gaps between packages.',
      },
      {
        id: 'estimating',
        title: 'Cost certainty first',
        description:
          'First-principles estimating and disciplined bid management — the founder’s specialism — before a single commitment is made.',
      },
      {
        id: 'coordination',
        title: 'Designed together, built together',
        description:
          'Civil, electrical and mechanical scopes coordinated in one model from day one, so clashes are resolved on screen, not on site.',
      },
    ],
  },
};

/** The three discipline detail pages (ServiceDetailPage template data). */
export const serviceDetails = [
  {
    id: 'civil-infrastructure',
    href: '/services/civil-infrastructure',
    title: 'Civil Infrastructure',
    hero: {
      eyebrow: 'Services — Civil Infrastructure',
      headline: 'The ground everything else stands on.',
      subhead:
        'Stations, highways, bridges, marine and heavy civil works — planned and priced by people who have done this work for twenty years.',
      /* HERO PHOTOGRAPHY SLOT — replace with commissioned civil-works photography. */
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Major bridge under construction with tower cranes against the sky',
    },
    overview: {
      eyebrow: 'The discipline',
      heading: 'Heavy civil engineering, priced from first principles',
      paragraphs: [
        'Civil infrastructure is ELMEC’s core discipline, and cost certainty is how we practise it. Every estimate is built from first principles — production rates, plant, temporary works, logistics — by a firm whose founder spent two decades doing exactly that on King’s Cross, the M25, Crossrail and HS2 with the contractors that delivered them.',
        'We bring the same rigour to delivery: temporary works design and construction planning treated as core engineering, method statements that survive contact with site, and commercial administration that keeps the account as clean as the works.',
      ],
    },
    subCapabilities: {
      heading: 'What we offer',
      items: [
        { id: 'stations', title: 'Stations & Rail Civils', description: 'Station structures, platforms, trackside civils and rail earthworks.' },
        { id: 'highways', title: 'Highways & Pavements', description: 'Widening, pavement works and live-carriageway construction.' },
        { id: 'bridges', title: 'Bridges & Structures', description: 'Concrete and steel structures, from footbridges to major spans.' },
        { id: 'marine', title: 'Marine & Coastal Works', description: 'Breakwaters, jetties, quays and coastal protection.' },
        { id: 'earthworks', title: 'Earthworks & Temporary Works', description: 'Bulk earthworks, excavation support and temporary works design.' },
        { id: 'estimating', title: 'Estimating & Bid Services', description: 'First-principles estimates, bid management and tender review for major civils.' },
      ],
    },
    relatedSectorIds: ['transport-rail', 'highways', 'ports-marine', 'water-pipelines'],
    cta: {
      headline: 'A civil package to price or plan?',
      subhead: 'Start with an estimate built from first principles.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View the founder’s track record', href: '/experience' },
    },
  },
  {
    id: 'electrical-works',
    href: '/services/electrical-works',
    title: 'Electrical Works',
    hero: {
      eyebrow: 'Services — Electrical Works',
      headline: 'Power, delivered and proven.',
      subhead:
        'Power distribution, rail electrical systems and renewable connections — integrated with the civil works that carry them.',
      /* HERO PHOTOGRAPHY SLOT — replace with commissioned electrical-works photography. */
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'High-voltage electrical infrastructure against a dusk sky',
    },
    overview: {
      eyebrow: 'The discipline',
      heading: 'Electrical delivery without the interface risk',
      paragraphs: [
        'On most programmes the electrical scope arrives through a separate contractor, and the interfaces arrive with it. ELMEC delivers electrical works inside the same team as the civils — one programme, one coordination model, one accountable point when the power must come on.',
        'Our capability spans station and building electrical services, solar and power project systems, and the distribution infrastructure around them — priced with the same first-principles discipline as everything else we do.',
      ],
    },
    subCapabilities: {
      heading: 'What we offer',
      items: [
        { id: 'distribution', title: 'Power Distribution', description: 'LV/HV distribution, switchgear and site-wide power infrastructure.' },
        { id: 'rail-systems', title: 'Rail Electrical Systems', description: 'Station power, trackside electrical works and systems interfaces.' },
        { id: 'solar', title: 'Solar & Renewables', description: 'Solar farm electrical systems and grid connections.' },
        { id: 'building-electrical', title: 'Building Electrical Services', description: 'Complete electrical fit-out for stations, plants and complex buildings.' },
        { id: 'controls', title: 'Instrumentation & Control', description: 'Control systems, telemetry and monitoring that make assets operable.' },
        { id: 'testing', title: 'Testing & Commissioning', description: 'Inspection, testing and documented energisation.' },
      ],
    },
    relatedSectorIds: ['energy-power', 'transport-rail', 'industrial-buildings', 'highways'],
    cta: {
      headline: 'Electrical scope on a wider programme?',
      subhead: 'Keep it inside one accountable team.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View the founder’s track record', href: '/experience' },
    },
  },
  {
    id: 'mechanical-works',
    href: '/services/mechanical-works',
    title: 'Mechanical Works',
    hero: {
      eyebrow: 'Services — Mechanical Works',
      headline: 'Precision at industrial scale.',
      subhead:
        'Plant, piping, HVAC and building services — built exactly, tested thoroughly, handed over ready to run.',
      /* HERO PHOTOGRAPHY SLOT — replace with commissioned mechanical-works photography. */
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Engineer inspecting large-scale industrial mechanical plant',
    },
    overview: {
      eyebrow: 'The discipline',
      heading: 'The moving parts of permanent assets',
      paragraphs: [
        'Mechanical delivery is where tolerance meets scale: piping installed to millimetre accuracy, plant aligned and balanced, ventilation proven across whole buildings. ELMEC’s mechanical capability draws on the founder’s industrial formation — plant expansion works with Tata Motors and mechanical scopes across two decades of integrated programmes.',
        'We measure ourselves at commissioning. A mechanical system is not finished when it is installed — it is finished when it runs at specification, witnessed, documented and handed to the operator with nothing left open.',
      ],
    },
    subCapabilities: {
      heading: 'What we offer',
      items: [
        { id: 'hvac', title: 'HVAC Systems', description: 'Heating, ventilation and cooling for stations, plants and buildings.' },
        { id: 'process', title: 'Process & Plant Installation', description: 'Rotating equipment, vessels and packaged plant, set and aligned to spec.' },
        { id: 'piping', title: 'Piping Systems', description: 'Fabricated and field-installed pipework across service classes.' },
        { id: 'building-services', title: 'Building Services', description: 'Integrated mechanical services for transport and industrial buildings.' },
        { id: 'pumping', title: 'Pumping & Water Plant', description: 'Pumping stations, valves and pipeline mechanical installations.' },
        { id: 'commissioning', title: 'Commissioning & Handover', description: 'System testing, balancing and documented handover to operations.' },
      ],
    },
    relatedSectorIds: ['industrial-buildings', 'water-pipelines', 'transport-rail', 'ports-marine'],
    cta: {
      headline: 'Commissioning is the contract.',
      subhead: 'Talk to us about mechanical delivery that finishes properly.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View the founder’s track record', href: '/experience' },
    },
  },
];

/** Look up a service detail entry by route path. */
export function getServiceByHref(href) {
  return serviceDetails.find((s) => s.href === href);
}
