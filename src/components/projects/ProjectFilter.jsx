/**
 * ProjectFilter — accessible filter controls for the projects portfolio.
 *
 * Two control styles, both driven by the same group config:
 *  - 'pills'  : a row of toggle buttons (aria-pressed), used for the
 *               primary dimension
 *  - 'select' : a labelled native <select>, used for secondary dimensions
 *
 * Props:
 *  - groups: [{ id, label, options: string[], value, onChange, type }]
 *            `value` of '' / ALL_VALUE means "no filter for this group".
 *  - resultCount: number — announced politely to screen readers on change
 *  - onClear: callback shown when any filter is active
 *  - itemNoun: singular noun for the result count (default 'project') —
 *    lets Careers ('role') and News ('article') reuse the same control
 */
export const ALL_VALUE = 'All';

function PillGroup({ group }) {
  return (
    <fieldset>
      <legend className="mb-3 font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-500">
        {group.label}
      </legend>
      <div className="flex flex-wrap gap-2" role="group">
        {[ALL_VALUE, ...group.options].map((option) => {
          const active = group.value === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => group.onChange(option)}
              className={`border px-4 py-2 font-display text-caption font-semibold transition-colors duration-250 ${
                active
                  ? 'border-steel bg-steel text-white'
                  : 'border-grey-200 bg-white text-grey-600 hover:border-steel hover:text-steel'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function SelectGroup({ group }) {
  const selectId = `filter-${group.id}`;
  return (
    <div>
      <label
        htmlFor={selectId}
        className="mb-3 block font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-500"
      >
        {group.label}
      </label>
      <select
        id={selectId}
        value={group.value}
        onChange={(e) => group.onChange(e.target.value)}
        className="w-full min-w-44 cursor-pointer border border-grey-200 bg-white px-4 py-2.5 text-body text-ink transition-colors duration-250 hover:border-steel"
      >
        {[ALL_VALUE, ...group.options].map((option) => (
          <option key={option} value={option}>
            {option === ALL_VALUE ? `All ${group.label.toLowerCase()}s` : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ProjectFilter({ groups, resultCount, onClear, itemNoun = 'project' }) {
  const anyActive = groups.some((g) => g.value !== ALL_VALUE);

  return (
    <div className="border border-grey-200 bg-white p-6 md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-1 flex-col gap-6 md:flex-row md:flex-wrap md:items-start md:gap-10">
          {groups.map((group) =>
            group.type === 'select' ? (
              <SelectGroup key={group.id} group={group} />
            ) : (
              <PillGroup key={group.id} group={group} />
            ),
          )}
        </div>

        {anyActive && (
          <button
            type="button"
            onClick={onClear}
            className="self-start whitespace-nowrap font-display text-caption font-semibold uppercase tracking-[0.14em] text-steel transition-colors duration-250 hover:text-steel-600"
          >
            Clear filters ×
          </button>
        )}
      </div>

      {/* Result count — polite live region so filtering is announced */}
      <p role="status" aria-live="polite" className="mt-6 border-t border-grey-100 pt-4 text-caption text-grey-500">
        Showing {resultCount} {resultCount === 1 ? itemNoun : `${itemNoun}s`}
      </p>
    </div>
  );
}
