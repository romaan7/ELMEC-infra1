import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Gallery — responsive image gallery with a restrained lightbox.
 *
 * Grid of thumbnails; activating one opens a full-screen navy lightbox
 * with previous/next controls. Fully keyboard-operable:
 *  - Enter/Space on a thumbnail opens it
 *  - Escape closes, ArrowLeft/ArrowRight navigate
 *  - Focus moves to the close button on open and returns to the
 *    originating thumbnail on close; Tab is trapped inside the dialog.
 *
 * Props:
 *  - images: [{ src, alt }]
 *  - label: accessible name for the gallery region
 */
export default function Gallery({ images, label = 'Project image gallery' }) {
  const [openIndex, setOpenIndex] = useState(null); // null = closed
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const lastThumbRef = useRef(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    lastThumbRef.current?.focus(); // return focus to the thumbnail
  }, []);

  const step = useCallback(
    (delta) => {
      setOpenIndex((cur) => (cur + delta + images.length) % images.length);
    },
    [images.length],
  );

  /* Lock body scroll and move focus in while the lightbox is open. */
  useEffect(() => {
    if (openIndex === null) return undefined;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
    };
  }, [openIndex !== null]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'Tab') {
      // Simple focus trap across the dialog's three controls.
      const focusables = dialogRef.current.querySelectorAll('button');
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <div role="group" aria-label={label}>
      {/* Thumbnail grid */}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {images.map((image, index) => (
          <li key={image.src + index}>
            <button
              type="button"
              className="group block w-full overflow-hidden bg-navy"
              onClick={(e) => {
                lastThumbRef.current = e.currentTarget;
                setOpenIndex(index);
              }}
              aria-label={`Open image ${index + 1} of ${images.length}: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${openIndex + 1} of ${images.length}`}
          className="fixed inset-0 z-[70] flex flex-col bg-navy/95 backdrop-blur-sm"
          onKeyDown={handleKeyDown}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between p-4 sm:p-6">
            <p className="font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-300">
              {openIndex + 1} / {images.length}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="flex h-11 w-11 items-center justify-center border border-navy-700 text-white transition-colors duration-250 hover:border-steel-300"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
              </svg>
            </button>
          </div>

          {/* Image stage */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 pb-6 sm:px-20">
            <img
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-full max-w-full object-contain"
            />

            {/* Prev / next */}
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-navy-700 text-white transition-colors duration-250 hover:border-steel-300 sm:left-6"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-navy-700 text-white transition-colors duration-250 hover:border-steel-300 sm:right-6"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
              </svg>
            </button>
          </div>

          {/* Caption */}
          <p className="px-6 pb-6 text-center text-caption text-grey-300">{images[openIndex].alt}</p>
        </div>
      )}
    </div>
  );
}
