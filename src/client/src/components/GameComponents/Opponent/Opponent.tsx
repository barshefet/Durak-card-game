import React from "react";
import './Opponent.scss'

const Opponent = (props:any) => {
  return (
    <>
      <div className="opponent">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
          <div className="status-attack"><img src="images/opponent/attack.svg" alt=""  /></div>
        </div>
        <div className="opponent-cards">
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
        </div>
      </div>
    </>
  );
};

export default Opponent;
