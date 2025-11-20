"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blob";
import Particles from "../components/Particles";
import { Link } from "react-router-dom";

// 🔹 Artículos (con The Nearshore primero)
const articles = [
  {
    id: 1,
    image: "/images/edition1.png",
    category: "Edition 1: Nearshore Insights",
    date: "10.15.2025",
    title: "Turnover: The Unseen Supply Chain Disruption",
    description:
      "Your go-to source for real insights, strategies, and stories shaping the future of nearshore staffing.",
    link: "/articles/article-Near",
    linkedin:
      "https://www.linkedin.com/pulse/turnover-unseen-supply-chain-disruption-staffbridge-inc-iftje/?trackingId=u5594bg1dck7F%2FluF3MoNg%3D%3D",
  },
  {
    id: 2,
    image: "/images/edicion2.png",
    category: "Edition 2: Customer Service & Growth ",
    date: "09.29.2025",
    title: "Customer Service: The (Often Forgotten) Engine of Growth",
    description:
      "In business, obsession with acquisition is everywhere. Companies pour millions into marketing campaigns, new sales tools, and bigger pipelines. Winning new customers feels like the ultimate goal.",
    link: "/articles/customer-service-growth",
    linkedin:
      "https://www.linkedin.com/pulse/customer-service-often-forgotten-engine-growth-staffbridge-inc-flune/?trackingId=%2BA40MjRvTC%2Bfsqf6EEdpIw%3D%3D",
  },
];

export default function ArticlePage() {
  // 🔹 Forzar scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden relative">
      <Header />

      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_70%)]"></div>
      <Particles count={20} />
      <Blob className="absolute top-40 left-10 opacity-30 z-0" />
      <Blob className="absolute bottom-20 right-20 opacity-20 z-0" />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-purple-900 drop-shadow-md"
        >
          THE NEARSHORE INSIDER
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl"
        >
          Your go-to source for real insights, strategies, and stories shaping the future of nearshore staffing.
        </motion.p>

        <motion.a
        href="https://www.linkedin.com/newsletters/the-nearshore-insider-7368694887665262592/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95}}
        className="mt-8 inline-block px-6 py-3 bg-purple-950 text-white font-semibold rounded-xl shadow-md hover:bg-purple-800 transition"

        >
          Follow Our Newsletters
        </motion.a>
      </section>

      {/* 🔹 Artículos lado a lado */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 flex flex-wrap justify-center gap-10 z-10">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer w-full md:w-[45%] lg:w-[40%]"
          >
            {/* Imagen */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col gap-3">
              <span className="text-sm font-medium text-purple-600 border border-purple-200 rounded-md px-2 py-1 w-fit">
                {article.category}
              </span>
              <span className="text-xs text-gray-500 flex justify-between">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </span>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-700 transition">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600">{article.description}</p>

              {/* Botones */}
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  to={article.link}
                  className="text-purple-600 font-semibold hover:underline text-sm"
                >
                  Read more →
                </Link>
                <a
                  href={article.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline text-sm"
                >
                  View on LinkedIn →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
