import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  CTABand,
  ValueCard,
  QuoteCard,
  JobListings,
} from '../components/index.js';

// Content — data only (ATS/CMS-swappable, see src/data/careers.js)
import {
  careersHero,
  whyElmec,
  culture,
  testimonials,
  jobs,
  JOB_DEPARTMENTS,
  JOB_LOCATIONS,
  careersCta,
} from '../data/careers.js';

/**
 * CareersPage — employer brand + filterable open roles:
 * Hero → why ELMEC (ValueCards) → culture & benefits → life at ELMEC
 * (QuoteCards) → open roles (JobListings, ATS-ready) → application CTA.
 */
export default function CareersPage() {
  return (
    <>
      <Hero {...careersHero} />

      {/* Why work here */}
      <Section tone="white" aria-labelledby="why-heading">
        <SectionHeading id="why-heading" eyebrow={whyElmec.eyebrow} heading={whyElmec.heading} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyElmec.items.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 80} className="h-full">
              <ValueCard value={item} index={index} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* Culture & benefits */}
      <Section tone="mist" aria-labelledby="culture-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel">
              {culture.eyebrow}
            </p>
            <h2 id="culture-heading" className="mt-4 font-display text-h2 font-bold text-navy">
              {culture.heading}
            </h2>
            <div className="mt-6 space-y-5">
              {culture.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionReveal>
          {/* Benefits grid */}
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {culture.benefits.map((benefit, index) => (
              <SectionReveal as="li" key={benefit.id} delay={index * 60} className="h-full">
                <div className="flex h-full flex-col border border-grey-200 bg-white p-6">
                  <h3 className="font-display text-h4 font-semibold text-navy">{benefit.title}</h3>
                  <p className="mt-2 flex-1 text-caption leading-relaxed text-grey-500">{benefit.description}</p>
                </div>
              </SectionReveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Life at ELMEC — employee voice */}
      <Section tone="white" aria-labelledby="voices-heading">
        <SectionHeading id="voices-heading" eyebrow={testimonials.eyebrow} heading={testimonials.heading} />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((testimonial, index) => (
            <SectionReveal key={testimonial.id} delay={index * 100} className="h-full">
              <QuoteCard testimonial={testimonial} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* Open roles — filterable, ATS-ready (see JobListings) */}
      <Section tone="mist" aria-labelledby="roles-heading">
        <SectionHeading
          id="roles-heading"
          eyebrow="Open roles"
          heading="Where you come in"
          lede="Filter by department and location. Every role links to a full description and application route."
        />
        <JobListings jobs={jobs} departments={JOB_DEPARTMENTS} locations={JOB_LOCATIONS} />
      </Section>

      {/* Application CTA — ATS INTEGRATION POINT (see src/data/careers.js) */}
      <CTABand {...careersCta} />
    </>
  );
}
