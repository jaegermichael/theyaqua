import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { capabilities } from '../../data/site';
import { getImages } from '../../data/gallery';
import { Reveal, SectionLabel, gallerySpanClass } from './ui';

export function Capabilities() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section id="capabilities" className="bg-sand py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <SectionLabel className="justify-center">Capabilities · The full picture</SectionLabel>
          <h2 className="max-w-[20em] font-display text-[clamp(2.4rem,4.2vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.01em] text-ink">
            Everything your farm needs to <span className="text-fern">move water.</span>
          </h2>
          <p className="max-w-[46ch] text-[15px] leading-7 text-ink/70">
            One connected view of the source, the power, the pipe and the field.
          </p>
        </Reveal>

        <div className="mt-16 border-b border-ink/12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const images = getImages(capability.slug);
            const active = activeCapability === index;

            return (
              <Reveal key={capability.number} delay={index * 60}>
                <article
                  className={`border-t border-ink/12 transition-colors duration-300 ${
                    active ? 'bg-paper' : 'hover:bg-paper/60'
                  }`}
                  data-testid={`card-capability-${capability.number}`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveCapability(active ? -1 : index)}
                    aria-expanded={active}
                    data-testid={`button-capability-${capability.number}`}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 px-5 py-7 text-left sm:grid-cols-[3.5rem_1fr_auto_auto] sm:gap-6 sm:px-8 lg:grid-cols-[4.5rem_1fr_auto_3rem] lg:px-12 lg:py-8"
                  >
                    <span
                      className={`font-mono text-sm transition-colors ${active ? 'text-amber' : 'text-pine'}`}
                    >
                      {capability.number}
                    </span>
                    <span>
                      <span
                        className={`block font-display text-[1.65rem] font-bold leading-tight tracking-[-0.01em] transition-all duration-300 lg:text-[2.1rem] ${
                          active ? 'text-ink' : 'text-ink'
                        }`}
                      >
                        {capability.title}
                      </span>
                      <span className="mt-1.5 block max-w-[62ch] text-[14px] leading-6 text-ink/65">
                        {capability.description}
                      </span>
                    </span>
                    <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45 sm:block">
                      {String(images.length).padStart(2, '0')} photos
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? 'rotate-180 border-ink bg-ink text-paper'
                          : 'border-ink/20 text-ink/60'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {active && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-500 border-t border-ink/10">
                      <div className="grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:px-12 lg:py-12">
                        <div>
                          <span className="flex items-center gap-3 text-fern">
                            <Icon size={20} strokeWidth={1.8} />
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{capability.slug.replace(/-/g, ' ')}</span>
                          </span>
                          <ul className="mt-6 space-y-3">
                            {capability.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-3 text-[15px] leading-6 text-ink/80">
                                <Check size={16} className="mt-1 shrink-0 text-amber" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {images.map((src, imageIndex) => {
                            const wide = imageIndex === images.length - 1 && images.length % 3 === 1;
                            return (
                              <div
                                key={src}
                                className={`overflow-hidden bg-ink/5 ${gallerySpanClass(imageIndex, images.length)}`}
                              >
                                <img
                                  src={src}
                                  alt={`${capability.title} — photo ${imageIndex + 1}`}
                                  loading="lazy"
                                  decoding="async"
                                  className={`w-full object-cover transition-transform duration-700 hover:scale-[1.04] ${
                                    wide ? 'aspect-[21/9]' : 'aspect-[4/3]'
                                  }`}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
