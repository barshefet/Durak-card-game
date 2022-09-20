import React from "react";

const AttackCards = (props: any) => {
  return props.defender ? (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
          <div className="attack-card">
            <img src="images/diamonds/10.svg" alt="" className="defender" />
          </div>
          <div className="attack-card">
            <img src="images/spades/queen.svg" alt="" className="defender" />
          </div>
          <div className="attack-card">
            <img src="images/diamonds/king.svg" alt="" className="defender" />
          </div>
          <div className="attack-card">
            <img src="images/clubs/9.svg" alt="" className="defender" />
          </div>
          <div className="attack-card">
            <img src="images/spades/king.svg" alt="" className="defender" />
          </div>
          <div className="attack-card">
            <img src="images/hearts/8.svg" alt="" className="defender" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
          <div className="attack-card">
            <img src="images/diamonds/10.svg" alt="" />
          </div>
          <div className="attack-card">
            <img src="images/spades/queen.svg" alt="" />
          </div>
          <div className="attack-card">
            <img src="images/diamonds/king.svg" alt="" />
          </div>
          <div className="attack-card">
            <img src="images/clubs/9.svg" alt="" />
          </div>
          <div className="attack-card">
            <img src="images/spades/king.svg" alt="" />
          </div>
          <div className="attack-card">
            <img src="images/hearts/8.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AttackCards;