// src/pages/OfficeSpace.tsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Building2, Wifi, Users, Monitor, Coffee, Shield } from "lucide-react";
import Header from "../components/Header";

export default function OfficeSpace() {
  const features = [
    {
      icon: <Wifi className="w-10 h-10 text-purple-600 mb-4 mx-auto" />,
      title: "High speed Fiber Internet",
      desc: "Seamless performance for remote teams.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-600 mb-4 mx-auto" />,
      title: "Private & Collaborative Rooms",
      desc: "Boost synergy with flexible meeting spaces.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-purple-600 mb-4 mx-auto" />,
      title: "Ergonomic Workstations",
      desc: "Comfort and focus for higher productivity.",
    },
    {
      icon: <Coffee className="w-10 h-10 text-purple-600 mb-4 mx-auto" />,
      title: "Lounge & Coffee Zones",
      desc: "Balance creativity with cozy chill areas.",
    },
    {
      icon: <Building2 className="w-10 h-10 text-purple-600 mb-4 mx-auto" />,
      title: "Modern Facilities",
      desc: "Professional setups designed for collaboration.",
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600 mb-4 mx-auto" />,
      title: "Secure Infrastructure",
      desc: "Safe, modern, and reliable office environment.",
    },
  ];

  const images = [
    "/images/sala.JPG",
    "/images/lokers.png",
    "/images/banos.png",
    "/images/morePeople.JPG",
  ];

  const controls = useAnimation();

  useEffect(() => {
    const totalWidth = images.length * 420;
    const loop = async () => {
      while (true) {
        await controls.start({
          x: [-0, -totalWidth],
          transition: {
            duration: 25,
            ease: "linear",
          },
        });
        controls.set({ x: 0 });
      }
    };
    loop();
  }, [controls, images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-6 cursor-default select-none">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-purple-800 mb-6">
          Office Space
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          A Space Built to Inspire.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Imagine your remote team working in a space that feels like an
          extension of your company a place where they’re more than employees
          behind a screen; they’re part of something bigger.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.section
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl shadow-lg w-[400px] h-[280px] mx-auto">
          <motion.div className="flex gap-4" animate={controls}>
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="rounded-2xl w-[400px] h-[280px] object-cover shadow-md pointer-events-none"
              />
            ))}
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold text-purple-700">StaffBridge</span>,
            we believe top talent deserves more than a desk. That’s why we go
            beyond the basics to create fully equipped, professional environments
            designed for collaboration, productivity, and well being.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our offices are not just workspaces; they’re engagement hubs designed
            to mirror your company culture, support productivity, and keep your
            people engaged.
          </p>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="mt-28 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-extrabold text-purple-800 mb-6 tracking-tight">
          What We Provide
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-16 max-w-2xl mx-auto">
          Every detail of our offices is designed to make your team’s workday
          smoother, more comfortable, and truly inspiring.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white/70 backdrop-blur-md border border-purple-100 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-100/40 to-blue-100/40 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-5">{feature.icon}</div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-16 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.section>
    </div>
  );
}
