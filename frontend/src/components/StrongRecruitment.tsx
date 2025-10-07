// src/components/StrongRecruitment.tsx
import { motion } from "framer-motion";

export default function StrongRecruitment() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-10">
      {/* Imagen a la izquierda */}
      <motion.img
        src="/images/hr.png" // 👈 pon aquí tu imagen
        alt="Strong Recruitment Process"
        className="rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Texto a la derecha */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-800">
          Importance of a Strong Recruitment Process
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Any foolproof recruitment process is typically targeted towards 
          attracting qualified candidates and encouraging maximum possible job 
          seekers to apply. This makes it possible to build a big pool of talented 
          players in a tight job market and minimizes the time involved in finding 
          candidates and filling roles for the present and future requirements of 
          the company.  
          <br /><br />
          A well planned and thoughtfully crafted recruitment process helps the 
          hiring team filter the right candidates faster while staying focused on 
          engaging the eligible candidates for maximum conversions.  
          <br /><br />
          The recruitment process not only reflects the company’s professionalism 
          but also helps attract the right kind of candidates while saving the time 
          and money spent on identifying, attracting, engaging, recruiting and 
          retaining talent.
        </p>
      </motion.div>
    </section>
  );
}
