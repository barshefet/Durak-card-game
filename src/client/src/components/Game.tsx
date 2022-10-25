import React, { useState } from "react";
import Background from "./GameComponents/background/background";
import PlayerHand from "./GameComponents/PlayerHand/PlayerHand";
import TableDeck from "./GameComponents/Deck/TableDeck";
import Opponent from "./GameComponents/Opponent/Opponent";
import AttackCards from "./GameComponents/AttackCards/AttackCards";
import GameNotReady from "./GameComponents/GameNotReady/Ready";
import GameInfo from "./GameComponents/GameInfo/GameInfo";
import { socket } from "../service/socket";

function Game(props: any) {
  const [playerIndex, setPlayerIndex] = useState(0);
  const [defender, setDefender] = useState(true);
  const [attacker, setAttacker] = useState(false);
  const [contributer, setContributer] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [kozar, setkozar] = useState({ suite: "", value: "" });
  const [roomReady, setRoomReady] = useState(false);
  const [attackCards, setAttackCards] = useState([]);
  const [tableSelectedCard, setTableSelectedCard] = useState({
    suite: "",
    value: "",
  });
  const [players, setPlayers] = useState([]);
  const [playersReady, setPlayersReady] = useState([]);

  socket.on("receive-mtf", (mtf) => {
    let index = mtf.players.findIndex(
      (element: any) => element.playerName === props.playerName
    );
    if (playerIndex !== -1) {
      setPlayerIndex(playerIndex);
      setRoomReady(mtf.roomReady);
      setPlayerCards(mtf.players[index].cards);
      setkozar(mtf.kozar);
      setAttackCards(mtf.attackCards);
      setPlayers(mtf.players);
      setPlayersReady(mtf.playersReady);
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
        contributer={contributer}
      />
      <TableDeck kozar={kozar} />
      <Opponent
        gameReady={roomReady}
        players={players}
        playersReady={playersReady}
        playerIndex={playerIndex}
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
        players={players}
        playersReady={playersReady}
        playerIndex={playerIndex}
      />
      <GameNotReady roomID={props.roomID} playerName={props.playerName} />
      <GameInfo roomID={props.roomID} playerName={props.playerName} />
    </>
  );
}

export default Game;
