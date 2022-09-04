import React from "react";

const Opponent = () => {
  return (
    <>
      <div className="opponent">
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
          <div className="status-attack"><img src="images/opponent/swords.svg" alt=""  /></div>
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
