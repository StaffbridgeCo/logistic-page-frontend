// src/pages/Retention.tsx
import { motion } from "framer-motion";
import { PartyPopper, HeartHandshake, Users, Trophy, HelpingHand } from "lucide-react";
import Header from "../components/Header";

export default function Retention() {
  const features = [
    {
      icon: <Trophy className="w-6 h-6 text-purple-600" />,
      title: "Celebrate Every Win",
      desc: "From milestones to personal achievements, we make recognition part of our culture.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-600" />,
      title: "Authentic Connections",
      desc: "Team building activities that foster trust, camaraderie, and genuine bonds.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Transform Teams",
      desc: "We turn coworkers into collaborators, building loyalty and long term engagement.",
    },
    {
      icon: <HelpingHand className="w-6 h-6 text-purple-600" />,
      title: "On Site HR Support",
      desc: "Guidance, solutions, and alignment to keep your people engaged and supported.",
    },
    {
      icon: <PartyPopper className="w-6 h-6 text-purple-600" />,
      title: "Culture of Belonging",
      desc: "When employees feel they belong, they bring their best selves to work.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-6">
      {/* Hero Section */}
            <Header />
      
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-purple-800 mb-6">Retention</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          We Celebrate, Connect, and Care.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At <span className="font-semibold text-purple-700">StaffBridge</span>, 
          we know thriving teams aren’t built by chance; they’re nurtured through 
          meaningful experiences. That’s why we don’t just focus on work  
          <span className="font-semibold"> we focus on people</span>.
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
          src="/images/retention.png" // 👈 cambia la imagen por la tuya
          alt="Team Retention"
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
            We celebrate every win, big or small, because recognition fuels 
            motivation. Beyond celebrations, we host team building activities 
            designed to create real human connections, transforming coworkers 
            into collaborators.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our on site HR team ensures your people stay engaged, supported, 
            and aligned with both personal and company goals.
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
          How We Build Loyalty
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
          Because when employees feel they belong, they don’t just show up {" "}
          <span className="font-semibold text-purple-700">
            they bring their best selves to work
          </span>. And that’s when real growth happens: for them, for you, 
          and for your business.
        </p>
      </motion.div>
    </div>
  );
}
