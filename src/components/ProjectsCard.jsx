import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ProjectsCard({ project, index, setIsProjectsModalOpen, setProjectInfoId }) {
  const handleOpenModal = (e, index) => {
    e.stopPropagation();
    setIsProjectsModalOpen(true);
    setProjectInfoId(index);
  };

  return (
    <motion.div
      onClick={(e) => handleOpenModal(e, index)}
      key={index}
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col bg-white dark:bg-black shadow-md dark:shadow-white/20 rounded-xl overflow-hidden transition-shadow duration-300 cursor-pointer"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Border Animation */}
      <motion.div
        className="top-0 left-0 absolute bg-gradient-to-r from-transparent via-current to-transparent w-full h-0.5"
        initial={{ x: "-100%" }}
        animate={{ x: "100%", transition: { duration: 3, repeat: Infinity, ease: "linear" } }}
      />
      <motion.div
        className="top-0 right-0 absolute bg-gradient-to-b from-transparent via-current to-transparent w-0.5 h-full"
        initial={{ y: "-100%" }}
        animate={{
          y: "100%",
          transition: { duration: 3, repeat: Infinity, ease: "linear", delay: 0.75 },
        }}
      />
      <motion.div
        className="right-0 bottom-0 absolute bg-gradient-to-l from-transparent via-current to-transparent w-full h-0.5"
        initial={{ x: "100%" }}
        animate={{
          x: "-100%",
          transition: { duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 },
        }}
      />
      <motion.div
        className="bottom-0 left-0 absolute bg-gradient-to-t from-transparent via-current to-transparent w-0.5 h-full"
        initial={{ y: "100%" }}
        animate={{
          y: "-100%",
          transition: { duration: 3, repeat: Infinity, ease: "linear", delay: 2.25 },
        }}
      />

      <div className="flex flex-col flex-grow justify-between bg-gray-100 dark:bg-white/15 p-4 sm:p-5 rounded-b-xl">
        {/* Project Image */}
        <img
          src={project.image.light}
          alt={project.title}
          className="shadow-sm dark:shadow-white/20 mb-4 rounded-xl w-full h-64 lg:h-60 xl:h-64 object-cover object-top transition-shadow duration-300"
        />

        {/* Title */}
        <h3 className="mb-4 font-extrabold text-black dark:text-white text-3xl tracking-tight">
          {project.title}
        </h3>

        {/* GitHub & Demo Icons */}
        <div className="flex gap-4 mt-auto">
          <a
            onClick={(e) => e.stopPropagation()}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-black dark:bg-white shadow-md hover:shadow-xl rounded-full w-11 h-11 text-white dark:text-black text-2xl transition-all duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            onClick={(e) => e.stopPropagation()}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-black dark:bg-white shadow-md hover:shadow-xl rounded-full w-11 h-11 text-white dark:text-black text-2xl transition-all duration-300"
            title="Live Demo"
          >
            <ExternalLink />
          </a>
        </div>

        {/* More Details Text */}
        <p className="mt-4 text-black dark:text-white/70 text-sm italic">
          Click anywhere for more details
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectsCard;
