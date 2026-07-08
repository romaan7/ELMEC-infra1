import { useState } from 'react';
import Button from '../ui/Button.jsx';

/**
 * ContactForm — the main enquiry form.
 *
 * Client-side validation (required fields, email format) with accessible
 * inline errors: aria-invalid + aria-describedby per field, errors
 * announced via role="alert", success state via role="status". Fully
 * keyboard operable; labels are real <label>s.
 *
 * BACKEND INTEGRATION POINT ----------------------------------------------
 * handleSubmit currently shows the success state locally. Wire the
 * validated `values` to the real endpoint / email service, e.g.:
 *   await fetch('/api/contact', { method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(values) });
 * Handle failure by setting a form-level error. Do NOT ship without
 * server-side validation and spam protection on the endpoint.
 * ------------------------------------------------------------------------
 */

const INITIAL_VALUES = { name: '', company: '', email: '', phone: '', enquiryType: '', message: '' };

/** Field-level validation: returns an errors object keyed by field name. */
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.enquiryType) errors.enquiryType = 'Please select an enquiry type.';
  if (!values.message.trim()) errors.message = 'Please tell us briefly what your enquiry is about.';
  return errors;
}

/* Shared field classes — token-based, consistent with the newsletter input. */
const FIELD =
  'w-full border bg-white px-4 py-3 text-body text-ink placeholder:text-grey-400 transition-colors duration-250';
const FIELD_OK = `${FIELD} border-grey-200 hover:border-grey-400`;
const FIELD_ERR = `${FIELD} border-steel-600 ring-1 ring-steel-600`;

function Field({ id, label, required = false, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-display text-caption font-semibold uppercase tracking-[0.14em] text-grey-600">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="font-normal normal-case tracking-normal text-grey-400"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-caption font-medium text-steel-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ enquiryTypes }) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    // Clear a field's error as soon as the user starts correcting it.
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      // Move focus to the first invalid field for keyboard/AT users.
      const firstInvalid = Object.keys(nextErrors).find((k) => nextErrors[k]);
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    /* BACKEND INTEGRATION POINT — POST `values` here (see header comment). */
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className="border border-grey-200 bg-mist p-10">
        <h3 className="font-display text-h3 font-semibold text-navy">Thank you — we've received your enquiry.</h3>
        <p className="mt-3 text-body text-grey-600">
          The right team will come back to you within two working days. If your enquiry is urgent, call our
          global switchboard.
        </p>
      </div>
    );
  }

  const describedBy = (field) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact ELMEC">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="contact-name" label="Name" required error={errors.name}>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set('name')}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={errors.name ? FIELD_ERR : FIELD_OK}
          />
        </Field>

        <Field id="contact-company" label="Company" error={errors.company}>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={set('company')}
            className={FIELD_OK}
          />
        </Field>

        <Field id="contact-email" label="Email" required error={errors.email}>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set('email')}
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            className={errors.email ? FIELD_ERR : FIELD_OK}
          />
        </Field>

        <Field id="contact-phone" label="Phone" error={errors.phone}>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set('phone')}
            className={FIELD_OK}
          />
        </Field>
      </div>

      <div className="mt-6">
        <Field id="contact-enquiryType" label="Enquiry type" required error={errors.enquiryType}>
          <select
            id="contact-enquiryType"
            value={values.enquiryType}
            onChange={set('enquiryType')}
            aria-required="true"
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={describedBy('enquiryType')}
            className={`${errors.enquiryType ? FIELD_ERR : FIELD_OK} cursor-pointer`}
          >
            <option value="" disabled>
              Select an enquiry type…
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field id="contact-message" label="Message" required error={errors.message}>
          <textarea
            id="contact-message"
            rows={6}
            value={values.message}
            onChange={set('message')}
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy('message')}
            className={`${errors.message ? FIELD_ERR : FIELD_OK} resize-y`}
          />
        </Field>
      </div>

      <p className="mt-4 text-caption text-grey-500">
        Fields marked * are required. Your details are handled in line with our{' '}
        <a href="/privacy-policy" className="font-medium text-steel underline-offset-4 hover:underline">
          Privacy Policy
        </a>
        .
      </p>

      <div className="mt-8">
        <Button type="submit">Send enquiry</Button>
      </div>
    </form>
  );
}
