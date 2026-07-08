import { useParams, Link } from 'react-router-dom';
import Section from '../ui/Section.jsx';
import SectionReveal from '../ui/SectionReveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Hero from '../sections/Hero.jsx';
import CTABand from '../sections/CTABand.jsx';
import ProjectCard from '../cards/ProjectCard.jsx';
import PlaceholderPage from '../../pages/PlaceholderPage.jsx';
import { getSectorBySlug } from '../../data/sectorsPages.js';
import { projects } from '../../data/projects.js';

/**
 * SectorDetailPage — shared template for all six sector pages
 * (/sectors/:slug), driven entirely by one entry from
 * src/data/sectorsPages.js. Structure: hero → sector overview →
 * discipline relevance (linking to service pages) → related projects →
 * sector-specific CTA. A seventh sector would be pure data.
 */
export default function SectorDetailPage() {
  const { slug } = useParams();
  const sector = getSectorBySlug(slug);

  if (!sector) {
    return (
      <PlaceholderPage
        title="Sector not found"
        description="This sector page does not exist or has moved. Browse all sectors from the Sectors page."
      />
    );
  }

  const relatedProjects = projects.filter((p) => p.sector === sector.name).slice(0, 3);

  return (
    <>
      <Hero {...sector.hero} />

      {/* Overview — editorial split, consistent with service detail pages */}
      <Section tone="white" aria-labelledby={`${sector.id}-overview`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel">
              The sector
            </p>
            <h2 id={`${sector.id}-overview`} className="mt-4 font-display text-h2 font-bold text-navy">
              {sector.overview.heading}
            </h2>
          </SectionReveal>
          <SectionReveal delay={120} className="space-y-6 lg:col-span-7">
            {sector.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body-lg text-grey-600">
                {paragraph}
              </p>
            ))}
          </SectionReveal>
        </div>
      </Section>

      {/* How the three disciplines apply here — links to service pages */}
      <Section tone="mist" aria-labelledby={`${sector.id}-disciplines`}>
        <SectionHeading
          id={`${sector.id}-disciplines`}
          eyebrow="Our capabilities"
          heading={`How ELMEC delivers in ${sector.name}`}
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {sector.disciplines.map((discipline, index) => (
            <SectionReveal as="li" key={discipline.serviceHref} delay={index * 100} className="h-full">
              <Link
                to={discipline.serviceHref}
                className="group flex h-full flex-col border border-grey-200 bg-white p-8 transition-all duration-250 hover:border-steel hover:shadow-lg hover:shadow-navy/5"
              >
                <span className="font-display text-caption font-semibold text-grey-400" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-h3 font-semibold text-navy transition-colors duration-250 group-hover:text-steel">
                  {discipline.title}
                </h3>
                <p className="mt-3 flex-1 text-body text-grey-600">{discipline.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel">
                  Explore capability
                  <span className="transition-transform duration-250 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </SectionReveal>
          ))}
        </ul>
      </Section>

      {/* Related projects from the shared dataset, filtered by sector */}
      {relatedProjects.length > 0 && (
        <Section tone="white" aria-labelledby={`${sector.id}-projects`}>
          <SectionHeading
            id={`${sector.id}-projects`}
            eyebrow="Proof, not promises"
            heading={`${sector.name} in delivery`}
            cta={{ label: 'View all projects', href: '/projects' }}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project, i) => (
              <SectionReveal key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </SectionReveal>
            ))}
          </div>
        </Section>
      )}

      <CTABand {...sector.cta} />
    </>
  );
}
