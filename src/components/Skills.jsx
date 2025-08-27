import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiAdobephotoshop,
  SiFigma,
  SiReactquery,
  SiFramer,
  SiTypescript,
  SiAxios,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-700" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  {
    name: "Axios",
    icon: <SiAxios className="text-purple-500" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-600 dark:text-gray-400" />,
  },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-700" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="Skills"
      className="bg-white dark:bg-[#0f172a] px-6 py-16 min-h-[80vh] text-black dark:text-white transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
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
          Skills
        </motion.h2>

        <motion.div
          className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 32px 3px rgba(14, 165, 233, 1)",
              }}
              className="relative flex flex-col justify-center items-center bg-gray-100 dark:bg-[#1e293b] shadow-lg hover:shadow-sky-500/50 p-6 rounded-xl overflow-hidden transition duration-300"
              style={{}}
            >
              <div className="mb-2 text-4xl">{skill.icon}</div>
              <p className="font-medium text-black dark:text-white text-lg text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
