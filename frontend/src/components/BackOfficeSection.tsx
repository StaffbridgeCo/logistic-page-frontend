"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ClipboardList, Users, Shield, BarChart } from "lucide-react";
import VideoTextMask from "./VideoTextMask";
import Particles from "./Particles";
import Blob from "./Blob";
import { useState, useEffect } from "react";

export default function BackOfficeSection() {
  const [showFirst, setShowFirst] = useState(true);

  // 🔄 Cambia entre imagen 1 y 2 cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000); // velocidad

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      
      {/* Video con texto animado */}
      <VideoTextMask
        videoSrc="/videos/backoffice3.mp4"
        topText="BACK"
        bottomText="OFFICE"
      />

      {/* Sección de contenido */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Particles count={30} />
        <Blob className="absolute top-20 left-50 opacity-55 z-0" />

        {/* Columna izquierda */}
        <div className="space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            The Backbone Of Your Business Operations
          </h2>

          <p className="text-lg text-gray-600">
            Our Back Office teams provide seamless support so your company runs smoothly
            while you focus on growth:
          </p>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
              Handling administrative tasks efficiently and reliably.
            </li>
            <li className="flex items-start">
              <ClipboardList className="w-6 h-6 text-purple-600 mr-3" />
              Managing documentation, compliance, and reporting with precision.
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 text-purple-600 mr-3" />
              Supporting HR, finance, and customer service functions.
            </li>
            <li className="flex items-start">
              <Shield className="w-6 h-6 text-purple-600 mr-3" />
              Ensuring data security and compliance with global standards.
            </li>
            <li className="flex items-start">
              <BarChart className="w-6 h-6 text-purple-600 mr-3" />
              Providing insights and support for better business decisions.
            </li>
          </ul>

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
                  
                  {/* 🔥 Imágenes de tamaño uniforme */}
                  <div className="w-[380px] h-[380px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/BackOffice1.JPG"
                      alt="Back Office Team"
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
                    Your Support Team
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

                  {/* 🔥 Imágenes de tamaño uniforme */}
                  <div className="w-[380px] h-[380px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/BackOffice2.JPG"
                      alt="Back Office Desk"
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
                    Smart Operations
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
