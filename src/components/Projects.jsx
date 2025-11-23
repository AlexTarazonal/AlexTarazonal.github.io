import { motion } from "framer-motion";
import { projects } from "../data/projects";

const wrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const card = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold mb-8"
        >
          Proyectos
        </motion.h2>

        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={card}
              whileHover={{ y: -6 }}
              className="group bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300 line-clamp-3">
                  {p.desc}
                </p>

                <div className="mt-4 flex gap-2">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm px-3 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90 transition"
                  >
                    Repo
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 transition"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
