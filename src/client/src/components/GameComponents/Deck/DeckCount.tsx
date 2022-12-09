import React from "react";
import './DeckCount.scss'

const DeckCount = (props: any) => {
return(
    <>
    <div className="deck-count-container">
        <div className="deck-count">
            <h1>{props.deckCount.length}</h1>
        </div>
    </div>
    </>
)
}

export default DeckCount