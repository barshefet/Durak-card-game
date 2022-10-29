import React from "react";
import { Player } from "../../../models/player.model";
import { socket } from "../../../service/socket";
import "./GiveUpButton.scss";

const GiveUpButton = (props: any) => {

    const defenderGiveUp = () => {
        socket.emit('give-up', props.roomID)
    }
    
  return props.defender ? (
    <>
      <div className="give-up-button-container">
        <button className="give-up-button" onClick={()=>defenderGiveUp()}>Give Up</button>
      </div>
    </>
  ) : (
    <>
      <div className="give-up-button-container">
        <button className="give-up-button">I`m Done</button>
      </div>
    </>
  );
};

export default GiveUpButton;
