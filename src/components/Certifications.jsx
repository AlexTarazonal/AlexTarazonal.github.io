import { motion } from "framer-motion";
import { certifications as certImgs } from "../data/cv"; // si quieres lista de texto


export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold mb-8"
        >
          Certificaciones
        </motion.h2>
      
        {/* Lista texto pro */}
        <ul className="grid md:grid-cols-2 gap-3 text-neutral-200">
          {certImgs.map((c) => (
            <li key={c} className="bg-white/5 border border-white/10 rounded-xl p-3">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
