/**
 * About page content — hero, mission, global presence, values, leadership
 * and company milestones. PLACEHOLDER COPY in the final tone of voice;
 * replace with approved corporate messaging. CMS-ready: same-shape swap.
 */

export const aboutHero = {
  eyebrow: 'About ELMEC',
  headline: 'Built on engineering. Defined by outcomes.',
  subhead:
    'For more than twenty-five years, ELMEC has delivered the civil, electrical and mechanical backbone of modern economies — quietly, precisely, and at scale.',
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned corporate photography. */
  image:
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80',
  imageAlt: 'Monumental contemporary structure with precise repeating geometry',
};

export const mission = {
  eyebrow: 'Who we are',
  heading: 'One firm. Three disciplines. A single standard of delivery.',
  paragraphs: [
    'ELMEC Infrastructure is a global engineering and construction firm working across civil infrastructure, electrical works and mechanical works. We design, build and commission the assets that societies depend on — the crossings, grids, treatment works, hospitals and plants that must simply work, every day, for decades.',
    'What distinguishes us is integration. Where most contractors assemble disciplines through subcontract chains, ELMEC self-delivers all three under one management system, one safety culture and one accountable team. On complex programmes, that integration is not a convenience — it is the difference between a schedule held and a schedule lost.',
    'We are deliberately understated about it. Our clients measure us the way we measure ourselves: assets energised, corridors opened, plants commissioned — on time, safely, and built to outlast the people who built them.',
  ],
  /* Mission statement — rendered as the large display pull-quote. */
  pullQuote: 'We exist to engineer infrastructure the world can rely on — and to deliver it without drama.',
};

/**
 * Global presence — regional breakdown reinforcing the global claim.
 * PLACEHOLDER FIGURES — replace with real office/operations data.
 */
export const globalPresence = {
  eyebrow: 'Global presence',
  heading: 'Local delivery, worldwide',
  lede: 'Regional businesses with deep local knowledge, backed by the standards and balance sheet of a global firm.',
  regions: [
    {
      id: 'uk-europe',
      name: 'UK & Europe',
      offices: '12',
      hubs: 'London (Global HQ) · Copenhagen · Warsaw',
      note: 'Group headquarters and our largest delivery business.',
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      offices: '6',
      hubs: 'Dubai · Riyadh · Doha',
      note: 'Major transport and industrial programmes since 2004.',
    },
    {
      id: 'asia-pacific',
      name: 'Asia-Pacific',
      offices: '8',
      hubs: 'Sydney · Singapore · Ho Chi Minh City',
      note: 'Water, transport and resilience-led infrastructure.',
    },
    {
      id: 'north-america',
      name: 'North America',
      offices: '5',
      hubs: 'Toronto · Denver',
      note: 'Industrial, energy and district utilities growth market.',
    },
    {
      id: 'africa',
      name: 'Africa',
      offices: '4',
      hubs: 'Nairobi · Accra',
      note: 'Power and connectivity programmes with local partners.',
    },
  ],
};

/** Core values — drives the ValueCard grid. */
export const values = {
  eyebrow: 'Our values',
  heading: 'What we will not compromise',
  items: [
    {
      id: 'safety',
      title: 'Safety without exception',
      description:
        'Everyone goes home, every day, on every site. No milestone, client or commercial pressure outranks that.',
    },
    {
      id: 'integrity',
      title: 'Integrity in every commitment',
      description:
        'We price honestly, report plainly and keep our word — to clients, partners, suppliers and each other.',
    },
    {
      id: 'excellence',
      title: 'Engineering excellence',
      description:
        'Technical rigour is our licence to operate. We build what we would be proud to sign, and we sign everything we build.',
    },
    {
      id: 'sustainability',
      title: 'Built to be sustained',
      description:
        'Infrastructure outlives its builders. We design and deliver for the climate, communities and decades it will serve.',
    },
  ],
};

/**
 * Leadership team — drives the TeamCard grid.
 * PLACEHOLDER EXECUTIVES — replace names, roles, bios and photography
 * with the real leadership team (commissioned portraits, consistent crop).
 */
export const leadership = {
  eyebrow: 'Leadership',
  heading: 'Experienced hands, accountable to the work',
  members: [
    {
      id: 'mukhtar-mohsin',
      name: 'Mukhtar Mohsin',
      role: 'Chief Executive Officer',
      bio: 'Civil engineer by training; 28 years delivering major transport programmes across three continents.',
      // Real portrait — served from public/images/team/
      photo: '/images/team/mukhtar-mohsin.jpg',
      photoAlt: 'Portrait of Mukhtar Mohsin, Chief Executive Officer',
    },
    {
      id: 'david-okonkwo',
      name: 'David Okonkwo',
      role: 'Chief Operating Officer',
      bio: 'Leads global delivery and the group safety system; formerly regional MD for Africa and the Middle East.',
      photo:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=75',
      photoAlt: 'Portrait of David Okonkwo, Chief Operating Officer',
    },
    {
      id: 'sarah-lindqvist',
      name: 'Sarah Lindqvist',
      role: 'Chief Financial Officer',
      bio: 'Two decades in infrastructure finance, including a decade structuring public–private programmes.',
      photo:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=75',
      photoAlt: 'Portrait of Sarah Lindqvist, Chief Financial Officer',
    },
    {
      id: 'rajan-mehta',
      name: 'Rajan Mehta',
      role: 'Group Engineering Director',
      bio: 'Chartered in both electrical and mechanical engineering; custodian of ELMEC’s technical standards.',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=75',
      photoAlt: 'Portrait of Rajan Mehta, Group Engineering Director',
    },
    {
      id: 'amira-haddad',
      name: 'Amira Haddad',
      role: 'Managing Director, Middle East',
      bio: 'Built the region’s delivery business from a single project office to six offices and 2,000 people.',
      photo:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=75',
      photoAlt: 'Portrait of Amira Haddad, Managing Director for the Middle East',
    },
    {
      id: 'thomas-beck',
      name: 'Thomas Beck',
      role: 'Group Director, HSE & Sustainability',
      bio: 'Owns the zero-harm standard and the 2040 net-zero roadmap across every ELMEC operation.',
      photo:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=75',
      photoAlt: 'Portrait of Thomas Beck, Group Director of HSE and Sustainability',
    },
  ],
};

/**
 * Company milestones — drives the Timeline component.
 * PLACEHOLDER HISTORY — replace with the verified corporate record.
 */
export const milestones = {
  eyebrow: 'Our history',
  heading: 'A quarter-century of keeping promises',
  items: [
    {
      id: '1998',
      year: '1998',
      title: 'Founded in London',
      description: 'ELMEC Engineering opens as a specialist civil contractor with a staff of twelve.',
    },
    {
      id: '2004',
      year: '2004',
      title: 'First international contract',
      description: 'A Gulf-region power distribution programme takes ELMEC outside the UK for the first time.',
    },
    {
      id: '2009',
      year: '2009',
      title: 'National rail framework',
      description: 'Appointment to a ten-year national rail framework; the firm passes 1,000 people.',
    },
    {
      id: '2014',
      year: '2014',
      title: 'Regional headquarters, Dubai',
      description: 'A permanent Middle East business opens, followed by entry into Asia-Pacific.',
    },
    {
      id: '2018',
      year: '2018',
      title: 'Group-wide certification',
      description: 'ISO 9001, 14001 and 45001 achieved across every operating region.',
    },
    {
      id: '2022',
      year: '2022',
      title: 'Renewables & grid division',
      description: 'A dedicated energy-transition business launches; ELMEC begins work in its 40th country.',
    },
    {
      id: '2025',
      year: '2025',
      title: 'Net zero by 2040',
      description: 'The group publishes its science-based net-zero roadmap and passes 10,000 people worldwide.',
    },
  ],
};

export const aboutCta = {
  headline: 'The work is the pitch.',
  subhead: 'Explore the projects, or talk to the people who deliver them.',
  primary: { label: 'Contact us', href: '/contact' },
  secondary: { label: 'Join ELMEC', href: '/careers' },
};
