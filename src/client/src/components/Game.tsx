import React, { useState } from "react";
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
import GameNotReady from "./GameComponents/GameNotReady/Ready";
import { socket } from "../service/socket";

function Game(props: any) {
  const [defender, setDefender] = useState(false);
  const [attacker, setAttacker] = useState(false);
  const [contributer, setContributer] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [roomReady, setRoomReady] = useState(false);

  socket.on("receive-mtf", (mtf) => {
    setRoomReady(mtf.roomReady);
    setPlayerCards(mtf.playerCards);
  });

  return roomReady ? (
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
  ) : (
    <>
    <Background />
    <Opponent />
    <GameNotReady roomID={props.roomID} playerName={props.playerName}/>
    </>
  );
}

export default Game;
