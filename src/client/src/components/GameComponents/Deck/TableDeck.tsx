import React from "react";

const TableDeck = () => {
  return (
    <>
      <div className="deck">
      <div className="kozar">
            <img className="card" src="images/hearts/8.svg" alt="8" />
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
    </>
  );
};

export default TableDeck;
