/**
 * MetricCard — headline ESG / performance figure.
 * Consistent with the StatBand numeral styling (display face, steel rule)
 * but carries an explanatory description line, for contexts where the
 * number needs its methodology alongside it.
 *
 * Props:
 *  - metric: { value, suffix, label, description? }
 *  - onDark: adjust tokens for navy surfaces
 */
export default function MetricCard({ metric, onDark = false }) {
  return (
    <div className={`border-l-2 pl-6 ${onDark ? 'border-steel-300' : 'border-steel'}`}>
      <p className={`font-display text-stat font-bold ${onDark ? 'text-white' : 'text-navy'}`}>
        {metric.value}
        <span className={onDark ? 'text-steel-300' : 'text-steel'}>{metric.suffix}</span>
      </p>
      <p
        className={`mt-3 text-caption font-medium uppercase tracking-[0.14em] ${
          onDark ? 'text-grey-300' : 'text-grey-500'
        }`}
      >
        {metric.label}
      </p>
      {metric.description && (
        <p className={`mt-2 text-caption leading-relaxed ${onDark ? 'text-grey-400' : 'text-grey-500'}`}>
          {metric.description}
        </p>
      )}
    </div>
  );
}
