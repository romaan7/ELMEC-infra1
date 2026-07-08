/**
 * Contact page content — hero, global offices, enquiry types and the
 * general enquiries block. PLACEHOLDER DETAILS — replace addresses,
 * numbers and emails with the real office directory. CMS-ready.
 */

export const contactHero = {
  eyebrow: 'Contact',
  headline: 'Let’s talk about your next project.',
  subhead:
    'Wherever the work is, there is an ELMEC office within reach — and an engineer on the other end of the enquiry.',
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned photography. */
  image:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
  imageAlt: 'Infrastructure works under construction at dawn',
};

/** Enquiry types for the contact form select. */
export const ENQUIRY_TYPES = [
  'New project enquiry',
  'Existing project',
  'Supplier & subcontractor',
  'Careers & recruitment',
  'Media & press',
  'General enquiry',
];

/** Global offices — PLACEHOLDER directory, aligned to the About regions. */
export const offices = [
  {
    id: 'london',
    region: 'UK & Europe',
    name: 'London — Global Headquarters',
    addressLines: ['One Meridian Square', 'London EC2A 4DP', 'United Kingdom'],
    phone: '+44 (0)20 7946 0000',
    email: 'enquiries@elmec-infrastructure.com',
  },
  {
    id: 'dubai',
    region: 'Middle East',
    name: 'Dubai — Regional Headquarters',
    addressLines: ['Level 24, Gate Precinct 4', 'DIFC, Dubai', 'United Arab Emirates'],
    phone: '+971 4 555 0100',
    email: 'middleeast@elmec-infrastructure.com',
  },
  {
    id: 'sydney',
    region: 'Asia-Pacific',
    name: 'Sydney — Regional Headquarters',
    addressLines: ['Level 18, 1 Farrer Place', 'Sydney NSW 2000', 'Australia'],
    phone: '+61 2 8000 0400',
    email: 'apac@elmec-infrastructure.com',
  },
  {
    id: 'toronto',
    region: 'North America',
    name: 'Toronto — Regional Headquarters',
    addressLines: ['Suite 3200, 100 King Street West', 'Toronto ON M5X 1B8', 'Canada'],
    phone: '+1 416 555 0200',
    email: 'northamerica@elmec-infrastructure.com',
  },
  {
    id: 'nairobi',
    region: 'Africa',
    name: 'Nairobi — Regional Headquarters',
    addressLines: ['The Pinnacle, Upper Hill', 'Nairobi 00100', 'Kenya'],
    phone: '+254 20 555 0300',
    email: 'africa@elmec-infrastructure.com',
  },
];

export const generalEnquiries = {
  heading: 'General enquiries',
  text: 'For anything that doesn’t fit the form, our global switchboard will route you to the right team.',
  phone: '+44 (0)20 7946 0000',
  email: 'enquiries@elmec-infrastructure.com',
  careersNote: {
    text: 'Looking for a job? Roles, programmes and speculative applications all live on our Careers page.',
    link: { label: 'Explore careers', href: '/careers' },
  },
};
