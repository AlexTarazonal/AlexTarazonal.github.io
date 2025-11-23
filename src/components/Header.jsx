import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "Acerca de mí" },
  { id: "skills", label: "Habilidades" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "certifications", label: "Certificaciones" },
  { id: "education", label: "Educación" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const offsets = links.map(l => {
        const el = document.getElementById(l.id);
        if (!el) return { id: l.id, top: Infinity };
        return { id: l.id, top: el.getBoundingClientRect().top };
      });
      const current = offsets
        .filter(o => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];
      if (current) setActive(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? "backdrop-blur bg-black/50 border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => goTo("home")} className="font-extrabold tracking-tight text-lg">
          Alex<span className="text-fuchsia-400">Tarazona</span>
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className={`px-3 py-2 rounded-lg text-sm transition 
                ${active === l.id ? "bg-white/10 text-white" : "text-neutral-300 hover:text-white hover:bg-white/5"}`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/cv.pdf"
            download="Alexander-Tarazona-CV.pdf"
            className="ml-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:scale-[1.02] transition"
          >
            Descargar CV
          </a>
        </nav>

        {/* Mobile button */}
        <button className="md:hidden" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/80 backdrop-blur border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map(l => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition 
                    ${active === l.id ? "bg-white/10 text-white" : "text-neutral-300 hover:text-white hover:bg-white/5"}`}
                >
                  {l.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                download="Alexander-Tarazona-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold text-center"
              >
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
