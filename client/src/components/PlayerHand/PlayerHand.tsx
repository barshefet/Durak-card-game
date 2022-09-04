import React from "react";

const PlayerHand = () => {
  return (
    <>
      <div className="player-hand-container">
        <div className="player-hand">
          <img className="player-card" src="images/hearts/9.svg" alt="" />
          <img className="player-card" src="images/diamonds/queen.svg" alt="" />
          <img className="player-card" src="images/spades/8.svg" alt="" />
          <img className="player-card" src="images/hearts/jack.svg" alt="" />
          <img className="player-card" src="images/clubs/6.svg" alt="" />
          <img className="player-card" src="images/diamonds/king.svg" alt="" />
        </div>
        
      </div>
    </>
  );
};

export default PlayerHand;
