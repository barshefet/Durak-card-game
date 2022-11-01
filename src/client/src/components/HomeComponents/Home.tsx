//TODO: add a cards animation

import React, { useState } from "react";
import "./Home.scss";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";


const Home = (props: any) => {
  const [popup, setPopup] = useState(false);

  const navigate = useNavigate()

  return (
    <>
      <Popup
        trigger={popup}
        setTrigger={setPopup}
        roomID={props.roomID}
        setRoomID={props.setRoomID}
        playerName={props.playerName}
        setName={props.setName}
      />
      <div className="headline">
        <h1>Durak Card Game</h1>
        <h2>made by Bar Shefet</h2>
      </div>

      <div className="menu">
        <div onClick={() => setPopup(true)}>
          <h3>Play</h3>
        </div>
        <div onClick={() => navigate('/rules')}>
          <h3>Rules</h3>
        </div>
        <a href="https://github.com/barshefet/Durak-card-game">
        <div>
          <h3>GitHub</h3>
        </div>
        </a>
      </div>
    </>
  );
};

export default Home;
