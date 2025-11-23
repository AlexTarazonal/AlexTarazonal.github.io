import { motion } from "framer-motion";
import { profile } from "../data/cv";

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-3xl font-extrabold mb-4">Acerca de mí</h2>
          <p className="text-neutral-200 leading-relaxed">
            {profile.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold mb-3">Datos rápidos</h3>
          <ul className="space-y-2 text-neutral-200">
            <li><b>Rol:</b> {profile.role}</li>
            <li><b>Email:</b> {profile.email}</li>
            <li><b>Teléfono:</b> {profile.phone}</li>
            <li><b>LinkedIn:</b> <a className="text-fuchsia-300 hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">Ver perfil</a></li>
            <li><b>GitHub:</b> <a className="text-fuchsia-300 hover:underline" href={profile.github} target="_blank" rel="noreferrer">Ver repos</a></li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
