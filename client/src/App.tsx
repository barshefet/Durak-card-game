import React, { useEffect, useState } from "react";
import Background from "./components/background/background";
import PlayerHand from "./components/PlayerHand/PlayerHand";
import { newDeck } from "./Deck";
import "./components/background/background.scss";
import "./components/PlayerHand/PlayerHand.scss";
import "./components/ReturnButton/ReturnButton.scss";
import "./components/Deck/TableDeck.scss"
import TableDeck from "./components/Deck/TableDeck";
import Opponent from "./components/Opponent/Opponent";
import './components/Opponent/Opponent.scss'
import AttackCards from "./components/AttackCards/AttackCards";
import './components/AttackCards/AttackCards.scss'

function App() {
  useEffect(() => {
    let newdeck = newDeck();
    console.log(newdeck)
  }, []);

const [defender, setDefender] = useState(false)
const [attacker, setAttacker] = useState(false)
const [contributer, setContributer] = useState(false)

  return (
    <>
      <Background />
      <PlayerHand />
      <TableDeck />
      <Opponent />
      <AttackCards defender={defender}/>
    </>
  );
}

export default App;
