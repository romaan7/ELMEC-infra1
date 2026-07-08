/**
 * OfficeCard — regional office contact card for the Contact page.
 * Semantic <address>, clickable phone and email. PLACEHOLDER office
 * details live in src/data/contact.js.
 */
export default function OfficeCard({ office }) {
  return (
    <article className="flex h-full flex-col border border-grey-200 bg-white p-7">
      <p className="font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel">
        {office.region}
      </p>
      <h3 className="mt-3 font-display text-h4 font-semibold text-navy">{office.name}</h3>
      <address className="mt-4 flex flex-1 flex-col not-italic">
        <p className="text-body text-grey-600">
          {office.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-4">
          <a
            href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
            className="text-body text-grey-600 transition-colors duration-250 hover:text-steel"
          >
            {office.phone}
          </a>
        </p>
        <p className="mt-1">
          <a
            href={`mailto:${office.email}`}
            className="break-all text-body font-medium text-steel transition-colors duration-250 hover:text-steel-600"
          >
            {office.email}
          </a>
        </p>
      </address>
    </article>
  );
}
