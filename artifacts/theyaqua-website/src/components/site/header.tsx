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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-ink/10 bg-paper/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="text-ink" onClick={closeMenu} data-testid="link-home">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`link-nav-${slugify(item.label)}`}
              className="relative text-[13px] font-medium tracking-[0.02em] text-ink/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-fern after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#account"
            data-testid="link-nav-create-account"
            className="text-[13px] font-medium tracking-[0.02em] text-ink/75 transition-colors hover:text-ink"
          >
            Create account
          </a>
          <a
            href="#contact"
            data-testid="link-nav-start"
            className="group inline-flex items-center gap-2.5 rounded-[2px] bg-ink px-5 py-3 text-[13px] font-semibold text-paper transition-colors hover:bg-fern"
          >
            Start a conversation
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink lg:hidden"
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
                <span className="font-display text-4xl font-medium leading-none transition-colors group-hover:text-amber">
                  {item.label}
                </span>
              </a>
            ))}
            <a
              href="#account"
              onClick={closeMenu}
              data-testid="link-mobile-create-account"
              className="py-5 text-[15px] font-medium text-paper/70"
            >
              Create account
            </a>
          </nav>
          <div className="shrink-0 px-5 pb-10 sm:px-8">
            <a
              href="#contact"
              onClick={closeMenu}
              data-testid="link-mobile-cta"
              className="group flex items-center justify-between rounded-[2px] bg-fern px-5 py-4 text-[15px] font-semibold text-paper"
            >
              Talk to Theyaqua
              <ArrowUpRight size={17} />
            </a>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">
              Water · Power · Agriculture
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
