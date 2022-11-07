import React from "react";
import DeckCount from "./DeckCount";
import "./TableDeck.scss";

const TableDeck = (props: any) => {
  return (
    <>
      <div className="deck">
        <div className="kozar">
          <img
            className="card"
            src={`images/${props.kozar.suite}/${props.kozar.value}.svg`}
            alt="8"
          />
        </div>
        <div className="card-stack">
          <div className="card1">
            <img className="card" src="images/red2.svg" alt="back" />
          </div>
          <div className="card2">
            <img className="card" src="images/red2.svg" alt="back" />
          </div>
          <div className="card3">
            <img className="card" src="images/red2.svg" alt="back" />
          </div>
          <div className="card4">
            <img className="card" src="images/red2.svg" alt="back" />
          </div>
        </div>
      </div>
      <DeckCount deckCount={props.deckCount} />
    </>
  );
};

export default TableDeck;
