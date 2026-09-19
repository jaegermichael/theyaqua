import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, MoveRight } from 'lucide-react';
import { heroImage } from '../../data/gallery';
import { principles } from '../../data/site';
import { SectionLabel } from './ui';

const entrance = { opacity: 0, y: 18 } as const;

export function Hero() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 900], [0, 110]);

  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-24 sm:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={entrance}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center justify-between gap-6"
        >
          <SectionLabel>Water infrastructure · Agriculture</SectionLabel>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50 sm:block">
            Design · Install · Train
          </span>
        </motion.div>

        <motion.h1
          initial={entrance}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10 mt-9 font-display text-[clamp(3.1rem,8vw,7.75rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-ink"
        >
          Smarter water. <span className="text-fern">Stronger agriculture.</span>
        </motion.h1>

        <div className="relative mt-8 grid gap-10 pb-14 lg:mt-0 lg:grid-cols-12 lg:gap-12 lg:pb-16">
          <motion.div
            initial={entrance}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-4 lg:pt-10"
          >
            <p className="max-w-[46ch] text-[17px] leading-8 text-ink/75">
              We engineer the systems that move water from source to soil — with clarity, care and a practical eye for
              what your farm needs next.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#contact"
                data-testid="link-hero-contact"
                className="group inline-flex items-center gap-3 rounded-[2px] bg-amber px-7 py-4 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Plan your system
                <MoveRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#capabilities"
                data-testid="link-hero-capabilities"
                className="inline-flex items-center gap-2 border-b-2 border-ink pb-1.5 text-[15px] font-semibold text-ink transition-colors hover:border-fern hover:text-pine"
              >
                See capabilities
                <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="mt-12 hidden items-center gap-3 border-t border-ink/10 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 lg:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fern" />
              Systems in operation · From source to soil
            </div>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="order-1 -mx-5 sm:-mx-8 lg:order-2 lg:col-span-8 lg:mx-0 lg:-mt-14"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 hidden h-[70%] w-1/3 translate-x-3 translate-y-3 bg-fern sm:block lg:-bottom-6 lg:-right-6"
              />
              <div className="relative overflow-hidden bg-deep">
                <motion.img
                  style={{ y: heroImageY }}
                  src={heroImage}
                  fetchPriority="high"
                  decoding="async"
                  alt="Drip irrigation lines running through a green field"
                  className="h-[360px] w-full scale-[1.14] object-cover sm:h-[460px] lg:h-[540px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-paper/90 to-transparent lg:h-24"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-deep/85 to-transparent px-5 pb-4 pt-16 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/85 sm:px-8 lg:px-6">
                  <span>From source · to soil</span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
                    System in operation
                  </span>
                </figcaption>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>

      <div className="border-t border-ink/10" aria-label="Company principles">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`flex items-center gap-3 border-ink/10 px-5 py-6 sm:px-8 lg:px-12 lg:py-7 ${
                index % 2 === 1 ? 'max-md:border-l' : ''
              } ${index > 1 ? 'max-md:border-t' : ''} ${index > 0 ? 'md:border-l' : ''}`}
            >
              <span className="font-mono text-[11px] text-amber">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/80">
                {principle.title} / {principle.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
