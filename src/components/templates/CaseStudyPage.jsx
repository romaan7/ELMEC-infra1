import { useParams } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import Section from '../ui/Section.jsx';
import SectionReveal from '../ui/SectionReveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import StatBand from '../sections/StatBand.jsx';
import Gallery from '../sections/Gallery.jsx';
import CTABand from '../sections/CTABand.jsx';
import ProjectCard from '../cards/ProjectCard.jsx';
import PlaceholderPage from '../../pages/PlaceholderPage.jsx';
import { projects, getProjectBySlug } from '../../data/projects.js';
import { caseStudyCta } from '../../data/projectsPage.js';

/**
 * CaseStudyPage — shared template for every project detail page
 * (/projects/:slug), driven entirely by one entry from the shared
 * projects dataset. Structure: full-width hero → metadata strip →
 * Challenge/Solution/Outcome narrative → results → gallery →
 * related projects → CTA.
 */

/** The three narrative movements, in order. */
const NARRATIVE_BLOCKS = [
  { key: 'challenge', label: 'The challenge' },
  { key: 'solution', label: 'The solution' },
  { key: 'outcome', label: 'The outcome' },
];

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <PlaceholderPage
        title="Project not found"
        description="This case study does not exist or has been moved. Browse the full portfolio from the Projects page."
      />
    );
  }

  // Related work: same sector first, then shared discipline, excluding self.
  const related = [
    ...projects.filter((p) => p.id !== project.id && p.sector === project.sector),
    ...projects.filter(
      (p) => p.id !== project.id && p.sector !== project.sector && p.disciplines.some((d) => project.disciplines.includes(d)),
    ),
  ].slice(0, 3);

  const meta = [
    { label: 'Client', value: project.client },
    { label: 'Location', value: `${project.location} — ${project.region}` },
    { label: 'Sector', value: project.sector },
    { label: 'Project value', value: project.value },
    { label: 'Duration', value: project.duration },
    { label: 'Disciplines', value: project.disciplines.join(' · ') },
  ];

  return (
    <>
      {/* Full-width project hero */}
      <section className="dark-surface relative flex min-h-[72vh] items-end bg-navy" aria-label={project.name}>
        {/* PLACEHOLDER IMAGE — approved hero photography per project (src/data/projects.js). */}
        <img
          src={project.image}
          alt={project.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-navy/30" aria-hidden="true" />
        <Container className="relative pb-16 pt-44">
          <span className="inline-block bg-steel px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white">
            {project.sector}
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-h1 font-bold text-white">{project.name}</h1>
          <p className="mt-3 text-body-lg text-grey-300">{project.location}</p>
        </Container>
      </section>

      {/* Metadata strip — scannable project facts */}
      <div className="border-b border-grey-100 bg-mist">
        <Container>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 py-10 md:grid-cols-3 lg:grid-cols-6">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-caption font-medium uppercase tracking-[0.14em] text-grey-500">{item.label}</dt>
                <dd className="mt-2 font-display text-[0.9375rem] font-semibold text-navy">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* Narrative: Challenge → Solution → Outcome */}
      <Section tone="white" aria-label="Project narrative">
        <div className="mx-auto max-w-3xl">
          <SectionReveal>
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel">
              Case study
            </p>
            <p className="mt-4 font-display text-h3 font-semibold leading-snug text-navy">{project.summary}</p>
            <p className="mt-3 border-b border-grey-100 pb-8 text-caption text-grey-500">
              Scope: {project.scope}
            </p>
          </SectionReveal>

          {NARRATIVE_BLOCKS.map((block, index) => (
            <SectionReveal key={block.key} className="mt-12">
              <h2 className="flex items-baseline gap-4 font-display text-h2 font-bold text-navy">
                <span className="font-display text-caption font-semibold text-steel" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {block.label}
              </h2>
              <p className="mt-4 text-body-lg text-grey-600">{project.narrative[block.key]}</p>
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* Results — reuses the StatBand trust pattern (PLACEHOLDER METRICS) */}
      <StatBand stats={project.results} ariaLabel="Project outcomes in numbers" />

      {/* Gallery */}
      <Section tone="mist" aria-labelledby="gallery-heading">
        <SectionHeading id="gallery-heading" eyebrow="On site" heading="The project in pictures" />
        <SectionReveal>
          <Gallery images={project.gallery} label={`${project.name} image gallery`} />
        </SectionReveal>
      </Section>

      {/* Related projects */}
      {related.length > 0 && (
        <Section tone="white" aria-labelledby="related-heading">
          <SectionHeading
            id="related-heading"
            eyebrow="More of the work"
            heading="Related projects"
            cta={{ label: 'View all projects', href: '/projects' }}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <SectionReveal key={p.id} delay={i * 100}>
                <ProjectCard project={p} />
              </SectionReveal>
            ))}
          </div>
        </Section>
      )}

      <CTABand {...caseStudyCta} />
    </>
  );
}
