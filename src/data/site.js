/**
 * Site-wide content: navigation, footer, contact and legal.
 *
 * NOTE (CMS integration): every export in src/data/* is a plain, serialisable
 * structure. When a CMS/API is connected, replace these modules with fetch
 * calls returning the same shapes — no component changes required.
 */

/**
 * Primary navigation.
 * Items with `children` render as mega-menu dropdowns on desktop and
 * accordions in the mobile menu. All routes are placeholders registered
 * in App.jsx, ready for real pages in later stages.
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
        description: 'Highways, bridges, tunnels and heavy civil works.',
      },
      {
        label: 'Electrical Works',
        href: '/services/electrical-works',
        description: 'Transmission, distribution and high-voltage systems.',
      },
      {
        label: 'Mechanical Works',
        href: '/services/mechanical-works',
        description: 'Plant, piping, HVAC and industrial installations.',
      },
    ],
  },
  { label: 'Projects', href: '/projects' },
  {
    label: 'Sectors',
    href: '/sectors',
    children: [
      { label: 'Transport & Rail', href: '/sectors/transport-rail', description: 'Rail, metro, roads and aviation.' },
      { label: 'Energy & Power', href: '/sectors/energy-power', description: 'Generation, grids and renewables.' },
      { label: 'Water', href: '/sectors/water', description: 'Treatment, networks and flood defence.' },
      { label: 'Buildings', href: '/sectors/buildings', description: 'Commercial, civic and healthcare.' },
      { label: 'Industrial', href: '/sectors/industrial', description: 'Manufacturing and process facilities.' },
      { label: 'Utilities', href: '/sectors/utilities', description: 'Gas, telecoms and district energy.' },
    ],
  },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

/** Footer link columns (Company / Services / Sectors). */
export const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'News', href: '/news' },
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
      { label: 'Energy & Power', href: '/sectors/energy-power' },
      { label: 'Water', href: '/sectors/water' },
      { label: 'Buildings', href: '/sectors/buildings' },
      { label: 'Industrial', href: '/sectors/industrial' },
      { label: 'Utilities', href: '/sectors/utilities' },
    ],
  },
];

/** Global HQ contact block. PLACEHOLDER — replace with real details. */
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

/** Compliance / legal row — standard tier-one footer links. */
export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Modern Slavery Statement', href: '/modern-slavery-statement' },
];
