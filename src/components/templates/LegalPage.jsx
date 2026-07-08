import Container from '../ui/Container.jsx';
import Section from '../ui/Section.jsx';

/**
 * LegalPage — shared template for compliance pages (Privacy Policy,
 * Terms of Use, Cookie Policy, Modern Slavery Statement), driven by one
 * entry from src/data/legal.js.
 *
 * ⚠️ The content rendered here is PLACEHOLDER legal copy. It must be
 * reviewed and replaced with vetted legal content by qualified counsel
 * before launch (see the warning in src/data/legal.js).
 */
export default function LegalPage({ page }) {
  return (
    <>
      {/* Page header on the navy base */}
      <div className="dark-surface bg-navy pb-16 pt-44">
        <Container>
          <p className="font-display text-caption font-semibold uppercase tracking-[0.2em] text-steel-300">
            Legal
          </p>
          <h1 className="mt-4 font-display text-h1 font-bold text-white">{page.title}</h1>
          <p className="mt-4 text-caption text-grey-300">{page.updated}</p>
        </Container>
      </div>

      {/* Long-form body with system typography */}
      <Section tone="white" aria-label={page.title}>
        <div className="mx-auto max-w-3xl">
          {page.sections.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0">
              <h2 className="font-display text-h3 font-semibold text-navy">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-body text-grey-600">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-body text-grey-600">
                      <span className="mt-3 h-px w-4 shrink-0 bg-steel" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
