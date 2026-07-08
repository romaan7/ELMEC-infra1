import SectionReveal from './SectionReveal.jsx';
import Button from './Button.jsx';

/**
 * SectionHeading — standard section opener used across all pages:
 * eyebrow + heading + optional lede, with an optional ghost CTA aligned
 * to the baseline on desktop. Promoted from the Stage One homepage.
 *
 * Props:
 *  - eyebrow, heading, lede: strings
 *  - cta: { label, href } (optional)
 *  - onDark: adjust text tokens for navy surfaces
 *  - id: heading id for aria-labelledby wiring
 */
export default function SectionHeading({ eyebrow, heading, lede, cta, onDark = false, id }) {
  return (
    <SectionReveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <p
            className={`font-display text-caption font-semibold uppercase tracking-[0.2em] ${
              onDark ? 'text-steel-300' : 'text-steel'
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2 id={id} className={`mt-4 font-display text-h2 font-bold ${onDark ? 'text-white' : 'text-navy'}`}>
          {heading}
        </h2>
        {lede && <p className={`mt-4 text-body-lg ${onDark ? 'text-grey-300' : 'text-grey-600'}`}>{lede}</p>}
      </div>
      {cta && (
        <Button to={cta.href} variant="ghost" className="shrink-0">
          {cta.label}
        </Button>
      )}
    </SectionReveal>
  );
}
