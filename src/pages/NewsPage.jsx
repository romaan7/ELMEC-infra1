import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Section,
  SectionReveal,
  SectionHeading,
  Hero,
  NewsCard,
  ProjectFilter,
} from '../components/index.js';
import { ALL_VALUE } from '../components/projects/ProjectFilter.jsx';

// Content — data only (CMS-swappable)
import { news, NEWS_CATEGORIES } from '../data/news.js';

/**
 * NewsPage — the newsroom index: hero, featured lead article, and a
 * category-filterable grid of the remaining coverage (reuses the shared
 * filter control; article cards reuse NewsCard).
 */

const newsHero = {
  eyebrow: 'News & insights',
  headline: 'What we’re building, and what we’re learning.',
  subhead: 'Project milestones, company news and engineering perspectives from across the group.',
  /* HERO PHOTOGRAPHY SLOT — replace with commissioned photography. */
  image:
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80',
  imageAlt: 'Contemporary structure with precise repeating geometry',
};

/** Featured lead treatment for the most recent article. */
function FeaturedArticle({ article }) {
  return (
    <Link to={article.href} className="group grid overflow-hidden bg-navy md:grid-cols-2">
      <div className="overflow-hidden">
        {/* PLACEHOLDER IMAGE — see src/data/news.js */}
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          className="aspect-[3/2] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:aspect-auto"
        />
      </div>
      <div className="dark-surface flex flex-col justify-center p-8 lg:p-12">
        <div className="flex items-center gap-4">
          <span className="bg-steel px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white">
            {article.category}
          </span>
          <time dateTime={article.date} className="text-caption text-grey-300">
            {article.dateLabel}
          </time>
        </div>
        <h3 className="mt-5 font-display text-h2 font-bold text-white transition-colors duration-250 group-hover:text-steel-300">
          {article.title}
        </h3>
        <p className="mt-4 text-body-lg text-grey-300">{article.excerpt}</p>
        <span className="mt-8 inline-flex items-center gap-2 font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel-300">
          Read article
          <span className="transition-transform duration-250 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function NewsPage() {
  const [category, setCategory] = useState(ALL_VALUE);

  const [featured, ...rest] = news; // data is ordered latest-first
  const filtered = useMemo(
    () => rest.filter((article) => category === ALL_VALUE || article.category === category),
    [rest, category],
  );

  const filterGroups = [
    { id: 'category', label: 'Category', options: NEWS_CATEGORIES, value: category, onChange: setCategory, type: 'pills' },
  ];

  return (
    <>
      <Hero {...newsHero} />

      <Section tone="mist" aria-labelledby="newsroom-heading">
        <SectionHeading id="newsroom-heading" eyebrow="Latest" heading="The lead story" />
        <SectionReveal>
          <FeaturedArticle article={featured} />
        </SectionReveal>

        {/* Archive with category filtering */}
        <div className="mt-20">
          <SectionReveal>
            <ProjectFilter
              groups={filterGroups}
              resultCount={filtered.length}
              itemNoun="article"
              onClear={() => setCategory(ALL_VALUE)}
            />
          </SectionReveal>

          {filtered.length > 0 ? (
            <ul className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {filtered.map((article, index) => (
                <SectionReveal as="li" key={article.id} delay={(index % 3) * 80} className="h-full">
                  <NewsCard article={article} />
                </SectionReveal>
              ))}
            </ul>
          ) : (
            <div className="mt-10 border border-grey-200 bg-white p-12 text-center">
              <p className="font-display text-h3 font-semibold text-navy">No articles in this category yet.</p>
              <button
                type="button"
                onClick={() => setCategory(ALL_VALUE)}
                className="mt-4 font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel transition-colors duration-250 hover:text-steel-600"
              >
                Show all articles ×
              </button>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
