import React, { useEffect, useState } from "react";
import Background from "./GameComponents/background/background";
import PlayerHand from "./GameComponents/PlayerHand/PlayerHand";
import "./GameComponents/background/background.scss";
import "./GameComponents/PlayerHand/PlayerHand.scss";
import "./GameComponents/ReturnButton/ReturnButton.scss";
import "./GameComponents/Deck/TableDeck.scss";
import TableDeck from "./GameComponents/Deck/TableDeck";
import Opponent from "./GameComponents/Opponent/Opponent";
import "./GameComponents/Opponent/Opponent.scss";
import AttackCards from "./GameComponents/AttackCards/AttackCards";
import "./GameComponents/AttackCards/AttackCards.scss";


function Game(props:any) {
  // const [mtf, setMtf] = useState({});
  const [defender, setDefender] = useState(false);
  const [attacker, setAttacker] = useState(false);
  const [contributer, setContributer] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);

  useEffect(()=>{
    console.log(props.roomID + ' ' + props.playerName)
  },[])

  return (
    <>
      <Background />
      <PlayerHand
        cards={playerCards}
        attacker={attacker}
        defender={defender}
        contributer={contributer} 
      />
      <TableDeck />
      <Opponent />
      <AttackCards defender={defender} />
    </>
  );
}

export default Game;
