/**
 * Sustainability / ESG page content.
 * PLACEHOLDER COPY & METRICS throughout — every figure must be replaced
 * with audited, externally-assured data before launch. CMS-ready.
 */

export const sustainabilityHero = {
  eyebrow: 'Sustainability',
  headline: 'Building responsibly, for the long term.',
  subhead:
    'Infrastructure outlives everyone who builds it. Our environmental, social and governance commitments are engineered with the same rigour as the assets themselves.',
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned ESG photography. */
  image:
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=80',
  imageAlt: 'Wind turbines on open land at sunrise',
};

export const commitment = {
  eyebrow: 'Our commitment',
  heading: 'Responsibility is a delivery discipline, not a report.',
  paragraphs: [
    'ELMEC treats sustainability the way it treats structural design: quantified, verified and owned by named engineers. Every project carries a carbon budget alongside its cost budget, a social-value plan alongside its programme, and a safety standard that no commercial pressure can outrank.',
    'We publish our progress annually, audited to the same standard as our accounts — because a commitment that is not measured is a slogan.',
  ],
};

/** ENVIRONMENT — PLACEHOLDER METRICS, replace with audited figures. */
export const environment = {
  eyebrow: 'Environment',
  heading: 'Net zero, by engineering',
  lede: 'A science-based pathway to net zero by 2040 — pursued through design decisions, materials and methods, not offsets.',
  metrics: [
    { id: 'netzero', value: '2040', suffix: '', label: 'Net-zero target, all scopes', description: 'Science-based pathway with interim targets reported annually.' },
    { id: 'scope12', value: '42', suffix: '%', label: 'Scope 1 & 2 reduction since 2019', description: 'Fleet electrification, renewable site power and plant efficiency.' },
    { id: 'renewable', value: '2030', suffix: '', label: '100% renewable electricity by', description: 'Across every office, yard and site we control.' },
    { id: 'waste', value: '68', suffix: '%', label: 'Construction waste diverted from landfill', description: 'Design-for-reuse and segregated recovery on all major sites.' },
  ],
  paragraphs: [
    'The biggest carbon decisions on any project are made before the first excavator arrives. Our engineers carry carbon models alongside structural models — challenging cement content, steel specification and haul distances at the design stage, where reductions are real and cheap.',
    'On site, that translates into low-carbon concrete as the default mix, electrified plant wherever grid or storage allows, and logistics plans that measure movements the way we measure pours.',
  ],
};

/** HEALTH & SAFETY — PLACEHOLDER METRICS, replace with audited figures. */
export const safety = {
  eyebrow: 'Health & Safety',
  heading: 'Everyone goes home. Every day. Everywhere.',
  lede: 'Safety is the first agenda item in every ELMEC meeting from the board down — and the one standard on which no negotiation is possible.',
  paragraphs: [
    'Our zero-harm system is built on an uncomfortable truth: paperwork does not protect people, culture does. Every worker on an ELMEC site — direct, agency or supply chain — holds the same authority to stop work, without justification and without consequence. Near-misses are investigated with the same seriousness as incidents, because they are the same event with different luck.',
    'The system is certified to ISO 45001 in every operating region and audited by people with the independence to fail us.',
  ],
  metrics: [
    { id: 'ltifr', value: '0.08', suffix: '', label: 'Lost-time injury frequency rate', description: 'Per 100,000 hours, rolling 12 months — sector top decile.' },
    { id: 'hours', value: '50', suffix: 'm+', label: 'Hours without a lost-time incident', description: 'Current group-wide run, across all regions.' },
    { id: 'certification', value: 'ISO 45001', suffix: '', label: 'Certified in every region', description: 'Alongside ISO 9001 and ISO 14001, group-wide since 2018.' },
    { id: 'training', value: '96', suffix: '%', label: 'Workforce safety-trained annually', description: 'Including our supply chain, at our cost.' },
  ],
};

/** SOCIAL VALUE — PLACEHOLDER METRICS, replace with verified figures. */
export const social = {
  eyebrow: 'Social value',
  heading: 'Projects that leave more than an asset',
  lede: 'Local employment, transferable skills and community investment — planned into delivery, not bolted on.',
  metrics: [
    { id: 'local', value: '72', suffix: '%', label: 'Workforce hired locally', description: 'Average across international projects, past three years.' },
    { id: 'apprentices', value: '640', suffix: '+', label: 'Apprentices and graduates in training', description: 'Structured programmes with chartered mentorship.' },
    { id: 'investment', value: '£12', suffix: 'm', label: 'Community investment since 2022', description: 'Skills centres, STEM outreach and local partnerships.' },
  ],
  paragraphs: [
    'A major project can be a decade of local opportunity or a decade of disruption — the difference is intent. ELMEC contracts commit to local-hire percentages, supplier development and permanent skills legacies, and we report against them project by project.',
  ],
};

/** GOVERNANCE — pillars grid (reuses the ValueCard pattern). */
export const governance = {
  eyebrow: 'Governance',
  heading: 'How we hold ourselves to it',
  items: [
    {
      id: 'ethics',
      title: 'Ethics without exception',
      description:
        'A group-wide code of conduct, anti-bribery controls and an independent whistleblowing channel, available in every operating language.',
    },
    {
      id: 'transparency',
      title: 'Transparent reporting',
      description:
        'Annual sustainability disclosures assured to the same standard as our financial statements, aligned to recognised frameworks.',
    },
    {
      id: 'compliance',
      title: 'Compliance by design',
      description:
        'Sanctions, modern-slavery and supply-chain due diligence embedded in procurement — before a contract is signed, not after.',
    },
    {
      id: 'oversight',
      title: 'Board-level ownership',
      description:
        'A dedicated ESG committee of the board, chaired independently, with executive remuneration tied to safety and carbon performance.',
    },
  ],
};

export const reportCta = {
  heading: 'Read the evidence',
  text: 'Our full Sustainability Report sets out targets, progress and methodology — audited and published annually.',
  /* ASSET INTEGRATION POINT — replace href with the real report PDF/asset URL. */
  button: { label: 'Download our Sustainability Report', href: '#sustainability-report' },
};

export const sustainabilityCta = {
  headline: 'Hold us to it.',
  subhead: 'Talk to us about how sustainability commitments become delivery requirements on your programme.',
  primary: { label: 'Contact us', href: '/contact' },
  secondary: { label: 'Our latest news', href: '/news' },
};
