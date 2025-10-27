// components/LogisticsNearshoreDetails.tsx
import { motion } from "framer-motion";
import { Truck, DollarSign, Globe2, BarChart3 } from "lucide-react";
import Particles from "./Particles";

export default function LogisticsNearshoreDetails() {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      title: "Operational Expertise That Drives Results",
      description:
        "Work with experienced logistics specialists who understand the rhythm of the industry from brokers and dispatchers to track & trace and carrier sales experts. They ensure your freight moves efficiently and your clients stay informed at every step.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: "Cost-Efficient, Retention-Focused Staffing",
      description:
        "By leveraging nearshore cost advantages, companies can create compensation structures that are both competitive and sustainable, attracting top performers and keeping them long-term in an industry where retention truly matters.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-purple-600" />,
      title: "Seamless Communication and Cultural Alignment",
      description:
        "Your nearshore team operates in your time zone, and can also cover after-hours and overnight shifts when needed. No delays, no downtime just fast, clear communication that keeps your logistics operations running smoothly around the clock.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Scalable Support for Growing Operations",
      description:
        "Whether you need a single logistics coordinator or a full operations department, your team can expand quickly as your business grows, with full flexibility and control.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-white px-6 lg:px-16 overflow-hidden">
      {/* Background particles */}
      <Particles count={30} className="absolute inset-0 z-0" />

      {/* Title and intro */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-purple-900 mb-6"
        >
          Why Build Your Logistics Team Nearshore?
        </motion.h2>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 bg-white shadow-md rounded-2xl hover:shadow-xl transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
