import { motion } from "framer-motion";

interface DualBlobProps {
  className?: string;
}

export default function DualBlob({ className }: DualBlobProps) {
  return (
    <div
      className={`absolute w-[500px] h-[500px] overflow-visible pointer-events-none ${className}`}
    >
      {/* Blob 1 */}
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full backdrop-blur-2xl"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(147, 51, 234,0.9), transparent 70%),
            radial-gradient(circle at bottom right, rgba(252,226,151), transparent 70%)
          `,
        }}
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.05, 0.95, 1],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "50% 60% 40% 50% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-[220px] h-[220px] rounded-full backdrop-blur-2xl top-40 left-40"
        style={{
          background: `
            radial-gradient(circle at top right, rgba(59,130,246,0.9), transparent 70%),
            radial-gradient(circle at bottom left, rgba(168,85,247,0.9), transparent 70%)
          `,
        }}
        animate={{
          x: [0, -15, 15, 0],
          y: [0, 15, -15, 0],
          scale: [1, 1.08, 0.92, 1],
          borderRadius: [
            "70% 30% 50% 50% / 40% 60% 40% 60%",
            "50% 50% 60% 40% / 60% 40% 50% 50%",
            "70% 30% 50% 50% / 40% 60% 40% 60%",
          ],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
