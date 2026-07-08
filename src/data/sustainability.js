/**
 * Sustainability / ESG page content.
 *
 * ⚠️ STARTUP-HONEST FRAMING: ELMEC is newly founded, so every figure here
 * is a COMMITMENT or TARGET, not a historical achievement. Do not add
 * track-record metrics (hours worked, past reductions, spend to date)
 * until ELMEC has genuinely accrued them. PLACEHOLDER targets to be
 * confirmed before launch. CMS-ready.
 */

export const sustainabilityHero = {
  eyebrow: 'Sustainability',
  headline: 'Building responsibly, for the long term.',
  subhead:
    'Infrastructure outlives everyone who builds it. Our environmental, social and governance commitments are set from day one — and engineered with the same rigour as the assets themselves.',
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned ESG photography. */
  image:
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2400&q=80',
  imageAlt: 'Wind turbines on open land at sunrise',
};

export const commitment = {
  eyebrow: 'Our commitment',
  heading: 'Responsibility is a delivery discipline, not a report.',
  paragraphs: [
    'ELMEC treats sustainability the way it treats structural design: quantified, verified and owned by named engineers. Every project we take on carries a carbon budget alongside its cost budget, a social-value plan alongside its programme, and a safety standard that no commercial pressure can outrank.',
    'We are a new firm, so we say this plainly: these are commitments, not yet achievements. We will publish our progress annually, audited to the same standard as our accounts — because a commitment that is not measured is a slogan.',
  ],
};

/** ENVIRONMENT — commitments and targets (PLACEHOLDER, confirm before launch). */
export const environment = {
  eyebrow: 'Environment',
  heading: 'Net zero, by engineering',
  lede: 'A science-based pathway to net zero by 2040 — pursued through design decisions, materials and methods, not offsets.',
  metrics: [
    { id: 'netzero', value: '2040', suffix: '', label: 'Net-zero commitment, all scopes', description: 'Science-based pathway, with interim targets set as the firm grows.' },
    { id: 'renewable', value: '100', suffix: '%', label: 'Renewable electricity across our operations', description: 'From the first office and the first site we control.' },
    { id: 'budgets', value: 'Day 1', suffix: '', label: 'Carbon budgets on every tender', description: 'Priced alongside cost at estimate stage — the founder’s discipline applied to carbon.' },
    { id: 'reporting', value: '2027', suffix: '', label: 'First annual sustainability disclosure', description: 'Externally assured, published whatever it says.' },
  ],
  paragraphs: [
    'The biggest carbon decisions on any project are made before the first excavator arrives — at estimate stage, where ELMEC lives. Our estimating discipline carries carbon models alongside cost models: challenging cement content, steel specification and haul distances while reductions are still real and cheap.',
    'On site, that translates into low-carbon concrete as our default specification, electrified plant wherever grid or storage allows, and logistics plans that measure movements the way we measure pours.',
  ],
};

/** HEALTH & SAFETY — standards set from day one (PLACEHOLDER targets). */
export const safety = {
  eyebrow: 'Health & Safety',
  heading: 'Everyone goes home. Every day. Everywhere.',
  lede: 'Safety is the first agenda item in every ELMEC meeting — and the one standard on which no negotiation is possible.',
  paragraphs: [
    'Our zero-harm system starts from an uncomfortable truth: paperwork does not protect people, culture does. Every worker on an ELMEC site — direct, agency or supply chain — holds the same authority to stop work, without justification and without consequence. Near-misses are investigated with the same seriousness as incidents, because they are the same event with different luck.',
    'Our founder spent two decades on programmes where world-class safety systems were the baseline — King’s Cross, Crossrail, HS2. ELMEC adopts that baseline from its first site, not its fiftieth.',
  ],
  metrics: [
    { id: 'zero', value: '0', suffix: '', label: 'The only acceptable harm number', description: 'Zero-harm standard on every site, from day one.' },
    { id: 'stopwork', value: 'Day 1', suffix: '', label: 'Stop-work authority for everyone', description: 'Held equally by every person on site, without consequence.' },
    { id: 'iso', value: 'ISO 45001', suffix: '', label: 'Certification pathway under way', description: 'Alongside ISO 9001 and 14001 — PLACEHOLDER: confirm target dates.' },
    { id: 'training', value: '100', suffix: '%', label: 'Safety-trained before deployment', description: 'Including supply-chain workers, at our cost.' },
  ],
};

/** SOCIAL VALUE — commitments (PLACEHOLDER targets, confirm before launch). */
export const social = {
  eyebrow: 'Social value',
  heading: 'Projects that leave more than an asset',
  lede: 'Local employment, transferable skills and community benefit — planned into delivery from the first tender, not bolted on.',
  metrics: [
    { id: 'local', value: '70', suffix: '%+', label: 'Local-hire target on every programme', description: 'Committed at tender stage and reported project by project.' },
    { id: 'apprentices', value: '1 in 10', suffix: '', label: 'Roles reserved for apprentices & graduates', description: 'Structured development with senior mentorship.' },
    { id: 'reporting', value: '100', suffix: '%', label: 'Social-value commitments reported', description: 'Against every contract, publicly, as the portfolio grows.' },
  ],
  paragraphs: [
    'A major project can be years of local opportunity or years of disruption — the difference is intent. ELMEC contracts will commit to local-hire percentages, supplier development and permanent skills legacies, and we will report against them project by project.',
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
        'A code of conduct, anti-bribery controls and a confidential whistleblowing channel — in place from incorporation, not retrofitted.',
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
      title: 'Founder-level ownership',
      description:
        'ESG performance is owned personally by the founder, with safety and carbon commitments written into how the firm is run.',
    },
  ],
};

export const reportCta = {
  heading: 'Hold us to the evidence',
  text: 'Our first Sustainability Report — targets, methodology and progress — will be published following our first full year of operation.',
  /* ASSET INTEGRATION POINT — replace href with the real report PDF when published. */
  button: { label: 'Register for the report', href: '/contact' },
};

export const sustainabilityCta = {
  headline: 'Hold us to it.',
  subhead: 'Talk to us about how sustainability commitments become delivery requirements on your programme.',
  primary: { label: 'Contact us', href: '/contact' },
  secondary: { label: 'About ELMEC', href: '/about' },
};
