import React from "react";
import "./Alert.scss";

const Alert = (props: any) => {
  return props.alert ? (
    <>
      <div className="alert-container">
        <div className="alert">
          <h2>{props.msg}</h2>
          <button onClick={() => props.setAlert(false)}>Ok</button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Alert;
