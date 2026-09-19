import { useEffect, useState, type FormEvent } from 'react';
import { Check, MoveRight } from 'lucide-react';
import { Reveal, SectionLabel } from './ui';

interface FieldAccount {
  name: string;
  email: string;
  farm: string;
}

const inputClasses =
  'mt-2 w-full rounded-full border border-ink/20 bg-transparent px-5 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-fern';

const labelClasses = 'block text-[13px] font-semibold text-ink';

export function AccountSection() {
  const [account, setAccount] = useState<FieldAccount | null>(null);
  const [accountError, setAccountError] = useState('');

  useEffect(() => {
    const savedAccount = window.localStorage.getItem('theyaqua-field-account');
    if (savedAccount) {
      try {
        setAccount(JSON.parse(savedAccount) as FieldAccount);
      } catch {
        window.localStorage.removeItem('theyaqua-field-account');
      }
    }
  }, []);

  const handleCreateAccount = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('account-name') || '').trim();
    const email = String(form.get('account-email') || '').trim().toLowerCase();
    const farm = String(form.get('account-farm') || '').trim();
    const password = String(form.get('account-password') || '');
    const confirmation = String(form.get('account-password-confirmation') || '');

    if (!name || !farm || !email.includes('@')) {
      setAccountError('Please enter your name, farm name and a valid email.');
      return;
    }
    if (password.length < 8) {
      setAccountError('Your password must be at least 8 characters.');
      return;
    }
    if (password !== confirmation) {
      setAccountError('The passwords do not match.');
      return;
    }

    const nextAccount = { name, email, farm };
    window.localStorage.setItem('theyaqua-field-account', JSON.stringify(nextAccount));
    setAccount(nextAccount);
    setAccountError('');
    event.currentTarget.reset();
  };

  const handleSignOut = () => {
    window.localStorage.removeItem('theyaqua-field-account');
    setAccount(null);
  };

  return (
    <section id="account" className="bg-deep py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <SectionLabel light className="justify-center">
            Field account · Access
          </SectionLabel>
          <h2 className="max-w-[20em] text-[clamp(2.4rem,3.8vw,3.9rem)] font-bold leading-[1.05] tracking-[-0.01em]">
            Keep your farm plans <span className="text-amber">close.</span>
          </h2>
          <p className="max-w-[52ch] text-[16px] leading-7 text-paper/70">
            Create a field account to keep your basic farm profile ready for the next conversation with Theyaqua.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 max-w-[760px]">
          <Reveal delay={100}>
            {account ? (
              <div className="rounded-[2px] bg-paper p-7 text-ink sm:p-10" data-testid="status-account-created">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-fern text-paper">
                  <Check size={24} />
                </span>
                <h3 className="mt-7 font-display text-3xl font-medium tracking-[-0.01em]">Welcome, {account.name}.</h3>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-ink/70">
                  Your field account is ready for {account.farm}. We will use {account.email} when you start a
                  conversation.
                </p>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="mt-8 border-b-2 border-amber pb-1 text-[14px] font-semibold transition-colors hover:border-ink"
                  data-testid="button-account-sign-out"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <form onSubmit={handleCreateAccount} noValidate className="rounded-[2px] bg-paper p-6 text-ink sm:p-10">
                <div className="mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-pine">Account setup</span>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">Create your account.</h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className={labelClasses}>
                    Your name
                    <input
                      name="account-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Name"
                      className={inputClasses}
                      data-testid="input-account-name"
                    />
                  </label>
                  <label className={labelClasses}>
                    Email address
                    <input
                      name="account-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@farm.com"
                      className={inputClasses}
                      data-testid="input-account-email"
                    />
                  </label>
                </div>
                <label className={`${labelClasses} mt-6 block`}>
                  Farm or company
                  <input
                    name="account-farm"
                    type="text"
                    placeholder="Farm name"
                    className={inputClasses}
                    data-testid="input-account-farm"
                  />
                </label>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <label className={labelClasses}>
                    Password
                    <input
                      name="account-password"
                      type="password"
                      autoComplete="new-password"
                      placeholder="8+ characters"
                      className={inputClasses}
                      data-testid="input-account-password"
                    />
                  </label>
                  <label className={labelClasses}>
                    Confirm password
                    <input
                      name="account-password-confirmation"
                      type="password"
                      autoComplete="new-password"
                      placeholder="Repeat password"
                      className={inputClasses}
                      data-testid="input-account-password-confirmation"
                    />
                  </label>
                </div>
                {accountError && (
                  <p
                    className="mt-5 text-[13px] font-semibold text-clay"
                    role="alert"
                    data-testid="status-account-error"
                  >
                    {accountError}
                  </p>
                )}
                <button
                  type="submit"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[15px] font-bold text-paper transition-colors hover:bg-pine"
                  data-testid="button-create-account"
                >
                  Create account
                  <MoveRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-5 max-w-[60ch] text-[12px] leading-5 text-ink/55">
                  This browser demo stores your profile locally. Connect a secure auth service before using it for
                  production accounts.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
