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
        <div className="grid items-end gap-12 pb-14 lg:grid-cols-12 lg:gap-12 lg:pb-0">
          <div className="lg:col-span-7 lg:pb-24 lg:pt-16">
            <motion.div initial={entrance} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
              <SectionLabel>Water infrastructure · Agriculture</SectionLabel>
            </motion.div>

            <motion.h1
              initial={entrance}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 font-display text-[clamp(3rem,4.9vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.015em] text-ink"
            >
              Smarter water.
              <br />
              <span className="text-fern">Stronger agriculture.</span>
            </motion.h1>

            <motion.p
              initial={entrance}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-[52ch] text-[17px] leading-8 text-ink/75"
            >
              We engineer the systems that move water from source to soil — with clarity, care and a practical eye for
              what your farm needs next.
            </motion.p>

            <motion.div
              initial={entrance}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <a
                href="#contact"
                data-testid="link-hero-contact"
                className="group inline-flex items-center gap-3 rounded-[2px] bg-ink px-7 py-4 text-[15px] font-semibold text-paper transition-colors hover:bg-fern"
              >
                Plan your system
                <MoveRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#capabilities"
                data-testid="link-hero-capabilities"
                className="inline-flex items-center gap-2 border-b-2 border-amber pb-1.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
              >
                See capabilities
                <ArrowDownRight size={16} />
              </a>
            </motion.div>
          </div>

          <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative -mx-5 sm:-mx-8 lg:col-span-5 lg:mx-0"
          >
            <div className="relative overflow-hidden bg-deep">
              <motion.img
                style={{ y: heroImageY }}
                src={heroImage}
                fetchPriority="high"
                decoding="async"
                alt="Drip irrigation lines running through a green field"
                className="h-[400px] w-full scale-[1.14] object-cover sm:h-[500px] lg:h-[640px]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-deep/85 to-transparent px-5 pb-4 pt-16 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/85 sm:px-8 lg:px-6">
                <span>From source · to soil</span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
                  System in operation
                </span>
              </figcaption>
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
