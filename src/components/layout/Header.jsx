import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import Button from '../ui/Button.jsx';
import { primaryNav, contact } from '../../data/site.js';

/**
 * Header — global sticky navigation.
 *
 * Behaviour:
 *  - Transparent while overlaying the hero; transitions to solid navy on
 *    scroll (and stays solid while the mobile menu is open).
 *  - Services / Sectors render as mega-menu dropdowns on desktop
 *    (hover + click + full keyboard support, Escape to close) and as
 *    accordions inside the full-screen mobile menu.
 *  - Mobile menu locks body scroll, traps Tab focus, closes on Escape
 *    and on route change, and returns focus to the toggle button.
 */

/* Logo slot — replace this text mark with the real ELMEC SVG lockup. */
function Logo() {
  return (
    <Link
      to="/"
      className="font-display text-2xl font-bold tracking-tight text-white"
      aria-label="ELMEC Infrastructure — home"
    >
      ELMEC
      <span className="text-steel-300">.</span>
    </Link>
  );
}

/** Desktop dropdown panel for a nav item with children. */
function DesktopDropdown({ item, isOpen, onOpen, onClose }) {
  const wrapperRef = useRef(null);

  // Close when focus leaves the whole dropdown (keyboard users tabbing past).
  const handleBlur = (event) => {
    if (!wrapperRef.current.contains(event.relatedTarget)) onClose();
  };

  const twoColumns = item.children.length > 3;

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={handleBlur}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 py-2 text-[0.9375rem] font-medium text-white/90 transition-colors duration-250 hover:text-white aria-expanded:text-white"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={isOpen ? onClose : onOpen}
      >
        {item.label}
        <svg
          className={`h-3 w-3 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </button>

      {/* Mega-menu panel */}
      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-250 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className={`bg-white p-6 shadow-2xl ring-1 ring-grey-100 ${twoColumns ? 'w-[38rem]' : 'w-[24rem]'}`}>
          <p className="mb-4 border-b border-grey-100 pb-3 font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-500">
            {item.label}
          </p>
          <ul className={`grid gap-1 ${twoColumns ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  to={child.href}
                  className="group block px-3 py-3 transition-colors duration-250 hover:bg-mist"
                  onClick={onClose}
                >
                  <span className="font-display text-[0.9375rem] font-semibold text-ink transition-colors duration-250 group-hover:text-steel">
                    {child.label}
                  </span>
                  <span className="mt-0.5 block text-caption text-grey-500">{child.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={item.href}
            className="mt-4 inline-flex items-center gap-2 border-t border-grey-100 pt-4 text-caption font-semibold uppercase tracking-[0.14em] text-steel transition-colors duration-250 hover:text-steel-600"
            onClick={onClose}
          >
            View all {item.label.toLowerCase()}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Accordion group inside the mobile menu. */
function MobileGroup({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-navy-700">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 font-display text-xl font-semibold text-white"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <svg
          className={`h-4 w-4 text-steel-300 transition-transform duration-250 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </button>
      {open && (
        <ul className="pb-4">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href}
                className="block py-2.5 pl-4 text-body text-grey-300 transition-colors duration-250 hover:text-white"
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={item.href}
              className="block py-2.5 pl-4 text-body font-medium text-steel-300"
              onClick={onNavigate}
            >
              View all {item.label.toLowerCase()}
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // label of the open desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const mobilePanelRef = useRef(null);

  /* Transparent over hero → solid navy once the page scrolls. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close all menus on navigation. */
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  /* Mobile menu: lock body scroll and move focus into the panel. */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    if (mobileOpen) {
      mobilePanelRef.current?.querySelector('a, button')?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    toggleRef.current?.focus(); // return focus to the hamburger toggle
  }, []);

  /* Simple focus trap + Escape handling for the full-screen mobile menu. */
  const handleMobileKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeMobile();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusables = mobilePanelRef.current.querySelectorAll('a[href], button:not([disabled]), input');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-navy shadow-lg shadow-navy/20' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {primaryNav.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  isOpen={openMenu === item.label}
                  onOpen={() => setOpenMenu(item.label)}
                  onClose={() => setOpenMenu((cur) => (cur === item.label ? null : cur))}
                />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `py-2 text-[0.9375rem] font-medium transition-colors duration-250 ${
                      isActive ? 'text-white underline decoration-steel-300 decoration-2 underline-offset-8' : 'text-white/90 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" className="!px-5 !py-2.5">
              Get in touch
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            ref={toggleRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
              ) : (
                <path d="M3 6.5h18M3 12h18M3 17.5h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        ref={mobilePanelRef}
        className={`fixed inset-0 top-20 z-40 overflow-y-auto bg-navy transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onKeyDown={handleMobileKeyDown}
      >
        <Container className="flex min-h-full flex-col pb-10 pt-4">
          <nav aria-label="Primary mobile">
            <ul>
              {primaryNav.map((item) =>
                item.children ? (
                  <MobileGroup key={item.label} item={item} onNavigate={closeMobile} />
                ) : (
                  <li key={item.label} className="border-b border-navy-700">
                    <Link
                      to={item.href}
                      className="block py-4 font-display text-xl font-semibold text-white"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="mt-8">
            <Button to="/contact" variant="primary" className="w-full">
              Get in touch
            </Button>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 block text-center text-caption text-grey-300 underline-offset-4 hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
