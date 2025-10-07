// src/pages/TeamMember.tsx
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Particles from "../components/Particles";

const teamMembers = [
  {
    id: "dave-sherman",
    name: "Dave Sherman",
    role: "Founder / CEO",
    img: "/images/dave.png",
    experience: "15+ Years",
    email: "dave@staffbridge.com",
    phone: "+1 (800) 123-4567",
    bio: "Dave Graduated From Sacramento State with a Degree in Mechanical engineering and upon graduating promptly disappointed his mother and moved to Puerto Rico to Open up a freight brokerage. Since then he has created and sold two successful Freight brokerages, Currently Owned a trucking company based out of Chicago IL That he grew from one truck to a fleet of over 12! recently selling this business in order to focus on Staffbridge full time. His main focus now is in the consulting field for our new clients to review their logistics operations to identify hard to find but easy to implement changes to save them large amounts of money outside of just staffing.",
  },
  {
    id: "luisa-sanchez",
    name: "Luisa Sánchez",
    role: "Chief Operations Officer",
    img: "/images/luisa.png",
    experience: "12+ Years",
    email: "luisa@staffbridge.com",
    phone: "+1 (800) 234-5678",
    bio: "Luisa graduated with a degree in International Business from the University of Medellin. With 5 years of experience in the logistics and BPO industries, Luisa has developed expertise ranging from international market operation for a wide range of US-based Companies to freight dispatch within the United States. As a leader of BPO operations, Luisa fosters strong teamwork, ensuring that projects are completed successfully. Due to her dedication, responsibility, and commitment to both company and client success, customers enjoy working with Luisa. Always approachable, respectful, and positive, Luisa is focused on delivering the best outcomes for everyone involved.",
  },
  {
    id: "monica-zuleta",
    name: "Monica Zuleta",
    role: "Head of Growth",
    img: "/images/monica.JPG",
    experience: "10+ Years",
    email: "monica@staffbridge.com",
    phone: "+1 (800) 345-6789",
    bio: "Monica Zuleta is a passionate, results-driven business professional with over 10 years of experience in sales and strategic partnerships. With a degree in Communication and Marketing, she has built a solid career focused on helping companies grow through consultative selling and long term relationship building. She specializes in identifying client needs and delivering tailored solutions that generate long-term value. Monica thrives on building genuine relationships based on trust, transparency, and shared success, always prioritizing the client’s goals as if they were her own.",
  },
  {
    id: "felipe-sanchez",
    name: "Felipe Sanchez",
    role: "HR & Recruitment Manager",
    img: "/images/pipe.jpg",
    experience: "8+ Years",
    email: "felipe@staffbridge.com",
    phone: "+1 (800) 456-7890",
    bio: "Felipe graduated from EAFIT University with a degree in psychology and has five years of experience as a recruiter. A skilled psychologist, he specializes in identifying top talent that perfectly aligns with our customers’ needs. His expertise in understanding both people and business dynamics allows him to build high performing teams that drive success. Dedicated to creating strong, lasting matches between candidates and companies, Felipe ensures that our clients get the best professionals to grow their operations efficiently and seamlessly.",
  },
];

export default function TeamMember() {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) return <div className="text-center py-20">Member not found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      <Particles count={30} />

      <main className="flex-1 pt-24 px-6">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-purple-950 to-purple-950 text-white py-12 text-center rounded-2xl shadow-lg mb-12 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {member.name}
          </motion.h1>
          <p className="mt-2 text-lg">{member.role}</p>
        </div>

        {/* Detalle */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={member.img}
            alt={member.name}
            className="rounded-2xl shadow-lg w-full max-w-md mx-auto object-contain"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              {member.role}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>
            <p><span className="font-bold">Experience:</span> {member.experience}</p>
            <p><span className="font-bold">Email:</span> {member.email}</p>
            <p><span className="font-bold">Phone:</span> {member.phone}</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
