import style from "../About/style.module.css";
import React from "react";

import { FcBusinesswoman } from "react-icons/fc";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const About = () => {
  return (
    <div id={style.about}>
      <div>
        <h3 className={style.woman}>
          About Me <FcBusinesswoman className={style.a} />
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
