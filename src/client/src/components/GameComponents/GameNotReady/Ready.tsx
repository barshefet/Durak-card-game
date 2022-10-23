import React, { useState } from "react";
import "./GameNotReady.scss";
import { socket } from "../../../service/socket";

const GameNotReady = (props: any) => {
  const readyToPlay = () => {
    setReady(true);
    socket.emit("ready-to-play", props.roomID, props.playerName);
  };

  const [ready, setReady] = useState(false);

  return ready ? (
    <>
      <div className="ready-status">Your current status:</div>
      <div className="ready-button">
        <button className="green">Ready</button>
      </div>
    </>
  ) : (
    <>
      <div className="ready-status">Your current status:</div>

      <div className="ready-button">
        <button className="red" onClick={readyToPlay}>
          Not Ready
        </button>
      </div>
    </>
  );
};

export default GameNotReady;
