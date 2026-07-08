/**
 * ValueCard — core-value panel for the About page (and any future values
 * grid). Typographic and restrained, consistent with SectorTile/ServiceCard:
 * hairline border, indexed numeral, steel accent on the rule only.
 */
export default function ValueCard({ value, index }) {
  return (
    <div className="flex h-full flex-col border border-grey-200 bg-white p-8">
      <span className="font-display text-caption font-semibold text-grey-400" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-5 border-l-2 border-steel pl-4 font-display text-h3 font-semibold text-navy">
        {value.title}
      </h3>
      <p className="mt-4 flex-1 text-body text-grey-600">{value.description}</p>
    </div>
  );
}
