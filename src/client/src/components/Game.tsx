import React, { useState } from "react";
import Background from "./GameComponents/background/background";
import PlayerHand from "./GameComponents/PlayerHand/PlayerHand";
import TableDeck from "./GameComponents/Deck/TableDeck";
import Opponent from "./GameComponents/Opponent/Opponent";
import AttackCards from "./GameComponents/AttackCards/AttackCards";
import GameNotReady from "./GameComponents/GameNotReady/Ready";
import GameInfo from "./GameComponents/GameInfo/GameInfo";
import { socket } from "../service/socket";
import { MTF } from "../models/MTF.model";
import { Player } from "../models/player.model";

function Game(props: any) {
  const [playerIndex, setPlayerIndex] = useState(0);
  const [defender, setDefender] = useState(false);
  const [attacker, setAttacker] = useState(false);
  const [playerCards, setPlayerCards] = useState<Array<Player>>([]);
  const [kozar, setkozar] = useState({ suite: "", value: "" });
  const [roomReady, setRoomReady] = useState(false);
  const [attackCards, setAttackCards] = useState([]);
  const [tableSelectedCard, setTableSelectedCard] = useState({
    suite: "",
    value: "",
  });
  const [phase, setPhase] = useState(0)
  const [Players, setPlayers] = useState<Player[]>([]);
  const [playersReady, setPlayersReady] = useState([]);

  const reSend = () => {
    socket.emit("re-send", props.roomID);
  };


  socket.on("receive-mtf", (mtf: MTF) => {
    let index = mtf.players.findIndex(
      (element: any) => element.playerName === props.playerName
    );
    setPlayerIndex(index);

    if (index !== -1) {
      setRoomReady(mtf.roomReady);
      setPlayers(mtf.players)     
      setPlayerCards(mtf.players[index].cards);
      setkozar(mtf.kozar);
      setAttackCards(mtf.attackCards);
      setPlayersReady(mtf.playersReady);
      setAttacker(mtf.players[index].isAttacker)
      setDefender(mtf.players[index].isDefender)
      
    }
    //else request again the mtf
  });

  return roomReady ? (
    <>
      <Background />
      <PlayerHand
        cards={playerCards}
        attacker={attacker}
        defender={defender}
        playerIndex={playerIndex}
        phase={phase}
        roomID={props.roomID}
      />
      <TableDeck kozar={kozar} />
      <Opponent
        gameReady={roomReady}
        players={Players}
      />
      <AttackCards
        defender={defender}
        attackCards={attackCards}
        setSelectedCard={setTableSelectedCard}
      />
      <GameInfo roomID={props.roomID} playerName={props.playerName} />
    </>
  ) : (
    <>
      <Background />
      <Opponent
        gameReady={roomReady}
        players={Players}
      />
      <GameNotReady roomID={props.roomID} playerName={props.playerName} />
      <GameInfo roomID={props.roomID} playerName={props.playerName} />
    </>
  );
}

export default Game;
