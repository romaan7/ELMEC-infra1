/**
 * Services pages content — the overview page and the three discipline
 * detail pages. Each detail entry drives one instance of the shared
 * ServiceDetailPage template, guaranteeing structural consistency.
 *
 * PLACEHOLDER COPY & IMAGERY — replace with approved messaging and
 * commissioned photography. CMS-ready: same-shape swap.
 * `relatedSectorIds` reference src/data/sectors.js; related projects are
 * matched by discipline from src/data/projects.js.
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
    lede: 'Most major programmes stitch their disciplines together through subcontract interfaces. ELMEC removes the interfaces.',
    points: [
      {
        id: 'accountability',
        title: 'One accountable team',
        description:
          'A single delivery organisation owns the schedule end to end — no interface claims, no gaps between packages.',
      },
      {
        id: 'coordination',
        title: 'Designed together, built together',
        description:
          'Civil, electrical and mechanical engineers coordinate in one federated model from day one, so clashes are resolved on screen, not on site.',
      },
      {
        id: 'certainty',
        title: 'Certainty at handover',
        description:
          'Self-delivered commissioning across all three disciplines means assets are proven as systems, not as parts.',
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
        'Highways, bridges, rail, water and heavy civil works — engineered for design lives measured in generations.',
      /* HERO PHOTOGRAPHY SLOT — replace with commissioned civil-works photography. */
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Major bridge under construction with tower cranes against the sky',
    },
    overview: {
      eyebrow: 'The discipline',
      heading: 'Heavy civil engineering, delivered with discipline',
      paragraphs: [
        'ELMEC’s civil business plans and delivers the permanent works that carry everything else: alignments, structures, earthworks and drainage that must perform for fifty years or more. We self-perform the critical-path trades — piling, major concrete, structural erection — because programme certainty lives in the work you control directly.',
        'Every scheme runs on the same operating system: a federated digital model, a rehearsed temporary-works regime, and a safety culture that treats near-misses as seriously as incidents. It is not glamorous. It is why our civil programmes finish when we said they would.',
      ],
    },
    subCapabilities: {
      heading: 'What we deliver',
      items: [
        { id: 'roads', title: 'Roads & Highways', description: 'Motorways, expressways and strategic corridors, from earthworks to open-to-traffic.' },
        { id: 'bridges', title: 'Bridges & Structures', description: 'Major crossings, viaducts and complex structures in concrete and steel.' },
        { id: 'rail', title: 'Rail & Metro Civils', description: 'Alignments, stations and structures for heavy rail, metro and light rail.' },
        { id: 'water-infra', title: 'Water Infrastructure', description: 'Treatment works civils, flood defences, embankments and marine structures.' },
        { id: 'earthworks', title: 'Earthworks & Ground Engineering', description: 'Bulk earthworks, piling, ground improvement and deep excavations.' },
        { id: 'structures', title: 'Industrial & Special Structures', description: 'Heavy foundations, silos, tanks and long-span industrial frames.' },
      ],
    },
    relatedSectorIds: ['transport-rail', 'water', 'utilities', 'industrial'],
    cta: {
      headline: 'Planning a major civil programme?',
      subhead: 'Talk to the team that self-delivers the critical path.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View civil projects', href: '/projects' },
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
        'Transmission, distribution and high-voltage systems — designed, installed and energised to exacting international standards.',
      /* HERO PHOTOGRAPHY SLOT — replace with commissioned electrical-works photography. */
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'High-voltage electrical infrastructure against a dusk sky',
    },
    overview: {
      eyebrow: 'The discipline',
      heading: 'From the grid to the final circuit',
      paragraphs: [
        'ELMEC’s electrical business works across the full chain: transmission substations, distribution networks, renewable grid connections and the building systems they ultimately serve. Our engineers hold design authority in-house, so we can stand behind a system from single-line diagram to energisation certificate.',
        'The discipline’s hard currency is outage time. We compress it — pre-commissioned bays, digital substations, rehearsed switching programmes — because every hour a client’s network is down is an hour we are accountable for.',
      ],
    },
    subCapabilities: {
      heading: 'What we deliver',
      items: [
        { id: 'transmission', title: 'Power Transmission & Distribution', description: 'Overhead lines, cabling and network reinforcement up to 400 kV.' },
        { id: 'substations', title: 'Substations', description: 'AIS, GIS and digital substations — new-build, extension and refurbishment.' },
        { id: 'hvlv', title: 'HV / LV Systems', description: 'Switchgear, protection, control and power quality across voltage levels.' },
        { id: 'building-electrical', title: 'Building Electrical Services', description: 'Complete electrical fit-out for complex, critical buildings.' },
        { id: 'renewables', title: 'Renewable Grid Connections', description: 'Wind, solar and storage connections, from consenting support to export.' },
        { id: 'controls', title: 'Instrumentation & Control', description: 'SCADA, telemetry and control systems that make assets operable.' },
      ],
    },
    relatedSectorIds: ['energy-power', 'utilities', 'buildings', 'transport-rail'],
    cta: {
      headline: 'Need certainty at energisation?',
      subhead: 'Our electrical teams design, build and prove the system — end to end.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View electrical projects', href: '/projects' },
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
        'Plant, piping, HVAC and heavy mechanical installation — built exactly, tested thoroughly, handed over ready to run.',
      /* HERO PHOTOGRAPHY SLOT — replace with commissioned mechanical-works photography. */
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Engineer inspecting large-scale industrial mechanical plant',
    },
    overview: {
      eyebrow: 'The discipline',
      heading: 'The moving parts of permanent assets',
      paragraphs: [
        'Mechanical delivery is where tolerance meets scale: kilometres of piping installed to millimetre accuracy, rotating equipment aligned to the micron, ventilation systems balanced across entire hospital campuses. ELMEC self-delivers this work with directly employed, multi-certified crews and an offsite fabrication capability that moves quality-critical welding into controlled conditions.',
        'We measure ourselves at commissioning. A mechanical system is not finished when it is installed — it is finished when it runs at specification, witnessed, documented and handed to the operator with nothing left open.',
      ],
    },
    subCapabilities: {
      heading: 'What we deliver',
      items: [
        { id: 'hvac', title: 'HVAC Systems', description: 'Heating, ventilation and cooling for critical and large-scale environments.' },
        { id: 'process', title: 'Process & Plant Installation', description: 'Rotating equipment, vessels and packaged plant, set and aligned to spec.' },
        { id: 'piping', title: 'Industrial Piping Systems', description: 'Shop-fabricated and field-welded piping across all service classes.' },
        { id: 'building-services', title: 'Building Services', description: 'Integrated mechanical services and offsite MEP modules for complex buildings.' },
        { id: 'commissioning', title: 'Commissioning & Handover', description: 'System testing, balancing and documented handover to operations.' },
        { id: 'asset-support', title: 'Maintenance & Asset Support', description: 'Planned maintenance and outage support for operating facilities.' },
      ],
    },
    relatedSectorIds: ['industrial', 'buildings', 'water', 'energy-power'],
    cta: {
      headline: 'Commissioning is the contract.',
      subhead: 'Talk to us about mechanical delivery that finishes properly.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View mechanical projects', href: '/projects' },
    },
  },
];

/** Look up a service detail entry by route path. */
export function getServiceByHref(href) {
  return serviceDetails.find((s) => s.href === href);
}
