/**
 * Contact page content — single London head office (ELMEC's only office;
 * do not add regional offices until they exist). PLACEHOLDER address,
 * phone and email — replace with real details. CMS-ready.
 */

export const contactHero = {
  eyebrow: 'Contact',
  headline: 'Let’s talk about your next project.',
  subhead:
    'One London office, one accountable team — and an engineer on the other end of the enquiry.',
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned photography. */
  image:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
  imageAlt: 'Infrastructure works under construction at dawn',
};

/** Enquiry types for the contact form select. */
export const ENQUIRY_TYPES = [
  'New project enquiry',
  'Estimating & bid support',
  'Supplier & subcontractor',
  'Media & press',
  'General enquiry',
];

/** Head office — ELMEC's single office. */
export const offices = [
  {
    id: 'london',
    region: 'United Kingdom',
    name: 'London — Head Office',
    addressLines: ['Levett Gardens', 'London, England', 'IG3 9BU'],
    phone: '+44 7912 605143',
    email: 'enquiries@elmec-infrastructure.com',
  },
];

export const generalEnquiries = {
  heading: 'General enquiries',
  text: 'For anything that doesn’t fit the form, call or write — enquiries reach the founder’s team directly, not a switchboard maze.',
  phone: '+44 7912 605143',
  email: 'enquiries@elmec-infrastructure.com',
};

/** Embedded map for the head office (Google Maps embed, no API key needed). */
export const mapEmbed = {
  title: 'Map showing the ELMEC head office at Levett Gardens, London, IG3 9BU',
  src: 'https://www.google.com/maps?q=Levett%20Gardens%2C%20London%2C%20England%2C%20IG3%209BU&output=embed',
};
