import React from "react";
import './Opponent.scss'

const Opponent = (props:any) => {
  return props.gameReady ?(
    <>
      <div className="opponent1">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
          <div className="status-attack"><img src="images/opponent/attack.svg" alt="" /></div>
        </div>
        <div className="opponent-cards">
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>

        </div>

      </div>
      <div className="opponent2">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
          <div className="status-attack"><img src="images/opponent/attack.svg" alt="" /></div>
        </div>
        <div className="opponent-cards">
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>

        </div>

      </div>
      <div className="opponent3">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
          <div className="status-attack"><img src="images/opponent/attack.svg" alt="" /></div>
        </div>
        <div className="opponent-cards">
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>

        </div>

      </div>
      <div className="opponent4">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
          <div className="status-attack"><img src="images/opponent/attack.svg" alt="" /></div>
        </div>
        <div className="opponent-cards">
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>
            <div className="opponent-card"><img src="images/red2.svg" alt=""  /></div>

        </div>

      </div>
    </>
  ) : (
    <>
     <div className="opponent1">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
        </div>
        <div className="opponent-ready-status">
          <div>
          <h2>Ready</h2>
          </div>
        </div>

      </div>
      <div className="opponent2">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
        </div>
        <div className="opponent-ready-status">
          <div>
          <h2>Ready</h2>
          </div>
        </div>

      </div>
      <div className="opponent3">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
        </div>
        <div className="opponent-ready-status">
          <div>
          <h2>Ready</h2>
          </div>
        </div>

      </div>
      <div className="opponent4">
        <div className="player-name"><h3>Bar</h3></div>
        <div className="pic">
          <img src="images/opponent/pic.svg" alt="" />
        </div>
        <div className="opponent-ready-status">
          <div>
          <h2>Ready</h2>
          </div>
        </div>

      </div>
      
    </>
  );
};

export default Opponent;
