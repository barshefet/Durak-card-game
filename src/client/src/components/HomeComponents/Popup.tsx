import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Popup.scss";

const Popup = (props: any) => {

const [roomID, setRoomID] = useState('')
const [name, setName] = useState('')
const [type, setType] = useState('')
const navigate = useNavigate()

const formSubmit = (e: any) =>{
  e.preventDefault()
  console.log(roomID, name, type)
  if(type === 'create'){
    //start a socket with the id given
    navigate('/game')
  }else if(type === 'connect'){
    //join a socket with the id given
    navigate('/game')
  }
}

  return props.trigger ? (
    <>
      <div className="popup">
        <div className="title">
          <h2>Create a game room</h2>
          <h2>or</h2>
          <h2>Connect to an existing game room</h2>
        </div>
        <div className="form-container">
          <div className="close-window" onClick={() => props.setTrigger(false)}>
            <img src="images/return.png" alt="" />
          </div>
          <form action="submit" onSubmit={formSubmit}>
            <label htmlFor="">Room ID</label>
            <input type="text" value={roomID} onChange={(e) => setRoomID(e.target.value)}/>
            <label htmlFor="">Player Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <div className="buttons">
            <button type="submit" className="btn" onClick={() => setType('create')}>Create</button>
            <button type="submit" className="btn" onClick={() => setType('connect')}>Connect</button>
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
