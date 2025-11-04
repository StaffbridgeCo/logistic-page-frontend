"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Receipt, FileText, Keyboard, Headphones } from "lucide-react";
import Particles from "./Particles";

export default function BackOfficeDetails() {
  const [selected, setSelected] = useState<number | null>(null);

  const roles = [
    {
      icon: Receipt,
      title: "Invoicing and Billing",
      description:
        "Outsource the headache of tracking documents and sending timely, correct invoices so your back office keeps pace with your company’s momentum.",
    },
    {
      icon: FileText,
      title: "General Bookkeeping",
      description:
        "Whether you need single or double entry bookkeeping, our specialists ensure your processes run smoothly and provide insights for better decisions.",
    },
    {
      icon: Keyboard,
      title: "Data Entry",
      description:
        "Free up your team’s bandwidth by delegating data entry to trained specialists. We also suggest automation and time-saving methods to streamline efforts.",
    },
    {
      icon: Headphones,
      title: "Virtual Assistants",
      description:
        "Boost productivity with bilingual assistants (Spanish + C1 English). From calendar management to booking travel, we match you with the right candidate.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-white px-6 lg:px-16 overflow-hidden">
      {/* Fondo animado */}
      <Particles count={25} className="absolute inset-0 z-0" />

      {/* Encabezado principal */}
      <div className="max-w-5xl mx-auto text-center mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-purple-900 mb-4"
        >
          Your Back Office Support Team at a Glance!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          There are many facets to a highly functioning back office, and while
          often overlooked, they are the backbone of a profitable organization.
          Allow our professional management team with decades of experience to
          design and implement your company’s star back office support team and
          processes.
        </motion.p>
      </div>

      {/* Tarjetas interactivas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelected(index)}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-800 text-white shadow-lg mb-4">
                <Icon size={32} />
              </div>
              <p className="text-gray-800 font-semibold">{role.title}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Modal emergente */}
      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>

                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-lg mx-auto mb-4">
                  {(() => {
                    const Icon = roles[selected].icon;
                    return <Icon size={32} />;
                  })()}
                </div>

                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  {roles[selected].title}
                </h3>
                <p className="text-gray-600">{roles[selected].description}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
