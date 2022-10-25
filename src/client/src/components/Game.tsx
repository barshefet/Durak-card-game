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
import GameInfo from "./GameComponents/GameInfo/GameInfo";
import { socket } from "../service/socket";

function Game(props: any) {
  const [defender, setDefender] = useState(true);
  const [attacker, setAttacker] = useState(false);
  const [contributer, setContributer] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [kozar, setkozar] = useState({ suite: "", value: "" });
  const [roomReady, setRoomReady] = useState(true);
  const [attackCards, setAttackCards] = useState([]);

  socket.on("receive-mtf", (mtf) => {
    let playerIndex = mtf.players.findIndex(
      (element: any) => element.playerName === props.playerName
    );
    if (playerIndex !== -1) {
      setRoomReady(mtf.roomReady);
      setPlayerCards(mtf.players[playerIndex].cards);
      setkozar(mtf.kozar);
      setAttackCards(mtf.attackCards);
    } 
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
      <TableDeck kozar={kozar} />
      <Opponent />
      <AttackCards defender={defender} attackCards={attackCards} />
      <GameInfo roomID={props.roomID} playerName={props.playerName}/>
    </>
  ) : (
    <>
      <Background />
      <Opponent />
      <GameNotReady roomID={props.roomID} playerName={props.playerName} />
      <GameInfo roomID={props.roomID} playerName={props.playerName}/>
    </>
  );
}

export default Game;
