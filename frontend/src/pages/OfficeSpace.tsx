// src/pages/OfficeSpace.tsx
import { motion } from "framer-motion";
import { Building2, Wifi, Users, Monitor, Coffee, Shield } from "lucide-react";
import Header from "../components/Header";

export default function OfficeSpace() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6 text-purple-600" />,
      title: "High speed Fiber Internet",
      desc: "Seamless performance for remote teams.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Private & Collaborative Rooms",
      desc: "Boost synergy with flexible meeting spaces.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-purple-600" />,
      title: "Ergonomic Workstations",
      desc: "Comfort and focus for higher productivity.",
    },
    {
      icon: <Coffee className="w-6 h-6 text-purple-600" />,
      title: "Lounge & Coffee Zones",
      desc: "Balance creativity with cozy chill areas.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-600" />,
      title: "Modern Facilities",
      desc: "Professional setups designed for collaboration.",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Secure Infrastructure",
      desc: "Safe, modern, and reliable office environment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-6">
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
        <p className="text-lg text-gray-600 leading-relaxed">
          Imagine your remote team working in a space that feels like an extension 
          of your company, a place where they’re more than employees behind a screen; 
          they’re part of something bigger.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.section
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Imagen */}
        <motion.img
          src="/images/OfficeSpace.JPG" 
          alt="Office Space"
          className="rounded-2xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        />

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold text-purple-700">StaffBridge</span>, 
            we believe top talent deserves more than a desk. That’s why we go beyond 
            the basics to create fully equipped, professional environments designed 
            for collaboration, productivity, and well being.
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
        className="mt-20 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-purple-800 text-center mb-12">
          What We Provide
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h4 className="ml-3 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Closing Section */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Because when employees feel connected, valued, and supported, 
          they don’t just work  <span className="font-semibold text-purple-700">they thrive</span>.
        </p>
      </motion.div>
    </div>
  );
}
