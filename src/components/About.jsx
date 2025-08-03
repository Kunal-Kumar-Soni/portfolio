import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col justify-center items-center bg-white dark:bg-[#0f172a] px-6 py-20 min-h-[80vh] text-black dark:text-white transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 1,
        }}
        className="mb-10 font-bold text-sky-500 text-4xl md:text-5xl text-center"
      >
        About Me
      </motion.h2>

      <div className="flex lg:flex-row flex-col items-center gap-16 w-full max-w-6xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            A{" "}
            <span className="bg-sky-500/20 px-2 py-1 rounded-md font-medium text-sky-500 dark:text-sky-400">
              Frontend Developer
            </span>{" "}
            focused on functionality and user experience. I enjoy building
            interactive and reliable web features that work smoothly across
            devices and deliver real value to users.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-base">
            I build functional, responsive UIs using{" "}
            <span className="font-medium text-black dark:text-white">
              React.js
            </span>{" "}
            and{" "}
            <span className="font-medium text-black dark:text-white">
              Tailwind CSS
            </span>
            . I'm looking for a role to learn, contribute, and grow.
          </p>

          <div className="flex items-center gap-2 mt-6 font-semibold text-sky-500 dark:text-sky-400 transition">
            <MdArrowRightAlt size={24} />
            <span>Let’s build something awesome!</span>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 justify-between gap-6 grid grid-cols-1 sm:grid-cols-2"
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px 2px rgba(14, 165, 233, 0.9)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-gray-100/70 dark:bg-white/5 shadow-lg backdrop-blur-md p-6 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition-all"
          >
            {/* Border Animation */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.3), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["-100% 0", "100% 0"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <FaUserGraduate
              size={40}
              className="mb-4 text-sky-500 dark:text-sky-400"
            />
            <h4 className="mb-2 font-semibold text-black dark:text-white text-xl">
              Frontend Developer
            </h4>
            <p className="text-gray-700 text-md dark:text-gray-400">
              Learned by building real projects and exploring modern tools.
            </p>
          </motion.div>

          {/* Card 2 - Same animation */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px 2px rgba(14, 165, 233, 0.9)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-gray-100/70 dark:bg-white/5 shadow-lg backdrop-blur-md p-6 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition-all"
          >
            {/* Border Animation */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.3), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["-100% 0", "100% 0"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <FaLaptopCode
              size={40}
              className="mb-4 text-sky-500 dark:text-sky-400"
            />
            <h4 className="mb-2 font-semibold text-black dark:text-white text-xl">
              React + Tailwind
            </h4>
            <p className="text-gray-700 text-md dark:text-gray-400">
              Built using component-driven React and utility-first Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
