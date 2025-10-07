// components/StepTimeline.tsx
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import DualBlob from "./DualBlob";
import Particles from "./Particles";

type Step = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Import delivery details instantly",
    description:
      "In just a few seconds, drivers or dispatchers can set up all the data needed to build a route. You choose whether to provide full details or keep it simple both work seamlessly.",
    bullets: [
      "Import hundreds of stops at once by uploading a CSV/XLSX file",
      "Integrate with external platforms using APIs or no-code connectors",
    ],
    image: "/images/data.png",
  },
  {
    id: 2,
    title: "Generate perfectly optimized delivery routes",
    description:
      "Cut down hours of planning with a single click by building the most efficient routes. Structure your operations effortlessly with delivery zones and constraints.",
    bullets: [
      "Plan routes that adapt to traffic, time windows, and vehicle capacities",
      "Personalize each stop with flexible configuration options",
    ],
    image: "/images/map.png",
  },
  {
    id: 3,
    title: "Dispatch & real time tracking",
    description:
      "Share routes with drivers instantly and keep your entire team aligned through live ETAs and continuous status updates.",
    bullets: [
      "Send routes in one tap via mobile app or SMS link",
      "Monitor progress in real time with delivery proof included",
    ],
    image: "/images/cell-map.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StepTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Progreso del scroll solo dentro de los pasos
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotYRaw = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotY = useSpring(dotYRaw, { stiffness: 80, damping: 20, mass: 0.5 });

  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Título */}
        <div className="mb-16 text-center">
          <h3 className="text-lg font-semibold uppercase tracking-wide text-purple-700">
            Step by step workflow
          </h3>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            From data to routes sent by our brokers
          </h2>
        </div>

        {/* Decoraciones */}
        <DualBlob className="absolute -bottom-20 -left-5 opacity-80" />
        <Particles count={30} />

        {/* Timeline con pasos */}
        <div ref={containerRef} className="relative space-y-28">
          {/* Línea + Punto */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 lg:block">
            <div className="absolute inset-0 bg-purple-200" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700"
            />
            <motion.div
              style={{ top: dotY }}
              className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-purple-600 shadow-lg ring-4 ring-purple-200"
            />
          </div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_80px_1fr]"
            >
              {/* Imagen */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="order-1"
              >
                <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-3 shadow-lg flex justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="max-w-xs h-auto rounded-xl object-contain"
                  />
                </div>
              </motion.div>

              {/* Nodo con número */}
              <div className="relative order-2 hidden justify-center lg:flex">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-purple-500">
                  <span className="font-semibold text-purple-700">
                    {step.id}
                  </span>
                </div>
              </div>

              {/* Texto */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="order-3"
              >
                <div className="rounded-2xl border border-gray-200 bg-purple-800 p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-white">{step.description}</p>

                  <div className="mt-6 space-y-3">
                    {step.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-purple-100 bg-purple-50/20 px-4 py-3 text-sm text-white"
                      >
                        • {b}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Imagen + Botón final */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 flex flex-col items-center space-y-10"
        >
          <img
            src="/images/broker.png"
            alt="Finish illustration"
            className="max-w-md w-full rounded-2xl shadow-lg"
          />

          <Link
            to="/get-started"
            className="px-6 py-3 rounded-full font-semibold 
                       bg-black text-white border border-black shadow-md
                       transition duration-300
                       hover:bg-white hover:text-purple-600 hover:border-purple-600
                       hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
          >
            GET STARTED
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
