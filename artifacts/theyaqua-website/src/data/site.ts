import {
  Droplets,
  GraduationCap,
  HardHat,
  Orbit,
  Warehouse,
  Waves,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navItems = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Our approach', href: '#approach' },
  { label: 'Perspective', href: '#perspective' },
  { label: 'Contact', href: '#contact' },
] as const;

export interface Capability {
  number: string;
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  details: string[];
}

export const capabilities: Capability[] = [
  {
    number: '01',
    icon: Orbit,
    title: 'Centre pivots',
    slug: 'centre-pivots',
    description: 'Full-field, automated coverage for large areas — precise, uniform water application without guesswork.',
    details: ['Automated pivot systems', 'Uniform field coverage', 'Pressure and timing control'],
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Drip irrigation',
    slug: 'drip-irrigation',
    description: 'Water delivered drop by drop to the root zone, so every plant gets exactly what it needs.',
    details: ['Drip and micro irrigation', 'Filtration and fertigation', 'Efficient water use'],
  },
  {
    number: '03',
    icon: Warehouse,
    title: 'Greenhouses',
    slug: 'greenhouses',
    description: 'Protected growing environments that extend your season and shield the crop from the elements.',
    details: ['Structure and covering', 'Internal climate control', 'Year-round production'],
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Steel pipe works',
    slug: 'steel-pipe-works',
    description: 'Fabrication and installation of the pipework that carries your water reliably from source to field.',
    details: ['Pipe fabrication', 'Manifolds and connections', 'Field installation'],
  },
  {
    number: '05',
    icon: Waves,
    title: 'Storage reservoirs',
    slug: 'storage-reservoirs',
    description: 'Secure storage that holds up to demand, so water is there when the crop calls for it.',
    details: ['Reservoirs and tanks', 'Lining and sealing', 'Pumping and distribution'],
  },
  {
    number: '06',
    icon: GraduationCap,
    title: 'Farmers training',
    slug: 'farmers-training',
    description: 'Hands-on training that leaves your team confident to run, maintain and improve the system.',
    details: ['Operator training', 'Maintenance know-how', 'Water-smart practices'],
  },
];

export const principles = [
  { title: 'Flow', note: 'Planned' },
  { title: 'Pressure', note: 'Balanced' },
  { title: 'Power', note: 'Considered' },
  { title: 'Growth', note: 'Supported' },
] as const;

export interface ProjectFeature {
  title: string;
  type: string;
  slug: string;
}

export const projects: ProjectFeature[] = [
  { title: 'From source to crop', type: 'Drip irrigation', slug: 'drip-irrigation' },
  { title: 'A field with a rhythm', type: 'Centre pivots', slug: 'centre-pivots' },
  { title: 'Protected growing', type: 'Greenhouses', slug: 'greenhouses' },
];

export const approachSteps = [
  { number: '01', title: 'Understand', text: 'Listen first. Map the source, field, crop and constraints.' },
  { number: '02', title: 'Design', text: 'Shape a system that is clear to build and simple to run.' },
  { number: '03', title: 'Install', text: 'Put the plan in the ground with care for every connection.' },
  { number: '04', title: 'Support', text: 'Stay close to the system as your operation moves forward.' },
] as const;
