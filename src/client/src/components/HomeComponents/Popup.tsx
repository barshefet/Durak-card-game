import React from "react";
import "./Popup.scss";

const Popup = (props: any) => {
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
          <form action="submit">
            <label htmlFor="">Room ID</label>
            <input type="text" />
            <div className="buttons">
            <button type="submit">Create</button>
            <button type="submit">Connect</button>
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
