import {
  Section,
  SectionReveal,
  SectionHeading,
  Button,
  Hero,
  StatBand,
  CTABand,
  ServiceCard,
  ProjectCard,
  SectorTile,
  NewsCard,
} from '../components/index.js';

// Content — data only, presentation-free (CMS-swappable, see src/data/*)
import {
  hero,
  capabilitiesIntro,
  projectsIntro,
  sectorsIntro,
  sustainability,
  newsIntro,
  closingCta,
} from '../data/home.js';
import { stats } from '../data/stats.js';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { sectors } from '../data/sectors.js';
import { news } from '../data/news.js';

/**
 * HomePage — assembled top-to-bottom from the design-system primitives.
 * Order: Hero → StatBand → Capabilities → Featured projects → Sectors →
 * Sustainability → News → Closing CTA.
 */
export default function HomePage() {
  return (
    <>
      {/* 1 — Hero: cinematic full-bleed opener, nav sits transparent above */}
      <Hero {...hero} />

      {/* 2 — Trust band: the credibility signal */}
      <StatBand stats={stats} />

      {/* 3 — Capabilities overview: the three service lines */}
      <Section tone="white" aria-labelledby="capabilities-heading">
        <SectionHeading id="capabilities-heading" {...capabilitiesIntro} />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <SectionReveal key={service.id} delay={i * 100} className="h-full">
              <ServiceCard service={service} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* 4 — Featured projects: image-led grid, first project featured large */}
      <Section tone="mist" aria-labelledby="projects-heading">
        <SectionHeading id="projects-heading" {...projectsIntro} />
        <SectionReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:row-span-2 lg:h-full">
              <ProjectCard project={projects[0]} featured />
            </div>
            {projects.slice(1).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionReveal>
      </Section>

      {/* 5 — Sectors strip: compact typographic tiles */}
      <Section tone="white" aria-labelledby="sectors-heading">
        <SectionHeading id="sectors-heading" {...sectorsIntro} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {sectors.map((sector, i) => (
            <SectionReveal key={sector.id} delay={i * 60} className="h-full">
              <SectorTile sector={sector} index={i} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* 6 — Sustainability teaser: full visual weight on the navy base */}
      <Section tone="navy" aria-labelledby="sustainability-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionReveal>
            {/* PLACEHOLDER IMAGE — see src/data/home.js */}
            <img
              src={sustainability.image}
              alt={sustainability.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </SectionReveal>
          <SectionReveal delay={120}>
            <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel-300">
              {sustainability.eyebrow}
            </p>
            <h2 id="sustainability-heading" className="mt-4 font-display text-h2 font-bold text-white">
              {sustainability.heading}
            </h2>
            <p className="mt-5 text-body-lg text-grey-300">{sustainability.lede}</p>

            <ul className="mt-10 space-y-6">
              {sustainability.pillars.map((pillar) => (
                <li key={pillar.id} className="border-l-2 border-steel-300 pl-5">
                  <h3 className="font-display text-h4 font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-1 text-body text-grey-300">{pillar.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button to={sustainability.cta.href} variant="secondary" className="text-white">
                {sustainability.cta.label}
              </Button>
            </div>
          </SectionReveal>
        </div>
      </Section>

      {/* 7 — Latest news & insights */}
      <Section tone="white" aria-labelledby="news-heading">
        <SectionHeading id="news-heading" {...newsIntro} />
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Newsroom dataset is ordered latest-first; homepage shows three */}
          {news.slice(0, 3).map((article, i) => (
            <SectionReveal key={article.id} delay={i * 100} className="h-full">
              <NewsCard article={article} />
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* 8 — Closing CTA band */}
      <CTABand {...closingCta} />
    </>
  );
}
