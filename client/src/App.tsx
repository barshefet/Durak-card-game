import React, { useEffect } from "react";
import Background from "./components/background/background";
import PlayerHand from "./components/PlayerHand/PlayerHand";
import { newDeck } from "./Deck";
import "./components/background/background.scss";
import "./components/PlayerHand/PlayerHand.scss";
import "./components/ReturnButton/ReturnButton.scss";
import "./components/Deck/TableDeck.scss"
import TableDeck from "./components/Deck/TableDeck";

function App() {
  useEffect(() => {
    let newdeck = newDeck();
  }, []);

  return (
    <>
      <Background />
      <PlayerHand />
      <TableDeck />
    </>
  );
}

export default App;
