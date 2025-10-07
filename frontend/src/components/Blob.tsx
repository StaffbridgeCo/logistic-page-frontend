// src/components/Blob.tsx
import { motion } from "framer-motion";

interface BlobProps {
  className?: string;
}

export default function Blob({ className }: BlobProps) {
  return (
    <motion.div
      className={`w-[400px] h-[400px] rounded-full backdrop-blur-2xl ${className}`}
      style={{
        background: `
          radial-gradient(circle at top left, rgba(37,99,235,0.9), transparent 70%),
          radial-gradient(circle at bottom right, rgba(250,204,21,0.9), transparent 70%)
        `,
      }}
      animate={{
        x: [0, 30, -30, 0],
        y: [0, -30, 30, 0],
        scale: [1, 1.1, 0.9, 1],
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "50% 60% 40% 50% / 40% 50% 60% 50%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
