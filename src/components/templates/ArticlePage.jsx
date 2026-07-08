import { useParams, Link } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import Section from '../ui/Section.jsx';
import SectionReveal from '../ui/SectionReveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icon.jsx';
import NewsCard from '../cards/NewsCard.jsx';
import PlaceholderPage from '../../pages/PlaceholderPage.jsx';
import { news, getArticleBySlug } from '../../data/news.js';

/**
 * ArticlePage — shared template for every news article (/news/:slug),
 * driven by one entry from src/data/news.js. The structured `body`
 * blocks (p / h2 / quote / list) map 1:1 to a CMS rich-text field and
 * render through the design system's typographic hierarchy.
 */

/** Render one structured body block with system typography. */
function BodyBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-12 font-display text-h2 font-bold text-navy">{block.text}</h2>;
    case 'quote':
      return (
        <figure className="my-10 border-l-2 border-steel py-2 pl-8">
          <blockquote className="font-display text-h3 font-semibold leading-snug text-navy">
            “{block.text}”
          </blockquote>
          {block.attribution && (
            <figcaption className="mt-3 text-caption text-grey-500">— {block.attribution}</figcaption>
          )}
        </figure>
      );
    case 'list':
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-body-lg text-grey-600">
              <span className="mt-3.5 h-px w-4 shrink-0 bg-steel" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return <p className="mt-6 text-body-lg text-grey-600">{block.text}</p>;
  }
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <PlaceholderPage
        title="Article not found"
        description="This article does not exist or has been moved. Browse the latest coverage from the News page."
      />
    );
  }

  // Related coverage: same category first, then most recent, excluding self.
  const related = [
    ...news.filter((n) => n.id !== article.id && n.category === article.category),
    ...news.filter((n) => n.id !== article.id && n.category !== article.category),
  ].slice(0, 3);

  /* SHARE INTEGRATION POINT — populate with the canonical production URL. */
  const shareLinks = [
    { label: 'Share on LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/sharing/share-offsite/' },
    { label: 'Share on X', icon: 'x', href: 'https://x.com/intent/post' },
  ];

  return (
    <>
      {/* Article header on the navy base (keeps the transparent header legible) */}
      <div className="dark-surface bg-navy pb-16 pt-44">
        <Container>
          <nav aria-label="Breadcrumb">
            <Link
              to="/news"
              className="text-caption font-medium uppercase tracking-[0.14em] text-steel-300 transition-colors duration-250 hover:text-white"
            >
              ← All news
            </Link>
          </nav>
          <div className="mt-8 flex items-center gap-4">
            <span className="bg-steel px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white">
              {article.category}
            </span>
            <time dateTime={article.date} className="text-caption text-grey-300">
              {article.dateLabel}
            </time>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-h1 font-bold text-white">{article.title}</h1>
          <p className="mt-4 text-caption text-grey-300">By {article.author}</p>
        </Container>
      </div>

      {/* Hero image */}
      <Container className="-mt-0">
        {/* PLACEHOLDER IMAGE — replace with article photography (src/data/news.js). */}
        <img
          src={article.image}
          alt={article.imageAlt}
          className="aspect-[21/9] w-full object-cover"
          fetchpriority="high"
        />
      </Container>

      {/* Body */}
      <Section tone="white" aria-label="Article body" className="!pt-14 md:!pt-16 lg:!pt-20">
        <article className="mx-auto max-w-3xl">
          <SectionReveal>
            <p className="border-b border-grey-100 pb-8 font-display text-h3 font-semibold leading-snug text-navy">
              {article.excerpt}
            </p>
            {article.body.map((block, index) => (
              <BodyBlock key={`${block.type}-${index}`} block={block} />
            ))}
          </SectionReveal>

          {/* Share row */}
          <div className="mt-14 flex items-center gap-4 border-t border-grey-100 pt-8">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-500">
              Share
            </p>
            <ul className="flex gap-3">
              {shareLinks.map((share) => (
                <li key={share.icon}>
                  <a
                    href={share.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${share.label} (opens in a new tab)`}
                    className="flex h-11 w-11 items-center justify-center border border-grey-200 text-grey-500 transition-colors duration-250 hover:border-steel hover:text-steel"
                  >
                    <Icon name={share.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Section>

      {/* Related coverage */}
      {related.length > 0 && (
        <Section tone="mist" aria-labelledby="related-news-heading">
          <SectionHeading
            id="related-news-heading"
            eyebrow="Keep reading"
            heading="Related coverage"
            cta={{ label: 'All news', href: '/news' }}
          />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {related.map((item, i) => (
              <SectionReveal key={item.id} delay={i * 100} className="h-full">
                <NewsCard article={item} />
              </SectionReveal>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
