//this is the MTF - master track file. all the data of the game is gathered here and is sent to all the players 
//in that way all players table and cards are in sync. 

export class MTF{
roomReady: boolean
players
playersReady
phase: number
roomID: string

constructor(roomID: string, roomReady: boolean, players:any, playersReady: any,phase: number){
    this.roomReady = roomReady
    this.playersReady = playersReady
    this.phase = phase
    this.roomID = roomID
    this.players = players
}

    joinGame(playerName:string){
        this.players.push(playerName)
    }

    playerReady(playerName:string){
        this.playersReady.push(playerName)
    }
}