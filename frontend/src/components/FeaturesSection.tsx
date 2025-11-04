// components/FeaturesSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Headphones,
  MapPin,
  ClipboardList,
  FileText,
} from "lucide-react";
import Particles from "./Particles";

const roles = [
  {
    icon: Truck,
    title: "Logistics Coordinators",
    description:
      "Manage carrier relationships, negotiate rates, and ensure loads move on time.",
  },
  {
    icon: Headphones,
    title: "Dispatchers",
    description:
      "Coordinate shipments, optimize routes, and communicate directly with drivers and clients.",
  },
  {
    icon: MapPin,
    title: "Track & Trace Specialists",
    description:
      "Monitor shipments, handle updates, and resolve exceptions proactively.",
  },
  {
    icon: ClipboardList,
    title: "Carrier Sales Representatives",
    description:
      "Build carrier networks to secure capacity and ensure on-time delivery.",
  },
  {
    icon: FileText,
    title: "Operations Coordinators",
    description:
      "Maintain documentation, support compliance, and streamline back-office workflows.",
  },
];

export default function FeaturesSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h3 className="text-4xl md:text-5xl font-extrabold text-purple-900 tracking-tight">
          Key Roles We Support
        </h3>
        <h2 className="text-lg md:text-xl text-gray-700 mt-3 font-medium">
          Specialized Talent for Every Step of Your Logistics Operation
        </h2>
      </div>

      <Particles count={25} />

      {/* Cards Grid - 5 columnas fijas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto px-6">
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
              <p className="text-gray-800 font-medium">{role.title}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Popup (Modal) */}
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
