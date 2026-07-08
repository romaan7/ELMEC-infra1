/**
 * Projects — the shared portfolio dataset.
 *
 * Drives the homepage featured grid (first four entries), the filterable
 * Projects portfolio, the case-study detail pages (/projects/:slug) and
 * the "related projects" strips on service pages.
 *
 * PLACEHOLDER DATA — every project (names, clients, values, metrics,
 * narratives, imagery) is realistic placeholder content awaiting real,
 * approved case studies. CMS-ready: swap for an API returning this shape.
 *
 * Field notes:
 *  - `sector`, `region`, `disciplines` are the filter dimensions and must
 *    use the canonical values exported below.
 *  - `results` matches the StatBand shape so case studies reuse it.
 */

/** Canonical filter vocabularies (also used by ProjectFilter controls). */
export const PROJECT_SECTORS = [
  'Transport & Rail',
  'Energy & Power',
  'Water',
  'Buildings',
  'Industrial',
  'Utilities',
];

export const PROJECT_REGIONS = ['UK & Europe', 'Middle East', 'Asia-Pacific', 'North America', 'Africa'];

export const PROJECT_DISCIPLINES = ['Civil Infrastructure', 'Electrical Works', 'Mechanical Works'];

export const projects = [
  {
    id: 'meridian-crossing',
    slug: 'meridian-estuary-crossing',
    name: 'Meridian Estuary Crossing',
    location: 'United Kingdom',
    region: 'UK & Europe',
    sector: 'Transport & Rail',
    disciplines: ['Civil Infrastructure'],
    client: 'National Highways Agency', // PLACEHOLDER client
    value: '£480m',
    duration: '2021 – 2026',
    scope: '2.4 km cable-stayed crossing with approach viaducts and highway tie-ins',
    summary:
      'A new strategic crossing over a protected estuary, relieving one of the country’s most congested freight corridors.',
    href: '/projects/meridian-estuary-crossing',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=75',
    imageAlt: 'Cable-stayed bridge crossing a river at dusk, city skyline beyond',
    narrative: {
      challenge:
        'The estuary corridor carries a live shipping lane, sits within an environmentally designated area and borders dense residential communities. Conventional in-river construction would have closed navigation for months and put consent at risk.',
      solution:
        'ELMEC delivered the main span from the banks using precast deck segments launched by gantry, with marine operations compressed into agreed navigation windows. A full digital twin coordinated 14 design disciplines, and low-carbon concrete mixes were specified across all major pours.',
      outcome:
        'The crossing is on programme to open ahead of schedule, with embodied carbon 30% below the consented baseline and no unplanned navigation closures across four years of marine works.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'span', value: '2.4', suffix: ' km', label: 'Total crossing length' },
      { id: 'carbon', value: '30', suffix: '%', label: 'Embodied carbon below baseline' },
      { id: 'jobs', value: '1,200', suffix: '+', label: 'Jobs at construction peak' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75',
        alt: 'Tower cranes over the main span during segment erection',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
        alt: 'Approach viaduct works seen from the northern abutment',
      },
      {
        src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=75',
        alt: 'Completed deck soffit and pier detail in low light',
      },
    ],
  },
  {
    id: 'northfield-energy',
    slug: 'northfield-energy-park',
    name: 'Northfield Energy Park',
    location: 'Denmark',
    region: 'UK & Europe',
    sector: 'Energy & Power',
    disciplines: ['Electrical Works', 'Civil Infrastructure'],
    client: 'Nordvind Energi A/S', // PLACEHOLDER client
    value: '€310m',
    duration: '2022 – 2025',
    scope: '180 MW onshore wind, 132 kV substation and grid connection',
    summary:
      'A 180 MW onshore wind programme delivered with its own grid connection, energised in phases to meet national renewables targets.',
    href: '/projects/northfield-energy-park',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Onshore wind turbines across open farmland under a clear sky',
    narrative: {
      challenge:
        'Soft glacial soils, a constrained regional grid and a fixed subsidy deadline meant foundations, substation and connection works all sat on the critical path at once.',
      solution:
        'Piled foundation design was standardised across 42 turbine positions to de-risk ground variability, while the 132 kV substation was built and commissioned in parallel with turbine erection, enabling phased energisation.',
      outcome:
        'First power was exported four months before the subsidy deadline, and the completed park now generates enough electricity for roughly 150,000 homes.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'capacity', value: '180', suffix: ' MW', label: 'Installed capacity' },
      { id: 'homes', value: '150,000', suffix: '', label: 'Homes powered annually' },
      { id: 'early', value: '4', suffix: ' mo', label: 'First power ahead of deadline' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=75',
        alt: 'High-voltage connection infrastructure at the site boundary',
      },
      {
        src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=75',
        alt: 'Turbine strings across the northern plateau',
      },
      {
        src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=75',
        alt: 'Co-located solar array feeding the shared substation',
      },
    ],
  },
  {
    id: 'alqasr-metro',
    slug: 'al-qasr-metro-extension',
    name: 'Al Qasr Metro Extension',
    location: 'United Arab Emirates',
    region: 'Middle East',
    sector: 'Transport & Rail',
    disciplines: ['Civil Infrastructure', 'Electrical Works'],
    client: 'Al Qasr Transit Authority', // PLACEHOLDER client
    value: 'US$1.1bn',
    duration: '2020 – 2026',
    scope: '14 km elevated metro, nine stations, traction power and systems',
    summary:
      'A 14 km elevated extension threading a live urban corridor, doubling network coverage across the city’s eastern districts.',
    href: '/projects/al-qasr-metro-extension',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Railway tracks converging toward the horizon in warm light',
    narrative: {
      challenge:
        'The alignment runs above one of the city’s busiest arterial roads, crossing 60+ live utilities, with summer temperatures that close outdoor working for hours each day.',
      solution:
        'A precast segmental viaduct erected overnight from within a moving possession kept the corridor open throughout, while federated BIM coordination resolved every utility crossing before mobilisation. Traction power and station MEP were delivered by ELMEC’s integrated electrical teams.',
      outcome:
        'Structural completion was reached in May 2026 with the corridor never fully closed to traffic; systems commissioning is under way toward a capacity of 40 million passengers a year.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'length', value: '14', suffix: ' km', label: 'Elevated alignment' },
      { id: 'stations', value: '9', suffix: '', label: 'New stations' },
      { id: 'passengers', value: '40', suffix: 'm', label: 'Annual passenger capacity' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=75',
        alt: 'Track alignment approaching the eastern terminus',
      },
      {
        src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=75',
        alt: 'Station concourse structure with repeating façade geometry',
      },
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75',
        alt: 'Viaduct segment erection above the live highway corridor',
      },
    ],
  },
  {
    id: 'harborview-treatment',
    slug: 'harborview-water-treatment',
    name: 'Harborview Water Treatment Works',
    location: 'Australia',
    region: 'Asia-Pacific',
    sector: 'Water',
    disciplines: ['Civil Infrastructure', 'Mechanical Works'],
    client: 'Harborview Water Corporation', // PLACEHOLDER client
    value: 'A$420m',
    duration: '2021 – 2024',
    scope: 'Upgrade and expansion of a 300 ML/day treatment works, kept live throughout',
    summary:
      'A capacity and quality upgrade to a metropolitan treatment works serving 1.8 million people — delivered without a single day offline.',
    href: '/projects/harborview-water-treatment',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Large-scale construction works with cranes over an industrial site',
    narrative: {
      challenge:
        'The existing works could not be taken offline: 1.8 million customers depended on continuous supply while process capacity was rebuilt around them.',
      solution:
        'New modular process trains were constructed alongside the live plant and brought online through a sequence of staged cutovers, each rehearsed on a digital model of the works before execution. Mechanical installation, piping and commissioning were self-delivered.',
      outcome:
        'Treatment capacity rose 40% and energy consumption per megalitre fell 18%, with supply maintained without interruption across 38 months of construction.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'capacity', value: '40', suffix: '%', label: 'Capacity increase' },
      { id: 'energy', value: '18', suffix: '%', label: 'Energy reduction per ML' },
      { id: 'continuity', value: '0', suffix: '', label: 'Days of supply interruption' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
        alt: 'Crane operations over the new process trains',
      },
      {
        src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
        alt: 'Mechanical installation inside the pumping hall',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=75',
        alt: 'Commissioning engineer reviewing plant documentation on site',
      },
    ],
  },
  {
    id: 'st-aldric-medical',
    slug: 'st-aldric-medical-campus',
    name: 'St Aldric Medical Campus',
    location: 'United Kingdom',
    region: 'UK & Europe',
    sector: 'Buildings',
    disciplines: ['Mechanical Works', 'Electrical Works'],
    client: 'St Aldric Health Trust', // PLACEHOLDER client
    value: '£260m',
    duration: '2022 – 2025',
    scope: 'Full MEP delivery for a 900-bed acute hospital campus',
    summary:
      'Complete mechanical and electrical delivery for a new all-electric, 900-bed acute hospital — one of the region’s largest healthcare builds.',
    href: '/projects/st-aldric-medical-campus',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Contemporary building façade with precise repeating window geometry',
    narrative: {
      challenge:
        'Healthcare MEP density is unforgiving: 900 beds, 30 theatres and critical-care ventilation had to be installed to clinical tolerances while the trust’s decarbonisation plan ruled out gas entirely.',
      solution:
        'ELMEC manufactured 60% of the MEP scope offsite as pre-tested modules — risers, plantroom skids and multi-service corridors — and designed an all-electric heat strategy around high-temperature heat pumps with thermal storage.',
      outcome:
        'Installation ran 35% faster than a stick-built benchmark, first-fix defects fell by half, and the campus operates entirely without fossil fuels.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'beds', value: '900', suffix: '', label: 'Acute beds served' },
      { id: 'offsite', value: '60', suffix: '%', label: 'MEP manufactured offsite' },
      { id: 'speed', value: '35', suffix: '%', label: 'Faster than stick-built benchmark' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=75',
        alt: 'Main ward block façade nearing completion',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=75',
        alt: 'MEP module installation within a riser core',
      },
      {
        src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
        alt: 'Energy centre plant during commissioning',
      },
    ],
  },
  {
    id: 'koppar-plant',
    slug: 'koppar-advanced-manufacturing-plant',
    name: 'Koppar Advanced Manufacturing Plant',
    location: 'Canada',
    region: 'North America',
    sector: 'Industrial',
    disciplines: ['Mechanical Works'],
    client: 'Koppar Advanced Materials Inc.', // PLACEHOLDER client
    value: 'C$540m',
    duration: '2023 – 2026',
    scope: 'Process plant mechanical installation: piping, rotating equipment, utilities',
    summary:
      'Precision mechanical installation for a battery-materials plant, executed through two full northern winters without programme slip.',
    href: '/projects/koppar-advanced-manufacturing-plant',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Engineer inspecting large-scale industrial process plant',
    narrative: {
      challenge:
        'Process tolerances measured in millimetres, 85 km of piping, and a site where winter temperatures suspend conventional field welding for weeks at a time.',
      solution:
        'ELMEC moved the work indoors: pipe spools and rack modules were fabricated in a regional shop with automated welding, achieving repeatable quality, then installed in enclosed, heated zones sequenced around the process vendors’ equipment deliveries.',
      outcome:
        'Mechanical completion is tracking to plan with a weld repair rate under 0.5% and zero lost-time incidents across more than two million site hours.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'piping', value: '85', suffix: ' km', label: 'Process piping installed' },
      { id: 'weld', value: '<0.5', suffix: '%', label: 'Weld repair rate' },
      { id: 'safety', value: '2', suffix: 'm+', label: 'Site hours, zero lost-time incidents' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
        alt: 'Process hall mechanical installation in progress',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
        alt: 'Module delivery to the enclosed installation zone',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=75',
        alt: 'Quality engineer verifying weld documentation',
      },
    ],
  },
  {
    id: 'delta-ridge-substations',
    slug: 'delta-ridge-substation-programme',
    name: 'Delta Ridge Substation Programme',
    location: 'Kenya',
    region: 'Africa',
    sector: 'Energy & Power',
    disciplines: ['Electrical Works'],
    client: 'East African Power Corporation', // PLACEHOLDER client
    value: 'US$190m',
    duration: '2022 – 2025',
    scope: 'Three 400 kV digital substations with associated transmission tie-ins',
    summary:
      'A three-site 400 kV substation programme strengthening the national grid and unlocking new renewable generation in the Rift Valley.',
    href: '/projects/delta-ridge-substation-programme',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'High-voltage electrical infrastructure against an open sky',
    narrative: {
      challenge:
        'Remote sites hundreds of kilometres apart, constrained logistics for long-lead transformers, and a grid that could not tolerate extended outages during tie-in works.',
      solution:
        'ELMEC standardised a digital substation design across all three sites, cutting copper wiring by 70% and enabling parallel construction by locally recruited crews trained through a dedicated skills programme. Outage windows were compressed using pre-commissioned bays.',
      outcome:
        'All three substations energised on schedule, adding 1.2 GW of transfer capacity and leaving behind a 600-strong trained local workforce.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'capacity', value: '1.2', suffix: ' GW', label: 'Transfer capacity added' },
      { id: 'sites', value: '3', suffix: '', label: '400 kV substations energised' },
      { id: 'workforce', value: '600', suffix: '+', label: 'Local roles created and trained' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=75',
        alt: 'Substation gantries and busbars at the Rift Valley site',
      },
      {
        src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=75',
        alt: 'Renewable generation connected through the new substations',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=75',
        alt: 'Commissioning team testing protection systems',
      },
    ],
  },
  {
    id: 'bayside-energy-network',
    slug: 'bayside-district-energy-network',
    name: 'Bayside District Energy Network',
    location: 'United States',
    region: 'North America',
    sector: 'Utilities',
    disciplines: ['Mechanical Works', 'Electrical Works'],
    client: 'City of Bayside', // PLACEHOLDER client
    value: 'US$230m',
    duration: '2023 – 2026',
    scope: '18 km district heating and cooling network with two energy centres',
    summary:
      'A new low-carbon district energy network beneath a dense downtown, connecting 60 buildings to shared heating and cooling.',
    href: '/projects/bayside-district-energy-network',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Downtown city district at dusk seen from above',
    narrative: {
      challenge:
        'Routing 18 km of insulated mains beneath streets already crowded with a century of utilities, without closing the downtown core that pays for the scheme.',
      solution:
        'Trenchless crossings carried the network under the six most sensitive intersections, while the remaining alignment advanced in short, fully reinstated night-work sections. Two rooftop energy centres were modularised to fit constrained plots.',
      outcome:
        'The first loop is operational, and at full build-out the network will remove an estimated 45,000 tonnes of CO₂e each year against building-by-building plant.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'network', value: '18', suffix: ' km', label: 'Network installed' },
      { id: 'buildings', value: '60', suffix: '', label: 'Buildings connected' },
      { id: 'carbon', value: '45,000', suffix: ' t', label: 'CO₂e avoided annually' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=75',
        alt: 'The downtown district served by the new network',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
        alt: 'Night works on a reinstated main-line section',
      },
      {
        src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
        alt: 'Energy centre plant room during fit-out',
      },
    ],
  },
  {
    id: 'coral-coast-highway',
    slug: 'coral-coast-highway-duplication',
    name: 'Coral Coast Highway Duplication',
    location: 'Australia',
    region: 'Asia-Pacific',
    sector: 'Transport & Rail',
    disciplines: ['Civil Infrastructure'],
    client: 'State Transport Authority', // PLACEHOLDER client
    value: 'A$680m',
    duration: '2021 – 2025',
    scope: '42 km of dual carriageway, 11 structures and flood-immune alignment',
    summary:
      'A 42 km coastal highway duplication engineered for one-in-one-hundred-year flood immunity through cyclone-exposed terrain.',
    href: '/projects/coral-coast-highway-duplication',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Major road structure under construction with cranes',
    narrative: {
      challenge:
        'The existing single carriageway closed during every major flood event, severing the region’s only freight route — and the new alignment crossed sensitive coastal habitat.',
      solution:
        'ELMEC raised the design line onto a flood-immune embankment with 11 new structures sized for cyclonic rainfall, and threaded the alignment around habitat with dedicated fauna crossings agreed with regulators before construction began.',
      outcome:
        'The duplicated highway now stays open through one-in-one-hundred-year events, with average journey times down 25% and no environmental non-conformances recorded.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'length', value: '42', suffix: ' km', label: 'Dual carriageway delivered' },
      { id: 'immunity', value: '1:100', suffix: '', label: 'Year flood immunity' },
      { id: 'journeys', value: '25', suffix: '%', label: 'Journey-time reduction' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75',
        alt: 'Structure works on the raised coastal alignment',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
        alt: 'Earthworks along the flood-immune embankment',
      },
      {
        src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=75',
        alt: 'Completed interchange structure detail',
      },
    ],
  },
  {
    id: 'mekong-flood-resilience',
    slug: 'mekong-flood-resilience-programme',
    name: 'Mekong Flood Resilience Programme',
    location: 'Vietnam',
    region: 'Asia-Pacific',
    sector: 'Water',
    disciplines: ['Civil Infrastructure'],
    client: 'Regional Delta Authority', // PLACEHOLDER client
    value: 'US$150m',
    duration: '2022 – 2026',
    scope: '65 km of embankments, four pump stations and tidal sluice structures',
    summary:
      'A delta-wide flood defence programme protecting half a million people and some of the region’s most productive agricultural land.',
    href: '/projects/mekong-flood-resilience-programme',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Heavy civil works in progress beside a waterway',
    narrative: {
      challenge:
        'Construction seasons compressed by the monsoon, embankments founded on deep soft alluvium, and communities that could not be relocated while defences were rebuilt around them.',
      solution:
        'Geotextile-reinforced embankment sections were standardised for rapid dry-season construction by local contractors under ELMEC supervision, while pump stations and sluices were built offline and connected between monsoons.',
      outcome:
        'Two-thirds of the programme is complete and performing: the defended area came through the last two flood seasons without inundation, protecting an estimated 500,000 residents.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'people', value: '500,000', suffix: '', label: 'People protected' },
      { id: 'embankment', value: '65', suffix: ' km', label: 'Embankments strengthened' },
      { id: 'stations', value: '4', suffix: '', label: 'Pump stations delivered' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
        alt: 'Embankment reconstruction during the dry season',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=75',
        alt: 'Site engineer reviewing sluice construction drawings',
      },
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=75',
        alt: 'Pump station structural works nearing completion',
      },
    ],
  },
  {
    id: 'atlas-logistics-hub',
    slug: 'atlas-logistics-hub',
    name: 'Atlas Logistics Hub',
    location: 'Saudi Arabia',
    region: 'Middle East',
    sector: 'Industrial',
    disciplines: ['Civil Infrastructure', 'Mechanical Works'],
    client: 'Atlas Logistics Group', // PLACEHOLDER client
    value: 'US$350m',
    duration: '2023 – 2026',
    scope: '320,000 m² automated logistics campus: civils, structures and materials-handling MEP',
    summary:
      'A fully automated 320,000 m² logistics campus delivered in 30 months, from first earthworks to live sortation.',
    href: '/projects/atlas-logistics-hub',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Vast contemporary industrial building with precise structural rhythm',
    narrative: {
      challenge:
        'The client’s network launch date was fixed before design began: 30 months to deliver earthworks, structures, and the mechanical backbone for one of the region’s largest automated sortation systems.',
      solution:
        'ELMEC ran civils and superstructure as overlapping fronts, releasing floor plates zone-by-zone to the automation vendor months before overall completion. Mechanical teams installed 14 km of conveyor supports and utilities against a jointly owned integration schedule.',
      outcome:
        'The hub went live on the launch date, with automation commissioning starting five months earlier than a sequential programme would have allowed.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'area', value: '320,000', suffix: ' m²', label: 'Campus floor area' },
      { id: 'programme', value: '30', suffix: ' mo', label: 'Earthworks to go-live' },
      { id: 'conveyor', value: '14', suffix: ' km', label: 'Conveyor infrastructure installed' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=75',
        alt: 'Main fulfilment building structural frame',
      },
      {
        src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=75',
        alt: 'Materials-handling installation within the sortation hall',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
        alt: 'Campus-wide view of concurrent construction fronts',
      },
    ],
  },
  {
    id: 'national-fibre-backbone',
    slug: 'national-fibre-backbone-phase-two',
    name: 'National Fibre Backbone, Phase II',
    location: 'Ghana',
    region: 'Africa',
    sector: 'Utilities',
    disciplines: ['Electrical Works'],
    client: 'National Communications Infrastructure Company', // PLACEHOLDER client
    value: 'US$120m',
    duration: '2024 – 2026',
    scope: '2,800 km hybrid aerial and buried national fibre backbone',
    summary:
      'A 2,800 km national fibre backbone extending high-capacity connectivity to six underserved regions.',
    href: '/projects/national-fibre-backbone-phase-two',
    /* PLACEHOLDER IMAGE — replace with approved project photography. */
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Utility corridor infrastructure stretching toward the horizon',
    narrative: {
      challenge:
        'The route crosses forest, floodplain and dense urban corridors in a single programme, and existing live services along shared utility corridors could not be disturbed.',
      solution:
        'A hybrid architecture — aerial on existing transmission corridors, buried through urban sections — was surveyed and permitted region by region, with construction delivered by six locally contracted crews working to a single ELMEC quality and safety system.',
      outcome:
        'Phase II is on programme to bring reliable high-capacity connectivity within reach of six million people, with all corridor works completed without a single utility strike.',
    },
    /* PLACEHOLDER METRICS — replace with verified project outcomes. */
    results: [
      { id: 'route', value: '2,800', suffix: ' km', label: 'Backbone route length' },
      { id: 'people', value: '6', suffix: 'm', label: 'People within reach of the network' },
      { id: 'strikes', value: '0', suffix: '', label: 'Utility strikes across the programme' },
    ],
    gallery: [
      /* PLACEHOLDER GALLERY — replace with approved project photography. */
      {
        src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=75',
        alt: 'Shared utility corridor carrying the aerial fibre route',
      },
      {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=75',
        alt: 'Urban buried-duct section under construction',
      },
      {
        src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=75',
        alt: 'Field engineer verifying splice enclosure quality',
      },
    ],
  },
];

/** Look up a project by its URL slug (used by the case-study route). */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
