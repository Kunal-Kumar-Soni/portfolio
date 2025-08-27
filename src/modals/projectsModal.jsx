import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import projectsInfo from "../data/projectsInfo.json";

function ProjectsModal({
  isProjectsModalOpen,
  setIsProjectsModalOpen,
  modes,
  projectInfoId,
}) {
  const modalRef = useRef(null);

  // Close modal when clicked outside
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsProjectsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    document.addEventListener("touchstart", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
      document.removeEventListener("touchstart", handleClickOutSide);
    };
  }, []);

  const selectedProjectInfo = projectsInfo.find(
    (projectInfo) => projectInfo.id === projectInfoId
  );

  useEffect(() => {
    if (isProjectsModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isProjectsModalOpen]);

  return (
    <AnimatePresence>
      {isProjectsModalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.35 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-md px-4 sm:px-0"
        >
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-slate-900 shadow-2xl border border-slate-300 dark:border-slate-700 rounded-2xl w-full max-w-[90%] xl:max-w-[80%] max-h-[80vh] overflow-y-auto text-slate-800 dark:text-white transition-all custom-scroll"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsProjectsModalOpen(false)}
              className="top-4 float-right right-1 z-10 sticky bg-slate-300/70 hover:bg-slate-400/80 dark:bg-slate-600/60 dark:hover:bg-slate-500/70 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white dark:text-slate-300 text-xl sm:text-2xl active:scale-95 transition cursor-pointer"
            >
              <MdClose />
            </button>

            <div className="p-4 sm:p-6">
              {/* Title */}
              <h2 className="mb-6 font-bold text-2xl sm:text-3xl text-center tracking-tight">
                <img
                  src={selectedProjectInfo.icon}
                  alt="Project Icon"
                  className="inline-block mr-2 w-8 sm:w-10 h-8 sm:h-10 align-middle"
                />
                {selectedProjectInfo.title}
              </h2>

              <div className="gap-8 grid lg:grid-cols-2">
                {/* Left: Image Section with highlight */}
                <div className="group relative shadow-[0_0px_3px_rgba(0,0,0,0.4)] dark:shadow-[0_0px_5px_rgba(255,255,255,0.4)] border border-slate-300 dark:border-slate-600 rounded-xl overflow-hidden transition-shadow duration-300">
                  <img
                    src={
                      modes === "light"
                        ? selectedProjectInfo.image.light
                        : selectedProjectInfo.image.dark
                    }
                    alt={`${selectedProjectInfo.title} Screenshot`}
                    className="rounded-xl w-full h-full object-fit transition-transform duration-500"
                  />
                  <div className="bottom-2 left-2 absolute bg-black/50 px-2 py-0.5 rounded text-white text-xs">
                    Screenshot Preview
                  </div>
                </div>

                {/* Right: Details */}
                <div className="space-y-4">
                  <div className="space-y-3 text-base leading-relaxed">
                    <h3 className="font-semibold text-sky-600 dark:text-sky-400 text-lg">
                      About This {selectedProjectInfo.title}
                    </h3>
                    <p>{selectedProjectInfo.about}</p>

                    <h3 className="font-semibold text-lg">✨ Key Features</h3>
                    <ul className="space-y-1 list-none">
                      {selectedProjectInfo.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="space-y-4 bg-slate-100 dark:bg-slate-800 shadow-[0_0px_3px_rgba(0,0,0,0.4)] dark:shadow-[0_0px_5px_rgba(255,255,255,0.4)] p-4 border border-slate-300 dark:border-slate-600 rounded-xl">
                    <h4 className="font-semibold text-sky-600 dark:text-sky-400 text-lg">
                      🔧 Project Details
                    </h4>

                    <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-base">
                      <li>
                        <strong>Tech Stack:</strong>{" "}
                        <span className="text-slate-900 dark:text-white">
                          {selectedProjectInfo.techStack
                            .map((tech) => `${tech.name}`)
                            .join(", ")}
                        </span>
                      </li>
                      <li>
                        <strong>Role:</strong>{" "}
                        <span className="text-slate-900 dark:text-white">
                          {selectedProjectInfo.role}
                        </span>
                      </li>
                      <li>
                        <strong>Year:</strong>{" "}
                        <span className="text-slate-900 dark:text-white">
                          {selectedProjectInfo.year}
                        </span>
                      </li>
                    </ul>

                    <div className="space-y-2 text-base">
                      <p>
                        <strong>Live App:</strong>{" "}
                        <a
                          href={selectedProjectInfo.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 dark:text-blue-400 underline"
                        >
                          {new URL(selectedProjectInfo.demo).hostname}
                        </a>
                      </p>
                      <p>
                        <strong>GitHub:</strong>{" "}
                        <a
                          href={selectedProjectInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 dark:text-blue-400 underline"
                        >
                          {new URL(selectedProjectInfo.github).hostname +
                            selectedProjectInfo.github.replace(
                              /^https:\/\/[^\/]+/,
                              ""
                            )}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectsModal;
