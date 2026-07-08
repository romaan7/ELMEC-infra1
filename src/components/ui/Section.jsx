import Container from './Container.jsx';

/**
 * Section — consistent vertical rhythm wrapper.
 * One spacing cadence for the whole site (py-20 → py-32 across breakpoints)
 * so sections stack with large, even, deliberate whitespace.
 *
 * Props:
 *  - tone: 'white' | 'mist' | 'navy' — section background token
 *  - container: set false to take full-bleed control inside the section
 *  - as: semantic element (defaults to <section>)
 */
const TONES = {
  white: 'bg-white',
  mist: 'bg-mist',
  navy: 'bg-navy text-white dark-surface',
};

export default function Section({
  as: Tag = 'section',
  tone = 'white',
  container = true,
  className = '',
  containerClassName = '',
  children,
  ...rest
}) {
  return (
    <Tag className={`${TONES[tone]} py-20 md:py-28 lg:py-32 ${className}`} {...rest}>
      {container ? <Container className={containerClassName}>{children}</Container> : children}
    </Tag>
  );
}
