import { useMemo, useState } from 'react';
import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  ProjectCard,
  ProjectFilter,
} from '../components/index.js';
import { ALL_VALUE } from '../components/projects/ProjectFilter.jsx';

// Content — data only (CMS-swappable)
import { projectsHero, projectsIntro } from '../data/projectsPage.js';
import {
  projects,
  PROJECT_SECTORS,
  PROJECT_REGIONS,
  PROJECT_DISCIPLINES,
} from '../data/projects.js';

/**
 * ProjectsPage — the filterable portfolio.
 * Client-side filtering across three dimensions (sector as primary pills;
 * region and discipline as selects), driven entirely by the shared
 * projects dataset. Filtering is keyboard-operable and announced via a
 * polite live region inside ProjectFilter.
 */
export default function ProjectsPage() {
  const [sector, setSector] = useState(ALL_VALUE);
  const [region, setRegion] = useState(ALL_VALUE);
  const [discipline, setDiscipline] = useState(ALL_VALUE);

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (sector === ALL_VALUE || p.sector === sector) &&
          (region === ALL_VALUE || p.region === region) &&
          (discipline === ALL_VALUE || p.disciplines.includes(discipline)),
      ),
    [sector, region, discipline],
  );

  const clearFilters = () => {
    setSector(ALL_VALUE);
    setRegion(ALL_VALUE);
    setDiscipline(ALL_VALUE);
  };

  const filterGroups = [
    { id: 'sector', label: 'Sector', options: PROJECT_SECTORS, value: sector, onChange: setSector, type: 'pills' },
    { id: 'region', label: 'Region', options: PROJECT_REGIONS, value: region, onChange: setRegion, type: 'select' },
    {
      id: 'discipline',
      label: 'Discipline',
      options: PROJECT_DISCIPLINES,
      value: discipline,
      onChange: setDiscipline,
      type: 'select',
    },
  ];

  return (
    <>
      <Hero {...projectsHero} />

      <Section tone="mist" aria-labelledby="portfolio-heading">
        <SectionHeading
          id="portfolio-heading"
          eyebrow={projectsIntro.eyebrow}
          heading={projectsIntro.heading}
          lede={projectsIntro.lede}
        />

        <SectionReveal>
          <ProjectFilter groups={filterGroups} resultCount={filtered.length} onClear={clearFilters} />
        </SectionReveal>

        {/* Filtered grid — keyed so cards remount (and re-reveal) on change */}
        {filtered.length > 0 ? (
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <SectionReveal as="li" key={project.id} delay={(index % 3) * 80}>
                <ProjectCard project={project} />
              </SectionReveal>
            ))}
          </ul>
        ) : (
          <div className="mt-10 border border-grey-200 bg-white p-12 text-center">
            <p className="font-display text-h3 font-semibold text-navy">No projects match those filters.</p>
            <p className="mt-2 text-body text-grey-500">
              Try broadening the selection, or clear the filters to see the full portfolio.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel transition-colors duration-250 hover:text-steel-600"
            >
              Clear all filters ×
            </button>
          </div>
        )}
      </Section>
    </>
  );
}
