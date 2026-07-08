/**
 * Homepage editorial content — hero, section intros, sustainability teaser
 * and closing CTA. PLACEHOLDER COPY written in the final tone of voice;
 * replace with approved messaging. CMS-ready: same-shape API swap.
 */

export const hero = {
  eyebrow: 'Civil · Electrical · Mechanical',
  headline: "Engineering the world's essential infrastructure.",
  subhead:
    'From transport networks to power systems, ELMEC delivers the projects that economies are built on — safely, precisely, and for the long term.',
  cta: { label: 'Explore our projects', href: '/projects' },
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
  lede: 'ELMEC integrates civil, electrical and mechanical engineering under a single delivery model — so complex programmes move as one.',
};

export const projectsIntro = {
  eyebrow: 'Featured projects',
  heading: 'Built to outlast the headlines.',
  lede: 'A selection of current and recently completed programmes across our sectors.',
  cta: { label: 'View all projects', href: '/projects' },
};

export const sectorsIntro = {
  eyebrow: 'Sectors',
  heading: 'Where we work',
  lede: 'Deep sector knowledge, applied wherever essential infrastructure is needed.',
};

export const sustainability = {
  eyebrow: 'Sustainability',
  heading: 'Responsible delivery is not a programme. It is the programme.',
  lede: 'Every ELMEC project is measured against three commitments — to the climate, to the people who build with us, and to the communities we build for.',
  pillars: [
    {
      id: 'net-zero',
      title: 'Net zero by 2040',
      description:
        'A science-based pathway across our operations and supply chain, with interim targets reported annually.',
    },
    {
      id: 'safety',
      title: 'Health & safety, first',
      description:
        'An uncompromising zero-harm standard on every site, in every country, on every shift.',
    },
    {
      id: 'communities',
      title: 'Communities that benefit',
      description:
        'Local employment, skills programmes and social value embedded into how we deliver.',
    },
  ],
  cta: { label: 'Our sustainability commitments', href: '/sustainability' },
  /* PLACEHOLDER IMAGE — replace with commissioned ESG/site photography. */
  image:
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=75',
  imageAlt: 'Wind turbines on open land at sunrise, seen from ground level',
};

export const newsIntro = {
  eyebrow: 'News & insights',
  heading: 'The latest from ELMEC',
  cta: { label: 'All news', href: '/news' },
};

export const closingCta = {
  headline: "Let's build what lasts.",
  subhead:
    'Whether you are planning a major programme or building a career in engineering, we would like to hear from you.',
  primary: { label: 'Contact us', href: '/contact' },
  secondary: { label: 'Explore careers', href: '/careers' },
};
