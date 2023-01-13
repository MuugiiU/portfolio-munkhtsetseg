import React from "react";
import style from "./style.module.css";
import { WebpackIcon } from "react-webtech-animated-icons";
const Skill = () => {
  return (
    <div id={style.skill}>
      <WebpackIcon
        firstColor="#1C78C0"
        secondColor="#8ED6FB"
        size={32}
        duration={1}
      />
    </div>
  );
};

export default Skill;
