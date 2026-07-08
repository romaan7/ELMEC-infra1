import { Link } from 'react-router-dom';
import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  OfficeCard,
  ContactForm,
} from '../components/index.js';

// Content — data only (CMS-swappable, see src/data/contact.js)
import { contactHero, ENQUIRY_TYPES, offices, generalEnquiries } from '../data/contact.js';

/**
 * ContactPage — enquiry form + general enquiries aside, global office
 * directory, and the HQ map slot.
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
              A short description is enough — the right team will follow up within two working days.
            </p>
            <div className="mt-10">
              <ContactForm enquiryTypes={ENQUIRY_TYPES} />
            </div>
          </SectionReveal>

          {/* General enquiries block + careers redirect */}
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

              <div className="mt-8 border-t border-grey-200 pt-6">
                <p className="text-body text-grey-600">{generalEnquiries.careersNote.text}</p>
                <Link
                  to={generalEnquiries.careersNote.link.href}
                  className="mt-3 inline-flex items-center gap-2 font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel transition-colors duration-250 hover:text-steel-600"
                >
                  {generalEnquiries.careersNote.link.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </Section>

      {/* Global offices */}
      <Section tone="mist" aria-labelledby="offices-heading">
        <SectionHeading
          id="offices-heading"
          eyebrow="Global offices"
          heading="Find us in your region"
          lede="Five regional headquarters, thirty-five offices, one standard. PLACEHOLDER directory — replace with real office details."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, index) => (
            <SectionReveal key={office.id} delay={(index % 3) * 80} className="h-full">
              <OfficeCard office={office} />
            </SectionReveal>
          ))}
        </div>

        {/* MAP INTEGRATION POINT ------------------------------------------
            Replace this placeholder with the embedded map for the global
            HQ (e.g. Google Maps iframe or a Mapbox component). Keep an
            accessible title on the iframe and a text address fallback. */}
        <SectionReveal className="mt-10">
          <div
            className="flex aspect-[21/9] w-full items-center justify-center border border-grey-200 bg-white"
            role="img"
            aria-label="Map placeholder showing the location of ELMEC global headquarters, One Meridian Square, London"
          >
            <div className="px-6 text-center">
              <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-grey-400">
                Map — Global Headquarters
              </p>
              <p className="mt-2 text-caption text-grey-500">
                Embedded map slot · One Meridian Square, London EC2A 4DP
              </p>
            </div>
          </div>
        </SectionReveal>
      </Section>
    </>
  );
}
