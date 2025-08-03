import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="Home"
      className="flex lg:flex-row flex-col-reverse justify-center items-center gap-10 bg-white dark:bg-[#0f172a] px-6 pt-20 lg:pt-50 pb-10 min-h-[80vh] text-black dark:text-white transition-colors duration-300"
    >
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center lg:items-start w-fit max-w-4xl lg:text-left text-center"
      >
        <div>
          {/* Heading */}
          <h1 className="mb-5 font-bold text-5xl md:text-6xl leading-tight">
            Hey, I'm{" "}
            <span className="inline-block ml-2 text-sky-500">
              Kunal Kumar Soni
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="mb-5 font-semibold text-gray-600 dark:text-gray-300 text-3xl md:text-4xl">
            Frontend Developer
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4 mb-6">
          <a
            href="#Projects"
            className="inline-flex items-center gap-2 bg-sky-500 shadow-lg px-6 py-3 rounded-xl font-semibold text-white text-base md:text-lg hover:scale-105 transition"
          >
            View Projects <ArrowRight size={22} />
          </a>

          <div ref={dropDownRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center gap-4 bg-white hover:bg-sky-500 dark:bg-gray-900 px-6 py-3 border border-sky-500 rounded-xl w-full font-semibold text-sky-500 hover:text-white dark:text-sky-400 md:text-lg transition cursor-pointer"
            >
              Download{" "}
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="left-0 z-20 absolute bg-white dark:bg-[#0f172a] shadow-md backdrop-blur-md mt-2 border border-sky-500 rounded-2xl w-full overflow-hidden"
                >
                  <li
                    onClick={() => handleDownload("/documents/resume.pdf")}
                    className="group flex items-center gap-3 bg-white hover:bg-sky-500 dark:bg-[#0f172a] hover:bg-gradient-to-r px-6 py-4 border-b border-b-sky-500 font-medium text-sky-500 hover:text-white dark:text-sky-400 transition-all duration-200 cursor-pointer"
                  >
                    Resume (Pdf)
                  </li>

                  <li
                    onClick={() => handleDownload("/documents/certificate.jpg")}
                    className="group flex items-center gap-3 bg-white hover:bg-sky-500 dark:bg-[#0f172a] hover:bg-gradient-to-r px-6 py-4 font-medium text-sky-500 hover:text-white dark:text-sky-400 transition-all duration-200 cursor-pointer"
                  >
                    Certificate (Img)
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-5 text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/Kunal-Kumar-Soni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={28}
              className="hover:text-black dark:hover:text-white transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-kumar-soni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={28}
              className="hover:text-black dark:hover:text-white transition"
            />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative rounded-full max-w-[350px] max-h-[350px] overflow-hidden"
        style={{
          filter: "drop-shadow(0 0px 12px rgba(14, 165, 233, 0.5))",
          boxShadow:
            "0 10px 25px rgba(14, 165, 233, 0.3), 0 5px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Main Image */}
        <img
          src="images/logo2.jpg"
          alt="user img"
          className="w-full h-full object-cover"
        />

        {/* Dual-Tone Rotating Border (Visible in All Modes) */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, #60a5fa, #38bdf8, #0ea5e9, #38bdf8, transparent)",

            padding: "3px",
            mask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            maskComposite: "exclude",
            boxShadow: "0 0 12px 4px rgba(2, 132, 199, 0.8)", // stronger glow
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "linear",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
