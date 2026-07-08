/**
 * QuoteCard — employee/testimonial voice card.
 * Semantic <figure>/<blockquote>; restrained editorial styling consistent
 * with the pull-quote treatment on the About page.
 */
export default function QuoteCard({ testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-grey-200 bg-white p-8">
      <span className="font-display text-h1 font-bold leading-none text-steel" aria-hidden="true">
        “
      </span>
      <blockquote className="mt-2 flex-1">
        <p className="text-body-lg text-ink">{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-6 border-t border-grey-100 pt-5">
        <p className="font-display text-h4 font-semibold text-navy">{testimonial.name}</p>
        <p className="mt-0.5 text-caption text-grey-500">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}
