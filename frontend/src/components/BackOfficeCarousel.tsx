// components/BackOfficeCarousel.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Invoicing & Billing",
    description: "Timely, accurate invoices keep your cash flow strong.",
    image: "/images/BackOffice2.JPG",
  },
  {
    title: "Bookkeeping",
    description: "Accurate records to drive smarter financial decisions.",
    image: "/images/backOffice3.png",
  },
  {
    title: "Data Entry",
    description: "Delegate repetitive work to save time and boost efficiency.",
    image: "/images/Backoffice3.JPG",
  },
  {
    title: "Virtual Assistants",
    description: "Bilingual VAs ready to lighten your workload.",
    image: "/images/BackOffice1.JPG",
  },
];

export default function BackOfficeCarousel() {
  const [index, setIndex] = useState(0);

  // Cambia de slide automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-purple-900 mb-12">
        Explore Our Services
      </h2>

      <div className="relative w-full max-w-4xl mx-auto h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={items[index].image}
              alt={items[index].title}
              className="w-full h-80 md:h-96 lg:h-[400px] object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                {items[index].title}
              </h3>
              <p className="text-gray-600">{items[index].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores (puntos) */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-purple-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
