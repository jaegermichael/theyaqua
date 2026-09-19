import { useState } from 'react';
import { ArrowUpRight, Plus, Sprout } from 'lucide-react';
import { approachSteps, projects, type ProjectFeature } from '../../data/site';
import { getImage, getImages } from '../../data/gallery';
import { Reveal, SectionLabel } from './ui';

/** Editorial statement with a real field photograph set inline within the sentence. */
export function Thesis() {
  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionLabel>Theyaqua · Point of view</SectionLabel>
              <div className="mt-10 flex items-center gap-3 text-pine">
                <Sprout size={20} strokeWidth={1.8} />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  Engineering water solutions for agriculture
                </span>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="font-display text-[clamp(2.1rem,3.6vw,3.6rem)] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
              The best water system is the one that makes the work feel{' '}
              <span
                role="img"
                aria-label="Drip irrigation line watering a crop row"
                className="mx-1 inline-block h-[0.82em] w-[1.9em] rounded-full bg-cover bg-center align-[-0.08em]"
                style={{ backgroundImage: `url(${getImage('drip-irrigation', 3)})` }}
              />{' '}
              <span className="text-fern">more certain.</span>
            </h2>
            <p className="mt-10 max-w-[62ch] text-[17px] leading-8 text-ink/75">
              Good agricultural infrastructure does not call attention to itself. It quietly delivers the right volume,
              to the right place, when the crop needs it. We make that outcome easier to understand, build and maintain.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Full-bleed image break dedicated to protected growing. */
export function GreenhouseBreak() {
  return (
    <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-deep text-paper">
      <img
        src={getImage('greenhouses', 4)}
        alt="Interior of a Theyaqua greenhouse with protected crops"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/15" aria-hidden="true" />
      <div
        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-deep/70 to-transparent lg:w-3/5"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-[1400px] items-end gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel light>Protected growing · Greenhouses</SectionLabel>
            <h2 className="mt-7 font-display text-[clamp(2.5rem,4.6vw,5rem)] font-medium leading-[1.02] tracking-[-0.015em]">
              Grow under cover, <span className="text-amber">with certainty.</span>
            </h2>
            <p className="mt-7 max-w-[52ch] text-[17px] leading-8 text-paper/80">
              A greenhouse turns a season into a system — protecting the crop while you control the climate, the water
              and the timing inside.
            </p>
            <a
              href="#capabilities"
              data-testid="link-greenhouses"
              className="group mt-9 inline-flex items-center gap-3 border-b-2 border-amber pb-1.5 text-[15px] font-semibold text-paper transition-colors hover:border-paper"
            >
              Explore greenhouses
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>
        <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
          <Reveal delay={150}>
            <div className="bg-amber p-6 text-ink">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Cover / Climate / Crop</span>
              <p className="mt-4 text-[14px] leading-6 text-ink/80">
                Structure, climate and irrigation engineered as one protected growing system.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Working method — sticky title beside a numbered step list. */
export function Approach() {
  return (
    <section id="approach" className="bg-paper py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionLabel>Working method · No guesswork</SectionLabel>
              <h2 className="mt-7 font-display text-[clamp(2.4rem,3.8vw,3.9rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
                Built around what agriculture <span className="text-fern">actually needs.</span>
              </h2>
              <p className="mt-7 max-w-[48ch] text-[16px] leading-7 text-ink/70">
                Every site has its own pressure, distance, soil, crop and ambition. Our job is to bring those details
                into one workable plan.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="border-b border-ink/12">
            {approachSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <div className="group grid grid-cols-[3.5rem_1fr] gap-5 border-t border-ink/12 py-9 sm:gap-8 lg:py-10">
                  <span className="pt-1.5 font-mono text-sm text-pine">{step.number}</span>
                  <div>
                    <div className="flex items-center justify-between gap-6">
                      <h3 className="font-display text-[1.7rem] font-medium leading-tight tracking-[-0.01em] text-ink">
                        {step.title}
                      </h3>
                      <ArrowUpRight
                        size={19}
                        className="shrink-0 text-amber transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                    <p className="mt-3 max-w-[52ch] text-[15px] leading-7 text-ink/70">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Perspective — asymmetric alternating features with expandable field galleries. */
function ProjectRow({ project, index }: { project: ProjectFeature; index: number }) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const images = getImages(project.slug);
  const reversed = index % 2 === 1;

  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14" data-testid={`card-project-${index}`}>
      <div className={`relative lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
        <div className="group relative overflow-hidden bg-ink/5">
          <img
            src={images[0]}
            alt={`${project.title} — ${project.type.toLowerCase()} on a working farm`}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        {images[1] && (
          <div
            className={`absolute -bottom-10 hidden w-[38%] overflow-hidden border-[6px] border-sand bg-ink/5 md:block ${
              reversed ? '-left-6' : '-right-6'
            }`}
          >
            <img
              src={images[1]}
              alt={`${project.title} — detail view`}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        )}
      </div>
      <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-pine">{project.type}</span>
          <h3 className="mt-3 font-display text-[clamp(1.9rem,2.6vw,2.6rem)] font-medium leading-tight tracking-[-0.01em] text-ink">
            {project.title}
          </h3>
          <button
            type="button"
            onClick={() => setGalleryOpen((open) => !open)}
            aria-expanded={galleryOpen}
            className="mt-7 inline-flex items-center gap-3 border-b-2 border-amber pb-1.5 text-[14px] font-semibold text-ink transition-colors hover:border-ink"
          >
            {galleryOpen ? 'Hide gallery' : 'View gallery'}
            <span className="font-mono text-[12px] text-ink/50">{String(images.length).padStart(2, '0')}</span>
            <Plus size={15} className={`transition-transform duration-300 ${galleryOpen ? 'rotate-45' : ''}`} />
          </button>
        </Reveal>
      </div>
      {galleryOpen && (
        <div
          className={`animate-in fade-in slide-in-from-top-2 duration-500 lg:col-span-12 ${reversed ? 'lg:order-3' : ''}`}
        >
          <div className="border-t border-ink/10 pt-8">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">Field gallery</span>
              <span className="font-mono text-[11px] text-ink/50">{images.length} photos</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {images.map((src, imageIndex) => (
                <div key={`${project.slug}-${imageIndex}`} className="overflow-hidden bg-ink/5">
                  <img
                    src={src}
                    alt={`${project.title} — photo ${imageIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export function Perspective() {
  return (
    <section id="perspective" className="bg-sand py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[740px]">
            <SectionLabel>Perspective · Infrastructure</SectionLabel>
            <h2 className="mt-7 font-display text-[clamp(2.4rem,4.2vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.015em] text-ink">
              Water is more than a resource. <span className="text-fern">It&rsquo;s infrastructure.</span>
            </h2>
          </div>
          <p className="max-w-[36ch] text-[15px] leading-7 text-ink/70 md:pb-2 md:text-right">
            A working system gives the rest of the farm room to work better.
          </p>
        </Reveal>
        <div className="mt-20 space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


