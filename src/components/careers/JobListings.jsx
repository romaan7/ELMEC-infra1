import { useMemo, useState } from 'react';
import SectionReveal from '../ui/SectionReveal.jsx';
import Button from '../ui/Button.jsx';
import ProjectFilter, { ALL_VALUE } from '../projects/ProjectFilter.jsx';

/**
 * JobListings — filterable open-roles list for the Careers page.
 *
 * Filtering reuses the shared ProjectFilter control (department as pills,
 * location as a select). Each role is an accessible expandable panel
 * (button with aria-expanded/aria-controls) revealing description,
 * responsibilities, requirements and the apply CTA.
 *
 * ATS INTEGRATION POINT ---------------------------------------------------
 * `jobs` comes from src/data/careers.js as a placeholder array. Replace it
 * with the careers API / ATS feed (Workday, Greenhouse, …) returning the
 * same shape — this component needs no changes. The Apply button currently
 * opens a pre-filled email; point it at the real application portal URL
 * per requisition when the ATS is connected.
 * ------------------------------------------------------------------------
 */
export default function JobListings({ jobs, departments, locations }) {
  const [department, setDepartment] = useState(ALL_VALUE);
  const [location, setLocation] = useState(ALL_VALUE);
  const [openId, setOpenId] = useState(null); // id of the expanded role

  const filtered = useMemo(
    () =>
      jobs.filter(
        (job) =>
          (department === ALL_VALUE || job.department === department) &&
          (location === ALL_VALUE || job.location === location),
      ),
    [jobs, department, location],
  );

  const filterGroups = [
    { id: 'department', label: 'Department', options: departments, value: department, onChange: setDepartment, type: 'pills' },
    { id: 'location', label: 'Location', options: locations, value: location, onChange: setLocation, type: 'select' },
  ];

  return (
    <div>
      <SectionReveal>
        <ProjectFilter
          groups={filterGroups}
          resultCount={filtered.length}
          itemNoun="open role"
          onClear={() => {
            setDepartment(ALL_VALUE);
            setLocation(ALL_VALUE);
          }}
        />
      </SectionReveal>

      {filtered.length > 0 ? (
        <ul className="mt-10 border-t border-grey-200">
          {filtered.map((job) => {
            const open = openId === job.id;
            const panelId = `job-panel-${job.id}`;
            return (
              <li key={job.id} className="border-b border-grey-200">
                {/* Role summary row — toggles the detail panel */}
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : job.id)}
                  className="group flex w-full items-center justify-between gap-6 bg-white px-2 py-6 text-left transition-colors duration-250 hover:bg-mist md:px-6"
                >
                  <span>
                    <span className="block font-display text-h3 font-semibold text-navy transition-colors duration-250 group-hover:text-steel">
                      {job.title}
                    </span>
                    <span className="mt-1.5 block text-caption text-grey-500">
                      {job.department} · {job.location} · {job.type}
                    </span>
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 text-steel transition-transform duration-250 ${open ? 'rotate-180' : ''}`}
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </button>

                {/* Detail panel */}
                {open && (
                  <div id={panelId} className="border-t border-grey-100 bg-mist px-2 py-8 md:px-6">
                    <div className="max-w-3xl">
                      <p className="text-body-lg text-grey-600">{job.description}</p>

                      <h4 className="mt-8 font-display text-h4 font-semibold text-navy">What you'll do</h4>
                      <ul className="mt-3 space-y-2">
                        {job.responsibilities.map((item) => (
                          <li key={item} className="flex gap-3 text-body text-grey-600">
                            <span className="mt-2.5 h-px w-4 shrink-0 bg-steel" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-8 font-display text-h4 font-semibold text-navy">What you'll bring</h4>
                      <ul className="mt-3 space-y-2">
                        {job.requirements.map((item) => (
                          <li key={item} className="flex gap-3 text-body text-grey-600">
                            <span className="mt-2.5 h-px w-4 shrink-0 bg-steel" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* ATS INTEGRATION POINT — replace mailto with the requisition's application URL. */}
                      <div className="mt-10">
                        <Button
                          href={`mailto:careers@elmec-infrastructure.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                        >
                          Apply for this role
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-10 border border-grey-200 bg-white p-12 text-center">
          <p className="font-display text-h3 font-semibold text-navy">No open roles match those filters.</p>
          <p className="mt-2 text-body text-grey-500">
            New roles are posted regularly — or send a speculative application below.
          </p>
        </div>
      )}
    </div>
  );
}
