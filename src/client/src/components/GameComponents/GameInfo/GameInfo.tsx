import React from 'react'
import './GameInfo.scss'

const GameInfo = (props: any) => {
    return(
        <>
        <div className='gameinfo'>
            <h2>Room ID : {props.roomID}</h2>
            <h2>Player Name : {props.playerName}</h2>
        </div>
        </>
    )
}

export default GameInfo;
