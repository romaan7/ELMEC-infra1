/**
 * Sectors pages content — overview page + the six sector detail entries.
 * Each detail entry drives one instance of the shared SectorDetailPage
 * template (/sectors/:slug). PLACEHOLDER COPY & IMAGERY — replace with
 * approved messaging and commissioned photography. CMS-ready.
 *
 * `disciplines[].serviceHref` links back to the Stage Two service pages;
 * related projects are matched by sector from src/data/projects.js.
 */

export const sectorsOverview = {
  hero: {
    eyebrow: 'Sectors',
    headline: 'Different industries. The same discipline.',
    subhead:
      'Six sectors, one delivery model — and the compound advantage of engineering lessons carried from each into all the others.',
    /* HERO PHOTOGRAPHY SLOT — replace with commissioned photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80',
    imageAlt: 'City infrastructure at dusk seen from above',
  },
  intro: {
    eyebrow: 'Cross-sector experience',
    heading: 'Why breadth is an engineering advantage',
    lede: 'A tunnelling method proven on metro work de-risks a water main. A commissioning regime built for hospitals raises the bar on industrial plants. Clients get every sector we have ever worked in.',
  },
};

/** Rich overview tiles (SectorCard) + detail template data, keyed by slug. */
export const sectorDetails = [
  {
    id: 'transport-rail',
    slug: 'transport-rail',
    name: 'Transport & Rail',
    href: '/sectors/transport-rail',
    descriptor: 'Rail, metro, highways and aviation programmes that keep economies moving.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Railway tracks converging toward the horizon in warm light',
    hero: {
      eyebrow: 'Sectors — Transport & Rail',
      headline: 'Keeping economies moving.',
      subhead:
        'Rail, metro, highways and aviation — delivered in live environments where closure is rarely an option.',
      image:
        'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Railway corridor stretching toward the horizon',
    },
    overview: {
      heading: 'Built around the operating railway, road and runway',
      paragraphs: [
        'Transport infrastructure is delivered inside constraints most sectors never see: possessions measured in hours, corridors that cannot close, and regulators with zero appetite for risk. ELMEC has spent two decades building the planning discipline those constraints demand — from overnight viaduct erection above live highways to resignalling delivered between the last train and the first.',
        'Our transport teams combine heavy civil delivery with in-house traction power, systems and station MEP capability, which is why authorities repeatedly trust us with programmes where the interfaces are the risk.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Alignments, viaducts, stations and earthworks — the permanent way and everything that carries it.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Traction power, overhead line equipment, signalling power and station electrical systems.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Tunnel ventilation, station HVAC and building services for passenger environments.',
      },
    ],
    cta: {
      headline: 'A corridor that cannot close?',
      subhead: 'Talk to the teams that deliver inside live transport environments.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View transport projects', href: '/projects' },
    },
  },
  {
    id: 'energy-power',
    slug: 'energy-power',
    name: 'Energy & Power',
    href: '/sectors/energy-power',
    descriptor: 'Generation, grids and renewables for a decarbonising world.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Wind turbines across open farmland under a clear sky',
    hero: {
      eyebrow: 'Sectors — Energy & Power',
      headline: 'The transition, delivered.',
      subhead:
        'Renewable generation, grid reinforcement and substations — the physical work behind every net-zero commitment.',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Onshore wind farm at first light',
    },
    overview: {
      heading: 'The bottleneck is delivery, and delivery is our business',
      paragraphs: [
        'Every energy strategy now depends on the same scarce resource: teams who can actually build generation and grid at pace. ELMEC delivers both sides of the connection — wind, solar and storage on one side; substations, lines and reinforcement on the other — so projects are not hostage to a third party at their most critical interface.',
        'Our digital substation designs cut outage windows and commissioning time, and our civil capability means foundations, access and cable routes sit inside the same programme as the electrical scope.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Substations to 400 kV, transmission, distribution and renewable grid connections.',
      },
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Turbine foundations, access infrastructure, cable routes and heavy plant civils.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Balance-of-plant mechanical systems, cooling and generation plant installation.',
      },
    ],
    cta: {
      headline: 'Generation is only half the project.',
      subhead: 'We deliver the connection too — one team, one programme.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View energy projects', href: '/projects' },
    },
  },
  {
    id: 'water',
    slug: 'water',
    name: 'Water',
    href: '/sectors/water',
    descriptor: 'Treatment, networks and flood resilience for growing cities.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Heavy civil works in progress at a water infrastructure site',
    hero: {
      eyebrow: 'Sectors — Water',
      headline: 'The quietest critical infrastructure.',
      subhead:
        'Treatment works, networks and flood defence — assets nobody notices until they fail, engineered so they don’t.',
      image:
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Construction cranes over a large water treatment facility',
    },
    overview: {
      heading: 'Live plants, rising demand, tightening consents',
      paragraphs: [
        'Water utilities face a brutal equation: aging assets, growing populations, stricter discharge consents — and no permission to interrupt supply while any of it is fixed. ELMEC specialises in exactly that condition. Our staged-cutover methodology, proven on major live works upgrades, rebuilds capacity around operating plants without a day offline.',
        'From treatment civils and process mechanical installation to pumping stations and flood resilience programmes, we deliver the full asset — and commission it as a system.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Treatment works civils, embankments, flood defences and marine structures.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Process plant, pumps, piping and the commissioning that proves the works.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'MCCs, instrumentation, control systems and site-wide power distribution.',
      },
    ],
    cta: {
      headline: 'An upgrade the plant can’t pause for?',
      subhead: 'Staged cutovers are our home ground.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View water projects', href: '/projects' },
    },
  },
  {
    id: 'buildings',
    slug: 'buildings',
    name: 'Buildings',
    href: '/sectors/buildings',
    descriptor: 'Commercial, civic and healthcare facilities built to perform.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Contemporary building façade with precise repeating geometry',
    hero: {
      eyebrow: 'Sectors — Buildings',
      headline: 'Complex buildings, engineered properly.',
      subhead:
        'Hospitals, civic and commercial facilities where the services are the building — and the tolerance for error is zero.',
      image:
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Monumental building façade in low evening light',
    },
    overview: {
      heading: 'Where MEP density decides the outcome',
      paragraphs: [
        'In a modern hospital or data-rich commercial building, the mechanical and electrical systems are most of the cost, most of the risk and all of the performance. ELMEC approaches buildings as engineering programmes: offsite-manufactured MEP modules, federated coordination from day one, and commissioning treated as the contract rather than the epilogue.',
        'Our all-electric delivery experience — heat pumps, thermal storage, smart distribution — makes us a natural partner for clients whose buildings must decarbonise as well as perform.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'HVAC, offsite MEP modules and building services for critical environments.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Complete electrical fit-out, resilient power and low-voltage systems.',
      },
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Foundations, frames and heavy structural works for major facilities.',
      },
    ],
    cta: {
      headline: 'A building that has to work on day one?',
      subhead: 'We commission systems, not just install them.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View building projects', href: '/projects' },
    },
  },
  {
    id: 'industrial',
    slug: 'industrial',
    name: 'Industrial',
    href: '/sectors/industrial',
    descriptor: 'Manufacturing and process facilities engineered for uptime.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Engineer inspecting large-scale industrial plant',
    hero: {
      eyebrow: 'Sectors — Industrial',
      headline: 'Precision, at production scale.',
      subhead:
        'Manufacturing, process and logistics facilities where programme speed and millimetre tolerances have to coexist.',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Large industrial process hall during installation',
    },
    overview: {
      heading: 'The schedule is set by the market, not the site',
      paragraphs: [
        'Industrial clients commit to customers before they commit to contractors: launch dates are fixed, and the facility has to meet them. ELMEC builds industrial programmes backwards from go-live — overlapping civils, structures and mechanical installation as parallel fronts, and releasing zones to process vendors months before practical completion.',
        'Our shop-fabrication capability moves quality-critical welding and module assembly into controlled conditions, protecting both tolerance and programme through winter, heat and everything else the site throws at it.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'Process plant, piping, rotating equipment and materials-handling installation.',
      },
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Heavy foundations, industrial frames and campus-wide earthworks.',
      },
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'HV supply, distribution, control systems and process instrumentation.',
      },
    ],
    cta: {
      headline: 'A launch date already promised?',
      subhead: 'We build programmes backwards from go-live.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View industrial projects', href: '/projects' },
    },
  },
  {
    id: 'utilities',
    slug: 'utilities',
    name: 'Utilities',
    href: '/sectors/utilities',
    descriptor: 'Gas, telecoms and district energy networks, delivered at scale.',
    /* PLACEHOLDER IMAGE — replace with commissioned sector photography. */
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Utility corridor infrastructure stretching toward the horizon',
    hero: {
      eyebrow: 'Sectors — Utilities',
      headline: 'Networks beneath everything.',
      subhead:
        'District energy, telecoms and utility networks — thousands of small interfaces, managed as one programme.',
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80',
      imageAlt: 'Utility infrastructure corridor at dusk',
    },
    overview: {
      heading: 'Linear programmes are logistics programmes',
      paragraphs: [
        'A network project is a thousand small projects wearing one contract: every street, crossing and connection its own negotiation with the public realm. ELMEC industrialises that reality — standardised work packages, trenchless techniques where the surface cannot be opened, and reinstatement quality that keeps municipal permission flowing.',
        'From district heating loops beneath dense downtowns to national fibre backbones across three terrains, our utilities teams deliver linear infrastructure with the safety record the streetscape demands.',
      ],
    },
    disciplines: [
      {
        serviceHref: '/services/electrical-works',
        title: 'Electrical Works',
        text: 'Network cabling, telecoms infrastructure and connection works.',
      },
      {
        serviceHref: '/services/mechanical-works',
        title: 'Mechanical Works',
        text: 'District energy plant, pipework networks and energy-centre installation.',
      },
      {
        serviceHref: '/services/civil-infrastructure',
        title: 'Civil Infrastructure',
        text: 'Trenching, trenchless crossings, chambers and public-realm reinstatement.',
      },
    ],
    cta: {
      headline: 'A network to build under a living city?',
      subhead: 'We keep the streets open while the work goes in.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View utilities projects', href: '/projects' },
    },
  },
];

/** Look up a sector detail entry by URL slug. */
export function getSectorBySlug(slug) {
  return sectorDetails.find((s) => s.slug === slug);
}
