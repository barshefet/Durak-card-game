import React from "react";
import { DefenceCard } from "../../../models/defenceCards.model";
import "./DefenceCards.scss";

const DefenseCards = (props: any) => {
  return (
    <>
      <div className="defence-container">
        <div className="defence-cards">
          {(props.defenceCards as DefenceCard[]).map(
            (defenceCard: DefenceCard) => (
              <div
                className={`defence-card${defenceCard.index}`}
                key={`defenceCard1:${defenceCard.card.suite}${defenceCard.card.value}`}
              >
                <img
                  src={`images/${defenceCard.card.suite}/${defenceCard.card.value}.svg`}
                  alt=""
                  key={`defenceCard2:${defenceCard.card.suite}${defenceCard.card.value}`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default DefenseCards;
