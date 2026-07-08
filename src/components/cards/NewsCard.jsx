import { Link } from 'react-router-dom';

/**
 * NewsCard — article card for news & insights.
 * Uses semantic <article> with a machine-readable <time> element.
 */
export default function NewsCard({ article }) {
  return (
    <article className="group h-full">
      <Link to={article.href} className="flex h-full flex-col">
        <div className="overflow-hidden">
          {/* PLACEHOLDER IMAGE — see src/data/news.js */}
          <img
            src={article.image}
            alt={article.imageAlt}
            loading="lazy"
            className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col pt-6">
          <div className="flex items-center gap-3">
            <span className="bg-steel-100 px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-steel">
              {article.category}
            </span>
            <time dateTime={article.date} className="text-caption text-grey-500">
              {article.dateLabel}
            </time>
          </div>
          <h3 className="mt-4 font-display text-h3 font-semibold text-navy transition-colors duration-250 group-hover:text-steel">
            {article.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
