import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import ServiceDetailPage from './components/templates/ServiceDetailPage.jsx';
import CaseStudyPage from './components/templates/CaseStudyPage.jsx';
import SectorDetailPage from './components/templates/SectorDetailPage.jsx';
import ArticlePage from './components/templates/ArticlePage.jsx';
import LegalPage from './components/templates/LegalPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import SectorsPage from './pages/SectorsPage.jsx';
import SustainabilityPage from './pages/SustainabilityPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import { serviceDetails } from './data/servicesPages.js';
import { legalPages } from './data/legal.js';

/**
 * App — routing for the complete site (Stages One–Three).
 *
 * Every navigation, footer and mega-menu destination now resolves to a
 * real page. Detail pages are data-driven templates:
 *  - /services/:discipline   ServiceDetailPage  (per-route, from data)
 *  - /sectors/:slug          SectorDetailPage   (dynamic, from data)
 *  - /projects/:slug         CaseStudyPage      (dynamic, from data)
 *  - /news/:slug             ArticlePage        (dynamic, from data)
 *  - legal pages             LegalPage          (per-route, from data)
 * Adding content = adding a data entry; no new routes or components.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Services: overview + the three discipline pages (one template) */}
          <Route path="/services" element={<ServicesPage />} />
          {serviceDetails.map((service) => (
            <Route key={service.id} path={service.href} element={<ServiceDetailPage service={service} />} />
          ))}

          {/* Projects: filterable portfolio + case-study template */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<CaseStudyPage />} />

          {/* Sectors: overview + the six sector pages (one template) */}
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/sectors/:slug" element={<SectorDetailPage />} />

          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/careers" element={<CareersPage />} />

          {/* News: index + article template */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<ArticlePage />} />

          <Route path="/contact" element={<ContactPage />} />

          {/* Compliance pages (one template) — PLACEHOLDER legal copy,
              must be replaced with vetted content before launch */}
          {legalPages.map((page) => (
            <Route key={page.slug} path={page.path} element={<LegalPage page={page} />} />
          ))}

          {/* Unknown paths */}
          <Route
            path="*"
            element={
              <PlaceholderPage
                title="Page not found"
                description="The page you are looking for does not exist or has moved. Please use the navigation above, or return to the homepage."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
