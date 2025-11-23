import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { profile } from "./data/cv";
function App() {
  return (
    <div className="bg-neutral-950 text-neutral-200 min-h-screen">
      
      <Header />

      {/* HERO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Hero />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <About />
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Skills />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Experience />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Projects />
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Certifications />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Contact />
        </div>
      </section>
    
      {/* Botón flotante WhatsApp global */}
      <FloatingWhatsApp
        phone={profile.phone}
        message="Hola Alex, vi tu portafolio y me gustaría conversar contigo 🙂"
      />
    </div>
  );
}

export default App;
