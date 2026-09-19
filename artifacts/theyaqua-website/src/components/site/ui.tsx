import { Droplets } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3" data-testid="brand-theyaqua">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-[2px] bg-fern text-paper">
        <Droplets size={17} strokeWidth={2.1} />
        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-paper bg-amber" />
      </span>
      <span
        className={`font-display text-[1.35rem] font-semibold tracking-[-0.01em] ${
          light ? 'text-paper' : 'text-ink'
        }`}
      >
        theyaqua<span className="text-amber">.</span>
      </span>
    </span>
  );
}

export function SectionLabel({
  children,
  light = false,
  className = '',
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] ${
        light ? 'text-amber' : 'text-pine'
      } ${className}`}
    >
      <span className={`h-px w-7 ${light ? 'bg-amber/70' : 'bg-pine/60'}`} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

/** Scroll-triggered reveal. Respects prefers-reduced-motion via the global CSS override. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
