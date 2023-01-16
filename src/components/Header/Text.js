import React from "react";
import { Typewriter } from "react-simple-typewriter";
import style from "./styles.module.css";
import { SocialIcon } from "react-social-icons";
const Text = () => {
  return (
    <div className="my">
      <div className="mytext">
        <h1 className={style.Text}>
          Life is beautiful, enjoy every moment og it.
          <h2>
            I am the{" "}
            <span style={{ color: "#C6CBEF", fontWeight: "bold" }}>
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
          </h2>
          <span className={style.icon}>
            <SocialIcon
              url="https://facebook.com/munkhtsetseg.urtnasan/"
              target={"_blank"}
            />
            <SocialIcon
              url="https://instagram.com/muugiinomin"
              target={"_blank"}
            />
            <SocialIcon
              url="https://github.com/MuugiiU"
              bgColor="white"
              target={"_blank"}
            />
            <SocialIcon
              url="https://discord.com/AzureMuugii"
              target={"_blank"}
            />
            <SocialIcon url="https://google.com" target={"_blank"} />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Text;
