import { BrandMark } from './ui';

const footerLinks = [
  { label: 'Capabilities', href: '#capabilities', testid: 'link-footer-capabilities' },
  { label: 'Our approach', href: '#approach', testid: 'link-footer-approach' },
  { label: 'Perspective', href: '#perspective', testid: 'link-footer-perspective' },
  { label: 'Field account', href: '#account', testid: 'link-footer-account' },
  { label: 'Contact', href: '#contact', testid: 'link-footer-contact' },
] as const;

export function Footer() {
  return (
    <footer className="bg-deep text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandMark light />
            <p className="mt-7 max-w-[34ch] text-[15px] leading-7 text-paper/60">
              Practical water engineering for farms that are ready for what is next.
            </p>
          </div>
          <div className="lg:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">Site</span>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-testid={link.testid}
                    className="text-[15px] text-paper/75 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">Start a conversation</span>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-7 text-paper/60">
              Tell us about your field, your water and what comes next.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-3 rounded-[2px] bg-fern px-6 py-4 text-[14px] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Plan your system
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-[14px] text-paper/70 underline decoration-amber/60 underline-offset-4 transition-colors hover:text-amber"
              data-testid="link-footer-whatsapp"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-paper/15 pt-7 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/45 sm:flex-row">
          <span>© {new Date().getFullYear()} Theyaqua Pvt Ltd</span>
          <span>Water · Power · Agriculture</span>
        </div>
      </div>
    </footer>
  );
}
