/**
 * About page content — founder-led positioning for a newly established firm.
 *
 * ⚠️ ACCURACY CONSTRAINT: ELMEC is newly founded. All landmark programmes
 * referenced here are the FOUNDER'S career experience with prior employers
 * (Balfour Beatty, Crossrail/HS2 delivery partners, Network Rail supply
 * chain, L&T, HCC, Tata Motors, Enable Infrastructure) — never ELMEC's own
 * delivered work. Keep that framing in every edit. CMS-ready.
 */

export const aboutHero = {
  eyebrow: 'About ELMEC',
  headline: 'Built on engineering. Defined by outcomes.',
  subhead:
    'A newly founded London firm with a career’s worth of infrastructure behind it — integrated civil, electrical and mechanical delivery, led by cost certainty.',
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned corporate photography. */
  image:
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80',
  imageAlt: 'Monumental contemporary structure with precise repeating geometry',
};

export const mission = {
  eyebrow: 'Who we are',
  heading: 'A new firm. Not a new discipline.',
  paragraphs: [
    'ELMEC Infrastructure is a UK-founded, London-based civil infrastructure firm delivering integrated civil, electrical and mechanical works, with particular strength in rail, stations, highways and energy. We are new as a company — and deliberate about saying so. What we bring to a programme is not a corporate history; it is the disciplines our founder spent more than twenty years practising on the programmes that define modern British infrastructure.',
    'Our distinctive edge is cost certainty. First-principles estimating, disciplined bid management and rigorous commercial administration are not support functions here — they are the product. Clients engage ELMEC to know, before committing, what the work truly costs and how it will actually be built.',
    'Our ambition is global recognition. Our claim today is narrower and more useful: an integrated engineering firm small enough to give a programme its founder’s personal attention, and experienced enough to deserve the work.',
  ],
  /* Mission statement — rendered as the large display pull-quote. */
  pullQuote: 'We exist to engineer infrastructure the world can rely on — and to price it honestly before we build it.',
};

/**
 * Headquarters — ELMEC operates from a single London head office.
 * Do NOT reintroduce a multi-region office network here until one exists;
 * global reach is framed as ambition only. PLACEHOLDER address details.
 */
export const headquarters = {
  eyebrow: 'Where we are',
  heading: 'Headquartered in London, United Kingdom',
  text: 'ELMEC operates from a single head office in London — close to the programmes, clients and supply chains of the UK’s infrastructure market. As the firm grows, so will its footprint; until then, one office, one accountable team.',
  addressLines: ['Levett Gardens', 'London, England', 'IG3 9BU'],
  ambition: 'Global recognition is the ambition. London is the base camp.',
};

/** Core values — firm values (capability and conduct, not track record). */
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
 * Founder profile — Mukhtar Mohsin.
 * The leadership section shows the founder only; further appointments
 * will be added here as the team grows.
 */
export const founder = {
  name: 'Mukhtar Mohsin',
  role: 'Founder & Chief Executive Officer',
  credentials: 'B.Tech (Hons) Civil Engineering, IIT Roorkee · Member, IET (UK) · NVQ Level 4 Estimating · British national',
  /* Headshot — replace with a commissioned portrait when available. */
  photo: '/images/team/mukhtar-mohsin.jpg',
  photoAlt: 'Portrait of Mukhtar Mohsin, Founder and Chief Executive Officer of ELMEC Infrastructure',
  bio: [
    'Mukhtar Mohsin founded ELMEC Infrastructure in London with a conviction formed over twenty years inside the industry: that programmes succeed or fail on cost certainty, and that the disciplines which create it — first-principles estimating, rigorous bid management, honest commercial administration — deserve a firm built around them.',
    'Before establishing ELMEC, his career ran through the programmes that define modern British infrastructure: King’s Cross Northern Ticket Hall and the M25 widening with Balfour Beatty Civil Engineering; Crossrail’s Tottenham Court Road, Liverpool Street and Moorgate stations with Volker Fitzpatrick, Hochtief and VGC; Network Rail works at Waterloo; and station estimates for HS2 at Euston, Old Oak Common, Curzon Street and Interchange. Most recently he led bids and cost strategy at Enable Infrastructure across rail, road, solar, bridges and tunnels, including multi-site trackside works in Ireland.',
    'His engineering foundations were laid earlier, in India — heavy civil site engineering with Larsen & Toubro and Hindustan Construction on major pipelines, port breakwaters, bridges and power projects, and industrial plant expansion with Tata Motors. A graduate of IIT Roorkee and a Member of the IET, he combines chartered-grade technical depth with an estimator’s refusal to be vague about numbers.',
  ],
};

/**
 * Founder career timeline (formerly a company-history timeline).
 * ⚠️ ATTRIBUTION: every milestone before 2026 belongs to the founder's
 * career with prior employers — NOT to ELMEC. PLACEHOLDER years to be
 * confirmed by the founder.
 */
export const milestones = {
  eyebrow: 'The career behind the company',
  heading: 'Twenty years in the making',
  items: [
    {
      id: 'iit',
      year: '2003',
      title: 'IIT Roorkee',
      description: 'Graduates with a B.Tech (Honours) in Civil Engineering from one of the world’s most selective engineering institutions.',
    },
    {
      id: 'india-heavy-civil',
      year: '2003–08',
      title: 'L&T · Hindustan Construction · Tata Motors',
      description: 'Heavy civil engineering across India — major pipelines, port breakwaters, bridges, power and nuclear-ancillary projects, and industrial plant expansion.',
    },
    {
      id: 'balfour-beatty',
      year: '2009',
      title: 'Balfour Beatty Civil Engineering, UK',
      description: 'Moves to the UK. Estimating and commercial roles on King’s Cross Northern Ticket Hall and the M25 widening.',
    },
    {
      id: 'crossrail',
      year: '2013',
      title: 'The Crossrail years',
      description: 'Station works at Tottenham Court Road, Liverpool Street and Moorgate with Volker Fitzpatrick, Hochtief and VGC.',
    },
    {
      id: 'waterloo',
      year: '2017',
      title: 'Network Rail — Waterloo',
      description: 'Commercial and estimating roles at the UK’s busiest railway station.',
    },
    {
      id: 'hs2',
      year: '2019',
      title: 'HS2 stations',
      description: 'First-principles station estimates for Euston, Old Oak Common, Curzon Street and Interchange.',
    },
    {
      id: 'enable',
      year: '2023',
      title: 'Enable Infrastructure · Apex Information Management',
      description: 'Bid management and cost leadership across rail, road, solar, bridges and tunnels, including Irish multi-site trackside works.',
    },
    {
      id: 'elmec',
      year: '2026',
      title: 'ELMEC Infrastructure founded',
      description: 'Establishes ELMEC in London: integrated civil, electrical and mechanical delivery, built around cost certainty.',
    },
  ],
};

export const aboutCta = {
  headline: 'The experience is the pitch.',
  subhead: 'Read the track record, then talk to the person who built it.',
  primary: { label: 'Contact us', href: '/contact' },
  secondary: { label: 'View the track record', href: '/experience' },
};
