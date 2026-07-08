import { Link } from 'react-router-dom';

/**
 * SectorCard — rich visual tile for the Sectors overview page.
 * The image-led sibling of SectorTile (which stays typographic for
 * compact strips): photograph, navy scrim, sector name and one-line
 * descriptor, whole card one link. Visual language matches ProjectCard.
 */
export default function SectorCard({ sector }) {
  return (
    <Link to={sector.href} className="group relative block aspect-[4/3] overflow-hidden bg-navy">
      {/* PLACEHOLDER IMAGE — see src/data/sectorsPages.js */}
      <img
        src={sector.image}
        alt={sector.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/10 transition-opacity duration-250 group-hover:from-navy/95"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <h3 className="font-display text-h3 font-semibold text-white">{sector.name}</h3>
        <p className="mt-2 max-w-sm text-caption leading-relaxed text-grey-300">{sector.descriptor}</p>
        <span
          className="mt-4 inline-block font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel-300 opacity-0 transition-all duration-250 group-hover:translate-x-1 group-hover:opacity-100"
          aria-hidden="true"
        >
          Explore sector →
        </span>
      </div>
    </Link>
  );
}
