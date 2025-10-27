// components/CustomerServiceDetails.tsx
import { motion } from "framer-motion";
import { BarChart3, Heart, DollarSign, Languages } from "lucide-react";
import Particles from "./Particles";

export default function CustomerServiceDetails() {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "The Human Touch That Builds Loyalty",
      description:
        "Nearshore professionals bring warmth, empathy, and strong communication skills, turning every interaction into a meaningful customer experience.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: "Smarter Compensation, Stronger Retention",
      description:
        "Leverage nearshore cost advantages to design stable, competitive compensation packages that retain top talent and maintain service consistency.",
    },
    {
      icon: <Languages className="w-8 h-8 text-purple-600" />,
      title: "Seamless, Bilingual and Culturally Aligned Communication",
      description:
        "Your team speaks fluent English and Spanish and understands your customers’ cultural expectations, ensuring clarity, trust, and connection.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Scalable and Reliable Support",
      description:
        "Whether you’re starting with a small support team or expanding to a full 24/7 center, your nearshore team grows with your business while maintaining quality and brand consistency.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-white px-6 lg:px-16 overflow-hidden">
      {/* Partículas en background */}
      <Particles count={30} className="absolute inset-0 z-0" />

      {/* Sección introductoria */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight mb-6"
        >
          Experience the Nearshore Advantage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          Building a nearshore customer service team does more than optimize
          costs it elevates your customer experience. With fluent, culturally
          aligned professionals who understand your clients’ needs, you deliver
          consistent, high-quality support that strengthens loyalty and drives
          satisfaction at every interaction.
        </motion.p>
      </div>

      {/* Título de sección */}
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight mb-10"
        >
          Why Build Your Customer Service Team Nearshore?
        </motion.h2>
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
