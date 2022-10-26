import React from "react";
import { Player } from "../../../models/player.model";

const IsAttacker = (props: any) => {
    return (props.player as Player).isAttacker ?(
        <>
        <div className={"status-attack"}>
            <img src="images/opponent/attack.svg" alt="" />
        </div>
        </>
    ) : (
        <>
        </>
    )
}

export default IsAttacker