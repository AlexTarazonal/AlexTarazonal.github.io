import { motion } from "framer-motion";
import { experience } from "../data/cv";

const item = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-white mb-10"
        >
          Experiencia laboral
        </motion.h2>

        <div className="relative border-l border-white/10 pl-6 space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company + job.role}
              custom={i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              {/* Punto timeline */}
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-fuchsia-400 shadow-lg" />

              <div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">
                    {job.role} —{" "}
                    <span className="text-fuchsia-300">{job.company}</span>
                  </h3>
                  <p className="text-sm text-neutral-300 font-medium">
                    {job.date}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-neutral-200 leading-relaxed">
                  {job.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-fuchsia-300 mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {job.stack && (
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm text-neutral-300">
                    <span className="font-semibold text-white">Stack:</span>{" "}
                    {job.stack}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
