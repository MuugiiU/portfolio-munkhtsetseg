import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import VideoPlayer from "react-background-video-player";
function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 5 }}
        >
          <SocialIcon network="twitter" />
          <SocialIcon network="facebook" />
          <SocialIcon network="instagram" />
          <SocialIcon network="discord" />
          <SocialIcon network="youtube" />
        </motion.div>

        <h1 style={{ color: "pink" }}>
          <Typewriter words={["Sain uu", "Muugii baina"]} loop={false} />
        </h1>
      </header>
      <Header />
    </div>
  );
}

export default App;
