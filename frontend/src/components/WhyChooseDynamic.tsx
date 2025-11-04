// src/components/WhyChooseDynamic.tsx
import { motion, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Users, Clock, Shield, BarChart } from "lucide-react";

const stats = [
  { icon: <Users className="w-6 h-6 text-purple-200" />, value: 95, suffix: "%", label: "Team Retention" },
  { icon: <BarChart className="w-6 h-6 text-purple-200" />, value: 60, suffix: "%", label: "Payroll Cost Reduction" },
  { icon: <Clock className="w-6 h-6 text-purple-200" />, value: 2, suffix: " Weeks", label: "Time to Onboard" },
  { icon: <Shield className="w-6 h-6 text-purple-200" />, value: 100, suffix: "%", label: "Client Transparency" },
];

export default function WhyChooseDynamic() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative z-10 py-20 px-6 bg-white/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto lado izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={controls}
          variants={{ visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-yellow-500 font-bold text-lg mb-2">WHY CHOOSE US</h3>
          <h2 className="text-4xl font-bold text-purple-900 mb-4">
Smart Structure, Stronger Teams.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At StaffBridge, we combine a competitive cost model with a work culture that truly engages.
          </p>

          <p className="text-gray-700 leading-relaxed" >

Thanks to the lower cost of living in Latin America and our cost-efficient management structure, you can direct more of your budget toward your team, offering locally competitive salaries while still realizing meaningful savings.
</p>
<p className="text-gray-700 leading-relaxed" >
This balance allows you to attract and retain exceptional talent without compromising on quality or performance.

          </p>
        </motion.div>

        {/* Stats lado derecho */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{ visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-purple-950 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg"
            >
              <div className="mb-2">{stat.icon}</div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-white text-sm mt-2 text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Versión corregida de AnimatedNumber
function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.floor(latest)}${suffix || ""}`);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, value]);

  return (
    <motion.span className="text-2xl font-bold text-white">
      {rounded}
    </motion.span>
  );
}
