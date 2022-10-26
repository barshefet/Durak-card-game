import React from "react";
import { MTF } from "../../../models/MTF.model";
import { Player } from "../../../models/player.model";
import IsAttacker from "./IsAttacker";
import "./Opponent.scss";

const Opponent = (props: any) => {
  const organizePlayers = (players: Player[], index: number) => {
    if (players) {
      let results = players;
      for (let i = 0; i < index; i++) {
        let shiftedPlayer = results.shift();
        results.push(shiftedPlayer!);
      }
      results.shift();
    } else {
      return;
    }
  };

  return props.gameReady ? (
    <>
      {(props.players as Array<Player>).map((player, index) => (
        <div className={`opponent${index + 1}`}>
          <div className="player-name">
            <h3>{`${player.playerName}`}</h3>
          </div>
          <div className="pic">
            <img src="images/opponent/pic.svg" alt="" key={player.playerName} />

            <IsAttacker player={player} />
          </div>
          <div className="opponent-cards">
            {(player.cards as any).map((card: any) => (
              <div className="opponent-card">
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
        <div className={`opponent${index}`}>
          <div className="player-name">
            <h3>{`${player.playerName}`}</h3>
          </div>
          <div className="pic">
            <img src="images/opponent/pic.svg" alt="" />
          </div>
          <div className="opponent-ready-status">
            <div>
              <h2>Ready</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Opponent;
