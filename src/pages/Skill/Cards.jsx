import React from "react";
import { cards } from "../../data/skill";

const Cards = () => {
  return (
    <div>
      {cards.map((card, index) => {
        return (
          <div className="border" key={index}>
            <h3>{cards.name} </h3>
            <img src={cards.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
