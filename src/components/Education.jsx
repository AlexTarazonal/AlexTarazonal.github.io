import { motion } from "framer-motion";
import { education, languages } from "../data/cv";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-950 border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Educación</h2>
          {education.map(e => (
            <div key={e.place} className="mb-3">
              <p className="font-semibold">{e.place}</p>
              <p className="text-neutral-300">{e.degree}</p>
              <p className="text-neutral-400 text-sm">{e.status}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="bg-neutral-950 border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Idiomas</h2>
          <div className="flex flex-col gap-2">
            {languages.map(l => (
              <div key={l.name} className="bg-white/5 border border-white/10 rounded-xl p-3">
                {l.name} — <span className="text-neutral-300">{l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
