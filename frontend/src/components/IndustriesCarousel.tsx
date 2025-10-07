import { useState } from "react";
import { motion } from "framer-motion";

export default function IndustriesCarousel({
  industries,
}: {
  industries: { title: string; img: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % industries.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);

  return (
    <div className="relative flex justify-center items-center">
      {/* aumentamos la altura del contenedor para que quepa la card escalada */}
      <div className="relative w-full flex justify-center items-center h-[750px]">
        {industries.map((industry, i) => {
          const offset = (i - activeIndex + industries.length) % industries.length;

          // Configuración de posiciones
          let scale = 0.7;
          let opacity = 0;
          let zIndex = 0;
          let translateX = 0;
          let rotate = 0;

          if (offset === 0) {
            // Card central
            scale = 1.9;
            opacity = 1;
            zIndex = 20;
            translateX = 0;
            rotate = 0;
          } else if (offset === 1 || offset === industries.length - 1) {
            // Lados inmediatos
            scale = 1.1;
            opacity = 0.6;
            zIndex = 10;
            translateX = offset === 1 ? 450 : -450;
            rotate = offset === 1 ? -15 : 15; // 👈 ladeamos las laterales
          }

          return (
            <motion.div
              key={i}
              className="absolute w-72 h-96 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6"
              animate={{
                scale,
                opacity,
                x: translateX,
                rotate,
                zIndex,
              }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) {
                  next();
                } else if (info.offset.x > 100) {
                  prev();
                }
              }}
            >
              <img
                src={industry.img}
                alt={industry.title}
                draggable={false}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h4 className="text-xl font-semibold text-gray-800 text-center">
                {industry.title}
              </h4>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
