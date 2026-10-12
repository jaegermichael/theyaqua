import { renderToString } from 'react-dom/server';
import App from './App';
import { ErrorBoundary } from './components/error-boundary';
import { capabilities } from './data/site';

export function render() {
  return renderToString(<ErrorBoundary><App /></ErrorBoundary>);
}

const url = 'https://www.theyaqua.co.zw/';
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${url}#organization`,
      name: 'Theyaqua',
      url,
      logo: `${url}logo-emblem.png`,
      description: 'Irrigation systems, greenhouses, steel pipe works, water storage reservoirs and farmer training.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Irrigation and agricultural engineering services',
        itemListElement: capabilities.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${url}#${service.slug}-service`,
            name: service.title,
            description: service.description,
            url: `${url}#${service.slug}`,
            provider: { '@id': `${url}#organization` },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${url}#website`,
      name: 'Theyaqua',
      url,
      inLanguage: 'en',
      publisher: { '@id': `${url}#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: 'Irrigation Systems & Greenhouses | Theyaqua',
      isPartOf: { '@id': `${url}#website` },
      about: { '@id': `${url}#organization` },
      inLanguage: 'en',
      primaryImageOfPage: { '@type': 'ImageObject', url: `${url}og-image.png` },
    },
  ],
};
