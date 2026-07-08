/**
 * Careers page content — employer brand, culture, benefits, testimonials
 * and open roles. PLACEHOLDER COPY & ROLES — the `jobs` array is the
 * integration point for the ATS / careers API (replace with a fetch
 * returning the same shape; components need no changes).
 */

export const careersHero = {
  eyebrow: 'Careers',
  headline: 'Engineer a career that builds the world.',
  subhead:
    'Ten thousand people, forty countries, and the kind of projects engineers describe for the rest of their lives. Bring the ambition — we’ll supply the scale.',
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned people-on-site photography. */
  image:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2400&q=80',
  imageAlt: 'Engineer in safety equipment reviewing plans on a major site',
};

/** Why work here — reuses the ValueCard grid. */
export const whyElmec = {
  eyebrow: 'Why ELMEC',
  heading: 'What we offer, plainly',
  items: [
    {
      id: 'projects',
      title: 'Projects with a pulse',
      description:
        'Estuary crossings, national grids, city metros. Work you can point at from a train window for the next forty years.',
    },
    {
      id: 'growth',
      title: 'Growth taken seriously',
      description:
        'Funded chartership, structured rotations across disciplines and regions, and mentors who sign their own drawings.',
    },
    {
      id: 'global',
      title: 'A genuinely global firm',
      description:
        'Five regions, one standard. Careers here move across borders as naturally as our projects do.',
    },
    {
      id: 'people',
      title: 'People who stay',
      description:
        'Our retention outperforms the sector because responsibility comes early and credit lands where the work was done.',
    },
  ],
};

/** Culture editorial + benefits grid. */
export const culture = {
  eyebrow: 'Culture & benefits',
  heading: 'Serious work, looked after properly',
  paragraphs: [
    'ELMEC’s culture is engineered like its projects: safety first, plain speaking, and a deep suspicion of drama. We give people real responsibility early, back them with senior support, and measure them on outcomes rather than hours visible at a desk.',
    'The benefits below are the group-wide baseline — regional packages build on them. PLACEHOLDER: align details with the real reward framework before launch.',
  ],
  benefits: [
    { id: 'development', title: 'Professional development', description: 'Funded chartership, technical academies and a personal development budget.' },
    { id: 'wellbeing', title: 'Wellbeing', description: 'Private healthcare, mental-health support and an occupational health network.' },
    { id: 'reward', title: 'Reward & recognition', description: 'Competitive salary, performance bonus and long-service recognition.' },
    { id: 'flexibility', title: 'Flexible working', description: 'Hybrid arrangements where the role allows, and honest conversations where it doesn’t.' },
    { id: 'mobility', title: 'Global mobility', description: 'Supported international assignments across all five regions.' },
    { id: 'leave', title: 'Leave that means it', description: 'Generous annual leave, parental leave above statutory in every region.' },
  ],
};

/** Life at ELMEC — testimonial QuoteCards. PLACEHOLDER quotes & names. */
export const testimonials = {
  eyebrow: 'Life at ELMEC',
  heading: 'In their words',
  items: [
    {
      id: 'quote-1',
      quote:
        'I stood on the deck of a crossing I helped design three years out of university. Nowhere else would have trusted me with that — or checked my work as carefully.',
      name: 'Priya Nair',
      role: 'Senior Structural Engineer, UK & Europe',
    },
    {
      id: 'quote-2',
      quote:
        'The stop-work authority is real. I used it in my first month, the job stood down, and the site director thanked me in front of everyone.',
      name: 'Marcus Osei',
      role: 'Site Supervisor, Africa',
    },
    {
      id: 'quote-3',
      quote:
        'Two regions, three sectors, one employer. My CV reads like a career’s worth of moves — it was just ELMEC.',
      name: 'Hannah Kowalski',
      role: 'Commissioning Manager, Middle East',
    },
  ],
};

/** Filter vocabularies for the job listings. */
export const JOB_DEPARTMENTS = ['Engineering', 'Project Delivery', 'Commercial', 'HSE', 'Corporate'];
export const JOB_LOCATIONS = ['London, UK', 'Copenhagen, Denmark', 'Dubai, UAE', 'Sydney, Australia', 'Toronto, Canada', 'Nairobi, Kenya'];

/**
 * Open roles — PLACEHOLDER LISTINGS.
 * ATS INTEGRATION POINT: replace this array with the careers API feed
 * (e.g. Workday/Greenhouse) returning the same shape.
 */
export const jobs = [
  {
    id: 'senior-civil-engineer-london',
    title: 'Senior Civil Engineer — Major Crossings',
    department: 'Engineering',
    location: 'London, UK',
    type: 'Permanent, full-time',
    description:
      'Lead structural design coordination on our next generation of major crossing projects, working within a multidisciplinary team from concept through construction support.',
    responsibilities: [
      'Own design packages for major concrete and steel structures',
      'Coordinate across civil, electrical and mechanical interfaces in the federated model',
      'Mentor graduate engineers through chartership',
    ],
    requirements: [
      'Chartered (CEng or equivalent) with 8+ years in heavy civil design',
      'Major bridge or viaduct experience',
      'Working knowledge of Eurocodes and BIM-first delivery',
    ],
  },
  {
    id: 'project-director-metro-dubai',
    title: 'Project Director — Metro Programmes',
    department: 'Project Delivery',
    location: 'Dubai, UAE',
    type: 'Permanent, full-time',
    description:
      'Direct a multi-billion-dollar elevated metro programme through systems commissioning and handover, accountable for safety, schedule and client relationship.',
    responsibilities: [
      'Full P&L accountability for a flagship transport programme',
      'Lead a delivery organisation of 2,000+ at peak',
      'Own the client and authority relationships to board level',
    ],
    requirements: [
      '15+ years in major transport delivery, 5+ at programme leadership level',
      'Rail or metro systems integration experience',
      'Track record delivering in live urban environments',
    ],
  },
  {
    id: 'hv-commissioning-engineer-copenhagen',
    title: 'HV Commissioning Engineer',
    department: 'Engineering',
    location: 'Copenhagen, Denmark',
    type: 'Permanent, full-time',
    description:
      'Commission substations and grid connections across our Northern European renewables portfolio, from factory acceptance through energisation.',
    responsibilities: [
      'Lead protection and control testing to 400 kV',
      'Plan and execute energisation and switching programmes',
      'Produce commissioning documentation to grid-operator standards',
    ],
    requirements: [
      'Degree-qualified electrical engineer with 5+ years HV commissioning',
      'Authorised-person experience with a European grid operator',
      'Willingness to travel across the Nordic portfolio',
    ],
  },
  {
    id: 'mechanical-supervisor-toronto',
    title: 'Mechanical Installation Supervisor',
    department: 'Project Delivery',
    location: 'Toronto, Canada',
    type: 'Permanent, full-time',
    description:
      'Supervise mechanical crews installing process plant and piping on a major advanced-manufacturing programme, with quality and safety as the twin non-negotiables.',
    responsibilities: [
      'Direct supervision of directly employed mechanical crews',
      'Drive weld quality, alignment tolerances and installation sequence',
      'Enforce the zero-harm standard shift by shift',
    ],
    requirements: [
      'Red Seal or equivalent trade qualification',
      '7+ years industrial mechanical installation, 3+ supervising',
      'Experience in cleanroom or tight-tolerance environments preferred',
    ],
  },
  {
    id: 'quantity-surveyor-sydney',
    title: 'Senior Quantity Surveyor',
    department: 'Commercial',
    location: 'Sydney, Australia',
    type: 'Permanent, full-time',
    description:
      'Manage the commercial position of major water and transport packages across the Asia-Pacific portfolio, from procurement through final account.',
    responsibilities: [
      'Own package procurement, valuation and change control',
      'Produce monthly cost/value reporting to group standards',
      'Negotiate subcontract terms and final accounts',
    ],
    requirements: [
      'RICS/AIQS-accredited with 6+ years on major infrastructure',
      'NEC or equivalent collaborative-contract experience',
      'Strong analytical and negotiation record',
    ],
  },
  {
    id: 'hse-manager-nairobi',
    title: 'Regional HSE Manager',
    department: 'HSE',
    location: 'Nairobi, Kenya',
    type: 'Permanent, full-time',
    description:
      'Lead health, safety and environmental performance across our East African power and utilities programmes, embedding the group zero-harm system with local delivery teams.',
    responsibilities: [
      'Own regional HSE performance, audits and reporting',
      'Coach site leadership and locally contracted crews',
      'Lead incident and near-miss investigations to group standard',
    ],
    requirements: [
      'NEBOSH Diploma or equivalent, 8+ years in construction HSE',
      'Multi-site leadership across distributed programmes',
      'Fluent English; Swahili an advantage',
    ],
  },
  {
    id: 'graduate-programme-global',
    title: 'Graduate Engineering Programme 2027',
    department: 'Engineering',
    location: 'London, UK',
    type: 'Graduate programme',
    description:
      'A two-year rotational programme across civil, electrical and mechanical delivery, with a chartership pathway, a dedicated mentor and a first posting to a live major project.',
    responsibilities: [
      'Four six-month rotations across disciplines and functions',
      'Structured chartership development with funded professional membership',
      'A final rotation selected with your career goals, including international options',
    ],
    requirements: [
      '2:1 or higher (or equivalent) in an engineering discipline, achieved or predicted',
      'Eligibility to work in the advertised region at start date',
      'Evidence of getting things built — projects, placements, or anything with a result',
    ],
  },
  {
    id: 'planner-london',
    title: 'Senior Planner — Major Projects',
    department: 'Project Delivery',
    location: 'London, UK',
    type: 'Permanent, full-time',
    description:
      'Build and own the integrated schedules that keep billion-pound programmes honest, working directly with delivery leadership on critical-path decisions.',
    responsibilities: [
      'Develop and maintain integrated P6 programmes across disciplines',
      'Run schedule risk analysis and scenario planning',
      'Turn progress data into decisions, not just reports',
    ],
    requirements: [
      '6+ years planning major infrastructure, P6 expert level',
      'Experience integrating civil and MEP schedules',
      'Clear communicator at project-board level',
    ],
  },
  {
    id: 'sustainability-analyst-london',
    title: 'Sustainability Analyst',
    department: 'Corporate',
    location: 'London, UK',
    type: 'Permanent, full-time',
    description:
      'Quantify and report the group’s carbon and social-value performance, supporting project teams with the data that turns commitments into delivery requirements.',
    responsibilities: [
      'Maintain the group carbon model and project carbon budgets',
      'Support annual assured sustainability disclosures',
      'Analyse supplier and materials data for reduction opportunities',
    ],
    requirements: [
      'Degree in engineering, environmental science or similar',
      '3+ years in carbon accounting or ESG reporting',
      'Fluency with GHG Protocol and science-based target methodologies',
    ],
  },
];

export const careersCta = {
  headline: 'Don’t see your role?',
  subhead:
    'We hire ahead of the work for exceptional people. Send a speculative application and tell us what you build best.',
  /* ATS INTEGRATION POINT — route to the real application portal. */
  primary: { label: 'Contact our talent team', href: '/contact' },
  secondary: { label: 'About ELMEC', href: '/about' },
};
