import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="Home"
      className="flex lg:flex-row flex-col-reverse justify-center items-center gap-10 bg-white dark:bg-popover px-6 pt-20 lg:pt-50 pb-10 min-h-[80vh] text-black dark:text-white transition-colors duration-300"
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
          <h1 className="mb-5 font-bold text-black dark:text-white text-5xl md:text-6xl leading-tight">
            Hey, I'm <span className="inline-block ml-2">Kunal Kumar Soni</span>
          </h1>

          {/* Subheading */}
          <h2 className="mb-5 font-semibold text-gray-600 dark:text-gray-300 text-3xl md:text-4xl">
            Frontend Developer
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4 mb-6">
          {/* View Projects Button */}
          <a
            href="#Projects"
            className="inline-flex items-center gap-2 bg-black dark:bg-white shadow-black/20 shadow-lg dark:shadow-white/20 px-6 py-3 rounded-xl font-semibold text-white dark:text-black text-base md:text-lg hover:scale-105 transition-transform duration-300"
          >
            View Projects <ArrowRight size={22} />
          </a>

          {/* Resume Button */}
          <a
            href="/documents/Kunal's Resume.pdf.pdf"
            download="/documents/Kunal's Resume.pdf.pdf"
            className="group inline-flex relative items-center gap-2 px-6 py-3 border dark:border-white border-black rounded-xl overflow-hidden font-semibold text-black dark:text-white text-base md:text-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Removed gradient background for hover */}

            <span className="z-10 flex items-center gap-2 mx-auto">
              Resume{" "}
              <Download className="transition-transform group-hover:translate-y-[-2px] duration-300" />
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-5 text-gray-600 dark:text-gray-400">
          <a href="https://github.com/Kunal-Kumar-Soni" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} className="hover:text-black dark:hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-kumar-soni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} className="hover:text-black dark:hover:text-white transition" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative shadow-[0_10px_25px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_25px_rgba(255,255,255,0.2)] drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] rounded-full max-w-[350px] max-h-[350px] overflow-hidden"
      >
        {/* Main Image */}
        <img src="images/logo2.jpg" alt="user img" className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
};

export default Hero;
