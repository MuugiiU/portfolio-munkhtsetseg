import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skill from "../src/pages/Skill";
import Education from "../src/pages/Education";
import About from "../src/pages/About";
import Work from "./pages/Work";
import Experience from "../src/pages/Experience";
import Contact from "../src/pages/Contact";
import VideoPlayer from "react-background-video-player";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Header />
        <About />
        <Skill />
        <Education />
        <Work />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
