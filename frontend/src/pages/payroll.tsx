// src/pages/Payroll.tsx
import { motion } from "framer-motion";
import { ShieldCheck, Wallet, FileText, Globe, CheckCircle2 } from "lucide-react";
import Header from "../components/Header";

export default function Payroll() {
  const features = [
    {
      icon: <Wallet className="w-6 h-6 text-purple-600" />,
      title: "On Time Payments",
      desc: "Accurate salary disbursements in local currency, always on time.",
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: "Compliance Guaranteed",
      desc: "We manage benefits, contributions, and tax regulations seamlessly.",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      title: "Transparent Reporting",
      desc: "Stay in control with clear, accessible payroll data at all times.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
      title: "Data Security",
      desc: "Protecting sensitive employee information with robust security processes.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-purple-600" />,
      title: "Peace of Mind",
      desc: "From onboarding to monthly payroll, we handle everything with care.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-6">
      {/* Hero Section */}
      <Header/>
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-purple-800 mb-6">Payroll</h1>


      </motion.div>

      {/* Main Section */}
      <motion.section
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Imagen */}
        <motion.img
          src="/images/payroll.png"
          alt="Payroll process"
          className="rounded-2xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        />

        {/* Texto a la derecha COMPLETO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Managing international payroll shouldn’t be complicated or risky. At{" "}
            <span className="font-semibold text-purple-700">StaffBridge</span>, we handle the entire payroll 
            process with <span className="font-semibold">full compliance</span> to local labor laws and 
            tax regulations, so you don’t have to worry about legal or financial pitfalls.
          </p>

          <h3 className="text-xl font-semibold text-purple-700 mb-4">
            Payroll process
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            From onboarding to monthly payments, we ensure your team feels supported 
            while you enjoy complete peace of mind.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            No delays. No compliance headaches. Just seamless payroll management 
            that lets you focus on growing your business.
          </p>
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="mt-20 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-purple-800 text-center mb-12">
          Our Payroll Services
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

      {/* Closing */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          With <span className="font-semibold text-purple-700">StaffBridge Payroll</span>, 
          your business runs smoothly while your team feels valued, secure, 
          and supported every single month.
        </p>
      </motion.div>
    </div>
  );
}
