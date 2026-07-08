import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  CTABand,
  ServiceCard,
} from '../components/index.js';

// Content — data only (CMS-swappable)
import { servicesOverview } from '../data/servicesPages.js';
import { services } from '../data/services.js';
import { closingCta } from '../data/home.js';

/**
 * ServicesPage — overview of the integrated multidisciplinary capability,
 * linking to the three discipline detail pages (shared template).
 */
export default function ServicesPage() {
  return (
    <>
      <Hero {...servicesOverview.hero} />

      {/* The integrated model — why one firm, not three contractors */}
      <Section tone="white" aria-labelledby="model-heading">
        <SectionHeading
          id="model-heading"
          eyebrow={servicesOverview.intro.eyebrow}
          heading={servicesOverview.intro.heading}
          lede={servicesOverview.intro.lede}
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {servicesOverview.intro.points.map((point, index) => (
            <SectionReveal as="li" key={point.id} delay={index * 100} className="h-full">
              <div className="flex h-full flex-col border-t-2 border-steel bg-white pt-6">
                <span className="font-display text-caption font-semibold text-grey-400" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-h3 font-semibold text-navy">{point.title}</h3>
                <p className="mt-3 flex-1 text-body text-grey-600">{point.description}</p>
              </div>
            </SectionReveal>
          ))}
        </ul>
      </Section>

      {/* The three disciplines — prominent panels to the detail pages */}
      <Section tone="mist" aria-labelledby="disciplines-heading">
        <SectionHeading
          id="disciplines-heading"
          eyebrow="Our services"
          heading="Choose a discipline"
          lede="Each service line is a self-delivering business in its own right — explore its capabilities, approach and projects."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 100} className="h-full">
              <ServiceCard service={service} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      <CTABand {...closingCta} />
    </>
  );
}
