import { useState, useEffect, useRef, FormEvent } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';

const STATES = [
  'Wisconsin', 'Minnesota', 'Iowa', 'Illinois', 'Michigan', 'Other',
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  city: string;
  state: string;
  zip: string;
  notes: string;
  botField: string;
}

const initialForm: FormData = {
  fullName: '',
  email: '',
  phone: '',
  addressLine1: '',
  city: '',
  state: '',
  zip: '',
  notes: '',
  botField: '',
};

export default function ContactModal() {
  const { isOpen, source, closeContactModal } = useContactModal();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setForm(initialForm);
      setSuccess(false);
      setError('');
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeContactModal();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeContactModal]);

  if (!isOpen) return null;

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const payload = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': form.botField,
      full_name: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      address_line1: form.addressLine1.trim(),
      city: form.city.trim(),
      state: form.state,
      zip: form.zip.trim(),
      notes: form.notes.trim(),
      source_button: source,
    });

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      const body = await res.text();
      // SPA catch-all rewrite can return index.html with 200 when Forms did not handle the POST
      const isSpaFallback =
        /id=["']root["']/.test(body) ||
        /KSG Fiber — Fiber-Fast/i.test(body);
      if (!res.ok || isSpaFallback) {
        throw new Error(`Form submission failed: ${res.status}`);
      }
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closeContactModal();
  };

  const inputCls = 'w-full px-4 py-2.5 rounded-lg border border-slate-200 font-body text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fiber-blue/30 focus:border-fiber-blue transition-colors';

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-midnight/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-slideUp max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeContactModal}
          aria-label="Close contact form"
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500"
        >
          <X className="w-4 h-4" />
        </button>

        {success ? (
          <div className="px-8 py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-signal-green/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-signal-green" />
            </div>
            <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">Thank You!</h2>
            <p className="font-body text-slate-500 leading-relaxed max-w-sm mx-auto mb-8">
              We've received your information. Our team will reach out to you shortly.
            </p>
            <button onClick={closeContactModal} className="btn-green px-8 py-3">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="px-8 pt-8 pb-4">
              <h2 id="contact-modal-title" className="font-display font-bold text-2xl text-slate-900 mb-1">
                Get Started with KSG Fiber
              </h2>
              <p className="font-body text-[14px] text-slate-500">
                Enter your details and we'll check availability at your address.
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="px-8 pb-8 space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden" aria-hidden="true">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" tabIndex={-1} autoComplete="off" value={form.botField} onChange={(e) => update('botField', e.target.value)} />
                </label>
              </div>
              <div>
                <label htmlFor="cm-name" className="block font-display text-[13px] font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input ref={firstInputRef} id="cm-name" type="text" required value={form.fullName} onChange={(e) => update('fullName', e.target.value)} className={inputCls} placeholder="John Doe" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cm-email" className="block font-display text-[13px] font-semibold text-slate-700 mb-1">
                    Email
                  </label>
                  <input id="cm-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls} placeholder="john@email.com" />
                </div>
                <div>
                  <label htmlFor="cm-phone" className="block font-display text-[13px] font-semibold text-slate-700 mb-1">
                    Phone
                  </label>
                  <input id="cm-phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputCls} placeholder="(555) 555-5555" />
                </div>
              </div>

              <div>
                <label htmlFor="cm-address" className="block font-display text-[13px] font-semibold text-slate-700 mb-1">
                  Street Address
                </label>
                <input id="cm-address" type="text" required value={form.addressLine1} onChange={(e) => update('addressLine1', e.target.value)} className={inputCls} placeholder="123 Main St" />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="cm-city" className="block font-display text-[13px] font-semibold text-slate-700 mb-1">
                    City
                  </label>
                  <input id="cm-city" type="text" required value={form.city} onChange={(e) => update('city', e.target.value)} className={inputCls} placeholder="Green Bay" />
                </div>
                <div>
                  <label htmlFor="cm-state" className="block font-display text-[13px] font-semibold text-slate-700 mb-1">
                    State
                  </label>
                  <select id="cm-state" required value={form.state} onChange={(e) => update('state', e.target.value)} className={`${inputCls} bg-white`}>
                    <option value="">Select</option>
                    {STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="cm-zip" className="block font-display text-[13px] font-semibold text-slate-700 mb-1">
                    ZIP
                  </label>
                  <input id="cm-zip" type="text" required value={form.zip} onChange={(e) => update('zip', e.target.value)} className={inputCls} placeholder="54301" />
                </div>
              </div>

              <div>
                <label htmlFor="cm-notes" className="block font-display text-[13px] font-semibold text-slate-700 mb-1">
                  Notes <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea id="cm-notes" rows={3} value={form.notes} onChange={(e) => update('notes', e.target.value)} className={`${inputCls} resize-none`} placeholder="Anything else you'd like us to know?" />
              </div>

              {error && (
                <p className="font-body text-[13px] text-red-600 bg-red-50 px-4 py-2 rounded-lg">{error}</p>
              )}

              <button type="submit" disabled={submitting} className="w-full btn-green justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
