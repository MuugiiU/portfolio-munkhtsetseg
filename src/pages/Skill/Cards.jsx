/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { cards } from "../../data/skill";
import style from "./style.module.css";

const Cards = () => {
  return (
    <div className={style.tom}>
      {cards.map((card, index) => {
        return (
          <div className={style.border} key={index}>
            <h2 className={style.title} height={30}>{card.name} </h2>
            <img src={card.icon} className={style.pic} height={100} width={100}/>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
