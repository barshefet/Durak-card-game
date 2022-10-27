import React, { useEffect, useState } from "react";
import { Card } from "../../../models/cards.model";
import { MTF } from "../../../models/MTF.model";
import { socket } from "../../../service/socket";
import './PlayerHand.scss';


const PlayerHand = (props: any) => {

  const tryAttack = (cardIndex: number, playerIndex: number) => {
    let selectedCard = props.players[playerIndex].cards[cardIndex]
    let similarValueCardIndex = props.attackCards.findIndex((card: Card) => card.value === selectedCard.value) 
    if(props.attacker && props.phase === 1){
      socket.emit('attack', props.roomID, cardIndex, playerIndex)
    }else if(!props.defender && props.phase === 2 && similarValueCardIndex !== -1){
      socket.emit('attack', props.roomID, cardIndex, playerIndex)
    }
  }
  return (
    <>
      <div className="player-hand-container">
        <div className="player-hand">
          {props.cards.map((card: { suite: any; value: any }, cardIndex: number) => (
            <img
              className="player-card"
              src={`images/${card.suite}/${card.value}.svg`}
              alt=""
              key={`${card.suite}${card.value}`}
              onClick={()=> tryAttack(cardIndex, props.playerIndex)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerHand;
