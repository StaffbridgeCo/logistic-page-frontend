// src/pages/OurOffices.tsx
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blob";
import Particles from "../components/Particles";
import IndustriesCarousel from "../components/IndustriesCarousel";

export default function OurOffices() {
  const images = [
    {
      title: "",
      img: "/images/banos.png",
    },
    {
      title: "",
      img: "/images/sala.JPG",
    },
    {
      title: "",
      img: "/images/lokers.png",
    },
    {
      title: "",
      img: "/images/morePeople.JPG",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden text-gray-900">
      <Header />

      {/* Fondo visual */}
      <div className="absolute inset-0 -z-10">
        <Particles />
        <Blob className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-50" />
      </div>





      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-purple-700 mb-6 z-10 relative"
        >
          Our Offices
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl z-10 relative"
        >
          Explore the spaces where creativity, innovation, and teamwork come to
          life. Welcome to the heart of StaffBridge.
        </motion.p>
      </section>

      {/* Office Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative overflow-hidden rounded-3xl shadow-lg"
        >
          <img
            src="/images/customer.png"
            alt="Welcome to StaffBridge"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-3xl font-semibold">
              Welcome to StaffBridge
            </h3>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative overflow-hidden rounded-3xl shadow-lg"
        >
          <img
            src="/images/jericho.JPG"
            alt="Workspace"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-3xl font-semibold">
              Inspiring Workspaces
            </h3>
          </div>
        </motion.div>
      </section>






      
{/* Sección Experience con fondo morado */}
<section className="relative mt-28 py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">

  {/* Fondo animado */}
  <Particles count={25} className="absolute inset-0 z-0" />

  {/* Círculo decorativo difuso */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                  w-[600px] h-[600px] bg-purple-300/30 rounded-full 
                  blur-3xl animate-pulse" />

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
          Designed for Collaboration
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-700 text-lg md:text-xl mb-5 leading-relaxed"
    >
          Our offices are built to inspire connection and innovation. Every
          space is designed to foster creativity, teamwork, and productivity,
          allowing our team to thrive and deliver exceptional results in a
          comfortable, modern environment.
    </motion.p>
  </motion.div>
</section>




      {/* Carousel Section */}
      <section className="relative py-20 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-purple-700 mb-10"
        >
          A Look Inside Our Spaces
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          <IndustriesCarousel industries={images} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
