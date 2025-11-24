// src/pages/LifeAtStaffbridge.tsx
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blob";
import Particles from "../components/Particles";
import IndustriesCarousel from "../components/IndustriesCarousel";

export default function LifeAtStaffbridge() {
  const images = [
    { title: "", img: "/images/halloween.png" },
    { title: "", img: "/images/LuisaYmas.png" },
    { title: "", img: "/images/JhonYmas.png" },
    { title: "", img: "/images/Work.png" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden text-gray-900">
      <Header />

      {/* Fondo */}
      <div className="absolute inset-0 -z10">
        <Particles />
        <Blob className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-50" />
      </div>

      {/* Hero + Carousel */}
      <section className="relative flex flex-col items-center text-center pt-32 pb-10 px-6 z-10">
        
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-purple-700 mb-6"
        >
          Life at Staffbridge
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mb-14"
        >
          Discover the energy, teamwork, and creativity that make Staffbridge
          a unique place to work and grow together.
        </motion.p>

        {/* Carrusel — ahora unido a la misma sección */}
        <div className="w-full max-w-6xl">
          <IndustriesCarousel industries={images} />
        </div>
      </section>

      {/* Sección Our Culture */}
      <section className="relative mt-0 py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
        <Particles count={25} className="absolute inset-0 z-0" />

        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 
          w-[600px] h-[600px] bg-purple-300/30 rounded-full 
          blur-3xl animate-pulse"
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-center max-w-3xl mx-auto px-6 z-10"
        >
          <motion.h2
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-6"
          >
            Our Culture
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg md:text-xl mb-5 leading-relaxed"
          >
            At Staffbridge, we celebrate diversity, encourage creativity, and support personal growth. 
            Our team thrives on collaboration, innovation, and a shared passion for excellence making 
            every project an exciting opportunity to learn and create something meaningful together.
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
