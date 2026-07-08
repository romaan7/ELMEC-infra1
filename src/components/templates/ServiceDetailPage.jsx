import { Link } from 'react-router-dom';
import Section from '../ui/Section.jsx';
import SectionReveal from '../ui/SectionReveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Hero from '../sections/Hero.jsx';
import CTABand from '../sections/CTABand.jsx';
import ExperienceCard from '../cards/ExperienceCard.jsx';
import Button from '../ui/Button.jsx';
import { experience } from '../../data/experience.js';
import { sectors } from '../../data/sectors.js';

/**
 * ServiceDetailPage — shared template for the three discipline pages
 * (Civil Infrastructure, Electrical Works, Mechanical Works).
 *
 * Driven entirely by one entry from src/data/servicesPages.js, so all
 * three pages are guaranteed structurally identical and a fourth
 * discipline would be pure data.
 *
 * ⚠️ ATTRIBUTION: the related-experience strip shows the FOUNDER'S
 * track record with prior employers (see src/data/experience.js), never
 * ELMEC projects — the section lede states this and must remain.
 */
export default function ServiceDetailPage({ service }) {
  const relatedExperience = experience.filter((item) => item.disciplines.includes(service.title)).slice(0, 3);
  const relatedSectors = sectors.filter((s) => service.relatedSectorIds.includes(s.id));

  return (
    <>
      {/* Discipline hero */}
      <Hero {...service.hero} />

      {/* Overview — editorial split: heading left, prose right */}
      <Section tone="white" aria-labelledby={`${service.id}-overview`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel">
              {service.overview.eyebrow}
            </p>
            <h2 id={`${service.id}-overview`} className="mt-4 font-display text-h2 font-bold text-navy">
              {service.overview.heading}
            </h2>
          </SectionReveal>
          <SectionReveal delay={120} className="space-y-6 lg:col-span-7">
            {service.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-600">
                {paragraph}
              </p>
            ))}
          </SectionReveal>
        </div>
      </Section>

      {/* Sub-capabilities grid */}
      <Section tone="mist" aria-labelledby={`${service.id}-capabilities`}>
        <SectionHeading id={`${service.id}-capabilities`} eyebrow="Capabilities" heading={service.subCapabilities.heading} />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.subCapabilities.items.map((item, index) => (
            <SectionReveal as="li" key={item.id} delay={index * 60} className="h-full">
              <div className="flex h-full flex-col border border-grey-200 bg-white p-6">
                <span className="font-display text-caption font-semibold text-grey-400" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-h4 font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 flex-1 text-caption leading-relaxed text-grey-500">{item.description}</p>
              </div>
            </SectionReveal>
          ))}
        </ul>
      </Section>

      {/* Related sectors — compact link strip */}
      <Section tone="white" aria-labelledby={`${service.id}-sectors`} className="!py-14 md:!py-16 lg:!py-20">
        <SectionReveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2
            id={`${service.id}-sectors`}
            className="font-display text-h3 font-semibold text-navy"
          >
            Sectors this discipline serves
          </h2>
          <ul className="flex flex-wrap gap-2">
            {relatedSectors.map((sector) => (
              <li key={sector.id}>
                <Link
                  to={sector.href}
                  className="inline-block border border-grey-200 px-4 py-2 font-display text-caption font-semibold text-grey-600 transition-colors duration-250 hover:border-steel hover:text-steel"
                >
                  {sector.name}
                </Link>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </Section>

      {/* Founder track record in this discipline — attributed experience,
          never ELMEC contracts (see src/data/experience.js) */}
      {relatedExperience.length > 0 && (
        <Section tone="mist" aria-labelledby={`${service.id}-experience`}>
          <SectionHeading
            id={`${service.id}-experience`}
            eyebrow="Founder track record"
            heading={`${service.title}: the experience behind the firm`}
            lede="Programmes our founder worked on with prior employers, before establishing ELMEC — presented as career experience, not ELMEC contracts."
            cta={{ label: 'View the full track record', href: '/experience' }}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedExperience.map((item, i) => (
              <SectionReveal key={item.id} delay={i * 100}>
                <ExperienceCard item={item} />
              </SectionReveal>
            ))}
          </div>
        </Section>
      )}

      {/* Discipline-specific closing CTA */}
      <CTABand {...service.cta} />
    </>
  );
}
