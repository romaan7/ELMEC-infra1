import { Link } from 'react-router-dom';
import { Section, Container, Button } from '../components/index.js';

/**
 * PlaceholderPage — temporary stand-in for every routed destination that
 * ships in a later stage. Opens with a navy banner so the transparent
 * header behaves identically to the homepage. Replace each instance with
 * the real page component in App.jsx — routes will not change.
 */
export default function PlaceholderPage({ title, description }) {
  return (
    <>
      {/* Navy page banner (keeps the transparent-at-top header legible) */}
      <div className="dark-surface bg-navy pb-20 pt-44">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link
              to="/"
              className="text-caption font-medium uppercase tracking-[0.14em] text-steel-300 transition-colors duration-250 hover:text-white"
            >
              ← Home
            </Link>
          </nav>
          <h1 className="font-display text-h1 font-bold text-white">{title}</h1>
        </Container>
      </div>

      <Section tone="white">
        <div className="max-w-2xl">
          <p className="text-body-lg text-grey-600">
            {description ||
              `The ${title} page is scheduled for a later build stage. It will compose from the design system and components established in Stage One.`}
          </p>
          <div className="mt-10">
            <Button to="/" variant="ghost">
              Return to the homepage
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
