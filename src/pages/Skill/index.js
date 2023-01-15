import React from "react";
import style from "./style.module.css";
import { HTMLIcon, NodejsIcon, SassIcon } from "react-webtech-animated-icons";
import { ReactIcon } from "react-webtech-animated-icons";
import { cards } from "../../data/skill";
import Cards from "./Cards";
const Skill = () => {
  return (
    <div id={style.skill}>
      <h2 className={style.ski}>
        Skills&<span className={style.abi}>Abilites</span>
      </h2>

      <ReactIcon
        className={style.react}
        firstColor="blue"
        secondColor="whiteblue"
        size={200}
        duration={1}
      />
      <HTMLIcon
        firstColor="white"
        secondColor="whiteblue"
        size={200}
        duration={1}
      />
      <NodejsIcon
        firstColor="white"
        secondColor="whiteblue"
        size={200}
        duration={1}
      />
      <SassIcon firstColor="pink" secondColor="pink" size={200} duration={1} />
      <Cards />
    </div>
  );
};

export default Skill;
