import { ArrowLeft } from 'lucide-react';
import { BrandMark } from '@/components/site/ui';

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-paper px-5 text-center">
      <BrandMark />
      <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-pine">Error 404</p>
      <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.01em] text-ink">Page not found</h1>
      <p className="mt-4 max-w-[42ch] text-[15px] leading-7 text-ink/70">
        The page you are looking for has moved, been removed, or never existed.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[14px] font-bold text-paper transition-colors hover:bg-fern"
      >
        <ArrowLeft size={16} />
        Back to Theyaqua
      </a>
    </div>
  );
}
