import React from "react";
import { cards } from "../../data/skill";
import style from "./style.module.css";

const Cards = () => {
  return (
    <div className={style.tom}>
      {cards.map((card, index) => {
        return (
          <div className={style.border} key={index}>
            <h2 className={style.title}>{card.name} </h2>
            <img src={card.icon} className={style.pic} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
