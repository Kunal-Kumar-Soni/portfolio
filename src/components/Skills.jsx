import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiRedux, SiFramer, SiTypescript, SiPrisma } from "react-icons/si";

const skills = [
  // 🌐 Web Foundations
  { name: "HTML", icon: <FaHtml5 className="text-orange-700" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },

  // 🎨 Styling Framework
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },

  // ⚛️ Frontend Libraries
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },

  // 🚀 Framework
  {
    name: "Next.js",
    icon: <RiNextjsFill className="text-black dark:text-white" />,
  },

  // 🗄️ Database ORM
  { name: "Prisma", icon: <SiPrisma className="text-sky-600 dark:text-sky-400" /> },

  // 🛠️ Version Control
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-600 dark:text-gray-400" />,
  },
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
      className="bg-white dark:bg-popover px-6 py-16 min-h-[80vh] text-black dark:text-white transition-colors duration-300"
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
          className="mb-10 font-bold text-black dark:text-white text-4xl md:text-5xl text-center"
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
              }}
              className="relative flex flex-col justify-center items-center bg-gray-100 dark:bg-white/5 shadow-lg hover:shadow-black/50 dark:hover:shadow-white/40 p-6 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden text-black dark:text-white transition duration-300"
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
