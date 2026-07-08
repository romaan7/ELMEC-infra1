/**
 * Site-wide content: navigation, footer, contact and legal.
 *
 * NOTE (CMS integration): every export in src/data/* is a plain, serialisable
 * structure. When a CMS/API is connected, replace these modules with fetch
 * calls returning the same shapes — no component changes required.
 *
 * POSITIONING NOTE: ELMEC is a newly founded, London-based firm. The
 * "Experience" section presents the FOUNDER'S career track record (prior
 * employers' programmes), never ELMEC's own delivered portfolio.
 */

/**
 * Primary navigation.
 * Items with `children` render as mega-menu dropdowns on desktop and
 * accordions in the mobile menu.
 */
export const primaryNav = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Civil Infrastructure',
        href: '/services/civil-infrastructure',
        description: 'Stations, highways, bridges and heavy civil works.',
      },
      {
        label: 'Electrical Works',
        href: '/services/electrical-works',
        description: 'Power, distribution and rail electrical systems.',
      },
      {
        label: 'Mechanical Works',
        href: '/services/mechanical-works',
        description: 'Plant, piping, HVAC and industrial installations.',
      },
    ],
  },
  /* Founder track record — NOT an ELMEC delivery portfolio (see /experience) */
  { label: 'Experience', href: '/experience' },
  {
    label: 'Sectors',
    href: '/sectors',
    children: [
      { label: 'Transport & Rail', href: '/sectors/transport-rail', description: 'Stations, trackside civils and rail systems.' },
      { label: 'Highways', href: '/sectors/highways', description: 'Motorway widening, pavements and structures.' },
      { label: 'Energy & Power', href: '/sectors/energy-power', description: 'Solar and power infrastructure.' },
      { label: 'Ports & Marine', href: '/sectors/ports-marine', description: 'Breakwaters, jetties and marine works.' },
      { label: 'Industrial & Buildings', href: '/sectors/industrial-buildings', description: 'Plants, factories and station buildings.' },
      { label: 'Water & Pipelines', href: '/sectors/water-pipelines', description: 'Major pipeline infrastructure.' },
    ],
  },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Contact', href: '/contact' },
];

/** Footer link columns (Company / Services / Sectors). */
export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Experience', href: '/experience' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Civil Infrastructure', href: '/services/civil-infrastructure' },
      { label: 'Electrical Works', href: '/services/electrical-works' },
      { label: 'Mechanical Works', href: '/services/mechanical-works' },
    ],
  },
  {
    heading: 'Sectors',
    links: [
      { label: 'Transport & Rail', href: '/sectors/transport-rail' },
      { label: 'Highways', href: '/sectors/highways' },
      { label: 'Energy & Power', href: '/sectors/energy-power' },
      { label: 'Ports & Marine', href: '/sectors/ports-marine' },
      { label: 'Industrial & Buildings', href: '/sectors/industrial-buildings' },
      { label: 'Water & Pipelines', href: '/sectors/water-pipelines' },
    ],
  },
];

/** Head-office contact block. PLACEHOLDER — replace with real details. */
export const contact = {
  addressLines: ['ELMEC Infrastructure', 'One Meridian Square', 'London EC2A 4DP', 'United Kingdom'],
  phone: '+44 (0)20 7946 0000',
  email: 'enquiries@elmec-infrastructure.com',
};

/** Social profiles. LinkedIn is the primary channel for this audience. */
export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'X (Twitter)', href: 'https://x.com', icon: 'x' },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: 'youtube' },
];

/** Compliance / legal row. */
export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Modern Slavery Statement', href: '/modern-slavery-statement' },
];
