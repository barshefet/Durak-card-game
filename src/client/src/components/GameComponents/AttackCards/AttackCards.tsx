import React, { useState } from "react";
import './AttackCards.scss'
// value and suite of clicked card
const AttackCards = (props: any) => {

  return props.defender ? (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
          <form action="submit">
            {props.attackCards.map((card: { suite: any; value: any }) => (
              <div className="attack-card-defender">
                <input
                  type="radio"
                  name="a"
                  id={`${card.suite}${card.value}`}
                  className="hide-input"
                  key={`${card.suite}${card.value}1`}
                />
                <label htmlFor="1" key={`${card.suite}${card.value}2`}>
                  <img
                    src={`images/${card.suite}/${card.value}.svg`}
                    alt=""
                    className="defender"
                    onClick={() =>
                      props.setSelectedCard({
                        suite: `${card.suite}`,
                        value: `${card.value}`,
                      })
                    }

                  />
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
          <form action="submit">
            {props.attackCards.map((card: { suite: any; value: any }) => (
              <div className="attack-card">
                <input
                  type="radio"
                  name="a"
                  id={`${card.suite}${card.value}`}
                  className="hide-input"
                  key={`${card.suite}${card.value}1`}
                />
                <label htmlFor="1" key={`${card.suite}${card.value}2`}>
                  <img
                    src={`images/${card.suite}/${card.value}.svg`}
                    alt=""
                    className="defender"
                  />
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
};

export default AttackCards;
