import { motion } from "framer-motion";
import { profile } from "../data/cv";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-neutral-950">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-tr from-fuchsia-500/10 to-cyan-400/10 border border-white/10 rounded-2xl p-8 text-center"
                >
                    <h2 className="text-3xl font-extrabold">¿Trabajamos juntos?</h2>
                    <p className="text-neutral-200 mt-3">
                        Estoy disponible para roles Full Stack / Frontend / Backend.
                        Si te interesa mi perfil, conversemos.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                        <a
                            href={`mailto:${profile.email}`}
                            className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] transition inline-flex gap-2 items-center justify-center"
                        >
                            <Mail className="h-4 w-4" /> {profile.email}
                        </a>

                        <a
                            href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition inline-flex gap-2 items-center justify-center"
                        >
                            <Phone className="h-4 w-4" /> {profile.phone}
                        </a>

                    </div>

                    <div className="mt-5 flex justify-center gap-4 text-neutral-200">
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex gap-2 items-center">
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </a>
                        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex gap-2 items-center">
                            <Github className="h-4 w-4" /> GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
