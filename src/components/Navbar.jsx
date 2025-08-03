import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleClickIcon = () => {
    const home = document.getElementById("Home");
    if (home) home.scrollIntoView();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(links[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="top-0 left-0 z-50 fixed bg-white/80 dark:bg-[#0f172a]/90 shadow-md backdrop-blur px-6 py-3 w-full text-black dark:text-white transition-colors duration-300">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <div onClick={handleClickIcon} className="flex items-center gap-2">
          <motion.div className="relative w-12 h-12 cursor-pointer">
            {/* Main Logo (Static) */}
            <img
              src="images/logo1.png"
              alt="Logo"
              className="z-10 relative shadow-md p-1 rounded-full w-full h-full object-contain"
            />

            {/* Glowing Circular Gradient Border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, #3b82f6, #38bdf8, transparent)",
                padding: "2px",
                mask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
                maskComposite: "exclude",
                filter: "drop-shadow(0 0 4px rgba(56, 189, 248, 0.7))",
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            />

            {/* Additional Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 10px 2px rgba(56, 189, 248, 0.3)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <li
              key={i}
              className={`relative font-medium text-xl transition cursor-pointer ${
                activeSection === link
                  ? "text-sky-400"
                  : "text-black dark:text-white hover:text-sky-400"
              }`}
            >
              <a
                href={`#${link}`}
                onClick={() => setActiveSection(link)}
                className="group relative"
              >
                {link}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-sky-400 transition-all duration-300 ease-in-out ${
                    activeSection === link ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex items-center text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 bg-white dark:bg-[#1e293b] shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-none mt-4 py-4 rounded-lg transition-colors duration-300"
          >
            {links.map((link, i) => (
              <a
                href={`#${link}`}
                key={i}
                onClick={() => {
                  setActiveSection(link);
                  setIsOpen(false);
                }}
                className={`font-medium text-lg tracking-wider ${
                  activeSection === link
                    ? "text-sky-400"
                    : "text-black dark:text-white hover:text-sky-400"
                }`}
              >
                {link}
              </a>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
