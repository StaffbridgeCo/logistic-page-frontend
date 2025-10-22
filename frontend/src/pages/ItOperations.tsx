// pages/ItOperations.tsx
"use client";
import { motion } from "framer-motion";
import {
  Users,
  Headphones,
  Network,
  ShieldCheck,
  DollarSign,
} from "lucide-react";
import Particles from "../components/Particles";
import Blob from "../components/Blob";
import Header from "../components/Header";
import VideoTextMask from "../components/VideoTextMask";
import Footer from "../components/Footer";

export default function ItOperations() {
  const services = [
    {
      icon: <Users className="w-10 h-10 text-purple-600 mb-4" />,
      title: "IT Staff Augmentation",
      description:
        "Flexible access to qualified IT professionals for ongoing operations, system monitoring, or maintenance tasks.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-purple-600 mb-4" />,
      title: "Technical Support & Helpdesk",
      description:
        "Skilled support staff to handle user issues, troubleshoot incidents, and maintain service uptime.",
    },
    {
      icon: <Network className="w-10 h-10 text-purple-600 mb-4" />,
      title: "Infrastructure & Network Support",
      description:
        "Personnel specialized in maintaining servers, networks, and connectivity for stable operations.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />,
      title: "IT Security & Compliance",
      description:
        "Professionals who monitor and secure systems, ensuring compliance with best practices and policies.",
    },
{
  icon: <DollarSign className="w-10 h-10 text-purple-600 mb-4" />,
  title: "Cost Optimization through Nearshore Staffing",
  description:
    "Optimize Your Costs with Nearshore Staffing Cut up to 60% of IT operational expenses by hiring nearshore talent.",
},

  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Header */}
      <Header />

      {/* Video con texto animado */}
      <VideoTextMask
        videoSrc="/videos/Logistics.mp4"
        topText="IT"
        bottomText="OPERATIONS"
      />

      {/* Fondo */}
      <Particles count={30} />
      <Blob className="absolute top-20 left-40 opacity-30 z-0" />

      {/* Hero Section */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda - Texto */}
        <div className="space-y-6 z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            Your one stop shop for seamless IT operations and digital
            transformation!
          </h1>
          <p className="text-lg text-gray-600">
            Strengthen your IT operations with experienced professionals ready
            to support your infrastructure, security, and daily technology
            needs. We ensure scalability, reliability, and efficiency for your
            organization.
          </p>

          <motion.a
            href="https://staffbridge.co/get-started"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition"
          >
            Get Started
          </motion.a>
        </div>

        {/* Columna derecha - Imágenes */}
        <div className="relative flex justify-center lg:justify-end items-center">
          {/* Imagen principal */}
          <div className="relative group">
            <motion.img
              src="/images/carrucel.png"
              alt="IT Operations Team"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[350px] lg:w-[420px] rounded-2xl shadow-xl 
                         z-10 transition-all duration-500 ease-out
                         hover:z-30 hover:scale-105 hover:shadow-2xl"
            />
            <div
              className="absolute -top-12 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                         after:border-8 after:border-transparent after:border-t-gray-900"
            >
              IT Experts at Work
            </div>
          </div>

          {/* Imagen secundaria */}
          <div className="relative group bottom-1 left-6 lg:left-10">
            <motion.img
              src="/images/it2.png"
              alt="Server Infrastructure"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-[180px] lg:w-[220px] rounded-2xl shadow-lg 
                         z-20 transition-all duration-500 ease-out 
                         hover:z-40 hover:scale-105 hover:shadow-2xl"
            />
            <div
              className="absolute -top-12 left-1/2 -translate-x-1/2 
                         bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                         after:border-8 after:border-transparent after:border-t-gray-900"
            >
              Smart Infrastructure
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-purple-900 mb-6"
          >
            IT Operations Support Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 bg-white shadow-md rounded-2xl hover:shadow-xl transition text-center flex flex-col items-center"
            >
              <div className="flex justify-center items-center">
                {service.icon}
              </div>
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
