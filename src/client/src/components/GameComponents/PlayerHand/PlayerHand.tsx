import React, { useEffect, useState } from "react";
import './PlayerHand.scss';


const PlayerHand = (props: any) => {
  return (
    <>
      <div className="player-hand-container">
        <div className="player-hand">
          {props.cards.map((card: { suite: any; value: any }) => (
            <img
              className="player-card"
              src={`images/${card.suite}/${card.value}.svg`}
              alt=""
              key={`${card.suite}${card.value}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerHand;
