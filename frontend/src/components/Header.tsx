// src/components/Header.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [allInOneOpen, setAllInOneOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "#industries" },
    { name: "All in One", href: "#allinone" },
    { name: "Work with Us", href: "/work-with-us" },
  ];

  const industriesSubItems = [
    "Logistics Coordination",
    "Back Office",
    "Customer Service",
    "IT Operation",
    "Executive Support",
    // "Engineering Design & 3D Modeling",
    "Software Developer",
  ];

  const industriesRoutes: Record<string, string> = {
    "Logistics Coordination": "/logistics",
    "Back Office": "/back-office",
    "Customer Service": "/customer-service",
    "IT Operation": "/it-operation",
    "Executive Support": "/executive-support",
    // "Engineering Design & 3D Modeling": "/engineering-design",
    "Software Developer": "/software-developer",
  };

  const allInOneSubItems = ["Recruitment", "Office Space", "Retention", "Payroll"];

  const allInOneRoutes: Record<string, string> = {
    Recruitment: "/recruitment",
    "Office Space": "/office-space",
    Retention: "/retention",
    Payroll: "/payroll",
  };

  // Variants para animaciones
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/home">
          <img
            src="/images/logo.png"
            alt="StaffBridge Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <ul className="flex space-x-8 relative">
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative"
                onMouseEnter={() => {
                  if (item.name === "Industries") setIndustriesOpen(true);
                  if (item.name === "All in One") setAllInOneOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.name === "Industries") setIndustriesOpen(false);
                  if (item.name === "All in One") setAllInOneOpen(false);
                }}
              >
                <Link
                  to={item.href}
                  className="relative hover:text-purple-600 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Dropdown para Industries */}
                {item.name === "Industries" && (
                  <AnimatePresence>
                    {industriesOpen && (
                      <motion.ul
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                      >
                        {industriesSubItems.map((subItem, idx) => (
                          <motion.li key={idx} variants={itemVariants}>
                            <Link
                              to={industriesRoutes[subItem]}
                              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                            >
                              {subItem}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}

                {/* Dropdown para All in One */}
                {item.name === "All in One" && (
                  <AnimatePresence>
                    {allInOneOpen && (
                      <motion.ul
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                      >
                        {allInOneSubItems.map((subItem, idx) => (
                          <motion.li key={idx} variants={itemVariants}>
                            <Link
                              to={allInOneRoutes[subItem]}
                              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                            >
                              {subItem}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Botón Articles */}
          <Link
            to="/article-page"
            className="ml-6 px-5 py-2 rounded-full font-semibold shadow-md 
                       bg-purple-600 text-white border border-purple-600
                       transition duration-300
                       hover:bg-white hover:text-purple-600 hover:border-purple-600
                       hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
          >
            Articles
          </Link>

          {/* Botón GET STARTED */}
          <Link
            to="/get-started"
            className="ml-4 px-5 py-2 rounded-full font-semibold shadow-md 
                       bg-black text-white border border-black
                       transition duration-300
                       hover:bg-white hover:text-purple-600 hover:border-purple-600
                       hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile sidebar + overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
                {menuItems.map((item, i) => (
                  <motion.div key={i} className="w-full text-center">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className="block py-2 hover:text-purple-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>

                    {/* Submenu en mobile */}
                    {item.name === "Industries" && (
                      <div className="pl-4">
                        {industriesSubItems.map((subItem, idx) => (
                          <Link
                            key={idx}
                            to={industriesRoutes[subItem]}
                            className="block py-1 text-gray-600 hover:text-purple-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}

                    {item.name === "All in One" && (
                      <div className="pl-4">
                        {allInOneSubItems.map((subItem, idx) => (
                          <Link
                            key={idx}
                            to={allInOneRoutes[subItem]}
                            className="block py-1 text-gray-600 hover:text-purple-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Botón Articles en mobile */}
                <Link
                  to="/articles"
                  className="px-5 py-2 rounded-full font-semibold 
                             bg-purple-600 text-white border border-purple-600 shadow-md
                             transition duration-300
                             hover:bg-white hover:text-purple-600 hover:border-purple-600
                             hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
                  onClick={() => setIsOpen(false)}
                >
                  Articles
                </Link>

                {/* Botón GET STARTED en mobile */}
                <Link
                  to="/get-started"
                  className="px-5 py-2 rounded-full font-semibold 
                             bg-black text-white border border-black shadow-md
                             transition duration-300
                             hover:bg-white hover:text-purple-600 hover:border-purple-600
                             hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
                  onClick={() => setIsOpen(false)}
                >
                  GET STARTED
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
