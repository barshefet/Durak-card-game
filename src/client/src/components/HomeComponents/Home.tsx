//TODO: add a cards animation

import React, { useState } from "react";
import "./Home.scss";
import Popup from "./Popup";
import { Link } from "react-router-dom";

const Home = () => {
  const [popup, setPopup] = useState(true);
  return (
    <>
      <Popup trigger={popup} setTrigger={setPopup}/>
      <div className="headline">
        <h1>Durak Card Game</h1>
        <h2>made by Bar Shefet</h2>
      </div>

      <div className="menu">
        {/* <Link style={{ textDecoration: 'none'}} to="/game"> */}
        <div onClick={() => setPopup(true)}>
          <h3>Play</h3>
        </div>
        {/* </Link> */}
        <div>
          <h3>what are the rules?</h3>
        </div>
        <div>
          <h3>game dev docs</h3>
        </div>
        <div>
          <h3>what is this button?</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
