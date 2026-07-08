import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  CTABand,
  ValueCard,
  Timeline,
} from '../components/index.js';

// Content — data only (CMS-swappable, see src/data/about.js)
import { aboutHero, mission, headquarters, values, founder, milestones, aboutCta } from '../data/about.js';

/**
 * AboutPage — founder-led company narrative:
 * Hero → mission & pull-quote → London HQ → values → founder profile →
 * founder career timeline → closing CTA.
 *
 * ⚠️ ATTRIBUTION: ELMEC is newly founded. The timeline and bio present
 * the FOUNDER'S career with prior employers; nothing here may imply an
 * ELMEC delivery history or a multi-office footprint that doesn't exist.
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

      {/* Headquarters — single London office; global reach is ambition only */}
      <Section tone="navy" aria-labelledby="hq-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-7">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel-300">
              {headquarters.eyebrow}
            </p>
            <h2 id="hq-heading" className="mt-4 font-display text-h2 font-bold text-white">
              {headquarters.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-body-lg text-grey-300">{headquarters.text}</p>
            <p className="mt-8 border-l-2 border-steel-300 pl-5 font-display text-h4 font-semibold text-steel-300">
              {headquarters.ambition}
            </p>
          </SectionReveal>
          <SectionReveal delay={120} className="lg:col-span-5">
            {/* PLACEHOLDER address — see src/data/about.js */}
            <address className="border border-navy-700 bg-navy-800 p-8 not-italic">
              <p className="font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-400">
                Head office
              </p>
              <p className="mt-4 text-body-lg text-white">
                {headquarters.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          </SectionReveal>
        </div>
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

      {/* Founder profile — leadership is the founder for now; further
          appointments will join this section as the team grows */}
      <Section tone="mist" aria-labelledby="founder-heading">
        <SectionHeading id="founder-heading" eyebrow="Leadership" heading="Led from the founder’s desk" />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-4">
            <img
              src={founder.photo}
              alt={founder.photoAlt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <h3 className="mt-6 font-display text-h3 font-semibold text-navy">{founder.name}</h3>
            <p className="mt-1 text-caption font-medium uppercase tracking-[0.12em] text-steel">{founder.role}</p>
            <p className="mt-4 border-t border-grey-200 pt-4 text-caption leading-relaxed text-grey-500">
              {founder.credentials}
            </p>
          </SectionReveal>
          <SectionReveal delay={120} className="space-y-6 lg:col-span-8">
            {founder.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-600">
                {paragraph}
              </p>
            ))}
          </SectionReveal>
        </div>
      </Section>

      {/* Founder career timeline — attributed experience, not ELMEC history */}
      <Section tone="white" aria-labelledby="history-heading">
        <SectionHeading id="history-heading" eyebrow={milestones.eyebrow} heading={milestones.heading} />
        <SectionReveal className="mb-12 lg:mx-auto lg:max-w-4xl">
          <p className="border-l-2 border-steel pl-5 text-caption leading-relaxed text-grey-500">
            {milestones.note}
          </p>
        </SectionReveal>
        <div className="lg:mx-auto lg:max-w-4xl">
          <Timeline items={milestones.items} />
        </div>
      </Section>

      <CTABand {...aboutCta} />
    </>
  );
}
