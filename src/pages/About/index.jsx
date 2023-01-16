import style from "../About/style.module.css";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Wave } from "react-animated-text";
import { FcBusinesswoman } from "react-icons/fc";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
const About = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div id="about" className={style.about}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#0000",
            },
            links: {
              color: "#0000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div>
        <h3 className={style.woman}>
          <Wave text="About me" />
          <FcBusinesswoman className={style.a} />
        </h3>
      </div>

      <div className={style.aboutpr}>
        <img src="./img/profile-pic.png" className={style.pic} />
        <div className={style.span}>
          <h2>
            I'm Munkhtsetseg <br />
            <span>Full Stack Developer</span>
          </h2>
          <p className={style.tag}>
            I am a Full-Stack developer based in Ulaanbaatar, Mongolia. I am an
            E-Commerce Masters graduate from South-Korea . I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
