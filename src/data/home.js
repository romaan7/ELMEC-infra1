/**
 * Homepage editorial content.
 *
 * POSITIONING: ELMEC is a newly founded, London-based civil infrastructure
 * firm. Copy states firm capability and founder experience — never an
 * ELMEC delivery track record. Global recognition is framed as ambition.
 * PLACEHOLDER COPY in the final tone of voice. CMS-ready.
 */

export const hero = {
  eyebrow: 'Civil · Electrical · Mechanical',
  headline: "Engineering the world's essential infrastructure.",
  subhead:
    'ELMEC is a London-based civil infrastructure firm delivering integrated civil, electrical and mechanical works — built on two decades of founder experience across the UK’s landmark rail and highways programmes.',
  cta: { label: 'Explore our track record', href: '/experience' },
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned, art-directed
     infrastructure photography (≥2400px wide, licensed for web). */
  image:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
  imageAlt:
    'Major bridge under construction at dawn, tower cranes silhouetted against the sky',
};

export const capabilitiesIntro = {
  eyebrow: 'What we do',
  heading: 'Three disciplines. One standard.',
  lede: 'ELMEC integrates civil, electrical and mechanical engineering under a single delivery model — with a distinctive edge in cost certainty: first-principles estimating, disciplined bid management and commercial rigour.',
};

/**
 * Founder track-record section (formerly "Featured projects").
 * ⚠️ ATTRIBUTION: these are the founder's programmes with prior
 * employers — the lede must always state this plainly.
 */
export const experienceIntro = {
  eyebrow: 'Founder track record',
  heading: 'Experience that predates the company.',
  lede: 'Before establishing ELMEC, our founder Mukhtar Mohsin worked on the UK’s landmark infrastructure programmes with the firms that delivered them. Presented here as his career experience — not ELMEC contracts.',
  cta: { label: 'View the full track record', href: '/experience' },
};

export const sectorsIntro = {
  eyebrow: 'Sectors',
  heading: 'Where our expertise runs deepest',
  lede: 'Sector strengths formed across twenty years of rail, highways, energy, marine and industrial work.',
};

export const sustainability = {
  eyebrow: 'Sustainability',
  heading: 'Responsible delivery is not a programme. It is the programme.',
  lede: 'From its first tender, every ELMEC project is measured against three commitments — to the climate, to the people who build with us, and to the communities we build for.',
  pillars: [
    {
      id: 'net-zero',
      title: 'Net zero by 2040',
      description:
        'A science-based pathway across our operations and supply chain, with progress reported annually as we grow.',
    },
    {
      id: 'safety',
      title: 'Health & safety, first',
      description:
        'An uncompromising zero-harm standard on every site, from day one — no exceptions.',
    },
    {
      id: 'communities',
      title: 'Communities that benefit',
      description:
        'Local employment, skills and social value embedded into how we deliver.',
    },
  ],
  cta: { label: 'Our sustainability commitments', href: '/sustainability' },
  /* PLACEHOLDER IMAGE — replace with commissioned ESG/site photography. */
  image:
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=75',
  imageAlt: 'Wind turbines on open land at sunrise, seen from ground level',
};

/** Closing CTA — points to Contact only (no Careers section on this site). */
export const closingCta = {
  headline: "Let's build what lasts.",
  subhead:
    'If you are planning a programme and need cost certainty from day one, start the conversation.',
  primary: { label: 'Contact us', href: '/contact' },
};
