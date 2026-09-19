import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Droplets, Gauge, MoveRight, Sprout, Zap } from 'lucide-react';
import { getImage } from '../../data/gallery';
import { principles } from '../../data/site';

const principleIcons = [Droplets, Gauge, Zap, Sprout];

const entrance = { opacity: 0, y: 20 } as const;

export function Hero() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 1000], [0, 120]);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-deep text-paper"
    >
      <motion.img
        style={{ y: heroImageY }}
        src={getImage('centre-pivots', 1)}
        fetchPriority="high"
        decoding="async"
        alt="Centre pivot irrigation system watering a large green field"
        className="absolute inset-0 h-full w-full scale-[1.12] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/75 via-deep/40 to-deep/90" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,27,64,0.45)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={entrance}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-2.5 rounded-full border border-paper/25 bg-deep/40 px-4 py-2 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fern" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/90">
            Irrigation &amp; agricultural engineering
          </span>
        </motion.div>

        <motion.h1
          initial={entrance}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-[16em] text-[clamp(2.9rem,6.6vw,6.2rem)] font-bold leading-[1.02] tracking-[-0.01em]"
        >
          Smarter water.
          <br />
          <span className="text-amber">Stronger agriculture.</span>
        </motion.h1>

        <motion.p
          initial={entrance}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 max-w-[58ch] text-[17px] leading-8 text-paper/80"
        >
          We engineer the systems that move water from source to soil — with clarity, care and a practical eye for
          what your farm needs next.
        </motion.p>

        <motion.div
          initial={entrance}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            data-testid="link-hero-contact"
            className="group inline-flex items-center gap-3 rounded-full bg-amber px-8 py-4 text-[15px] font-bold text-ink transition-colors hover:bg-paper"
          >
            Plan your system
            <MoveRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#capabilities"
            data-testid="link-hero-capabilities"
            className="group inline-flex items-center gap-2.5 rounded-full border border-paper/40 px-8 py-4 text-[15px] font-bold text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            See capabilities
            <ArrowDownRight size={16} />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-8 border-t border-paper/15 pt-10 sm:grid-cols-4"
        >
          {principles.map((principle, index) => {
            const Icon = principleIcons[index] ?? Droplets;
            return (
              <div key={principle.title} className="flex flex-col items-center gap-2 text-center">
                <Icon size={20} strokeWidth={1.8} className="text-amber" />
                <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-paper">
                  {principle.title}
                </span>
                <span className="text-[13px] text-paper/65">{principle.note}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-paper/15">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60 sm:px-8 lg:px-12">
          <span className="text-paper/85">Adapt · Endure · Evolve</span>
          <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-amber sm:block" />
          <span>Centre pivots</span>
          <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-paper/30 sm:block" />
          <span>Drip irrigation</span>
          <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-paper/30 sm:block" />
          <span>Greenhouses</span>
          <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-paper/30 sm:block" />
          <span>Storage · Training</span>
        </div>
      </div>
    </section>
  );
}
