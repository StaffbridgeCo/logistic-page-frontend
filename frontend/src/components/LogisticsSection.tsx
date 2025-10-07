// components/LogisticsSection.jsx
import { motion } from "framer-motion";
import { CheckCircle, Clock, Eye, Search, TrendingDown } from "lucide-react";
import VideoTextMask from "./VideoTextMask";
import Particles from "./Particles";
import Blob from "./Blob";

export default function LogisticsSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Componente del video con texto */}
      <VideoTextMask
        videoSrc="/videos/Logistics.mp4"
        topText="LOGISTICS"
        bottomText="COORDINATION"
      />

      {/* Sección de información debajo del video */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Particles count={30} />
        <Blob className="absolute top-20 left-50 opacity-55 z-0" />

        {/* Columna izquierda - Texto */}
        <div className="space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            The human solution to organizing your <br /> logistics movements
          </h2>
          <p className="text-lg text-gray-600">
            Our brokers help your organization by:
          </p>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Reducing the time and effort required to manage logistics.
            </li>
            <li className="flex items-start">
              <TrendingDown className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Providing highly efficient and cost saving coordination teams.
            </li>
            <li className="flex items-start">
              <Eye className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Offering more visibility and control across your entire operation.
            </li>
            <li className="flex items-start">
              <Search className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Reviewing your current strategies with a fresh, third party perspective.
            </li>
            <li className="flex items-start">
              <Clock className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
              Suggesting process improvements and options to save both time and money.
            </li>
          </ul>
        </div>

        {/* Columna derecha - Imágenes animadas */}
        <div className="relative flex justify-center lg:justify-end items-center">
          {/* Imagen grande (dispatcher) con tooltip */}
          <div className="relative group">
            <motion.img
              src="/images/dispatcher.png"
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

          {/* Imagen pequeña (driver) con tooltip */}
          <div className="relative group bottom-1 left-6 lg:left-10">
            <motion.img
              src="/images/driver.jpg"
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
