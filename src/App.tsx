import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsMarquee } from './components/SkillsMarquee';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <ProjectsSection />
        <ServicesSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}