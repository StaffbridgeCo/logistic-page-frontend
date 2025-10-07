import { motion } from "framer-motion";
import { FileText, Receipt, Keyboard, Headphones } from "lucide-react";
import Particles from "./Particles";

export default function BackOfficeDetails() {
  const services = [
    {
      icon: <Receipt className="w-8 h-8 text-purple-600" />,
      title: "Invoicing and Billing",
      description:
        "Outsource the headache of tracking documents and sending timely, correct invoices so your back office keeps pace with your company’s momentum.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "General Bookkeeping",
      description:
        "Whether you need single or double entry bookkeeping, our specialists ensure your processes run smoothly and provide insights for better decisions.",
    },
    {
      icon: <Keyboard className="w-8 h-8 text-purple-600" />,
      title: "Data Entry",
      description:
        "Free up your team’s bandwidth by delegating data entry to trained specialists. We also suggest automation and time saving methods to streamline efforts.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-600" />,
      title: "Virtual Assistants",
      description:
        "Boost productivity with bilingual assistants (Spanish + C1 English). From calendar management to booking travel, we match you with the right candidate.",
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
      Your Back Office Support Team at a Glance!
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
    >
      There are many facets to a highly functioning back office, and while often
      overlooked, they are the backbone of a profitable organization. Allow our
      professional management team with decades of experience to design and
      implement your company’s star back office support team and processes.
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
