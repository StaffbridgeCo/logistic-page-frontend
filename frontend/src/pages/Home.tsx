// src/pages/Home.tsx
import { motion, useScroll,  } from "framer-motion";
import { useRef,  } from "react";
import { Briefcase, Clock, DollarSign, Handshake } from "lucide-react";
import Blob from "../components/Blob"; 
import IndustriesCarousel from "../components/IndustriesCarousel";
import CoreStrengths from "../components/CoreStrengths";
import Particles from "../components/Particles";
import WhyChooseDynamic from "../components/WhyChooseDynamic";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Header from "../components/Header"; 


export default function Home() {
  const ref = useRef(null);
  useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


const benefits = [
  { 
    icon: <Briefcase className="w-6 h-6 text-purple-600" />, 
    text: <span className="text-lg leading-relaxed">Motivated, bilingual talent</span> 
  },
  { 
    icon: <Clock className="w-6 h-6 text-purple-600" />, 
    text: <span className="text-lg leading-relaxed">Real-time collaboration</span> 
  },
  { 
    icon: <DollarSign className="w-6 h-6 text-purple-600" />, 
    text: <span className="text-lg leading-relaxed">Top talent at lower costs</span> 
  },
  { 
    icon: <Handshake className="w-6 h-6 text-purple-600" />, 
    text: <span className="text-lg leading-relaxed">Strong cultural alignment</span> 
  },
];


  const industries = [
    { title: "Logistics Coordination", img: "/images/Logistic Coordination.JPG" },
    { title: "Back Office", img: "/images/carrucel.png" },
    { title: "Customer Center", img: "/images/Call Center.JPG" },
    { title: "Technology & Software Solutions", img: "/images/Software Developer.JPG" },
    { title: "Executive Support", img: "/images/Executive5.png" },
  //  { title: "Engineering Design & 3D Modeling", img: "/images/Engineering Desing & 3D Modeling.JPG" },
  ];

  return (

    
    <div ref={ref} className="min-h-screen text-gray-900 overflow-hidden relative">
      {/* Header */}
      <Header />


{/* Fondo morado con partículas SOLO hasta Why Choose LATAM */}
<div className="relative bg-gradient-to-b from-purple-50 via-white-200 to-white">
  {/* Fondo degradado */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.6),transparent_70%)] z-0"></div>


    <section>

      {/* Partículas */}
      <Particles count={30} />
    </section>

  {/* 👇 Aquí metemos la burbuja encima del degradado */}
  <Blob className="absolute top-20 left-50 z-10" />


        {/* Hero */}
<section
  id="home"
  className="flex flex-col items-center justify-center h-[45vh] text-center px-6 relative z-10"
>
  <motion.h2
    className="text-5xl md:text-7xl font-light leading-tight mb-3"
  >
    BUILD HIGH-PERFORMING <br />
    TEAMS WITH{" "}
    <span className="text-purple-950 font-semibold">NEARSHORE TALENT</span>
  </motion.h2>
</section>




        {/* Why Choose LATAM */}
        <section className="relative z-10 py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h3 className="text-4xl font-bold mb-1 text-black ">Why Choose LATAM?</h3>
            <p className="text-lg text-gray-700 mb-4">
              Latin America is a smart choice for building remote teams not just to reduce costs, but to scale sustainably with the right talent and cultural alignment.
            </p>
            <ul className="space-y-5">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {benefit.icon}
                  <span className="text-gray-800">{benefit.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center relative"
          >
<div className="absolute w-[600px] h-[600px] bg-purple-400/40 rounded-full blur-3xl -z-10 top-10 left-10"></div>
<img 
  src="/images/Info.png" 
  alt="LATAM Info" 
  className="max-w-2xl rounded-2xl shadow-xl relative z-10" 
/>

          </motion.div>
        </section>
      </div>

{/* Carrusel de Industrias estilo Coverflow */}
<section id="industries" className="relative z-10 py-20 px-6 bg-white">
  <h3 className="text-4xl font-semibold text-center text-black-900 mb-4">
    Our Industries
  </h3>

  {/* Texto adicional */}
  <p className="text-center text-gray-500 text-sm -mt-1 mb-6">
    …and many more.
  </p>




  <IndustriesCarousel industries={industries} />

  {/* Blob en la derecha */}
  <Blob className="absolute top-20 right-40 z-5" />
</section>

 <>
      {/* otras secciones */}
      <CoreStrengths />
      
      {/* otras secciones */}
    </>

    
{/* Why Choose Section */}
<WhyChooseDynamic />

  {/* CTA */}
  <CallToAction />

  {/* Footer */}
<Footer />
  
    </div>
  );
}
