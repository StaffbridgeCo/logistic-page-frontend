// src/components/TeamSection.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DualBlob from "../components/DualBlob";

const teamMembers = [
  {
    id: "dave-sherman",
    name: "Dave Sherman",
    role: "Founder / CEO",
    img: "/images/dave.png",
  },
  {
    id: "luisa-sanchez",
    name: "Luisa Sánchez",
    role: "Chief Operations Officer",
    img: "/images/luisa.png",
  },
  {
    id: "monica-zuleta",
    name: "Monica Zuleta",
    role: "Head of Growth",
    img: "/images/monica.JPG",
  },
  {
    id: "felipe-sanchez",
    name: "Felipe Sánchez ",
    role: "HR & Recruitment Manager",
    img: "/images/pipe.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Blob de fondo */}
      <DualBlob className="absolute -bottom-20 -left-5 z-0 opacity-80" />

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Encabezado */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-purple-900 mb-4"
        >
          Our Professionals

        </motion.h2>
                  <p>Meet the team of experts behind your dream team.
</p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >

        </motion.p>

        {/* Grid de miembros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Link to={`/team/${member.id}`}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
