import { motion } from "framer-motion";
import DualBlob from "../components/DualBlob";


export default function CallToAction() {
  return (
    <section className="relative py-20 bg-gradient-to-b  to-white text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600 mb-4"
      >
        Got New Project?
      </motion.h2>

      {/* Línea decorativa */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-purple-600 mx-auto mb-6"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-600 mb-6 text-lg"
      >
        Call us for fast support to this number.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
      >
        +1 650-681-8831
      </motion.p>

      <motion.a
        href="mailto:info@staffbridge.com"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-blue-900 text-white font-semibold shadow-lg hover:opacity-90 transition"
      >
        CALL US
      </motion.a>

            <DualBlob className="absolute -bottom-30 -right-5 opacity-80" />
      
    </section>
  );
}
