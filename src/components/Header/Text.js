import React from "react";
import { Typewriter } from "react-simple-typewriter";
import style from "./styles.module.css";
import { SocialIcon } from "react-social-icons";
const Text = () => {
  return (
    <div className="my">
      <div className="mytext">
        <h1 className={style.Text}>
          I am the{" "}
          <span style={{ color: "pink", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "React Developer",
                "UI Designer",
                "Software Engineering",
                "E-Commerce Developer",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span>
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://instagram.com" />
            <SocialIcon url="https://github.com" bgColor="white" />
            <SocialIcon url="https://discord.com" />
          </span>
        </h1>
      </div>
      <div className="pic">
        <img src="" />
      </div>
    </div>
  );
};

export default Text;
