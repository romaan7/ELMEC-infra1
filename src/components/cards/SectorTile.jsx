import { Link } from 'react-router-dom';

/**
 * SectorTile — compact tile for the sectors strip.
 * Deliberately restrained: type, hairline rules and a single accent on
 * hover — no imagery, letting the projects grid carry the visual weight.
 */
export default function SectorTile({ sector, index }) {
  return (
    <Link
      to={sector.href}
      className="group flex h-full flex-col border border-grey-200 bg-white p-6 transition-all duration-250 hover:border-steel hover:shadow-lg hover:shadow-navy/5"
    >
      <span className="font-display text-caption font-semibold text-grey-400" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-4 font-display text-h4 font-semibold text-navy transition-colors duration-250 group-hover:text-steel">
        {sector.name}
      </h3>
      <p className="mt-2 flex-1 text-caption leading-relaxed text-grey-500">{sector.summary}</p>
      <span
        className="mt-5 text-steel opacity-0 transition-all duration-250 group-hover:translate-x-1 group-hover:opacity-100"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
