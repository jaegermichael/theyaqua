import { useState } from 'react';
import { ArrowUpRight, Plus, Sprout } from 'lucide-react';
import { approachSteps, projects, type ProjectFeature } from '../../data/site';
import { getImage, getImages } from '../../data/gallery';
import { Reveal, SectionLabel } from './ui';

/** Editorial statement with a real field photograph set inline within the sentence. */
export function Thesis() {
  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-5 text-center sm:px-8 lg:px-12">
        <Reveal className="flex flex-col items-center gap-10">
          <SectionLabel className="justify-center">Theyaqua · Point of view</SectionLabel>
          <h2 className="max-w-[24em] font-display text-[clamp(2.1rem,3.4vw,3.4rem)] font-bold leading-[1.25] tracking-[-0.01em] text-ink">
            The best water system is the one that makes the work feel{' '}
            <span
              role="img"
              aria-label="Drip irrigation line watering a crop row"
              className="mx-1 inline-block h-[0.82em] w-[1.9em] rounded-full bg-cover bg-center align-[-0.08em]"
              style={{ backgroundImage: `url(${getImage('drip-irrigation', 3)})` }}
            />{' '}
            <span className="text-fern">more certain.</span>
          </h2>
          <p className="max-w-[62ch] text-[17px] leading-8 text-ink/75">
            Good agricultural infrastructure does not call attention to itself. It quietly delivers the right volume,
            to the right place, when the crop needs it. We make that outcome easier to understand, build and maintain.
          </p>
          <div className="flex items-center gap-3 text-pine">
            <Sprout size={20} strokeWidth={1.8} />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
              Engineering water solutions for agriculture
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Full-bleed image break dedicated to protected growing. */
export function GreenhouseBreak() {
  return (
    <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-deep text-paper">
      <img
        src={getImage('greenhouses', 4)}
        alt="Interior of a Theyaqua greenhouse with protected crops"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-deep/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,27,64,0.55)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="flex flex-col items-center gap-7">
          <SectionLabel light className="justify-center">
            Protected growing · Greenhouses
          </SectionLabel>
          <h2 className="max-w-[18em] text-[clamp(2.5rem,4.6vw,5rem)] font-bold leading-[1.05] tracking-[-0.01em]">
            Grow under cover, <span className="text-amber">with certainty.</span>
          </h2>
          <p className="max-w-[54ch] text-[17px] leading-8 text-paper/80">
            A greenhouse turns a season into a system — protecting the crop while you control the climate, the water
            and the timing inside.
          </p>
          <a
            href="#capabilities"
            data-testid="link-greenhouses"
            className="group mt-3 inline-flex items-center gap-3 rounded-full border border-amber px-7 py-3.5 text-[15px] font-bold text-paper transition-colors hover:bg-amber hover:text-ink"
          >
            Explore greenhouses
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/** Working method — centered header above a numbered step list. */
export function Approach() {
  return (
    <section id="approach" className="bg-paper py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col items-center gap-7 text-center">
          <SectionLabel className="justify-center">Working method · No guesswork</SectionLabel>
          <h2 className="max-w-[22em] font-display text-[clamp(2.4rem,3.8vw,3.9rem)] font-bold leading-[1.05] tracking-[-0.01em] text-ink">
            Built around what agriculture <span className="text-fern">actually needs.</span>
          </h2>
          <p className="max-w-[56ch] text-[16px] leading-7 text-ink/70">
            Every site has its own pressure, distance, soil, crop and ambition. Our job is to bring those details into
            one workable plan.
          </p>
        </Reveal>
        <div className="mx-auto mt-14 max-w-[900px] border-b border-ink/12">
          {approachSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 70}>
              <div className="group grid grid-cols-[3.5rem_1fr] gap-5 border-t border-ink/12 py-9 sm:gap-8 lg:py-10">
                <span className="pt-1.5 font-mono text-sm text-pine">{step.number}</span>
                <div>
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="text-[1.6rem] font-bold leading-tight tracking-[-0.01em] text-ink">{step.title}</h3>
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
          <h3 className="mt-3 text-[clamp(1.9rem,2.6vw,2.6rem)] font-bold leading-tight tracking-[-0.01em] text-ink">
            {project.title}
          </h3>
          <button
            type="button"
            onClick={() => setGalleryOpen((open) => !open)}
            aria-expanded={galleryOpen}
            className="mt-7 inline-flex items-center gap-3 rounded-full border-2 border-ink px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:border-amber hover:bg-amber"
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
        <Reveal className="flex flex-col items-center gap-7 text-center">
          <SectionLabel className="justify-center">Perspective · Infrastructure</SectionLabel>
          <h2 className="max-w-[20em] font-display text-[clamp(2.4rem,4.2vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.01em] text-ink">
            Water is more than a resource. <span className="text-fern">It&rsquo;s infrastructure.</span>
          </h2>
          <p className="max-w-[46ch] text-[15px] leading-7 text-ink/70">
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


