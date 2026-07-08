import { Link } from 'react-router-dom';

/**
 * ProjectCard — image-led case-study card.
 * Content sits over a navy gradient scrim for guaranteed legibility.
 * `featured` renders the larger hero-of-the-grid variant.
 */
export default function ProjectCard({ project, featured = false }) {
  return (
    <Link
      to={project.href}
      className={`group relative block overflow-hidden bg-navy ${featured ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[4/3]'}`}
    >
      {/* PLACEHOLDER IMAGE — see src/data/projects.js */}
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      {/* Legibility scrim */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/10 transition-opacity duration-250 group-hover:from-navy/95"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <span className="inline-block bg-steel px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white">
          {project.sector}
        </span>
        <h3
          className={`mt-3 font-display font-semibold text-white ${featured ? 'text-h2' : 'text-h3'}`}
        >
          {project.name}
        </h3>
        <p className="mt-1 text-caption text-grey-300">{project.location}</p>
      </div>
    </Link>
  );
}
