import { useState, type FormEvent } from 'react';
import { Check, MoveRight, Phone, Send } from 'lucide-react';
import { Reveal, SectionLabel } from './ui';

const inputClasses =
  'mt-2 w-full rounded-[2px] border border-ink/20 bg-paper/80 px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-fern';

const labelClasses = 'block text-[13px] font-semibold text-ink';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !email || !message || !email.includes('@')) {
      setFormError('Please complete your name, a valid email and a short description of your farm.');
      setSubmitted(false);
      return;
    }
    setFormError('');
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-paper py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>Next step · Your field</SectionLabel>
            <h2 className="mt-7 font-display text-[clamp(2.4rem,3.8vw,3.9rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              Let&rsquo;s build a better water system <span className="text-fern">for your farm.</span>
            </h2>
            <p className="mt-7 max-w-[46ch] text-[16px] leading-7 text-ink/70">
              Tell us what you are working with, what is changing, and where you want the water to go. We will start
              there.
            </p>
            <div className="mt-10 border-t border-ink/12">
              <div
                className="flex items-center gap-3 border-b border-ink/12 py-5 text-[15px] font-medium text-ink/80"
                data-testid="text-contact-details"
              >
                <Phone size={17} className="shrink-0 text-fern" />
                Contact details shared after your enquiry
              </div>
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border-b border-ink/12 py-5 text-[15px] font-medium text-ink transition-colors hover:text-pine"
                data-testid="link-whatsapp"
              >
                <Send size={17} className="shrink-0 text-fern" />
                Message us on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={100}>
            {submitted ? (
              <div
                className="flex min-h-[440px] flex-col justify-center rounded-[2px] border border-fern/30 bg-fern/10 p-8 sm:p-12"
                data-testid="status-form-success"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-fern text-paper">
                  <Check size={24} />
                </span>
                <h3 className="mt-7 font-display text-3xl font-medium tracking-[-0.01em] text-ink">
                  Your note is on its way.
                </h3>
                <p className="mt-4 max-w-[48ch] text-[15px] leading-7 text-ink/70">
                  Thanks for starting the conversation. This form is set up for local review — a team member can follow
                  up through your preferred channel.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 w-fit border-b-2 border-amber pb-1 text-[14px] font-semibold text-ink transition-colors hover:border-ink"
                  data-testid="button-send-another"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-[2px] border border-ink/12 bg-sand/60 p-6 sm:p-10"
              >
                <div className="mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-pine">Field intake</span>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em] text-ink">
                    Start with the basics.
                  </h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className={labelClasses}>
                    Your name
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      className={inputClasses}
                      data-testid="input-name"
                    />
                  </label>
                  <label className={labelClasses}>
                    Email address
                    <input
                      name="email"
                      type="email"
                      placeholder="you@farm.com"
                      className={inputClasses}
                      data-testid="input-email"
                    />
                  </label>
                </div>
                <label className={`${labelClasses} mt-6 block`}>
                  What are you working on?
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="A new irrigation system, a greenhouse, water storage, farmer training..."
                    className={`${inputClasses} resize-none`}
                    data-testid="input-message"
                  />
                </label>
                {formError && (
                  <p className="mt-5 text-[13px] font-semibold text-clay" role="alert" data-testid="status-form-error">
                    {formError}
                  </p>
                )}
                <button
                  type="submit"
                  className="group mt-9 inline-flex items-center gap-3 rounded-[2px] bg-ink px-7 py-4 text-[15px] font-semibold text-paper transition-colors hover:bg-fern"
                  data-testid="button-submit-contact"
                >
                  Send your note
                  <MoveRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-5 max-w-[60ch] text-[12px] leading-5 text-ink/55">
                  This is a local enquiry form for demonstration. No message is sent until a backend connection is
                  configured.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
