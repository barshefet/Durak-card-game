import React from "react";

const AttackCards = (props: any) => {
  return props.defender ? (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
         {props.attackCards.map((card: { suite: any; value: any }) => (
          <div className="attack-card">
            <img src={`images/${card.suite}/${card.value}.svg`} alt="" className="defender" key={`${card.suite}${card.value}`} />
          </div>
          ))}
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
