import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, Users, Shield, BarChart } from "lucide-react";
import VideoTextMask from "./VideoTextMask";
import Particles from "./Particles";
import Blob from "./Blob";

export default function BackOfficeSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Video con texto animado */}
      <VideoTextMask
        videoSrc="/videos/backoffice3.mp4" // 👈 cambia el video si tienes uno distinto
        topText="BACK"
        bottomText="OFFICE"
      />

      {/* Sección de contenido */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Particles count={30} />
        <Blob className="absolute top-20 left-50 opacity-55 z-0" />

        {/* Columna izquierda - Texto */}
        <div className="space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            The Backbone Of Your Business Operations
          </h2>
          <p className="text-lg text-gray-600">
            Our Back Office teams provide seamless support so your company runs smoothly
            while you focus on growth:
          </p>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Handling administrative tasks efficiently and reliably.
            </li>
            <li className="flex items-start">
              <ClipboardList className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Managing documentation, compliance, and reporting with precision.
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Supporting HR, finance, and customer service functions.
            </li>
            <li className="flex items-start">
              <Shield className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Ensuring data security and compliance with global standards.
            </li>
            <li className="flex items-start">
              <BarChart className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Providing insights and support for better business decisions.
            </li>
          </ul>

                    {/* CTA */}
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

        {/* Columna derecha - Imágenes con hover */}
        <div className="relative flex justify-center lg:justify-end items-center">
          {/* Imagen grande (equipo de back office) */}
          <div className="relative group">
            <motion.img
              src="/images/BackOffice1.JPG"
              alt="Back Office Team"
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
              Your Support Team
            </div>
          </div>

          {/* Imagen secundaria */}
          <div className="relative group bottom-1 left-6 lg:left-10">
            <motion.img
              src="/images/BackOffice2.JPG"
              alt="Back Office Desk"
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
              Smart Operations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
