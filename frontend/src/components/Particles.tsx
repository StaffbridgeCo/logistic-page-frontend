import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
}

interface ParticlesProps {
  count?: number; // cantidad de partículas (por defecto 20)
  className?: string; // para posicionarlo con absolute, relative, etc.
}

export default function Particles({ count = 20, className }: ParticlesProps) {
  // Generamos partículas aleatorias
  const particles: Particle[] = Array.from({ length: count }, () => ({
    x: Math.random() * 100, // posición horizontal en %
    y: Math.random() * 100, // posición vertical en %
    size: Math.random() * 8 + 4, // tamaño entre 4px y 12px
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-900 opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
