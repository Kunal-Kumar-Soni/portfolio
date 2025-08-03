import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import ProjectsModal from "./modals/projectsModal";

function App() {
  const [modes, setModes] = useState(localStorage.getItem("Modes") || "dark");
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [projectInfoId, setProjectInfoId] = useState(null);

  useEffect(() => {
    localStorage.setItem("Modes", modes);
    if (modes !== "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [modes]);

  const handleDarkMode = () => {
    setModes((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="overflow-x-hidden">
      {/* Theme Toggle Button */}
      <button
        onClick={handleDarkMode}
        className="right-6 bottom-22 sm:bottom-24 z-50 fixed bg-white hover:bg-gray-100 dark:bg-[#0f172a] dark:hover:bg-[#17233b] shadow-[0_0_4px_1px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-lg p-4 border border-sky-400/20 rounded-full text-black dark:text-white text-lg md:text-2xl hover:scale-110 active:scale-110 transition-all duration-300 cursor-pointer"
      >
        {modes === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        className="right-6 bottom-6 z-50 fixed bg-sky-500/80 hover:bg-sky-600/90 shadow-xl hover:shadow-2xl backdrop-blur-lg p-4 border border-white/10 rounded-full text-white text-lg md:text-2xl hover:scale-110 active:scale-110 transition-all duration-300 cursor-pointer"
      >
        <FaArrowUp />
      </button>

      {/* Components */}
      <Navbar />
      <Hero modes={modes} />
      <About />
      <Skills />
      <Projects
        setIsProjectsModalOpen={setIsProjectsModalOpen}
        setProjectInfoId={setProjectInfoId}
        modes={modes}
      />
      <Contact />
      <Footer />
      <ProjectsModal
        isProjectsModalOpen={isProjectsModalOpen}
        setIsProjectsModalOpen={setIsProjectsModalOpen}
        modes={modes}
        projectInfoId={projectInfoId}
      />
    </div>
  );
}

export default App;
