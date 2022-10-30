import React from "react";
import { socket } from "../../../service/socket";
import "./GiveUpButton.scss";

const GiveUpButton = (props: any) => {

    const defenderGiveUp = () => {
        socket.emit('give-up', props.roomID, props.playerIndex)
    }

    const imOut = () => {
        socket.emit('im-out', props.roomID, props.playerIndex)
    }
    
  return props.defender ? (
    <>
      <div className="give-up-button-container">
        <button className="give-up-button" onClick={()=>defenderGiveUp()}>Give Up</button>
      </div>
      <div className="forward-container">
        <button className="forward-button" onClick={()=> props.setForward(true)}>Forward</button>
      </div>
    </>
  ) : (
    <>
      <div className="give-up-button-container">
        <button className="give-up-button" onClick={() => imOut()}>I`m Done</button>
      </div>
    </>
  );
};

export default GiveUpButton;
