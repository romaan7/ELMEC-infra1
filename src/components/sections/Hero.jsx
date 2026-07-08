import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';

/**
 * Hero — full-bleed cinematic opener.
 * The sticky header sits transparent over this section; a navy overlay
 * gradient guarantees text legibility over any photograph (WCAG contrast).
 *
 * Props mirror the CMS shape: { image, imageAlt, eyebrow, headline,
 * subhead, cta: { label, href } }.
 */
export default function Hero({ image, imageAlt, eyebrow, headline, subhead, cta }) {
  return (
    <section className="dark-surface relative flex min-h-[92vh] items-center bg-navy" aria-label="Introduction">
      {/* HERO PHOTOGRAPHY SLOT ------------------------------------------
          Replace `image` (src/data/home.js) with commissioned, art-directed
          infrastructure photography (≥2400px wide, licensed). Loaded eagerly
          with high fetch priority — it is the LCP element. */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchpriority="high"
      />
      {/* Navy overlay for legibility — darker at the left where copy sits. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/40"
        aria-hidden="true"
      />

      <Container className="relative pb-24 pt-40">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-6 font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel-300">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-display font-bold text-white">{headline}</h1>
          <p className="mt-7 max-w-xl text-body-lg text-grey-300">{subhead}</p>
          {cta && (
            <div className="mt-10">
              <Button to={cta.href} variant="primary">
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
