import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="return-container">
        <img src="images/return.png" alt="return" onClick={() => navigate('/')}/>
      </div>
    </>
  );
};

export default ReturnButton;
