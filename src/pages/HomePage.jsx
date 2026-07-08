import {
  Section,
  SectionReveal,
  SectionHeading,
  Button,
  Hero,
  StatBand,
  CTABand,
  ServiceCard,
  ExperienceCard,
  SectorTile,
} from '../components/index.js';

// Content — data only, presentation-free (CMS-swappable, see src/data/*)
import {
  hero,
  capabilitiesIntro,
  experienceIntro,
  sectorsIntro,
  sustainability,
  closingCta,
} from '../data/home.js';
import { stats } from '../data/stats.js';
import { services } from '../data/services.js';
import { experience } from '../data/experience.js';
import { sectors } from '../data/sectors.js';

/**
 * HomePage — assembled top-to-bottom from the design-system primitives.
 * Order: Hero → StatBand → Capabilities → Founder track record →
 * Sectors → Sustainability → Closing CTA.
 *
 * ⚠️ ATTRIBUTION: the stats band and track-record section present the
 * FOUNDER'S experience with prior employers, never ELMEC's own delivery
 * record. Keep that framing in the data (src/data/stats.js,
 * src/data/experience.js) and the section lede below.
 */
export default function HomePage() {
  // Founder track record — first four UK landmark programmes
  const featuredExperience = experience.filter((item) => item.group === 'uk').slice(0, 4);

  return (
    <>
      {/* 1 — Hero: cinematic full-bleed opener, nav sits transparent above */}
      <Hero {...hero} />

      {/* 2 — Trust band: founder experience + firm capability (NOT ELMEC
             delivery counts — see the attribution note in src/data/stats.js) */}
      <StatBand stats={stats} ariaLabel="Founder experience and firm capability at a glance" />

      {/* 3 — Capabilities overview: the three service lines */}
      <Section tone="white" aria-labelledby="capabilities-heading">
        <SectionHeading id="capabilities-heading" {...capabilitiesIntro} />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <SectionReveal key={service.id} delay={i * 100} className="h-full">
              <ServiceCard service={service} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* 4 — Founder track record (formerly "Featured projects").
             The lede carries the required founder attribution. */}
      <Section tone="mist" aria-labelledby="experience-heading">
        <SectionHeading id="experience-heading" {...experienceIntro} />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredExperience.map((item, i) => (
            <SectionReveal key={item.id} delay={(i % 2) * 100}>
              <ExperienceCard item={item} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* 5 — Sectors strip: compact typographic tiles */}
      <Section tone="white" aria-labelledby="sectors-heading">
        <SectionHeading id="sectors-heading" {...sectorsIntro} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {sectors.map((sector, i) => (
            <SectionReveal key={sector.id} delay={i * 60} className="h-full">
              <SectorTile sector={sector} index={i} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* 6 — Sustainability teaser: full visual weight on the navy base */}
      <Section tone="navy" aria-labelledby="sustainability-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionReveal>
            {/* PLACEHOLDER IMAGE — see src/data/home.js */}
            <img
              src={sustainability.image}
              alt={sustainability.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </SectionReveal>
          <SectionReveal delay={120}>
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel-300">
              {sustainability.eyebrow}
            </p>
            <h2 id="sustainability-heading" className="mt-4 font-display text-h2 font-bold text-white">
              {sustainability.heading}
            </h2>
            <p className="mt-5 text-body-lg text-grey-300">{sustainability.lede}</p>

            <ul className="mt-10 space-y-6">
              {sustainability.pillars.map((pillar) => (
                <li key={pillar.id} className="border-l-2 border-steel-300 pl-5">
                  <h3 className="font-display text-h4 font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-1 text-body text-grey-300">{pillar.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button to={sustainability.cta.href} variant="secondary" className="text-white">
                {sustainability.cta.label}
              </Button>
            </div>
          </SectionReveal>
        </div>
      </Section>

      {/* 7 — Closing CTA band (Contact only) */}
      <CTABand {...closingCta} />
    </>
  );
}
