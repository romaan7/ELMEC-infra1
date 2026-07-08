import SectionReveal from '../ui/SectionReveal.jsx';

/**
 * Timeline — vertical company-history timeline.
 * Semantic ordered list; each entry reveals on scroll with a slight
 * stagger. Year markers use the display face on the steel accent rule.
 *
 * Props:
 *  - items: [{ id, year, title, description }]
 *  - onDark: adjust tokens for navy surfaces
 */
export default function Timeline({ items, onDark = false }) {
  return (
    <ol className={`border-l-2 ${onDark ? 'border-navy-700' : 'border-grey-200'}`}>
      {items.map((item, index) => (
        <SectionReveal as="li" key={item.id} delay={index * 80} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
          {/* Node marker on the rule */}
          <span
            className="absolute -left-[7px] top-1.5 block h-3 w-3 bg-steel"
            aria-hidden="true"
          />
          <p className={`font-display text-h3 font-bold ${onDark ? 'text-steel-300' : 'text-steel'}`}>
            {item.year}
          </p>
          <h3 className={`mt-2 font-display text-h4 font-semibold ${onDark ? 'text-white' : 'text-navy'}`}>
            {item.title}
          </h3>
          <p className={`mt-2 max-w-xl text-body ${onDark ? 'text-grey-300' : 'text-grey-600'}`}>
            {item.description}
          </p>
        </SectionReveal>
      ))}
    </ol>
  );
}
