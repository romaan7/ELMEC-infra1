/**
 * Core service lines — drives the homepage capabilities overview and the
 * Services mega-menu detail pages (later stage).
 * CMS-ready: swap for an API call returning the same shape.
 */
export const services = [
  {
    id: 'civil-infrastructure',
    title: 'Civil Infrastructure',
    href: '/services/civil-infrastructure',
    description:
      'Major highways, bridges, tunnels and earthworks — engineered for a design life measured in generations, delivered through disciplined programme management.',
    /* PLACEHOLDER IMAGE — replace with commissioned photography of a live civil scheme. */
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Bridge under construction with tower cranes against an open sky',
  },
  {
    id: 'electrical-works',
    title: 'Electrical Works',
    href: '/services/electrical-works',
    description:
      'High-voltage transmission, substations and distribution networks that keep power moving — designed, installed and commissioned to exacting international standards.',
    /* PLACEHOLDER IMAGE — replace with commissioned photography of transmission/substation works. */
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'High-voltage electrical transmission infrastructure at dusk',
  },
  {
    id: 'mechanical-works',
    title: 'Mechanical Works',
    href: '/services/mechanical-works',
    description:
      'Process plant, piping, HVAC and heavy mechanical installation for industrial and energy clients — precision-built, tested and handed over ready to perform.',
    /* PLACEHOLDER IMAGE — replace with commissioned photography of plant/mechanical installation. */
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=75',
    imageAlt: 'Engineer inspecting large-scale industrial mechanical plant',
  },
];
