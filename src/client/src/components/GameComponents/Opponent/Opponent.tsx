import React, { useEffect, useState } from "react";
import { MTF } from "../../../models/MTF.model";
import { Player } from "../../../models/player.model";
import IsAttacker from "./IsAttacker";
import OpponentReadyStatus from "./OpponentReadyStatus";
import "./Opponent.scss";
import IsDefender from "./IsDefender";

const Opponent = (props: any) => {

  const [rePlayers, setRePlayers] = useState<Player[]>([])
  
  const organizePlayers = (players: Player[], index: number) => {
    if (players) {
      let results: Player[] = players;
      for (let i = 0; i < index; i++) {
        let shiftedPlayer = results.shift();
        results.push(shiftedPlayer!);
      }
      results.shift();
      setRePlayers(results)
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log('players have changed')
  }, [props.player]);

  return props.gameReady ? (
    <>
      {(props.players as Array<Player>).map((player, index) => (
        <div className={`opponent${index + 1}`} key={`${player.playerName}1`}>
          <div className="player-name" >
            <h3 >{`${player.playerName}`}</h3>
          </div>
          <div className="pic" >
            <img src="images/opponent/pic.svg" alt="" />

            <IsAttacker isAttacker={player.isAttacker} />
            <IsDefender isDefender={player.isDefender} />

          </div>
          <div className="opponent-cards" >
            {(player.cards as any).map((card: any) => (
              <div className="opponent-card" >
                <img
                  src="images/red2.svg"
                  alt=""
                  key={`${card.suite}${card.value}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  ) : (
    <>
      {(props.players as Array<Player>).map((player: Player, index: number) => (
        <div className={`opponent${index + 1}`} key={`${player.playerName}1`}>
          <div className="player-name" key={`${player.playerName}2`}>
            <h3 key={`${player.playerName}`}>{`${player.playerName}3`}</h3>
          </div>
          <div className="pic" key={`${player.playerName}4`}>
            <img
              src="images/opponent/pic.svg"
              alt=""
              key={`${player.playerName}5`}
            />
          </div>
          <OpponentReadyStatus playerReady={player.isReady} />
        </div>
      ))}
    </>
  );
};

export default Opponent;
