import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  OfficeCard,
  ContactForm,
} from '../components/index.js';

// Content — data only (CMS-swappable, see src/data/contact.js)
import { contactHero, ENQUIRY_TYPES, offices, generalEnquiries, mapEmbed } from '../data/contact.js';

/**
 * ContactPage — enquiry form + general enquiries aside, the single
 * London head office, and the HQ map slot. ELMEC operates from one
 * office; do not reintroduce a multi-office grid until real offices exist.
 */
export default function ContactPage() {
  return (
    <>
      <Hero {...contactHero} />

      {/* Form + general enquiries */}
      <Section tone="white" aria-labelledby="enquiry-heading">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-7">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel">
              Start the conversation
            </p>
            <h2 id="enquiry-heading" className="mt-4 font-display text-h2 font-bold text-navy">
              Tell us about the work
            </h2>
            <p className="mt-4 max-w-xl text-body-lg text-grey-600">
              A short description is enough — we respond within two working days.
            </p>
            <div className="mt-10">
              <ContactForm enquiryTypes={ENQUIRY_TYPES} />
            </div>
          </SectionReveal>

          {/* General enquiries block */}
          <SectionReveal delay={120} className="lg:col-span-5">
            <div className="border border-grey-200 bg-mist p-8">
              <h3 className="font-display text-h3 font-semibold text-navy">{generalEnquiries.heading}</h3>
              <p className="mt-3 text-body text-grey-600">{generalEnquiries.text}</p>
              <p className="mt-6">
                <a
                  href={`tel:${generalEnquiries.phone.replace(/[^+\d]/g, '')}`}
                  className="font-display text-h4 font-semibold text-navy transition-colors duration-250 hover:text-steel"
                >
                  {generalEnquiries.phone}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={`mailto:${generalEnquiries.email}`}
                  className="break-all font-medium text-steel transition-colors duration-250 hover:text-steel-600"
                >
                  {generalEnquiries.email}
                </a>
              </p>
            </div>
          </SectionReveal>
        </div>
      </Section>

      {/* Head office — ELMEC's single London office */}
      <Section tone="mist" aria-labelledby="office-heading">
        <SectionHeading
          id="office-heading"
          eyebrow="Head office"
          heading="Find us in London"
          lede="One office, one accountable team."
        />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-4">
            <OfficeCard office={offices[0]} />
          </SectionReveal>

          {/* Embedded Google Map for the head office (src/data/contact.js).
              The OfficeCard alongside is the text fallback for the address. */}
          <SectionReveal delay={120} className="lg:col-span-8">
            <iframe
              title={mapEmbed.title}
              src={mapEmbed.src}
              className="h-full min-h-72 w-full border border-grey-200 bg-white"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </SectionReveal>
        </div>
      </Section>
    </>
  );
}
