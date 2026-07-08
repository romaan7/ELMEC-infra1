/**
 * Component barrel — the public component API for later stages.
 * New pages should compose from these exports.
 */

// UI primitives
export { default as Button } from './ui/Button.jsx';
export { default as Container } from './ui/Container.jsx';
export { default as Section } from './ui/Section.jsx';
export { default as SectionReveal } from './ui/SectionReveal.jsx';
export { default as SectionHeading } from './ui/SectionHeading.jsx';
export { default as Icon } from './ui/Icon.jsx';

// Global layout
export { default as Layout } from './layout/Layout.jsx';
export { default as Header } from './layout/Header.jsx';
export { default as Footer } from './layout/Footer.jsx';

// Page sections
export { default as Hero } from './sections/Hero.jsx';
export { default as StatBand } from './sections/StatBand.jsx';
export { default as CTABand } from './sections/CTABand.jsx';
export { default as Timeline } from './sections/Timeline.jsx';
export { default as Gallery } from './sections/Gallery.jsx';

// Cards
export { default as ServiceCard } from './cards/ServiceCard.jsx';
export { default as ProjectCard } from './cards/ProjectCard.jsx';
export { default as SectorTile } from './cards/SectorTile.jsx';
export { default as SectorCard } from './cards/SectorCard.jsx';
export { default as NewsCard } from './cards/NewsCard.jsx';
export { default as ValueCard } from './cards/ValueCard.jsx';
export { default as TeamCard } from './cards/TeamCard.jsx';
export { default as MetricCard } from './cards/MetricCard.jsx';
export { default as QuoteCard } from './cards/QuoteCard.jsx';
export { default as OfficeCard } from './cards/OfficeCard.jsx';

// Interactive modules
export { default as ProjectFilter } from './projects/ProjectFilter.jsx';
export { default as JobListings } from './careers/JobListings.jsx';
export { default as ContactForm } from './contact/ContactForm.jsx';

// Page templates (data-driven)
export { default as ServiceDetailPage } from './templates/ServiceDetailPage.jsx';
export { default as CaseStudyPage } from './templates/CaseStudyPage.jsx';
export { default as SectorDetailPage } from './templates/SectorDetailPage.jsx';
export { default as ArticlePage } from './templates/ArticlePage.jsx';
export { default as LegalPage } from './templates/LegalPage.jsx';
