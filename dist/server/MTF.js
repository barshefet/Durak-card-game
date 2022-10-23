"use strict";
//this is the MTF - master track file. all the data of the game is gathered here and is sent to all the players 
//in that way all players table and cards are in sync. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.MTF = void 0;
class MTF {
    constructor(roomID, roomReady, players, playersReady, phase) {
        this.roomReady = roomReady;
        this.playersReady = playersReady;
        this.phase = phase;
        this.roomID = roomID;
        this.players = players;
    }
    joinGame(playerName) {
        this.players.push(playerName);
    }
    playerReady(playerName) {
        this.playersReady.push(playerName);
    }
}
exports.MTF = MTF;
//# sourceMappingURL=MTF.js.map