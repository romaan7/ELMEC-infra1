import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import ServiceDetailPage from './components/templates/ServiceDetailPage.jsx';
import SectorDetailPage from './components/templates/SectorDetailPage.jsx';
import LegalPage from './components/templates/LegalPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import SectorsPage from './pages/SectorsPage.jsx';
import SustainabilityPage from './pages/SustainabilityPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import { serviceDetails } from './data/servicesPages.js';
import { legalPages } from './data/legal.js';

/**
 * App — routing for the complete site (founder-led structure).
 *
 * NOTE: News and Careers were removed deliberately (startup-right
 * structure) — do not reintroduce their routes without the sections.
 * /experience presents the FOUNDER'S track record, not an ELMEC
 * project portfolio (see src/data/experience.js).
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

          {/* Founder track record (formerly /projects) */}
          <Route path="/experience" element={<ExperiencePage />} />

          {/* Sectors: overview + the six sector pages (one template) */}
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/sectors/:slug" element={<SectorDetailPage />} />

          <Route path="/sustainability" element={<SustainabilityPage />} />
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
