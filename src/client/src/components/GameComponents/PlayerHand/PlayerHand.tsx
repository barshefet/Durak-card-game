import React, { useEffect, useState } from "react";
import { socket } from "../../../service/socket";
import './PlayerHand.scss';


const PlayerHand = (props: any) => {

  const tryAttack = (cardIndex: number, playerIndex: number) => {
    if(props.attacker && props.phase === 1){
      socket.emit('attack', props.roomID, cardIndex, playerIndex)
    }
  }
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
