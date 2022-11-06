import React from "react";
import "./AttackCards.scss";
// value and suite of clicked card
const AttackCards = (props: any) => {
  return props.defender ? (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
          <form action="submit">
            {props.attackCards.map(
              (card: { suite: any; value: any }, index: number) => (
                <div
                  className="attack-card-defender"
                  key={`${index}${card.suite}${card.value}11`}
                >
                  <input
                    type="radio"
                    name="a"
                    id={`${card.suite}${card.value}`}
                    className="hide-input"
                    key={`attackcard${index}${card.suite}${card.value}22`}
                  />
                  <label
                    htmlFor={`${card.suite}${card.value}`}
                    key={`${index}${card.suite}${card.value}33`}
                  >
                    <img
                      src={`images/${card.suite}/${card.value}.svg`}
                      alt=""
                      className="defender"
                      onClick={() =>
                        props.setSelectedCard({
                          index: index,
                          suite: `${card.suite}`,
                          value: `${card.value}`,
                        })
                      }
                      key={`${index}${card.suite}${card.value}44`}
                    />
                  </label>
                </div>
              )
            )}
          </form>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="attack-cards-container">
        <div className="attack-cards">
          <form action="submit">
            {props.attackCards.map(
              (card: { suite: any; value: any }, index: number) => (
                <div
                  className="attack-card"
                  key={`attackcard:${index}${card.suite}${card.value}1`}
                >
                  
                  <input
                    type="radio"
                    name="a"
                    id={`${card.suite}${card.value}`}
                    className="hide-input"
                    key={`attackcard:${index}${card.suite}${card.value}2`}
                  />
                  <label
                    htmlFor="1"
                    key={`attackcard:${index}${card.suite}${card.value}3`}
                  >
                    <img
                      src={`images/${card.suite}/${card.value}.svg`}
                      alt=""
                      className="defender"
                      key={`attackcard:${index}${card.suite}${card.value}4`}
                    />
                  </label>
                </div>
              )
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AttackCards;
