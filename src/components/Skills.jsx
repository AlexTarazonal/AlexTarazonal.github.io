import { motion } from "framer-motion";
import { skills } from "../data/cv";

const wrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const pill = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

function SkillGroup({ title, items, icon }) {
  return (
    <motion.div
      variants={card}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl"
    >
      {/* glow suave */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl" />

      <div className="flex items-center gap-2 mb-3">
        {icon && (
          <span className="text-fuchsia-300 text-lg">{icon}</span>
        )}
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>

      <motion.div
        variants={wrap}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {items.map((s) => (
          <motion.span
            key={s}
            variants={pill}
            whileHover={{ y: -3 }}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-neutral-100 transition hover:bg-white/20"
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-white mb-8"
        >
          Habilidades
        </motion.h2>

        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-5"
        >
          <SkillGroup title="Frontend" items={skills.frontend} icon="🎨" />
          <SkillGroup title="Backend" items={skills.backend} icon="⚙️" />
          <SkillGroup title="Bases de datos" items={skills.databases} icon="🗄️" />
          <SkillGroup title="DevOps / Infra" items={skills.devops} icon="🚀" />
          <SkillGroup title="Otros" items={skills.other} icon="🧩" />
          <SkillGroup title="Soft Skills" items={skills.soft} icon="🤝" />
        </motion.div>
      </div>
    </section>
  );
}
