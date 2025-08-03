import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#0f172a] px-6 py-10 text-black dark:text-white transition-colors duration-300">
      <div className="flex flex-col items-center space-y-5 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex space-x-6 text-2xl"
        >
          <a
            href="https://github.com/Kunal-Kumar-Soni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-kumar-soni/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/kunalkumar_soni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:kunal.codes24@gmail.com"
            className="hover:text-sky-500 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gray-600 dark:text-gray-400 text-sm text-center transition-colors duration-300"
        >
          &copy; {new Date().getFullYear()} Kunal Kumar Soni. All rights
          reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
