import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems } from '../../data/site';
import { BrandMark } from './ui';

function slugify(label: string) {
  return label.toLowerCase().replace(/\s/g, '-');
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const light = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink/10 bg-paper/90 shadow-[0_8px_30px_rgba(13,27,64,0.06)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className={light ? 'text-paper' : 'text-ink'} onClick={closeMenu} data-testid="link-home">
          <BrandMark light={light} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`link-nav-${slugify(item.label)}`}
              className={`relative text-[13px] font-semibold tracking-[0.02em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-amber after:transition-all after:duration-300 hover:after:w-full ${
                light ? 'text-paper/85 hover:text-paper' : 'text-ink/75 hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#account"
            data-testid="link-nav-create-account"
            className={`text-[13px] font-semibold tracking-[0.02em] transition-colors ${
              light ? 'text-paper/85 hover:text-paper' : 'text-ink/75 hover:text-ink'
            }`}
          >
            Create account
          </a>
          <a
            href="#contact"
            data-testid="link-nav-start"
            className="group inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-[13px] font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Start a conversation
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`-mr-2 flex h-11 w-11 items-center justify-center lg:hidden ${
            light ? 'text-paper' : 'text-ink'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-deep text-paper lg:hidden">
          <div className="flex h-[76px] shrink-0 items-center justify-between px-5 sm:px-8">
            <a href="#top" onClick={closeMenu} data-testid="link-home-mobile">
              <BrandMark light />
            </a>
            <button
              type="button"
              onClick={closeMenu}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-paper"
              aria-label="Close menu"
              data-testid="button-mobile-menu-close"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-5 sm:px-8" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                data-testid={`link-mobile-${slugify(item.label)}`}
                className="group flex items-baseline gap-4 border-b border-paper/10 py-5"
              >
                <span className="font-mono text-xs text-amber">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-3xl font-bold leading-none transition-colors group-hover:text-amber">
                  {item.label}
                </span>
              </a>
            ))}
            <a
              href="#account"
              onClick={closeMenu}
              data-testid="link-mobile-create-account"
              className="py-5 text-[15px] font-semibold text-paper/70"
            >
              Create account
            </a>
          </nav>
          <div className="shrink-0 px-5 pb-10 sm:px-8">
            <a
              href="#contact"
              onClick={closeMenu}
              data-testid="link-mobile-cta"
              className="flex items-center justify-between rounded-full bg-amber px-6 py-4 text-[15px] font-bold text-ink"
            >
              Talk to Theyaqua
              <ArrowUpRight size={17} />
            </a>
            <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">
              Adapt · Endure · Evolve
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
