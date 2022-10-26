import React from "react";
import { Player } from "../../../models/player.model";

const IsDefender = (props: any) => {
    return (props.player as Player).isDefender ? (
        <>
        <div className={"status-defend"}>
            <img src="images/opponent/defend.svg" alt="" />
        </div>
        </>
    ) : (
        <>
        </>
    )
}

export default IsDefender