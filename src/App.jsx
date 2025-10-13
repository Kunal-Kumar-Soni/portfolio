import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import ProjectsModal from "./modals/projectsModal";
import StarterPage from "./components/StarterPage";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [projectInfoId, setProjectInfoId] = useState(null);

  return (
    <ThemeProvider>
      <div className="overflow-x-hidden">
        {/* Components */}
        <StarterPage>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects
            setIsProjectsModalOpen={setIsProjectsModalOpen}
            setProjectInfoId={setProjectInfoId}
          />
          <Contact />
          <Footer />
          <ProjectsModal
            isProjectsModalOpen={isProjectsModalOpen}
            setIsProjectsModalOpen={setIsProjectsModalOpen}
            projectInfoId={projectInfoId}
          />
        </StarterPage>
      </div>
    </ThemeProvider>
  );
}

export default App;
