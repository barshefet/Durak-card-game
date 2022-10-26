"use strict";
//this is the MTF - master track file. all the data of the game is gathered here and is sent to all the players
//in that way all players table and cards are in sync.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MTF = void 0;
const Player_1 = require("./Player");
class MTF {
    constructor(roomID, roomReady, players, playersReady, phase, kozar, deck, attackCards, defenceCards, attacker, defender, turnCounter) {
        this.roomReady = roomReady;
        this.playersReady = playersReady;
        this.phase = phase;
        this.roomID = roomID;
        this.players = players;
        this.kozar = kozar;
        this.deck = deck;
        this.attackCards = attackCards;
        this.defenceCards = defenceCards;
        this.attacker = attacker;
        this.defender = defender;
        this.turnCounter = turnCounter;
    }
    joinGame(playerName) {
        let player = new Player_1.Player(playerName, []);
        this.players.push(player);
    }
    playerReady(playerName) {
        this.playersReady.push(playerName);
    }
    startGame(deck) {
        this.players = deck.players;
        this.kozar = deck.kozar;
        this.deck = deck.deck;
        this.phase = 1;
        this.roomReady = true;
        this.attacker = this.players[0].playerName;
        this.defender = this.players[1].playerName;
        this.turnCounter = 1;
    }
    newRound() {
        this.phase = 1;
        this.attacker = this.players[this.turnCounter].playerName;
        this.defender = this.players[this.turnCounter + 1].playerName;
        this.turnCounter++; //need refining
    }
}
exports.MTF = MTF;
//# sourceMappingURL=MTF.js.map