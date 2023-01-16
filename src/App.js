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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/header" exact element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
