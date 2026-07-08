/**
 * ELMEC Infrastructure — Design System
 * =====================================
 * Single source of truth for all design tokens. Components must consume
 * these tokens (e.g. `bg-navy`, `text-steel`, `text-h2`) — never hardcoded
 * hex values or arbitrary font sizes.
 *
 * BRAND PRINCIPLE: abstract authority — scale, permanence and technical
 * credibility expressed through restraint, whitespace and precise alignment.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      /* ------------------------------------------------------------------
       * COLOR TOKENS
       * ------------------------------------------------------------------
       * navy   — base dark. Header (scrolled), footer, dark bands.
       * ink    — near-black body text on light backgrounds.
       * steel  — the single accent. CTAs, links, active states, highlights
       *          ONLY. Used sparingly by design.
       *          steel-300 is the accessible on-dark variant (AA on navy);
       *          never place default steel text on navy.
       * mist   — light section background.
       * grey   — neutral scale for borders, muted text, dividers.
       * ---------------------------------------------------------------- */
      colors: {
        navy: {
          DEFAULT: '#0E1B2C',
          800: '#152539', // raised panels on navy
          700: '#1D3049', // borders / hover surfaces on navy
        },
        ink: '#1A1A1A',
        steel: {
          DEFAULT: '#2E5C8A',
          600: '#254B72',  // hover/pressed state of the accent
          300: '#8FB4D9',  // accent on dark backgrounds (WCAG AA on navy)
          100: '#E8EFF6',  // faint accent tint (tags, hover washes)
        },
        mist: '#F5F6F8',
        grey: {
          100: '#ECEEF1', // hairline borders on light
          200: '#DDE1E6', // dividers, input borders
          300: '#C3C9D1', // muted text on navy (AA on navy)
          400: '#9AA3AE', // disabled / faint
          500: '#66707E', // muted text on light (AA on white)
          600: '#4A5563', // secondary text on light
        },
      },

      /* ------------------------------------------------------------------
       * TYPOGRAPHY
       * ------------------------------------------------------------------
       * display — Archivo: geometric grotesque. Headings, numerals, logo.
       * sans    — Inter: neutral humanist sans. Body copy, UI.
       * Loaded via Google Fonts in index.html (preconnected, swap).
       * ---------------------------------------------------------------- */
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      /* ------------------------------------------------------------------
       * TYPE SCALE
       * ------------------------------------------------------------------
       * Token      Size (fluid where noted)        Weight   Line-height
       * display    clamp 44px → 76px               700      1.04
       * h1         clamp 36px → 56px               700      1.08
       * h2         clamp 28px → 40px               700      1.15
       * h3         22px                            600      1.3
       * h4         17px                            600      1.4
       * body-lg    18px                            400      1.7
       * body       16px                            400      1.7
       * caption    13px                            500      1.4
       * Display/H1/H2 carry tight letter-spacing for the confident,
       * engineered feel. Weights are applied in components via
       * font-display + font-bold/semibold alongside these size tokens.
       * ---------------------------------------------------------------- */
      fontSize: {
        display: ['clamp(2.75rem, 5vw + 1.5rem, 4.75rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.25rem, 3.2vw + 1.25rem, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 1.6vw + 1.2rem, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h3: ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        h4: ['1.0625rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        body: ['1rem', { lineHeight: '1.7' }],
        caption: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        /* Large stat numerals for the trust band */
        stat: ['clamp(2.75rem, 4vw + 1rem, 4.25rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },

      /* ------------------------------------------------------------------
       * SPACING / LAYOUT
       * ------------------------------------------------------------------
       * Vertical rhythm between sections is owned by the <Section>
       * primitive (py-20 md:py-28 lg:py-32 — one consistent cadence).
       * Container max-width is 1280px with responsive gutters, owned by
       * the <Container> primitive.
       * ---------------------------------------------------------------- */
      maxWidth: {
        container: '80rem', // 1280px
      },

      /* ------------------------------------------------------------------
       * MOTION
       * ------------------------------------------------------------------
       * Restrained and professional: 200–300ms hover transitions,
       * a single fade-and-rise scroll reveal (see SectionReveal).
       * ---------------------------------------------------------------- */
      transitionDuration: {
        DEFAULT: '250ms',
        250: '250ms', // the standard hover-transition step used across components
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
