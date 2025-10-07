// pages/ItOperations.tsx
"use client";
import { motion } from "framer-motion";
import {
  Users,
  AppWindow,
  Wrench,
  BarChart3,
  DollarSign,
  ServerCog,
  Cloud,
  Smartphone,
} from "lucide-react";
import Particles from "../components/Particles";
import Blob from "../components/Blob";
import Header from "../components/Header";
import VideoTextMask from "../components/VideoTextMask";
import Footer from "../components/Footer";

export default function ItOperations() {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Employee Share Program",
      description:
        "Collaborate with us to brainstorm ideas and develop solutions quickly without needing a full time hire. Gain access to top tier developers cost effectively.",
    },
    {
      icon: <AppWindow className="w-8 h-8 text-purple-600" />,
      title: "Custom Application Development",
      description:
        "We use Agile methodologies with sprint planning, stand ups, and reviews to deliver high quality software while adapting to your needs.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-600" />,
      title: "QA Engineers & Testing",
      description:
        "Our QA services ensure top notch performance with scalable engagement models, offering flexibility and cost savings.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "SEO",
      description:
        "Our SEO experts use AI tools to analyze keywords and niches, ensuring your business stands out with sustained visibility.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: "Instant Savings",
      description:
        "Save 40–60% immediately by outsourcing to our team. Fast ROI and reliable delivery backed by continuous support.",
    },
    {
      icon: <ServerCog className="w-8 h-8 text-purple-600" />,
      title: "Horizontals",
      description:
        "We deliver turnkey IT solutions for Finance, HR, and Operations with guaranteed reliability and 24/7 availability.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: "Transitioning to the Cloud",
      description:
        "We specialize in Lift and Shift, Replatforming, or full Re architecture with automation tools and cost saving strategies.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "UX/UI and Web Design",
      description:
        "We design engaging, user friendly interfaces that align with your brand, ensuring seamless experiences for your customers.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white pt-32 px-6 overflow-hidden">
      {/* Header */}
      <Header />

      {/* Video con texto animado */}
      <VideoTextMask
        videoSrc="/videos/Logistics.mp4" // 👈 pon aquí tu video
        topText="IT"
        bottomText="OPERATIONS"
      />

      {/* Fondo */}
      <Particles count={30} />
      <Blob className="absolute top-20 left-40 opacity-30 z-0" />

      {/* Hero Section */}
      <div className="relative w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-6 z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
            Your one stop shop for seamless IT operations and digital
            transformation!
          </h1>
          <p className="text-lg text-gray-600">
            Achieve significant cost savings by hiring our top tier software
            developers and IT operations experts. We tailor software solutions
            and IT support to your specific needs, ensuring success through
            expertise, seamless integration, and optimal performance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition"
          >
            Get Started
          </motion.button>
        </div>

        {/* Imagen */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <motion.img
            src="/images/it2.png"
            alt="IT Operations"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[350px] lg:w-[450px] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
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
            Multiple benefits from our IT Operations support and Digital
            Transformation services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
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
