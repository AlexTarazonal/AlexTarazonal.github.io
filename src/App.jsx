import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CertificationsList from './components/CertificationsList';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <Skills />
      <Experience />
      <Projects />

      <CertificationsList />
      <Certifications />

      <Education />
      <Footer />
    </>
  );
}
