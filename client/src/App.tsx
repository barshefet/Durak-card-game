import React, { useEffect } from "react";
import Background from "./components/background/background";
import PlayerHand from "./components/PlayerHand/PlayerHand";
import { newDeck } from "./Deck";
import "./components/background/background.scss";
import './components/PlayerHand/PlayerHand.scss'
import './components/ReturnButton/ReturnButton.scss'


function App() {
  
  useEffect(() => {
    let newdeck = newDeck();
    console.log(newdeck);
  }, []);

  return (
    <>
      <Background />
      <PlayerHand />
    </>
  );
}

export default App;
