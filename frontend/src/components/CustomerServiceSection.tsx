// components/CustomerServiceSection.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import VideoTextMask from "./VideoTextMask";
import Particles from "./Particles";
import Blob from "./Blob";

export default function CustomerServiceSection() {
  const [showFirst, setShowFirst] = useState(true);

  // 🔄 Alterna imágenes cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Video con texto animado */}
      <VideoTextMask
        videoSrc="/videos/customerService2.mp4"
        topText="CUSTOMER"
        bottomText="SERVICE"
      />

      {/* Sección de contenido */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Particles count={30} />
        <Blob className="absolute top-20 left-50 opacity-55 z-0" />

        {/* Columna izquierda - Texto */}
        <div className="space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            Exceptional Service, Powered by Nearshore Talent
          </h2>
          <p className="text-lg text-gray-600">
            Build high-performing customer service teams in LATAM. Fluent, empathetic, and culturally aligned professionals ready to deliver meaningful experiences for your brand.
          </p>
          <p className="text-lg text-gray-600">
            Ideal customer service goes beyond answering calls it’s about creating real connections that strengthen your brand and build lasting loyalty.
          </p>
          <p className="text-lg text-gray-600">
            We help U.S. companies create dedicated customer service teams in LATAM that combine empathy, skill, and efficiency to deliver experiences that truly resonate with their clients.
          </p>
          <p className="text-lg text-gray-600">
            From a single customer representative to a full 24/7 support center, your team will feel like an extension of your own fluent in English, culturally aligned, and trained to provide consistent, high-quality service.
          </p>

          {/* CTA */}
          <motion.a
            href="https://staffbridge.co/get-started"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition"
          >
            Get Started
          </motion.a>
        </div>

        {/* ⭐⭐⭐ COLUMNA DERECHA — CARRUSEL AUTOMÁTICO ⭐⭐⭐ */}
        <div className="relative flex justify-center lg:justify-end items-center w-full h-[420px] z-20 overflow-hidden">

          <AnimatePresence mode="wait">
            {showFirst ? (
              <motion.div
                key="img1"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <div className="relative group">

                  {/* Imagen uniforme */}
                  <div className="w-[380px] h-[380px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/customerService5.png"
                      alt="Customer Service Team"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 
                      bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                      after:border-8 after:border-transparent after:border-t-gray-900"
                  >
                    Professional Agents
                  </div>

                </div>
              </motion.div>
            ) : (
              <motion.div
                key="img2"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <div className="relative group">

                  {/* Imagen uniforme */}
                  <div className="w-[380px] h-[380px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/CustomerService2.JPG"
                      alt="Customer Support Desk"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 
                      bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                      after:border-8 after:border-transparent after:border-t-gray-900"
                  >
                    Seamless Service
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
