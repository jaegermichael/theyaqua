import { useEffect } from 'react';

import { Header } from './components/site/header';
import { Hero } from './components/site/hero';
import { Capabilities } from './components/site/capabilities';
import { Approach, GreenhouseBreak, Perspective, Thesis } from './components/site/features';
import { AccountSection } from './components/site/account';
import { ContactSection } from './components/site/contact';
import { Footer } from './components/site/footer';

function App() {
  useEffect(() => {
    document.title = 'Theyaqua | Smarter Water. Stronger Agriculture.';
    const description =
      'Theyaqua engineers centre pivots, drip irrigation, greenhouses, steel pipe works and water storage systems for working farms.';
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

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="grain min-h-[100dvh] bg-paper text-ink">
        <Hero />
        <Thesis />
        <Capabilities />
        <GreenhouseBreak />
        <Approach />
        <Perspective />
        <AccountSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
