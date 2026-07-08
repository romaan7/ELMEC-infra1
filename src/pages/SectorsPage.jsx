import { Section, SectionReveal, SectionHeading, Hero, SectorCard } from '../components/index.js';

// Content — data only (CMS-swappable)
import { sectorsOverview, sectorDetails } from '../data/sectorsPages.js';

/**
 * SectorsPage — overview of the six industries served, each a rich
 * visual SectorCard linking to its detail page (shared template).
 */
export default function SectorsPage() {
  return (
    <>
      <Hero {...sectorsOverview.hero} />

      <Section tone="white" aria-labelledby="sectors-grid-heading">
        <SectionHeading
          id="sectors-grid-heading"
          eyebrow={sectorsOverview.intro.eyebrow}
          heading={sectorsOverview.intro.heading}
          lede={sectorsOverview.intro.lede}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectorDetails.map((sector, index) => (
            <SectionReveal key={sector.id} delay={(index % 3) * 100}>
              <SectorCard sector={sector} />
            </SectionReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
