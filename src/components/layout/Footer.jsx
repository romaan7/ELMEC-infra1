import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import Icon from '../ui/Icon.jsx';
import { footerColumns, contact, socialLinks, legalLinks } from '../../data/site.js';

/**
 * Footer — comprehensive multi-column site footer on the navy base.
 * Columns: Company / Services / Sectors / Contact, plus newsletter signup,
 * social links and the compliance-link row.
 */

/** Newsletter signup with client-side validation. */
function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | success

  const handleSubmit = (event) => {
    event.preventDefault();
    // Minimal client-side validation; the input also uses type="email".
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus('error');
      return;
    }

    /* BACKEND INTEGRATION POINT ------------------------------------------
     * POST the email to the newsletter service here, e.g.:
     *   await fetch('/api/newsletter', { method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({ email }) });
     * Handle failures by setting an error status. Until wired, we simply
     * confirm locally.
     * -------------------------------------------------------------------- */
    setStatus('success');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email" className="font-display text-h4 font-semibold text-white">
        Insights, delivered
      </label>
      <p className="mt-1 text-caption text-grey-300">
        Project milestones and engineering perspectives, quarterly.
      </p>
      <div className="mt-4 flex">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Work email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus('idle');
          }}
          aria-describedby="newsletter-feedback"
          aria-invalid={status === 'error'}
          className="min-w-0 flex-1 border border-navy-700 bg-navy-800 px-4 py-3 text-body text-white placeholder:text-grey-400"
        />
        <button
          type="submit"
          className="shrink-0 bg-steel px-5 py-3 font-display text-[0.9375rem] font-semibold text-white transition-colors duration-250 hover:bg-steel-600"
        >
          Subscribe
        </button>
      </div>
      {/* Live region so screen readers announce validation feedback */}
      <p id="newsletter-feedback" role="status" className="mt-2 min-h-5 text-caption">
        {status === 'error' && <span className="text-steel-300">Please enter a valid email address.</span>}
        {status === 'success' && <span className="text-grey-300">Thank you — you're subscribed.</span>}
      </p>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="dark-surface bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <Container className="py-16 lg:py-20">
        {/* Top row: brand + newsletter */}
        <div className="flex flex-col gap-10 border-b border-navy-700 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            {/* Logo slot — replace with the real ELMEC SVG lockup. */}
            <p className="font-display text-2xl font-bold tracking-tight">
              ELMEC<span className="text-steel-300">.</span>
            </p>
            <p className="mt-4 text-body text-grey-300">
              A London-based firm delivering integrated civil, electrical and
              mechanical works — led by cost certainty and built on twenty
              years of founder experience.
            </p>
            <ul className="mt-6 flex gap-3" aria-label="ELMEC on social media">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ELMEC on ${social.label} (opens in a new tab)`}
                    className="flex h-11 w-11 items-center justify-center border border-navy-700 text-grey-300 transition-colors duration-250 hover:border-steel-300 hover:text-white"
                  >
                    <Icon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-md">
            <NewsletterForm />
          </div>
        </div>

        {/* Link columns + contact block */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-12 md:grid-cols-4">
          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={`Footer — ${column.heading}`}>
              <h3 className="font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-400">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-body text-grey-300 transition-colors duration-250 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact block — single London head office (PLACEHOLDER details, see src/data/site.js) */}
          <div>
            <h3 className="font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-400">
              Head office — London
            </h3>
            <address className="mt-5 space-y-3 not-italic">
              <p className="text-body text-grey-300">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                  className="text-body text-grey-300 transition-colors duration-250 hover:text-white"
                >
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-body text-grey-300 transition-colors duration-250 hover:text-white"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </Container>

      {/* Compliance row */}
      <div className="border-t border-navy-700">
        <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-grey-400">© 2026 ELMEC Infrastructure. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-caption text-grey-400 transition-colors duration-250 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
