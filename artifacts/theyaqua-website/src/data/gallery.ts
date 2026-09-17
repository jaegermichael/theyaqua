export interface GalleryCategory {
  slug: string;
  title: string;
  images: string[];
}

/**
 * Loads every gallery image eagerly so Vite can resolve, hash and
 * serve them with the correct base path in every environment.
 */
const imageModules = import.meta.glob('../assets/gallery/**/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const categoryOrder: Array<{ slug: string; title: string }> = [
  { slug: 'centre-pivots', title: 'Centre pivots' },
  { slug: 'drip-irrigation', title: 'Drip irrigation' },
  { slug: 'greenhouses', title: 'Greenhouses' },
  { slug: 'steel-pipe-works', title: 'Steel pipe works' },
  { slug: 'storage-reservoirs', title: 'Storage reservoirs' },
  { slug: 'farmers-training', title: 'Farmers training' },
];

export const galleryCategories: GalleryCategory[] = categoryOrder.map((category) => {
  const prefix = `../assets/gallery/${category.slug}/`;
  const images = Object.keys(imageModules)
    .filter((key) => key.startsWith(prefix))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((key) => imageModules[key]);

  return { ...category, images };
});

export function getImages(slug: string): string[] {
  return galleryCategories.find((category) => category.slug === slug)?.images ?? [];
}

export function getImage(slug: string, index = 0): string {
  const images = getImages(slug);
  return images[Math.abs(index) % Math.max(images.length, 1)] ?? '';
}

/** A single landscape image used for the hero and featured sections. */
export const heroImage = getImage('drip-irrigation', 0);
