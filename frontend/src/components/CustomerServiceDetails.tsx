// components/CustomerServiceDetails.tsx
import { motion } from "framer-motion";
import { PhoneCall, UserCheck, BarChart3, Briefcase } from "lucide-react";
import Particles from "./Particles";

export default function CustomerServiceDetails() {
  const services = [
    {
      icon: <PhoneCall className="w-8 h-8 text-purple-600" />,
      title: "C2 Workforce",
      description:
        "Our aim is to ensure optimal communication through a rigorous hiring process focused on selecting top English proficient individuals, guaranteeing your team’s exceptional communication abilities.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-purple-600" />,
      title: "Specialized Expertise",
      description:
        "We offer experienced agents trained in effective communication and customer service, ensuring high quality interactions with all your clients.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Scalability",
      description:
        "We can quickly adjust staffing levels to accommodate fluctuating call volumes, providing flexibility to meet your business demands.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Focus on Core Functions",
      description:
        "By delegating customer support to us, you can dedicate more resources to core functions and strategic growth.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-white px-6 lg:px-16 overflow-hidden">
      {/* Partículas en background */}
      <Particles count={30} className="absolute inset-0 z-0" />

      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-purple-900 mb-6"
        >
          Your Path to Exceptional Customer Engagement and Support
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          Whether you need basic call screening or a full 24/7 call center, our
          highly trained team ensures seamless communication, customer
          satisfaction, and scalable solutions to meet your business demands.
        </motion.p>
      </div>

      {/* Servicios */}
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
