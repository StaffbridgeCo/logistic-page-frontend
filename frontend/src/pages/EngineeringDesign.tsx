// pages/EngineeringDesign.tsx
"use client";
import { motion } from "framer-motion";
import {
  Monitor,
  FileText,
  BarChart2,
  GraduationCap,
} from "lucide-react";
import VideoTextMask from "../components/VideoTextMask";
import Particles from "../components/Particles";
import Blob from "../components/Blob";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EngineeringDesign() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
      title: "3D Modeling and Design",
      description:
        "From 3D designs and CNC coding to high quality renderings for clients, our engineers bring advanced skills at 60% of the cost compared to Stateside salaries.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Documentation",
      description:
        "Our remote engineers create technical documentation assembly instructions, user manuals, maintenance guides, and specifications ensuring clarity for both teams and end users.",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-purple-600" />,
      title: "Simulation and Analysis",
      description:
        "We use advanced tools for stress, thermal, and fluid flow analysis, helping optimize designs and resolve issues before physical prototypes are created.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Training & Support",
      description:
        "Remote engineers can train field technicians, support local teams, and assist in installation, operation, and maintenance of mechanical systems.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Header */}
      <Header />

      {/* Video con texto animado */}
      <VideoTextMask
        videoSrc="/videos/Logistics.mp4" // 👈 pon aquí tu video
        topText="ENGINEERING"
        bottomText="DESIGN"
      />

      {/* Sección de contenido */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Particles count={30} />
        <Blob className="absolute top-20 left-40 opacity-50 z-0" />

        {/* Texto */}
        <div className="space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            Part time, Full time, anytime we have you covered.
          </h2>
          <p className="text-lg text-gray-600">
            Whether it’s a one off design or a full time engineer to manage
            consistent workload, we’ve got you covered. With our
            criteria specific hiring process, you can be sure we source the
            right talent with the exact skills and qualifications your project
            requires.
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition"
          >
            Get Started
          </motion.button>
        </div>

        {/* Imagen */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <motion.img
            src="/images/engineering-3d.png"
            alt="Engineering Design & 3D Modeling"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[350px] lg:w-[450px] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Servicios */}
      <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-purple-900 mb-6"
          >
            Our Engineering & 3D Modeling Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
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
                    <Footer />

    </div>
  );
}
