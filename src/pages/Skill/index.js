import React from "react";
import style from "./style.module.css";
import { WebpackIcon } from "react-webtech-animated-icons";
import { ReactIcon } from "react-webtech-animated-icons";
import { cards } from "../../data/skill";
const Skill = () => {
  return (
    <div id={style.skill}>
      <WebpackIcon
        firstColor="#1C78C0"
        secondColor="#8ED6FB"
        size={100}
        duration={1}
      />
      <ReactIcon
        firstColor="blue"
        secondColor="#8ED6FB"
        size={100}
        duration={1}
      />
    </div>
  );
};

export default Skill;
