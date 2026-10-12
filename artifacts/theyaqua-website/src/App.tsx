import { Header } from './components/site/header';
import { Hero } from './components/site/hero';
import { Capabilities } from './components/site/capabilities';
import { Approach, GreenhouseBreak, Perspective, Thesis } from './components/site/features';
import { AccountSection } from './components/site/account';
import { ContactSection } from './components/site/contact';
import { Footer } from './components/site/footer';

function App() {
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
