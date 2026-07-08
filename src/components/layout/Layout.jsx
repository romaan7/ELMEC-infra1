import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

/** Reset scroll position on route change (standard SPA behaviour). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Layout — global page shell: skip link, sticky header, routed content,
 * footer. Every page in every later stage renders inside this shell.
 */
export default function Layout() {
  return (
    <>
      {/* Skip link — first tab stop, visible on focus (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only z-[60] bg-steel px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
