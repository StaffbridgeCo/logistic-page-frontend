import { motion } from "framer-motion";
import { DollarSign, BarChart3, Rocket, Layers } from "lucide-react";
import DualBlob from "../components/DualBlob";
import Particles from "../components/Particles";


const items = [
  {
    title: "Saving",
    desc: "Cut costs without compromising quality. Our model reduces payroll, hiring, and admin expenses by up to 60%.",
    icon: <DollarSign className="w-10 h-10 text-green-200" />,
    bg: "bg-gradient-to-r from-purple-950 to-purple-950",
  },
  {
    title: "Productivity",
    desc: "Boost output with engaged, high performing professionals aligned with your goals from day one.",
    icon: <BarChart3 className="w-10 h-10 text-blue-300" />,
    bg: "bg-gradient-to-r from-purple-950 to-purple-950",
  },
  {
    title: "Scale",
    desc: "Quickly grow your team: top tier talent available in just 2 weeks, letting you focus on results.",
    icon: <Rocket className="w-10 h-10 text-yellow-200" />,
    bg: "bg-gradient-to-r from-purple-950 to-purple-950",
  },
  {
    title: "Centralize",
    desc: "Streamline everything: from recruitment to payroll and daily operations, all under one roof.",
    icon: <Layers className="w-10 h-10 text-pink-500" />,
    bg: "bg-gradient-to-r from-purple-950 to-purple-950",
  },
];

export default function CoreStrengths() {
  return (
    <section className="relative py-20 px-6 flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Core Strengths
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            We provide the tools and talent that help your business grow,
            scale, and streamline operations efficiently.
          </p>
        </div>

        {/* Tarjetas internas estilo pastel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`${item.bg} rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-start md:items-center gap-6`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blobs decorativos */}
            <Particles count={30} />
      
      <DualBlob className="absolute -bottom-20 -left-5 opacity-80" />
    </section>
  );
}
