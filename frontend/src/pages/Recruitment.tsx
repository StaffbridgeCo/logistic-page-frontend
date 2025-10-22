// src/pages/Recruitment.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Particles from "../components/Particles";
import Blob from "../components/Blob";
import StrongRecruitment from "../components/StrongRecruitment";


export default function Recruitment() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      {/* Header */}
      <Header />
      <Particles count={30} />

      {/* Contenido principal */}
      <main className="flex-1 pt-24 px-6 md:px-12 lg:px-24">
        {/* Hero */}
        <section className="text-center mb-16 relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-purple-900"
          >
            Recruitment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className=" text-lg md:text-xl text-gray-700 leading-relaxed space-y-4"
          >
            This is where everything begins.  
            At StaffBridge, we believe the right people make all the difference. 
            That’s why our recruitment process is more than just filling roles  
            it’s about building the foundation of strong, high performing teams.
          </motion.p>
        </section>

        {/* Sección explicativa */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20 relative">
          <Blob className="absolute -top-10 -left-10 opacity-40 z-0" />

          <motion.img
            src="/images/recruitment.png"
            alt="Recruitment process"
            className="rounded-2xl shadow-lg relative z-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-3xl font-semibold mb-6 text-purple-800">
              Our Process
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
              <span>
                It all begins with a conversation. We take the time to understand your 
                team’s needs, your culture, and the challenges you're looking to solve. 
                From there, our HR team goes to work. We don’t just look at job 
                descriptions  we listen, we ask the right questions, and we get to know 
                your company culture, goals, and pain points.
              </span>
              <br /><br />
              <span>
                Then the search begins. Our recruiters tap into LATAM’s top talent pools, 
                identifying skilled professionals who not only meet the technical requirements 
                but also bring strong communication, cultural alignment, and a genuine desire 
                to grow with your business.
              </span>
              <br /><br />
              <span>
                Each candidate goes through a rigorous vetting process, evaluated by industry 
                specialists for their English fluency, problem solving ability, emotional 
                intelligence, and professional background.
              </span>
              <br /><br />
              <span>
                Then comes your moment: we present only the best matches. You review their 
                profiles, interview them directly, and choose who fits best with your team. 
                No surprises  just the right talent, ready to deliver.
              </span>
            </p>
          </motion.div>
        </section>

      {/* Nuevo bloque: Perfect Recruitment */}
            <StrongRecruitment />


        {/* CTA final */}
        <section className="text-center py-16 bg-gradient-to-r from-purple-700 to-yellow-500 rounded-2xl shadow-lg text-white relative mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to build your dream team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            From that first conversation to the moment you say 
            <span className="italic"> “You’re hired”</span>,  we’re with you every step of the way, because this is where strong teams start.
Your next top performer might be just one conversation away.
Partner with us to grow your team from day one, with the right people, ready to make an impact.


          </motion.p>
          <motion.a
            href="/get-started"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="px-8 py-4 bg-white text-purple-800 font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Get Started
          </motion.a>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
