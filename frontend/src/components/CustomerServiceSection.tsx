// components/CustomerServiceSection.tsx
"use client";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Users,
  Globe2,
  Headphones,
} from "lucide-react";
import VideoTextMask from "./VideoTextMask";
import Particles from "./Particles";
import Blob from "./Blob";

export default function CustomerServiceSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Video con texto animado */}
      <VideoTextMask
        videoSrc="/videos/Logistics.mp4" // 👈 cámbialo si tienes un video distinto
        topText="CUSTOMER"
        bottomText="SERVICE"
      />

      {/* Sección de contenido */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Particles count={30} />
        <Blob className="absolute top-20 left-50 opacity-55 z-0" />

        {/* Columna izquierda - Texto */}
        <div className="space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            Top Tier Call Center Services for Your Company’s Success
          </h2>
          <p className="text-lg text-gray-600">
            Call handling is time consuming and expensive to do correctly.
            At StaffBridge, we attract higher level candidates by offering
            better salaries and training, ensuring your customers feel
            connected and valued.
          </p>
          <p className="texte-lg text-gray-600">
            Whether you need basic call screening or full 24/7 coverage, 
            our C1 level English speakers deliver seamless communication,
            professional interactions, and custom solutions tailored to your business.
          </p>

          {/* Lista de beneficios */}
          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex items-start">
              <PhoneCall className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              <span>C1 Workforce: top tier English proficient representatives.</span>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              <span>Specialized expertise in customer service and technical support roles.</span>
            </li>
            <li className="flex items-start">
              <Globe2 className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              <span>Scalable staffing solutions that adapt to fluctuating call volumes.</span>
            </li>
            <li className="flex items-start">
              <Headphones className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              <span>Let your team focus on core functions while we handle customer engagement.</span>
            </li>
          </ul>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition"
          >
            Get Started
          </motion.button>
        </div>

        {/* Columna derecha - Imágenes con animación */}
        <div className="relative flex justify-center lg:justify-end items-center">
          {/* Imagen principal */}
          <div className="relative group">
            <motion.img
              src="/images/customerService5.png"
              alt="Customer Service Team"
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
              Professional Agents
            </div>
          </div>

          {/* Imagen secundaria */}
          <div className="relative group bottom-1 left-6 lg:left-10">
            <motion.img
              src="/images/CustomerService2.JPG"
              alt="Customer Support Desk"
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
              Seamless Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
