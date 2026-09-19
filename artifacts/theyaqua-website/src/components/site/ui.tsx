import { useEffect, useRef, type ReactNode } from 'react';

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3" data-testid="brand-theyaqua">
      <img
        src="/logo-emblem.png"
        alt="Theyaqua logo"
        className="h-11 w-11 rounded-full bg-white object-cover shadow-sm"
      />
      <span
        className={`text-[1.3rem] font-bold uppercase tracking-[0.04em] ${
          light ? 'text-paper' : 'text-ink'
        }`}
      >
        They<span className="text-fern">aqua</span>
        <span className="text-amber">.</span>
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
      className={`flex w-fit items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] ${
        light ? 'text-amber' : 'text-pine'
      } ${className}`}
    >
      <span className={`h-px w-7 ${light ? 'bg-amber/70' : 'bg-pine/60'}`} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

/** Keeps photo grids gapless when the count doesn't fill the final row. */
export function gallerySpanClass(index: number, count: number): string {
  if (index !== count - 1) return '';
  if (count % 3 === 1) return 'sm:col-span-3 max-sm:col-span-2';
  if (count % 3 === 2) return 'sm:col-span-2 max-sm:col-span-2';
  if (count % 2 === 1) return 'max-sm:col-span-2';
  return '';
}

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
