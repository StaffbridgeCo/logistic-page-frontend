// pages/ItOperations.tsx
"use client";
import { motion } from "framer-motion";
import {
  Users,
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
      title: "Operational Expertise",
      description:
        "Professionals experienced in IT support, cloud systems, software engineering, QA, and DevOps.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-purple-600 mb-4" />,
      title: "Retention and Stability",
      description:
        "Cost-efficient staffing and fair compensation models ensure your teams stay motivated and engaged.",
    },
    {
      icon: <Network className="w-10 h-10 text-purple-600 mb-4" />,
      title: "Cultural and Time Zone Alignment",
      description:
        "Teams work in your time zone and communicate in a way that feels local.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />,
      title: "Scalability",
      description:
        "Easily scale from a single IT specialist to a full software engineering squad as your projects grow.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Header */}
      <Header />

      {/* Video con texto animado */}
      <VideoTextMask
        videoSrc="/videos/itOperations1.mp4"
        topText="Technology &"
        bottomText="Software Solutions"
      />

      {/* Fondo */}
      <Particles count={30} />
      <Blob className="absolute top-20 left-40 opacity-30 z-0" />

      {/* Hero Section */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda - Texto */}
        <div className="space-y-6 z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            Technology & Software Solutions
          </h1>
          <h2 className="text-2xl font-semibold text-purple-700">
            Innovate Faster, Powered by Nearshore Talent
          </h2>
          <p className="text-lg text-gray-600">
            The technology world moves fast, and your team needs to keep up. We
            help U.S. companies build dedicated nearshore IT and software
            development teams in LATAM, providing skilled professionals who
            integrate seamlessly with your operations.
            </p>
            <p className="text-lg text-gray-600">
             From IT support to full
            software development, your nearshore team ensures projects move
            forward efficiently, on time, and aligned with your business goals.
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
      Advantages of Nearshore Technology Staff
    </motion.h2>
  </div>

  {/* ✅ Cambié las columnas para que haya 4 en pantallas grandes */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
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


      {/* Nearshore Talent Section */}
      <section className="relative py-20 px-6 bg-purple-50 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-purple-900"
          >
            Nearshore talent that accelerates your innovation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Our professionals are fluent in English, culturally aligned, and
            trained to deliver high-quality results, helping you reduce costs,
            scale teams quickly, and maintain operational excellence.
          </motion.p>
        </div>
      </section>

      {/* Most Requested Roles Section */}
      <section className="relative py-20 px-6 lg:px-16 bg-white w-full">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-purple-900"
          >
            Most Requested Roles
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Card 1 - IT Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
              IT Support
            </h3>
            <ul className="text-gray-700 text-left space-y-2 list-disc list-inside">
              <li>Technical Support Specialist</li>
              <li>Help Desk Technician</li>
              <li>Network & System Administrator</li>
              <li>Cloud Support Specialist</li>
              <li>IT Operations Analyst</li>
              <li>Cybersecurity Support Analyst</li>
              <li>Application Support Engineer</li>
            </ul>
            <motion.a
              href="https://staffbridge.co/get-started"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition self-center"
            >
              Get Started
            </motion.a>
          </motion.div>

          {/* Card 2 - Software Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
              Software Development
            </h3>
            <ul className="text-gray-700 text-left space-y-2 list-disc list-inside">
              <li>Full-Stack Developer</li>
              <li>Back-End Developer</li>
              <li>Front-End Developer</li>
              <li>QA Engineer / Test Automation Specialist</li>
              <li>DevOps Engineer / SRE</li>
              <li>UI/UX Designer</li>
              <li>Data Scientist / AI-ML Specialist</li>
            </ul>
            <motion.a
              href="https://staffbridge.co/get-started"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition self-center"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
