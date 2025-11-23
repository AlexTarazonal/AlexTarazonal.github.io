import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import foto from "../assets/image/mi-foto.jpg";
import linkedin from "../assets/png/linkedin-ico.png";
import github from "../assets/png/github-ico.png";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
};
const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[92vh] flex items-center pt-16">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-neutral-900" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
            >
                <div>
                    <motion.p variants={item} className="text-sm tracking-widest uppercase text-neutral-300">
                        Full Stack Developer
                    </motion.p>

                    <motion.h1 variants={item} className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                        Hola, soy{" "}
                        <span className="text-fuchsia-400">Alexander Tarazona</span>
                    </motion.h1>

                    <motion.p variants={item} className="mt-5 text-lg text-neutral-200 leading-relaxed">
                        Construyo apps web rápidas, escalables y bonitas con React + Vite,
                        NestJS y MySQL. Me enfoco en buen diseño, rendimiento y arquitectura limpia.
                    </motion.p>

                    <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] transition"
                        >
                            Ver proyectos <ArrowDownRight className="inline ml-1 h-4 w-4" />
                        </a>

                        <a
                            href={`${import.meta.env.BASE_URL}cv.pdf`}
                            download="Alexander-Tarazona-CV.pdf"
                            className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
                        >
                            Descargar CV
                        </a>
                    </motion.div>


                    <motion.div variants={item} className="mt-7 flex gap-4">
                        <a href="https://www.linkedin.com/in/alexander-tarazona-ba7757187/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="h-9 w-9 opacity-90 hover:opacity-100 hover:scale-110 transition" />
                        </a>
                        <a href="https://github.com/AlexTarazonal" target="_blank" rel="noreferrer">
                            <img src={github} alt="GitHub" className="h-9 w-9 opacity-90 hover:opacity-100 hover:scale-110 transition" />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 blur-2xl opacity-40" />
                        <img
                            src={foto}
                            className="w-40 h-40 md:w-60 md:h-60 rounded-xl object-cover shadow-xl"
                            alt="Foto"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
