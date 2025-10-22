// components/FeaturesSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, MapPin, FileText, BarChart2, Bell, Route, Send } from "lucide-react";
import Particles from "./Particles";

const features = [
  {
    icon: Route,
    title: "Route Planning",
    description: "Organize deliveries by zones, optimize routes, and reduce travel times.",
  },
  {
    icon: Send,
    title: "Assignment",
    description: "Assign tasks efficiently to drivers and teams in real-time.",
  },
  {
    icon: ClipboardList,
    title: "Dashboard",
    description: "Get a complete overview of logistics operations with analytics and KPIs.",
  },
  {
    icon: MapPin,
    title: "Geolocation",
    description: "Track vehicles and shipments live with accurate GPS integration.",
  },
  {
    icon: FileText,
    title: "Documents",
    description: "Manage waybills, invoices, and delivery proofs digitally.",
  },
  {
    icon: BarChart2,
    title: "Reports",
    description: "Generate detailed reports for performance, costs, and efficiency.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Send and receive instant alerts about route changes or delays.",
  },
];

export default function FeaturesSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h3 className="text-lg font-semibold text-purple-900 tracking-wide uppercase">
          Modular System
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Key features and functionalities of our logistics experts
        </h2>
      </div>
      <Particles count={30} />

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => setSelected(index)}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-800 text-white shadow-lg mb-4">
                <Icon size={32} />
              </div>
              <p className="text-gray-800 font-medium">{feature.title}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Small Popup */}
      <AnimatePresence>
        {selected !== null && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Popup content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center">
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>

                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-lg mx-auto mb-4">
                  {/* ✅ Aquí está el fix */}
                  {(() => {
                    const Icon = features[selected].icon;
                    return <Icon size={32} />;
                  })()}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  {features[selected].title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{features[selected].description}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
