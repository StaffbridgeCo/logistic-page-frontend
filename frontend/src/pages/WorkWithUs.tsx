// src/pages/WorkWithUs.tsx
import { motion } from "framer-motion";
import Header from "../components/Header";
import Particles from "../components/Particles";
import Blob from "../components/Blob"; 

const jobs = [
  { title: "Frontend Developer (React)", location: "Remote", id: 1 },
  { title: "Backend Developer (Node.js)", location: "Remote", id: 2 },
  { title: "UI/UX Designer", location: "Remote", id: 3 },
];

export default function WorkWithUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Particles count={40} />
        <Blob className="absolute top-20 right-50 z-0" />
      

{/* Hero */}
<section className="py-24 bg-white relative z-10">
  <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    {/* Texto a la izquierda */}
          <Particles count={30} />
    
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="text-left"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
        Work With Us
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        <span className="text-yellow-500 font-bold block mb-2">STAFFBRIDGE CREW</span>
        We value our team members as capable, intelligent professionals.
        With that respect comes trust, we provide the autonomy to approach
        responsibilities with confidence and ownership.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        We believe in clear goals and open communication. What matters most is
        reliability, collaboration, and a shared commitment to delivering
        great results.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        We understand that effective solutions can take different forms, and
        we trust you to make smart decisions and thrive in your role.
      </p>
      <motion.a
        href="#jobs"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
      >
        See Open Roles
      </motion.a>
    </motion.div>

    {/* Visual a la derecha */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="relative flex justify-center items-center"
    >
      <img
        src="/images/WORKWITHUS.JPG"
        alt="Team working"
        className="rounded-2xl shadow-lg max-w-full"
      />

    </motion.div>
  </div>
</section>

{/* Descubre Staffbridge */}
<section className="py-20 bg-gray-100 relative z-10">
  <div className="container mx-auto px-6 md:px-12 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold text-purple-900 mb-12"
    >
      Discover Life at Staffbridge
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { title: "Life at Staffbridge", img: "/images/life-staffbridge.png", link: "#" },
        { title: "Our Offices", img: "/images/OfficeSpace.JPG", link: "#" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-64 group"
        >
          {/* Imagen como fondo */}
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay con hover más claro */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 flex flex-col items-center justify-center text-white text-center px-4">
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <a
              href={item.link}
              className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-purple-800 transition"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Valores */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Innovation", "Humility", "Teamwork"].map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                  {value}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacantes */}
      <section id="jobs" className="py-20 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center hover:shadow-xl transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600">{job.location}</p>
                </div>
                <a
                  href="#apply"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-yellow-500 text-white rounded-lg font-medium shadow hover:opacity-90 transition"
                >
                  Apply
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-yellow-500 text-center text-white relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to grow with us?
        </h2>
        <a
          href="#jobs"
          className="px-8 py-4 bg-white text-purple-800 font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Explore Careers
        </a>
      </section>
    </div>
  );
}
