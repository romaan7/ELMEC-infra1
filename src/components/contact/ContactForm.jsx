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
 * SUBMISSION (Netlify Forms) ----------------------------------------------
 * The form POSTs to Netlify Forms (the site is hosted on Netlify). A
 * hidden mirror form in index.html registers the fields at build time,
 * and a honeypot field ("bot-field") filters basic spam.
 *
 * ✉️ RECIPIENT: submissions are emailed to mukhtarmohsin9@gmail.com.
 * The recipient is NOT set in code — configure it once in the Netlify
 * dashboard: Site settings → Forms → Form notifications → Email
 * notification → mukhtarmohsin9@gmail.com. Submissions also appear under
 * the site's "Forms" tab regardless of notification settings.
 *
 * NOTE: Netlify Forms only works on the deployed site — locally
 * (npm run dev / preview) the POST has no receiver, so the form shows
 * the error state with a direct-email fallback. That is expected.
 * ------------------------------------------------------------------------
 */

/** Direct fallback shown if the POST fails (e.g. running locally). */
const FALLBACK_EMAIL = 'mukhtarmohsin9@gmail.com';

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
  const [botField, setBotField] = useState(''); // honeypot — humans leave this empty
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | failed

  const set = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    // Clear a field's error as soon as the user starts correcting it.
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      // Move focus to the first invalid field for keyboard/AT users.
      const firstInvalid = Object.keys(nextErrors).find((k) => nextErrors[k]);
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // POST to Netlify Forms (see header comment). Netlify matches the
    // submission to the hidden "contact" form registered in index.html
    // and emails it per the dashboard notification settings.
    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', 'bot-field': botField, ...values }).toString(),
      });
      if (!response.ok) throw new Error(`Form POST failed: ${response.status}`);
      setStatus('success');
    } catch {
      setStatus('failed');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="border border-grey-200 bg-mist p-10">
        <h3 className="font-display text-h3 font-semibold text-navy">Thank you — we've received your enquiry.</h3>
        <p className="mt-3 text-body text-grey-600">
          We'll come back to you within two working days. If your enquiry is urgent, call the
          number on this page.
        </p>
      </div>
    );
  }

  const describedBy = (field) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact ELMEC" name="contact" data-netlify="true">
      {/* Netlify form name + honeypot (visually hidden, tab-skipped) */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Don't fill this in if you're human:
          <input type="text" name="bot-field" tabIndex={-1} value={botField} onChange={(e) => setBotField(e.target.value)} />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="contact-name" label="Name" required error={errors.name}>
          <input
            id="contact-name"
            name="name"
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
            name="company"
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
            name="email"
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
            name="phone"
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
            name="enquiryType"
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
            name="message"
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

      {/* Submission failure — announce and offer the direct-email fallback */}
      {status === 'failed' && (
        <p role="alert" className="mt-4 border-l-2 border-steel-600 pl-4 text-caption font-medium text-steel-600">
          Something went wrong sending your enquiry. Please email us directly at{' '}
          <a href={`mailto:${FALLBACK_EMAIL}`} className="underline underline-offset-4">
            {FALLBACK_EMAIL}
          </a>
          .
        </p>
      )}

      <div className="mt-8">
        <Button
          type="submit"
          disabled={status === 'sending'}
          aria-busy={status === 'sending'}
          className="disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </Button>
      </div>
    </form>
  );
}
