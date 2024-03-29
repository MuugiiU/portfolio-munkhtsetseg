import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarmenu from "./components/Navbarmenu";
import Header from "./components/Header";
import Skill from "../src/pages/Skill";
import Education from "../src/pages/Education";
import About from "../src/pages/About";

import Projects from "./pages/Projects";
import Contact from "../src/pages/Contact";
// eslint-disable-next-line no-unused-vars
import VideoPlayer from "react-background-video-player";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbarmenu />
        <Routes>
          <Route path="/" exact element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
