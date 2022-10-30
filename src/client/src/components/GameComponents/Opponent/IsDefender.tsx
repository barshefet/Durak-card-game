import React from "react";
import { Player } from "../../../models/player.model";

const IsDefender = (props: Partial <Player>) => {
    return props.isDefender ? (
        <>
        <div className={"status-defend"}>
            <div>
            <img src="images/opponent/defend.svg" alt="" />
            </div>
        </div>
        </>
    ) : (
        <>
        </>
    )
}

export default IsDefender