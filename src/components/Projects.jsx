import { motion } from "framer-motion";
import projects from "../data/projects.json";
import ProjectsCard from "./ProjectsCard";

// for better animations
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = ({ setIsProjectsModalOpen, setProjectInfoId }) => {
  return (
    <section
      id="Projects"
      className="bg-white dark:bg-popover px-6 py-16 text-black dark:text-white transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            duration: 1,
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12 font-bold text-4xl md:text-5xl text-center"
        >
          Projects
        </motion.h2>

        <motion.div
          className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projects.map((project, index) => {
            return (
              <ProjectsCard
                project={project}
                key={index}
                index={index}
                setIsProjectsModalOpen={setIsProjectsModalOpen}
                setProjectInfoId={setProjectInfoId}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
