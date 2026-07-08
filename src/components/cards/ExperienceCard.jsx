/**
 * ExperienceCard — founder track-record card (image, navy scrim,
 * sector tag — the site's image-led card language).
 *
 * ⚠️ ATTRIBUTION: these cards present programmes from the FOUNDER'S
 * career with prior employers — never ELMEC contracts. The card renders
 * the founder-role line and the employing firm on its face so the
 * attribution travels with the card wherever it is reused. Keep it.
 */
export default function ExperienceCard({ item }) {
  return (
    <article className="group relative block aspect-[4/3] overflow-hidden bg-navy">
      {/* PLACEHOLDER IMAGE — see src/data/experience.js */}
      <img
        src={item.image}
        alt={item.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      {/* Legibility scrim */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-navy/10"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
        <span className="inline-block bg-steel px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white">
          {item.sector}
        </span>
        <h3 className="mt-3 font-display text-h3 font-semibold text-white">{item.name}</h3>
        <p className="mt-1 text-caption text-grey-300">{item.location}</p>

        {/* Founder attribution — role and employing firm */}
        <p className="mt-3 border-l-2 border-steel-300 pl-3 text-caption leading-relaxed text-grey-300">
          <span className="font-semibold text-steel-300">Founder’s role: </span>
          {item.role}
        </p>
        <p className="mt-2 text-[0.6875rem] uppercase tracking-[0.12em] text-grey-400">
          Delivered with {item.employer}
        </p>
      </div>
    </article>
  );
}
