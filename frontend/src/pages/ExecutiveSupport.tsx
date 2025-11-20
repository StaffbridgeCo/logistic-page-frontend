// pages/ExecutiveSupport.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Mail,
  ClipboardList,
  UserCircle2,
} from "lucide-react";
import { useState, useEffect } from "react";

import VideoTextMask from "../components/VideoTextMask";
import Particles from "../components/Particles";
import Blob from "../components/Blob";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ExecutiveSupport() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Strategic Partnership",
      description:
        "Your executive assistant acts as a trusted right hand, helping you define and protect your priorities, liaising with stakeholders, and ensuring actions remain aligned with short and long term objectives.",
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-600" />,
      title: "Comprehensive Administrative Support",
      description:
        "From managing high volume inboxes, scheduling across multiple time zones, arranging complex travel itineraries, to preparing meeting briefs our assistants handle it all with precision and discretion.",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-purple-600" />,
      title: "Project Management",
      description:
        "Whether it’s a key initiative, product launch, or internal project, your assistant helps drive progress by managing timelines, coordinating with teams, and keeping tasks on track.",
    },
    {
      icon: <UserCircle2 className="w-8 h-8 text-purple-600" />,
      title: "Personal Assistance",
      description:
        "From organizing personal appointments, coordinating family travel, to planning special events, our assistants help you maintain the balance to perform at your best professionally and personally.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      <Header />

      <VideoTextMask
        videoSrc="/videos/executive support.mp4"
        topText="EXECUTIVE"
        bottomText="SUPPORT"
      />

      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Particles count={30} />
        <Blob className="absolute top-20 left-40 opacity-50 z-0" />

        {/* TEXTO */}
        <div className="space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            High Level Executive Support to Empower Your Leadership
          </h2>
          <p className="text-lg text-gray-600">
            At StaffBridge, we provide high level Executive Support designed to
            help you operate at your highest level. Our dynamic executive
            assistants seamlessly integrate into your operations, delivering
            both strategic insight and administrative excellence.
          </p>
          <p className="text-lg text-gray-600">
            They don’t just take tasks off your plate they become a true
            extension of your leadership, helping you stay focused, agile, and
            in control of your time.
          </p>

          <motion.a
            href="https://staffbridge.co/get-started"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition"
          >
            Get Started
          </motion.a>
        </div>

        {/* CARRUSEL AUTOMÁTICO */}
        <div className="relative flex justify-center lg:justify-end items-center w-full h-[420px] overflow-hidden">
          <AnimatePresence mode="wait">
            {showFirst ? (
              <motion.div
                key="img1"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <div className="relative group">
                  <img
                    src="/images/ExecutiveSupport1.JPG"
                    alt="Executive Collaboration"
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
                    Executive Collaboration
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="img2"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <div className="relative group">
                  <img
                    src="/images/executiveSupport2.png"
                    alt="Professional Teamwork"
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
                    Professional Teamwork
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* SERVICIOS */}
      <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-purple-900 mb-6"
          >
            Executive Support Services Tailored to Your Needs
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


      
      <section className="relative w-full py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
      
        {/* Fondo animado */}
        <Particles count={25} className="absolute inset-0 z-0" />
      
        {/* Círculo difuso morado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[800px] h-[800px] bg-purple-300/30 rounded-full 
                        blur-3xl opacity-70 animate-pulse" />
      
        {/* Contenido */}
        <div className="relative max-w-4xl mx-auto text-center space-y-6 px-6 z-10">
      
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-purple-900"
          >
            Empower Your Executive Operations
          </motion.h2>
      
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
          Building your executive support team isn’t just about handing off tasks, t’s about elevating your leadership with strategic partners who help youstay focused, agile, and always one step ahead.
          Our nearshore executive assistants integrate seamlessly into your workflow, bringing structure, clarity, and high-level support that drives better decisions and smoother execution.
          </motion.p>
      
        </div>
      </section>

      <Footer />
    </div>
  );
}
