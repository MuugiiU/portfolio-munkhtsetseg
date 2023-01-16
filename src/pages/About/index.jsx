import style from "../About/style.module.css";
import React from "react";
import { Wave } from "react-animated-text";
import { FcBusinesswoman } from "react-icons/fc";
import Particle from "../../components/Particle";

const About = () => {
  return (
    <div id="about" className={style.about}>
      <div>
        <h3 className={style.woman}>
          <Wave text="About me" />
          <FcBusinesswoman className={style.a} />
        </h3>
      </div>
      <div className={style.par}>
        <Particle />
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
