import Section from '../ui/Section.jsx';
import SectionReveal from '../ui/SectionReveal.jsx';
import Button from '../ui/Button.jsx';

/**
 * CTABand — full-width closing call-to-action on the navy base.
 * Props mirror the CMS shape: { headline, subhead, primary, secondary }
 * where primary/secondary are { label, href }.
 */
export default function CTABand({ headline, subhead, primary, secondary }) {
  return (
    <Section tone="navy" aria-labelledby="cta-heading">
      <SectionReveal className="mx-auto max-w-3xl text-center">
        <h2 id="cta-heading" className="font-display text-h1 font-bold text-white">
          {headline}
        </h2>
        {subhead && <p className="mt-6 text-body-lg text-grey-300">{subhead}</p>}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primary && (
            <Button to={primary.href} variant="primary">
              {primary.label}
            </Button>
          )}
          {secondary && (
            <Button to={secondary.href} variant="secondary" className="text-white">
              {secondary.label}
            </Button>
          )}
        </div>
      </SectionReveal>
    </Section>
  );
}
