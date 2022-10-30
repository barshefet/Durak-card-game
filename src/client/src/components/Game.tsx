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
import { Card } from "../models/cards.model";
import DefenseCards from "./GameComponents/DefenceCards/DefenseCards";
import { DefenceCard } from "../models/defenceCards.model";
import GiveUpButton from "./GameComponents/giveUpButton/GiveUpButton";

function Game(props: any) {
  const [playerIndex, setPlayerIndex] = useState(0);
  const [defender, setDefender] = useState(false);
  const [attacker, setAttacker] = useState(false);
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [kozar, setkozar] = useState({ suite: "", value: "" });
  const [roomReady, setRoomReady] = useState(true);
  const [attackCards, setAttackCards] = useState([]);
  const [defenceCards, setDefenceCards] = useState<DefenceCard[]>([]);
  const [tableSelectedCard, setTableSelectedCard] = useState({
    index: 0,
    suite: "",
    value: "",
  });
  const [phase, setPhase] = useState(0);
  const [Players, setPlayers] = useState<Player[]>([]);

  const reSend = () => {
    socket.emit("re-send", props.roomID);
  };

  socket.on("receive-mtf", (mtf: MTF) => {
    let index = mtf.players.findIndex(
      (element: any) => element.playerName === props.playerName
    );
    setPlayerIndex(index);
   console.log(mtf)

    if (index !== -1) {
      setRoomReady(mtf.roomReady);
      setPlayers(mtf.players);
      setPlayerCards(mtf.players[index].cards);
      setkozar(mtf.kozar);
      setAttackCards(mtf.attackCards);
      setAttacker(mtf.players[index].isAttacker);
      setDefender(mtf.players[index].isDefender);
      setPhase(mtf.phase);
      setDefenceCards(mtf.defenceCards);
    }
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
        players={Players}
        attackCards={attackCards}
        tableSelectedCard={tableSelectedCard}
      />
      <TableDeck kozar={kozar} />
      <Opponent gameReady={roomReady} players={Players} />
      <AttackCards
        defender={defender}
        attackCards={attackCards}
        setSelectedCard={setTableSelectedCard}
      />
      <DefenseCards defenceCards={defenceCards} roomID={props.roomID} />
      <GiveUpButton defender={defender} roomID={props.roomID} playerIndex={playerIndex}/>
      <GameInfo roomID={props.roomID} playerName={props.playerName} />
    </>
  ) : (
    <>
      <Background />
      <Opponent gameReady={roomReady} players={Players} />
      <GameNotReady roomID={props.roomID} playerName={props.playerName} />
      <GameInfo roomID={props.roomID} playerName={props.playerName} />
    </>
  );
}

export default Game;
