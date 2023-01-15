import React from "react";
import style from "./style.module.css";
import Education from "./Educa";

const index = () => {
  return (
    <div id={style.education}>
      <h2 className={style.ner}>Education</h2>
      <Education />
    </div>
  );
};

export default index;
