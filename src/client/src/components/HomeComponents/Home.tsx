//TODO: add a cards animation

import React, { useState } from "react";
import "./Home.scss";
import Popup from "./Popup";
import { Link } from "react-router-dom";

const Home = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <Popup trigger={popup} setTrigger={setPopup}/>
      <div className="headline">
        <h1>Durak Card Game</h1>
        <h2>made by Bar Shefet</h2>
      </div>

      <div className="menu">
        <div onClick={() => setPopup(true)}>
          <h3>Play</h3>
        </div>
        <div>
          <h3>Rules</h3>
        </div>
        <div>
          <h3>Game-Dev docs</h3>
        </div>
        
      </div>
    </>
  );
};

export default Home;
