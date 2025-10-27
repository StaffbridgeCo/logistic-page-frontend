"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Particles from "./Particles";

export default function EmpowerSection() {
  return (
    <section className="relative mt-28 py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
      {/* Fondo animado con Particles */}
      <Particles count={25} />

      {/* Círculo decorativo difuso */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center max-w-3xl mx-auto px-6 z-10"
      >
        {/* Título principal */}
        <motion.h3
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-6"
        >
          Empower Your Supply Chain
        </motion.h3>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-lg md:text-xl mb-5 leading-relaxed"
        >
          Building your nearshore logistics team isn’t just about cost efficiency it’s
          about creating a stronger, more agile operation powered by committed professionals.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-800 text-lg font-medium mb-10"
        >
          Let’s build the logistics team that keeps your business moving forward.
        </motion.p>

        {/* Botón sencillo */}
        <div className="flex justify-center">
          <Link
            to="/get-started"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
