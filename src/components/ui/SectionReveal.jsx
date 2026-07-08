import { useEffect, useRef, useState } from 'react';

/**
 * SectionReveal — the site's single scroll-in animation.
 * Wraps content in a restrained fade-and-rise as it enters the viewport
 * (IntersectionObserver, fires once). Motion styles live in index.css and
 * are disabled automatically for prefers-reduced-motion users.
 *
 * Props:
 *  - delay: optional stagger in ms (used for card grids)
 *  - as: wrapper element (defaults to <div>)
 */
export default function SectionReveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // No observer support (very old browsers): show content immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal once, then stop observing
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
