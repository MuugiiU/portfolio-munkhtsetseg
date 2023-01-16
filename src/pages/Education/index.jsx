import React from "react";
import style from "./style.module.css";
import Education from "./Educa";
import { Wave } from "react-animated-text";
import Particle from "../../components/Particle";
const index = () => {
  return (
    <div id="education" className={style.education}>
      <h2 className={style.ner}>
        <Wave text=" Education" />
      </h2>
      <Particle />
      <Education />
    </div>
  );
};

export default index;
