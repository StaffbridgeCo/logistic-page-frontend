"use client";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blob from "../components/Blob";
import Particles from "../components/Particles";
import { Link } from "react-router-dom";

// Datos de artículos
const articles = [
  {
    id: 1,
    image: "/images/Customer.JPG", // Imagen local
    category: "Customer Service & Growth",
    date: "09.29.2025",
    title: "Customer Service: The (Often Forgotten) Engine of Growth",
    description:
      "In business, obsession with acquisition is everywhere. Companies pour millions into marketing campaigns, new sales tools, and bigger pipelines. Winning new customers feels like the ultimate goal.",
    link: "/articles/customer-service-growth", // Ruta personalizada
    linkedin:
      "https://www.linkedin.com/pulse/turnover-unseen-supply-chain-disruption-staffbridge-inc-iftje/?trackingId=u5594bg1dck7F%2FluF3MoNg%3D%3D",
  },

];

export default function ArticlePage() {
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
          Insightful Articles
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl"
        >
          Explore the latest insights on customer service, technology, and
          innovation.
        </motion.p>
      </section>

      {/* Featured Article */}
      <section className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
        {/* Imagen local */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-80 rounded-2xl overflow-hidden shadow-md"
        >
          <img
            src="/images/near.png" // Imagen destacada
            alt="Customer Service Growth"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <span className="text-sm font-medium text-purple-600 border border-purple-200 rounded-md px-2 py-1 w-fit">
            Insightful Articles
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            The Nearshore Insider
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your go-to source for real insights, strategies, and stories shaping
            the future of nearshore staffing.
          </p>

          {/* Botón principal */}
          <Link
            to="/articles/article-Near"
            className="mt-4 inline-block bg-purple-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-purple-700 transition"
          >
            Read full article →
          </Link>

          {/* Botón LinkedIn */}
          <a
            href="https://www.linkedin.com/pulse/turnover-unseen-supply-chain-disruption-staffbridge-inc-iftje/?trackingId=u5594bg1dck7F%2FluF3MoNg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            View on LinkedIn →
          </a>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            {/* Imagen */}
            <div className="h-52 w-full overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col gap-3">
              <span className="text-sm font-medium text-purple-600 border border-purple-200 rounded-md px-2 py-1 w-fit">
                Insightful Articles
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
              <div className="flex flex-col gap-2">
                <Link
                  to={article.link}
                  className="mt-2 text-purple-600 font-semibold hover:underline text-sm"
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
