import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  CTABand,
  ValueCard,
  TeamCard,
  Timeline,
} from '../components/index.js';

// Content — data only (CMS-swappable, see src/data/about.js)
import { aboutHero, mission, globalPresence, values, leadership, milestones, aboutCta } from '../data/about.js';

/**
 * AboutPage — company narrative, top to bottom:
 * Hero → mission & pull-quote → global presence → values → leadership →
 * history timeline → closing CTA.
 */
export default function AboutPage() {
  return (
    <>
      <Hero {...aboutHero} />

      {/* Mission / company overview — generous editorial section */}
      <Section tone="white" aria-labelledby="mission-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel">
              {mission.eyebrow}
            </p>
            <h2 id="mission-heading" className="mt-4 font-display text-h2 font-bold text-navy">
              {mission.heading}
            </h2>
          </SectionReveal>
          <SectionReveal delay={120} className="space-y-6 lg:col-span-7">
            {mission.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-600">
                {paragraph}
              </p>
            ))}
          </SectionReveal>
        </div>

        {/* Mission statement pull-quote — display face, full editorial weight */}
        <SectionReveal className="mt-16 border-l-2 border-steel py-4 pl-8 md:mt-24 md:pl-12 lg:mx-auto lg:max-w-4xl">
          <blockquote className="font-display text-h2 font-bold leading-tight text-navy">
            “{mission.pullQuote}”
          </blockquote>
        </SectionReveal>
      </Section>

      {/* Global presence — regional grid on the navy base */}
      <Section tone="navy" aria-labelledby="presence-heading">
        <SectionHeading
          id="presence-heading"
          eyebrow={globalPresence.eyebrow}
          heading={globalPresence.heading}
          lede={globalPresence.lede}
          onDark
        />
        {/* PLACEHOLDER FIGURES — see src/data/about.js. A world-map component
            can replace this grid later without changing the data shape. */}
        <ul className="grid gap-px bg-navy-700 sm:grid-cols-2 lg:grid-cols-5">
          {globalPresence.regions.map((region, index) => (
            <SectionReveal as="li" key={region.id} delay={index * 80} className="h-full">
              <div className="flex h-full flex-col bg-navy p-6 lg:p-7">
                <p className="font-display text-stat font-bold text-white">
                  {region.offices}
                  <span className="text-steel-300">+</span>
                </p>
                <p className="mt-1 text-caption font-medium uppercase tracking-[0.14em] text-grey-400">Offices</p>
                <h3 className="mt-5 font-display text-h4 font-semibold text-white">{region.name}</h3>
                <p className="mt-2 text-caption text-steel-300">{region.hubs}</p>
                <p className="mt-3 flex-1 text-caption leading-relaxed text-grey-300">{region.note}</p>
              </div>
            </SectionReveal>
          ))}
        </ul>
      </Section>

      {/* Values grid */}
      <Section tone="white" aria-labelledby="values-heading">
        <SectionHeading id="values-heading" eyebrow={values.eyebrow} heading={values.heading} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.items.map((value, index) => (
            <SectionReveal key={value.id} delay={index * 80} className="h-full">
              <ValueCard value={value} index={index} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* Leadership team */}
      <Section tone="mist" aria-labelledby="leadership-heading">
        <SectionHeading id="leadership-heading" eyebrow={leadership.eyebrow} heading={leadership.heading} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.members.map((member, index) => (
            <SectionReveal key={member.id} delay={(index % 3) * 100} className="h-full">
              <TeamCard member={member} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* History / milestones timeline */}
      <Section tone="white" aria-labelledby="history-heading">
        <SectionHeading id="history-heading" eyebrow={milestones.eyebrow} heading={milestones.heading} />
        <div className="lg:mx-auto lg:max-w-4xl">
          <Timeline items={milestones.items} />
        </div>
      </Section>

      <CTABand {...aboutCta} />
    </>
  );
}
