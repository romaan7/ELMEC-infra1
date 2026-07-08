import Container from '../ui/Container.jsx';
import SectionReveal from '../ui/SectionReveal.jsx';

/**
 * StatBand — the trust / credibility band.
 * Large, confident numerals in the display face with quiet labels beneath.
 * Figures come from src/data/stats.js (PLACEHOLDER METRICS — replace with
 * audited corporate figures).
 */
export default function StatBand({ stats, ariaLabel = 'ELMEC at a glance' }) {
  return (
    <section className="border-b border-grey-100 bg-white" aria-label={ariaLabel}>
      <Container>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:py-20 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <SectionReveal key={stat.id} delay={index * 90}>
              <div className="border-l-2 border-steel pl-6">
                <dd className="font-display text-stat font-bold text-navy">
                  {stat.value}
                  <span className="text-steel">{stat.suffix}</span>
                </dd>
                <dt className="mt-3 text-caption font-medium uppercase tracking-[0.14em] text-grey-500">
                  {stat.label}
                </dt>
              </div>
            </SectionReveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
