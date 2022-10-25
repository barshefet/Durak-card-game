import React, { useState } from "react";
// value and suite of clicked card
const AttackCards = (props: any) => {
  const [selected, setSelected] = useState(false);

  return props.defender ? (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
          {props.attackCards.map((card: { suite: any; value: any }) => (
            <div className="attack-card">
              <img
                src={`images/${card.suite}/${card.value}.svg`}
                alt=""
                className={selected ? "selected-defender" : "defender"}
                key={`${card.suite}${card.value}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
          <form action="submit">
            <div className="attack-card">
              <input type="radio" name="a" id="1" className="hide-input" />
              <label htmlFor="1">
                <img
                  src="images/diamonds/king.svg"
                  alt=""
                  className="defender"
                />
              </label>
            </div>
            <div className="attack-card">
              <input type="radio" name="a" id="2" className="hide-input" />
              <label htmlFor="2">
                <img
                  src="images/diamonds/king.svg"
                  alt=""
                  className="defender"
                />
              </label>
            </div>

            <div className="attack-card">
              <input type="radio" name="a" id="3" className="hide-input" />
              <label htmlFor="3">
                <img
                  src="images/clubs/7.svg"
                  alt=""
                  className="defender"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AttackCards;
