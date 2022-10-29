import React, { useEffect, useState } from "react";
import { Card } from "../../../models/cards.model";
import { MTF } from "../../../models/MTF.model";
import { socket } from "../../../service/socket";
import "./PlayerHand.scss";

const PlayerHand = (props: any) => {
  const VALUES = [
    { strValue: "6", numValue: 6 },
    { strValue: "7", numValue: 7 },
    { strValue: "8", numValue: 8 },
    { strValue: "9", numValue: 9 },
    { strValue: "10", numValue: 10 },
    { strValue: "jack", numValue: 11 },
    { strValue: "queen", numValue: 12 },
    { strValue: "king", numValue: 13 },
    { strValue: "ace", numValue: 14 },
  ];
  const tryAttack = (cardIndex: number, playerIndex: number) => {
    let selectedCard = props.players[playerIndex].cards[cardIndex];
    let selectedCardValue = VALUES.find((element) => element.strValue === selectedCard.value)
    let tableSelectedCardValue = VALUES.find((element) => element.strValue === props.tableSelectedCard.value)
    let similarValueCardIndex = props.attackCards.findIndex(
      (card: Card) => card.value === selectedCard.value
    );
    if (props.attacker && props.phase === 1) {
      socket.emit("attack", props.roomID, cardIndex, playerIndex);
    } else if (
      !props.defender &&
      props.phase === 2 &&
      similarValueCardIndex !== -1
    ) {
      socket.emit("attack", props.roomID, cardIndex, playerIndex);
    } else if (
      props.defender &&
      props.phase > 1 &&
      selectedCard.suite === props.tableSelectedCard.suite &&
      selectedCardValue!.numValue >= tableSelectedCardValue!.numValue
    ) {
      socket.emit("defend", props.roomID, cardIndex, playerIndex, props.tableSelectedCard.index);
      // or kozar to be added
    }
  };
  return (
    <>
      <div className="player-hand-container">
        <div className="player-hand">
          {props.cards.map(
            (card: { suite: any; value: any }, cardIndex: number) => (
              <img
                className="player-card"
                src={`images/${card.suite}/${card.value}.svg`}
                alt=""
                key={`${card.suite}${card.value}`}
                onClick={() => tryAttack(cardIndex, props.playerIndex)}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PlayerHand;
