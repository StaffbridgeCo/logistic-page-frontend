"use client";
import { motion } from "framer-motion";
import VideoTextMask from "./VideoTextMask";
import Particles from "./Particles";
import Blob from "./Blob";

export default function LogisticsSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Video superior con texto */}
      <VideoTextMask
        videoSrc="/videos/Logistics.mp4"
        topText="LOGISTICS"
        bottomText="STAFFING"
      />

      {/* Contenido principal en dos columnas */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Particles count={30} />
        <Blob className="absolute top-20 left-50 opacity-55 z-0" />

        {/* Columna izquierda - Texto */}
        <div className="space-y-6 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight"
          >
            Logistics Staffing Solutions
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold text-gray-800"
          >
            Optimize Operations, Powered by Nearshore Talent
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            The logistics world moves fast, and so should your team. From coordinating
            dispatch to tracking shipments and managing carrier relationships, every
            role behind the scenes plays a part in keeping your business moving.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Through our nearshore staffing model, you can build a reliable,
            cost-efficient logistics team in LATAM that feels fully integrated with
            your U.S. operations. Same time zone, shared culture, and professionals who
            take ownership of your success.
          </motion.p>
        </div>

        {/* Columna derecha - Imágenes animadas */}
        <div className="relative flex justify-center lg:justify-end items-center">
          {/* Imagen principal (dispatcher) */}
          <div className="relative group">
            <motion.img
              src="/images/brokers.png"
              alt="Dispatcher preview"
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
              For your dispatcher
            </div>
          </div>

          {/* Imagen secundaria (driver) */}
          <div className="relative group bottom-1 left-6 lg:left-10">
            <motion.img
              src="/images/Logistic Coordination.JPG"
              alt="Driver preview"
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
              For your driver
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
