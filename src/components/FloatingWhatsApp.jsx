import { motion } from "framer-motion";

export default function FloatingWhatsApp({ phone, message }) {
    const cleanPhone = String(phone).replace(/\D/g, "");
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    const url = `https://wa.me/${cleanPhone}${text}`;

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat por WhatsApp"
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="
        fixed z-[9999]
        bottom-6 right-6 md:bottom-8 md:right-8
        h-16 w-16 rounded-full
        bg-[#25D366] text-white
        flex items-center justify-center
        shadow-[0_10px_30px_rgba(0,0,0,0.45)]
        ring-2 ring-white/30
        outline-none
      "
            style={{
                // soporte para iPhone notch / safe-area
                bottom: "max(1.5rem, env(safe-area-inset-bottom))",
                right: "max(1.5rem, env(safe-area-inset-right))",
            }}
        >
            {/* anillo glow */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl animate-pulse" />

            {/* Icono WhatsApp */}
            <svg
                viewBox="0 0 24 24"
                className="relative h-8 w-8"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="M20.52 3.48A11.91 11.91 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.76.99 1-3.67-.24-.38a9.9 9.9 0 1 1 8.42 4.66Zm5.76-7.86c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.42-.03-.58-.08-.16-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.42-.3.32-1.13 1.1-1.13 2.67 0 1.57 1.15 3.1 1.31 3.31.16.22 2.27 3.47 5.5 4.86.77.33 1.35.53 1.81.67.77.24 1.46.21 2.01.13.62-.1 1.9-.78 2.17-1.52.27-.75.27-1.4.19-1.52-.08-.13-.3-.21-.62-.37Z"
                />
            </svg>
        </motion.a>
    );
}
