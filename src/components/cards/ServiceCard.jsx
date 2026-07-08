import { Link } from 'react-router-dom';

/**
 * ServiceCard — capability panel for the homepage overview and, later,
 * the Services landing page. Whole card is one link (single tab stop).
 */
export default function ServiceCard({ service }) {
  return (
    <Link
      to={service.href}
      className="group flex h-full flex-col bg-white ring-1 ring-grey-100 transition-shadow duration-250 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="overflow-hidden">
        {/* PLACEHOLDER IMAGE — see src/data/services.js */}
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-display text-h3 font-semibold text-navy transition-colors duration-250 group-hover:text-steel">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-body text-grey-600">{service.description}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel">
          Explore capability
          <span className="transition-transform duration-250 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
