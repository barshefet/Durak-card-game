import React from "react";
import { Player } from "../../../models/player.model";

const IsAttacker = (props: Partial <Player>) => {
    return props.isAttacker ?(
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