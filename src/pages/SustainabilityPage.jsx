import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  CTABand,
  Button,
  MetricCard,
  ValueCard,
} from '../components/index.js';

// Content — data only (CMS-swappable, see src/data/sustainability.js)
import {
  sustainabilityHero,
  commitment,
  environment,
  safety,
  social,
  governance,
  reportCta,
  sustainabilityCta,
} from '../data/sustainability.js';

/**
 * SustainabilityPage — the ESG statement of record:
 * Hero → commitment → Environment (metrics) → Health & Safety (navy,
 * given full prominence) → Social value → Governance → report CTA.
 * ALL METRICS ARE PLACEHOLDERS — replace with audited figures.
 */
export default function SustainabilityPage() {
  return (
    <>
      <Hero {...sustainabilityHero} />

      {/* Commitment — the ESG philosophy, stated plainly */}
      <Section tone="white" aria-labelledby="commitment-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel">
              {commitment.eyebrow}
            </p>
            <h2 id="commitment-heading" className="mt-4 font-display text-h2 font-bold text-navy">
              {commitment.heading}
            </h2>
          </SectionReveal>
          <SectionReveal delay={120} className="space-y-6 lg:col-span-7">
            {commitment.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-600">
                {paragraph}
              </p>
            ))}
          </SectionReveal>
        </div>
      </Section>

      {/* Environment */}
      <Section tone="mist" aria-labelledby="environment-heading">
        <SectionHeading
          id="environment-heading"
          eyebrow={environment.eyebrow}
          heading={environment.heading}
          lede={environment.lede}
        />
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {environment.metrics.map((metric, index) => (
            <SectionReveal key={metric.id} delay={index * 90}>
              <MetricCard metric={metric} />
            </SectionReveal>
          ))}
        </div>
        <SectionReveal className="mt-14 max-w-3xl space-y-6">
          {environment.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-600">
              {paragraph}
            </p>
          ))}
        </SectionReveal>
      </Section>

      {/* Health & Safety — full visual weight on the navy base */}
      <Section tone="navy" aria-labelledby="safety-heading">
        <SectionHeading
          id="safety-heading"
          eyebrow={safety.eyebrow}
          heading={safety.heading}
          lede={safety.lede}
          onDark
        />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="space-y-6 lg:col-span-6">
            {safety.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-300">
                {paragraph}
              </p>
            ))}
          </SectionReveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:col-span-6">
            {safety.metrics.map((metric, index) => (
              <SectionReveal key={metric.id} delay={index * 90}>
                <MetricCard metric={metric} onDark />
              </SectionReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Social value / communities */}
      <Section tone="white" aria-labelledby="social-heading">
        <SectionHeading id="social-heading" eyebrow={social.eyebrow} heading={social.heading} lede={social.lede} />
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {social.metrics.map((metric, index) => (
            <SectionReveal key={metric.id} delay={index * 90}>
              <MetricCard metric={metric} />
            </SectionReveal>
          ))}
        </div>
        <SectionReveal className="mt-14 max-w-3xl space-y-6">
          {social.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-600">
              {paragraph}
            </p>
          ))}
        </SectionReveal>
      </Section>

      {/* Governance — pillar grid (reuses ValueCard) */}
      <Section tone="mist" aria-labelledby="governance-heading">
        <SectionHeading id="governance-heading" eyebrow={governance.eyebrow} heading={governance.heading} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {governance.items.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 80} className="h-full">
              <ValueCard value={item} index={index} />
            </SectionReveal>
          ))}
        </div>

        {/* Report download — ASSET INTEGRATION POINT (src/data/sustainability.js) */}
        <SectionReveal className="mt-16 flex flex-col items-start gap-6 border border-grey-200 bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h3 className="font-display text-h3 font-semibold text-navy">{reportCta.heading}</h3>
            <p className="mt-2 text-body text-grey-600">{reportCta.text}</p>
          </div>
          <Button href={reportCta.button.href} className="shrink-0">
            {reportCta.button.label}
          </Button>
        </SectionReveal>
      </Section>

      <CTABand {...sustainabilityCta} />
    </>
  );
}
