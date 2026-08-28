import { useEffect, useState, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Droplets,
  HardHat,
  Menu,
  MoveRight,
  Phone,
  Pin,
  Send,
  Sprout,
  SunMedium,
  Waves,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Our approach', href: '#approach' },
  { label: 'Perspective', href: '#perspective' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    number: '01',
    icon: Droplets,
    title: 'Irrigation systems',
    description: 'Water delivery designed around your crops, soil, pressure and season — from source to root zone.',
    details: ['Drip and micro irrigation', 'Sprinkler systems', 'Filtration and fertigation'],
    image: 'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '02',
    icon: Waves,
    title: 'Water source & storage',
    description: 'Build confidence into the source: boreholes, abstraction, tanks and reservoirs that hold up to demand.',
    details: ['Borehole equipment', 'Storage tanks and reservoirs', 'Pumping and distribution'],
    image: 'https://images.pexels.com/photos/161853/gallon-barrel-water-liquid-161853.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '03',
    icon: SunMedium,
    title: 'Solar pumping',
    description: 'Turn open sky into dependable water movement with solar pumping systems sized for the work.',
    details: ['Solar pump sizing', 'Array and controller setup', 'Hybrid-ready systems'],
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Agricultural infrastructure',
    description: 'The practical connections between source, field and future expansion — made clear and buildable.',
    details: ['Pipework and manifolds', 'Pump houses and controls', 'Maintenance planning'],
    image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const projects = [
  {
    title: 'From source to crop',
    type: 'Water systems',
    image: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tint: 'from-[#0e3340]/10 to-[#0e3340]/80',
  },
  {
    title: 'A field with a rhythm',
    type: 'Irrigation',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tint: 'from-[#2b6547]/10 to-[#2b6547]/80',
  },
  {
    title: 'Power where it matters',
    type: 'Solar pumping',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1400',
    tint: 'from-[#a77a2d]/10 to-[#193d4a]/80',
  },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function BrandMark() {
  return (
    <span className="flex items-center gap-3" data-testid="brand-theyaqua">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#2e7655] text-[#f7f3e8]">
        <Droplets size={18} strokeWidth={2.2} />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#f7f3e8] bg-[#d6a943]" />
      </span>
      <span className="font-display text-xl font-bold tracking-[-0.04em]">theyaqua<span className="text-[#d6a943]">.</span></span>
    </span>
  );
}

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className={`font-mono-custom flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] ${light ? 'text-[#bad3c5]' : 'text-[#2e7655]'}`}>
      <span className={`h-px w-8 ${light ? 'bg-[#d6a943]' : 'bg-[#2e7655]'}`} />
      {children}
    </div>
  );
}

function App() {
  useReveal();
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 700], [0, 90]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.title = 'Theyaqua | Smarter Water. Stronger Agriculture.';
    const description = 'Theyaqua engineers practical water, irrigation, solar pumping and agricultural infrastructure systems for working farms.';
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', 'Theyaqua | Smarter Water. Stronger Agriculture.');
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !email || !message || !email.includes('@')) {
      setFormError('Please complete your name, a valid email and a short description of your farm.');
      setSubmitted(false);
      return;
    }
    setFormError('');
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain min-h-[100dvh] bg-[#f7f3e8] text-[#163240]">
      <header className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#f7f3e8]/95 shadow-[0_1px_0_rgba(22,50,64,.12)] backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="text-[#163240]" onClick={closeMenu} data-testid="link-home"><BrandMark /></a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-xs font-semibold tracking-[0.06em] text-[#163240]/75 transition-colors hover:text-[#2e7655]" data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="group flex items-center gap-3 rounded-full bg-[#163240] px-5 py-3 text-xs font-bold tracking-[0.05em] text-[#f7f3e8] transition-all hover:bg-[#2e7655]" data-testid="link-nav-start">
              Start a conversation <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-full p-2 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} data-testid="button-mobile-menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#163240]/10 bg-[#f7f3e8] px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu} className="border-b border-[#163240]/10 py-4 text-sm font-semibold" data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`}>{item.label}</a>
              ))}
              <a href="#contact" onClick={closeMenu} className="mt-3 inline-flex items-center justify-between rounded-full bg-[#2e7655] px-5 py-4 text-sm font-bold text-[#f7f3e8]" data-testid="link-mobile-contact">Talk to Theyaqua <ArrowUpRight size={16} /></a>
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-[#dfe9d9] pt-[76px]">
        <div className="mx-auto grid min-h-[670px] max-w-[1380px] grid-cols-1 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }}>
              <SectionLabel>Water infrastructure / agriculture</SectionLabel>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .25 }} className="mt-8 max-w-[720px] font-display text-[clamp(2.75rem,10.5vw,7.3rem)] font-extrabold leading-[.91] tracking-[-0.075em] text-[#163240] sm:text-[clamp(3.4rem,7.2vw,7.3rem)]">
              Smarter water.<br /><span className="text-[#2e7655]">Stronger<br className="sm:hidden" /> agriculture.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }} className="mt-8 max-w-[470px] text-base leading-7 text-[#163240]/72 sm:text-lg">
              We engineer the systems that move water from source to soil — with clarity, care and a practical eye for what your farm needs next.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .6 }} className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-4 rounded-full bg-[#2e7655] px-6 py-4 text-sm font-bold text-[#f7f3e8] transition-transform hover:-translate-y-0.5" data-testid="link-hero-contact">
                Plan your system <MoveRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#capabilities" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-[#163240] underline decoration-[#d6a943] decoration-2 underline-offset-8" data-testid="link-hero-capabilities">See capabilities <ArrowDownRight size={16} /></a>
            </motion.div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-0">
            <motion.img style={{ y: heroImageY }} src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Agricultural field rows extending toward a tree line at sunrise" className="absolute inset-0 h-[calc(100%+90px)] w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#dfe9d9] via-transparent to-[#163240]/10 lg:from-[#dfe9d9] lg:via-transparent" />
            <div className="absolute bottom-7 left-5 right-5 flex items-end justify-between text-[#f7f3e8] sm:left-8 sm:right-8">
              <div className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-[#f7f3e8]/80">Field note / 06:18</div>
              <div className="flex items-center gap-2 text-xs font-semibold"><span className="h-2 w-2 rounded-full bg-[#d6a943]" /> Systems in motion</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#163240]/15" />
      </section>

      <section className="bg-[#163240] text-[#f7f3e8]" aria-label="Company principles">
        <div className="mx-auto grid max-w-[1380px] grid-cols-2 divide-x divide-[#f7f3e8]/15 md:grid-cols-4">
          {['FLOW / planned', 'PRESSURE / balanced', 'POWER / considered', 'GROWTH / supported'].map((label, i) => (
            <motion.div key={label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * .12 }} className="flex min-h-[86px] items-center justify-center px-4 text-center font-mono-custom text-[9px] tracking-[.16em] text-[#b8d3c4] sm:text-[10px]">
              <span className="mr-2 text-[#d6a943]">0{i + 1}</span>{label}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f3e8] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="reveal mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div>
            <SectionLabel>Theyaqua / point of view</SectionLabel>
            <div className="mt-10 flex items-center gap-3 text-[#2e7655]"><Sprout size={22} /><span className="font-mono-custom text-[10px] uppercase tracking-[.18em]">Engineering water solutions for agriculture</span></div>
          </div>
          <div>
            <h2 className="max-w-[860px] font-display text-[clamp(2.5rem,5vw,5.4rem)] font-bold leading-[.98] tracking-[-.065em] text-[#163240]">
              The best water system is the one that makes the work feel <span className="text-[#2e7655]">more certain.</span>
            </h2>
            <p className="mt-8 max-w-[620px] text-lg leading-8 text-[#163240]/65">
              Good agricultural infrastructure does not call attention to itself. It quietly delivers the right volume, to the right place, when the crop needs it. We make that outcome easier to understand, build and maintain.
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-[#f0e9d8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="reveal flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <SectionLabel>Capabilities / the full picture</SectionLabel>
              <h2 className="mt-7 max-w-[720px] font-display text-[clamp(2.7rem,5.8vw,6rem)] font-bold leading-[.94] tracking-[-.07em] text-[#163240]">Everything your farm needs to <span className="text-[#2e7655]">move water.</span></h2>
            </div>
            <p className="max-w-[285px] text-sm leading-6 text-[#163240]/65">One connected view of the source, the power, the pipe and the field.</p>
          </div>
          <div className="mt-16 grid gap-3 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const active = index === activeService;
              return (
                <motion.article layout key={service.number} className={`group overflow-hidden border border-[#163240]/15 ${active ? 'bg-[#163240] text-[#f7f3e8]' : 'bg-[#f7f3e8]/50 text-[#163240]'} transition-colors duration-500`} data-testid={`card-service-${service.number}`}>
                  <button type="button" onClick={() => setActiveService(active ? -1 : index)} className="flex w-full items-start justify-between gap-6 p-6 text-left sm:p-8" aria-expanded={active} data-testid={`button-service-${service.number}`}>
                    <span className="flex items-start gap-5">
                      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${active ? 'bg-[#2e7655] text-[#f7f3e8]' : 'bg-[#dce9d5] text-[#2e7655]'}`}><Icon size={21} /></span>
                      <span><span className={`font-mono-custom block text-[10px] tracking-[.2em] ${active ? 'text-[#d6a943]' : 'text-[#2e7655]'}`}>{service.number} / SYSTEM</span><span className="mt-3 block font-display text-2xl font-bold tracking-[-.04em] sm:text-3xl">{service.title}</span></span>
                    </span>
                    <span className={`mt-1 shrink-0 rounded-full border p-2 transition-transform ${active ? 'rotate-180 border-[#f7f3e8]/30' : 'border-[#163240]/20'}`}><ChevronDown size={16} /></span>
                  </button>
                  {active && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 border-t border-[#f7f3e8]/15 px-6 pb-7 sm:grid-cols-[1fr_180px] sm:px-8">
                      <div className="pt-5"><p className="max-w-[440px] text-sm leading-6 text-[#f7f3e8]/72">{service.description}</p><ul className="mt-5 grid gap-2 text-xs text-[#f7f3e8]/80">{service.details.map((detail) => <li key={detail} className="flex items-center gap-2"><Check size={13} className="text-[#d6a943]" />{detail}</li>)}</ul></div>
                      <img src={service.image} alt={`${service.title} in an agricultural setting`} className="h-32 w-full object-cover grayscale-[.25] sm:mt-5 sm:h-36" />
                    </motion.div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2e7655] px-5 py-24 text-[#f7f3e8] sm:px-8 lg:px-12 lg:py-32">
        <div className="absolute -right-16 top-12 h-64 w-64 rounded-full border border-[#d6a943]/30 sm:h-96 sm:w-96" />
        <div className="absolute -right-4 top-24 h-48 w-48 rounded-full border border-[#d6a943]/20 sm:h-72 sm:w-72" />
        <div className="relative mx-auto grid max-w-[1380px] items-center gap-16 lg:grid-cols-[1fr_.9fr]">
          <div className="reveal">
            <SectionLabel light>Energy / an open resource</SectionLabel>
            <h2 className="mt-8 max-w-[760px] font-display text-[clamp(3.1rem,7vw,7.4rem)] font-bold leading-[.9] tracking-[-.075em]">Power your water<br /><span className="text-[#d6a943]">with the sun.</span></h2>
            <p className="mt-8 max-w-[500px] text-lg leading-8 text-[#f7f3e8]/75">Solar pumping can bring a different kind of steadiness to your water system. We help you understand where it fits — and where it does not.</p>
            <a href="#contact" className="group mt-9 inline-flex items-center gap-3 border-b border-[#d6a943] pb-3 text-sm font-bold" data-testid="link-solar-contact">Explore solar pumping <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
          <div className="reveal relative mx-auto w-full max-w-[540px]">
            <div className="aspect-[4/5] overflow-hidden bg-[#163240]">
              <img src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Solar panels under a bright open sky" className="h-full w-full object-cover opacity-80 mix-blend-luminosity" />
            </div>
            <div className="absolute -bottom-5 -left-4 bg-[#d6a943] p-5 text-[#163240] sm:-left-7 sm:p-7">
              <SunMedium size={25} strokeWidth={1.5} />
              <div className="mt-7 font-mono-custom text-[10px] uppercase tracking-[.18em]">sun / source / system</div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="bg-[#f7f3e8] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1380px]">
          <div className="reveal grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div><SectionLabel>Working method / no guesswork</SectionLabel></div>
            <div><h2 className="max-w-[800px] font-display text-[clamp(2.8rem,5vw,5.2rem)] font-bold leading-[.95] tracking-[-.065em]">Built around what agriculture <span className="text-[#2e7655]">actually needs.</span></h2><p className="mt-7 max-w-[560px] text-base leading-7 text-[#163240]/65">Every site has its own pressure, distance, soil, crop and ambition. Our job is to bring those details into one workable plan.</p></div>
          </div>
          <div className="mt-16 grid border-y border-[#163240]/15 md:grid-cols-4 md:divide-x md:divide-[#163240]/15">
            {[
              ['01', 'Understand', 'Listen first. Map the source, field, crop and constraints.'],
              ['02', 'Design', 'Shape a system that is clear to build and simple to run.'],
              ['03', 'Install', 'Put the plan in the ground with care for every connection.'],
              ['04', 'Support', 'Stay close to the system as your operation moves forward.'],
            ].map(([number, title, text], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="group border-b border-[#163240]/15 px-1 py-8 last:border-0 md:border-b-0 md:px-7 md:py-10">
                <div className="flex items-center justify-between"><span className="font-mono-custom text-xs text-[#2e7655]">{number}</span><ArrowUpRight size={17} className="text-[#d6a943] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                <h3 className="mt-12 font-display text-3xl font-bold tracking-[-.045em]">{title}</h3><p className="mt-4 text-sm leading-6 text-[#163240]/62">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="perspective" className="bg-[#dfe9d9] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel>Perspective / infrastructure</SectionLabel><h2 className="mt-7 max-w-[740px] font-display text-[clamp(2.8rem,5.5vw,5.7rem)] font-bold leading-[.92] tracking-[-.07em]">Water is more than a resource.<br /><span className="text-[#2e7655]">It's infrastructure.</span></h2></div><p className="max-w-[280px] text-sm leading-6 text-[#163240]/65">A working system gives the rest of the farm room to work better.</p></div>
          <div className="mt-16 grid auto-rows-[220px] gap-4 md:grid-cols-12 md:auto-rows-[190px]">
            {projects.map((project, index) => (
              <motion.article key={project.title} whileHover={{ y: -5 }} className={`group relative overflow-hidden ${index === 0 ? 'md:col-span-7 md:row-span-2' : 'md:col-span-5'}`} data-testid={`card-project-${index}`}>
                <img src={project.image} alt={`${project.title}, agricultural water infrastructure`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.tint}`} />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 text-[#f7f3e8] sm:p-7"><div><div className="font-mono-custom text-[9px] uppercase tracking-[.2em] text-[#d6a943]">{project.type}</div><h3 className="mt-2 font-display text-2xl font-bold tracking-[-.04em]">{project.title}</h3></div><ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f7f3e8] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1380px] gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-28">
          <div className="reveal">
            <SectionLabel>Next step / your field</SectionLabel>
            <h2 className="mt-8 max-w-[630px] font-display text-[clamp(3rem,6.5vw,6.8rem)] font-bold leading-[.9] tracking-[-.075em]">Let's build a better water system <span className="text-[#2e7655]">for your farm.</span></h2>
            <p className="mt-8 max-w-[410px] text-base leading-7 text-[#163240]/65">Tell us what you are working with, what is changing, and where you want the water to go. We will start there.</p>
            <div className="mt-10 space-y-5 border-t border-[#163240]/15 pt-7">
              <div className="flex items-center gap-3 text-sm font-semibold" data-testid="text-contact-details"><Phone size={17} className="text-[#2e7655]" /> Contact details shared after your enquiry</div>
              <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-semibold" data-testid="link-whatsapp"><Send size={17} className="text-[#2e7655]" /> WhatsApp conversation</a>
            </div>
          </div>
          <div className="reveal">
            {submitted ? (
              <div className="flex min-h-[440px] flex-col justify-center border border-[#2e7655]/30 bg-[#dfe9d9] p-8 sm:p-12" data-testid="status-form-success">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2e7655] text-[#f7f3e8]"><Check size={26} /></span>
                <h3 className="mt-8 font-display text-4xl font-bold tracking-[-.05em]">Your note is on its way.</h3>
                <p className="mt-4 max-w-[380px] leading-7 text-[#163240]/65">Thanks for starting the conversation. This form is set up for local review — a team member can follow up through your preferred channel.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-8 w-fit text-sm font-bold underline decoration-[#d6a943] decoration-2 underline-offset-8" data-testid="button-send-another">Send another note</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-[#163240]/15 bg-[#f0e9d8]/50 p-6 sm:p-10" noValidate>
                <div className="mb-9 flex items-start justify-between gap-6"><div><div className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#2e7655]">Field intake / 01</div><h3 className="mt-3 font-display text-3xl font-bold tracking-[-.045em]">Start with the basics.</h3></div><Pin size={22} className="text-[#d6a943]" /></div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="text-xs font-bold">Your name<input name="name" type="text" placeholder="Name" className="mt-2 w-full border-0 border-b border-[#163240]/25 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#163240]/40 focus:border-[#2e7655]" data-testid="input-name" /></label>
                  <label className="text-xs font-bold">Email address<input name="email" type="email" placeholder="you@farm.com" className="mt-2 w-full border-0 border-b border-[#163240]/25 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#163240]/40 focus:border-[#2e7655]" data-testid="input-email" /></label>
                </div>
                <label className="mt-7 block text-xs font-bold">What are you working on?<textarea name="message" rows={4} placeholder="A new irrigation system, a water source, solar pumping..." className="mt-2 w-full resize-none border-0 border-b border-[#163240]/25 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#163240]/40 focus:border-[#2e7655]" data-testid="input-message" /></label>
                {formError && <p className="mt-5 text-xs font-semibold text-[#a64034]" role="alert" data-testid="status-form-error">{formError}</p>}
                <button type="submit" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#163240] px-6 py-4 text-sm font-bold text-[#f7f3e8] transition-colors hover:bg-[#2e7655]" data-testid="button-submit-contact">Send your note <MoveRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
                <p className="mt-5 text-[11px] leading-5 text-[#163240]/50">This is a local enquiry form for demonstration. No message is sent until a backend connection is configured.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#163240] px-5 py-12 text-[#f7f3e8] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#f7f3e8]/15 pb-12 md:flex-row md:items-start">
            <div><BrandMark /><p className="mt-6 max-w-[280px] text-sm leading-6 text-[#f7f3e8]/55">Practical water engineering for farms that are ready for what is next.</p></div>
            <div className="grid grid-cols-2 gap-x-14 gap-y-4 text-sm text-[#f7f3e8]/70"><a href="#capabilities" className="transition-colors hover:text-[#d6a943]" data-testid="link-footer-capabilities">Capabilities</a><a href="#approach" className="transition-colors hover:text-[#d6a943]" data-testid="link-footer-approach">Our approach</a><a href="#perspective" className="transition-colors hover:text-[#d6a943]" data-testid="link-footer-perspective">Perspective</a><a href="#contact" className="transition-colors hover:text-[#d6a943]" data-testid="link-footer-contact">Contact</a></div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 font-mono-custom text-[9px] uppercase tracking-[.17em] text-[#f7f3e8]/40 sm:flex-row"><span>© {new Date().getFullYear()} Theyaqua Pvt Ltd</span><span>Water / power / agriculture</span></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
