import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  CTABand,
  ExperienceCard,
} from '../components/index.js';

// Content — data only (CMS-swappable, see src/data/experience.js)
import { experiencePage, experienceGroups, experience } from '../data/experience.js';

/**
 * ExperiencePage — the founder's track record (replaces the former
 * Projects portfolio).
 *
 * ⚠️ ATTRIBUTION CONSTRAINT: every programme here was delivered by the
 * firms that employed the founder BEFORE ELMEC existed. The attribution
 * statement below is a required, permanent element of this page — it
 * must remain prominent and must not be removed or watered down.
 */
export default function ExperiencePage() {
  return (
    <>
      <Hero {...experiencePage.hero} />

      <Section tone="white" aria-labelledby="experience-heading">
        {/* Prominent attribution statement — required, do not remove */}
        <SectionReveal className="mb-16 border-l-2 border-steel bg-mist p-8 md:p-10">
          <h2 id="experience-heading" className="font-display text-h3 font-semibold text-navy">
            {experiencePage.attribution.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-body-lg text-grey-600">{experiencePage.attribution.text}</p>
        </SectionReveal>

        {/* Grouped track record: UK landmark programmes, then early career */}
        {experienceGroups.map((group) => {
          const items = experience.filter((item) => item.group === group.id);
          return (
            <div key={group.id} className="mt-4 [&+&]:mt-20">
              <SectionHeading eyebrow={group.note} heading={group.title} id={`experience-${group.id}`} />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list" aria-labelledby={`experience-${group.id}`}>
                {items.map((item, index) => (
                  <SectionReveal key={item.id} delay={(index % 3) * 80} role="listitem">
                    <ExperienceCard item={item} />
                  </SectionReveal>
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      <CTABand {...experiencePage.cta} />
    </>
  );
}
