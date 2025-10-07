// src/components/Footer.tsx
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/logo.png"
            alt="StaffBridge Logo"
            className="h-12 w-auto mb-4"
          />
          <p className="text-gray-600 text-sm">
            The connection to new horizons
          </p>
        </motion.div>

        {/* Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-gray-900 font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-600 text-sm">info@staffbridge.co</p>
          <p className="text-gray-600 text-sm">+1 714-336-6071</p>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 transition"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 transition"
            >
              <Instagram className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-gray-900 font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/home" className="hover:text-purple-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-600">About Us</Link></li>
            <li><Link to="/work-with-us" className="hover:text-purple-600">Work With Us</Link></li>
            <li><Link to="/get-started" className="hover:text-purple-600">Get Started</Link></li>
            <li><Link to="/payroll" className="hover:text-purple-600">Payroll</Link></li>
            <li><Link to="/logistics" className="hover:text-purple-600">Logistics</Link></li>
            <li><Link to="/recruitment" className="hover:text-purple-600">Recruitment</Link></li>
            <li><Link to="/office-space" className="hover:text-purple-600">Office Space</Link></li>
            <li><Link to="/customer-service" className="hover:text-purple-600">Customer Service</Link></li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-gray-900 font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/privacy-policy" className="hover:text-purple-600">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-purple-600">Terms & Conditions</Link></li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-8 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StaffBridge. All rights reserved.
      </div>
    </footer>
  );
}
