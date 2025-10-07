// src/components/PerfectRecruitment.tsx
import { motion } from "framer-motion";

export default function PerfectRecruitment() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-10">
      {/* Texto a la izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-800">
          What Goes into a Perfect Recruitment Process?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          An efficient recruitment process is an organization specific sourcing
          model that aims to find the right fit for the right job at the right time.  
          It is a step by step approach to bringing in talented people who can help 
          the company grow.  
          <br /><br />
          An all inclusive recruitment process has 5 key phases but it may vary from 
          company to company depending on the business vertical, organizational 
          structure, size of the company, nature of operations, existing recruitment 
          workflow and{" "}
          <a href="#" className="text-purple-600 underline">
            selection process
          </a>.
        </p>
      </motion.div>

      {/* Imagen a la derecha */}
      <motion.img
        src="/images/resumes.png" // 👈 coloca aquí tu imagen
        alt="Perfect Recruitment Process"
        className="rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
    </section>
  );
}
