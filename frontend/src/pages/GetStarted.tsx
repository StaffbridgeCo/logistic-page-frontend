// src/pages/GetStarted.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";

export default function GetStarted() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "https://staffbridge.co"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      if (!res.ok) {
        const data = await res.json();
        alert(
          "Error: " +
            (data?.errors?.join?.(", ") || data?.message || "Unknown")
        );
      } else {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: ""
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 flex items-center justify-center px-6 py-12 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-10 relative"
        >
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Kickstart Your{" "}
              <span className="text-purple-600">Journey</span> with Us
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Share a few details and our team will connect with you to
              understand your needs and guide you toward the right nearshore
              solution. Whether you’re building a team, improving operations, or
              exploring new growth opportunities, we’re here to make the process
              simple and effective.
            </p>

            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                Tailored recommendations based on your goals
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                Clear guidance to help you take the next step confidently
              </li>
            </ul>
          </motion.div>

          {/* Columna derecha - formulario */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Get Started Today
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company *
                </label>
                <input
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* PHONE FIELD */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 shadow-md hover:shadow-lg transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Toast de confirmación */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-medium"
              >
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
