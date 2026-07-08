import { Link } from 'react-router-dom';

/**
 * Button — the single CTA primitive.
 * Renders a <Link> when `to` is passed, an <a> when `href` is passed,
 * otherwise a native <button>. Keyboard focus styling comes from the
 * global :focus-visible rule.
 *
 * Variants (accent used sparingly, per the design system):
 *  - primary   : steel accent fill — the main call to action
 *  - secondary : quiet outline; inherits currentColor so it works on
 *                both light and navy surfaces
 *  - ghost     : text-only link with arrow — tertiary actions
 */
const BASE =
  'group inline-flex items-center justify-center gap-2 font-display text-[0.9375rem] font-semibold ' +
  'tracking-wide transition-colors duration-250';

const VARIANTS = {
  primary: `${BASE} bg-steel px-7 py-3.5 text-white hover:bg-steel-600`,
  secondary: `${BASE} border border-current px-7 py-3.5 text-current hover:bg-white/10 hover:opacity-90`,
  ghost: `${BASE} px-0 py-1 text-steel hover:text-steel-600 [.dark-surface_&]:text-steel-300 [.dark-surface_&]:hover:text-white`,
};

/** Small arrow that nudges right on hover — the site's only button flourish. */
function Arrow() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export default function Button({
  variant = 'primary',
  to,
  href,
  arrow = variant === 'ghost',
  className = '',
  children,
  ...rest
}) {
  const classes = `${VARIANTS[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
