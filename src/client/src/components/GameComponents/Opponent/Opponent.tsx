import React from "react";
import { Player } from "../../../models/player.model";
import IsAttacker from "./IsAttacker";
import OpponentReadyStatus from "./OpponentReadyStatus";
import "./Opponent.scss";
import IsDefender from "./IsDefender";

const Opponent = (props: any) => {
  return props.gameReady ? (
    <>
      {(props.players as Array<Player>).map((player, index) => (
        <div className={`opponent${index + 1}`} key={`${player.playerName}111`}>
          <div className="player-name" key={`${player.playerName}112`}>
            <h3 key={`${player.playerName}113`}>{`${player.playerName}`}</h3>
          </div>
          <div className="pic" key={`${player.playerName}221`}>
            <img
              src="images/opponent/pic.svg"
              alt=""
              key={`${player.playerName}222`}
            />

            <IsAttacker isAttacker={player.isAttacker} />
            <IsDefender isDefender={player.isDefender} />
          </div>
          <div className="opponent-cards" key={`${player.playerName}331`}>
            {(player.cards as any).map((card: any, index: number) => (
              <div
                className="opponent-card"
                key={`${player.playerName}332${index}`}
              >
                <img
                  src="images/red2.svg"
                  alt=""
                  key={`${player.playerName}333`}
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
        <div className={`opponent${index + 1}`} key={`${player.playerName}441`}>
          <div className="player-name" key={`${player.playerName}442`}>
            <h3 key={`${player.playerName}443`}>{`${player.playerName}`}</h3>
          </div>
          <div className="pic" key={`${player.playerName}444`}>
            <img
              src="images/opponent/pic.svg"
              alt=""
              key={`${player.playerName}445`}
            />
          </div>
          <OpponentReadyStatus playerReady={player.isReady} />
        </div>
      ))}
    </>
  );
};

export default Opponent;
