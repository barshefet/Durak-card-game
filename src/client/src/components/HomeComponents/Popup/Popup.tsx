import React, { useState } from "react";
import "./Popup.scss";
import {socket} from '../../../service/socket'

const Popup = (props: any) => {

const [type, setType] = useState('')

const formSubmit = (e: any) =>{
  e.preventDefault()
  if(type === 'create'){
    //start a socket with the room id given
    socket.emit('create-room', props.roomID, props.playerName)
  }else if(type === 'connect'){
    //join a socket with the room id given
    socket.emit('join-room', props.roomID, props.playerName)
  }
}

  return props.trigger ? (
    <>
      <div className="popup">
        <div className="title">
          <h2>Create a game room</h2>
          <h2>or</h2>
          <h2>Join an existing game room</h2>
        </div>
        <div className="form-container">
          <div className="close-window" onClick={() => props.setTrigger(false)}>
            <img src="images/return.png" alt="" />
          </div>
          <form action="submit" onSubmit={formSubmit}>
            <label htmlFor="">Room ID</label>
            <input type="text" value={props.roomID} onChange={(e) => props.setRoomID(e.target.value)}/>
            <label htmlFor="">Player Name</label>
            <input type="text" value={props.playerName} onChange={(e) => props.setName(e.target.value)}/>
            <div className="buttons">
            <button type="submit" className="btn" onClick={() => setType('create')}>Create</button>
            <button type="submit" className="btn" onClick={() => setType('connect')}>Join</button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Popup;
