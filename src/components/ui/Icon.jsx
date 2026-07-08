/**
 * Icon — minimal inline SVG set used across the site.
 * All icons are decorative by default (aria-hidden); pass a `label` to make
 * one meaningful (adds role="img" + accessible name).
 */
const PATHS = {
  linkedin: (
    <path d="M4.98 3.5a2.49 2.49 0 1 1-.02 4.98 2.49 2.49 0 0 1 .02-4.98ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.09c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21h-3.84V9.75Z" />
  ),
  x: (
    <path d="M17.53 3H20.5l-6.49 7.42L21.65 21h-5.98l-4.68-6.12L5.63 21H2.65l6.94-7.93L2.35 3h6.13l4.23 5.59L17.53 3Zm-1.05 16.2h1.66L7.29 4.7H5.51l10.97 14.5Z" />
  ),
  youtube: (
    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15.13V8.87L15.2 12 10 15.13Z" />
  ),
};

export default function Icon({ name, label, className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' })}
    >
      {PATHS[name]}
    </svg>
  );
}
