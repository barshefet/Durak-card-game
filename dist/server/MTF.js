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
    playerReady(name) {
        let index = this.players.findIndex((player) => player.playerName === name);
        this.players[index].isReady = true;
        this.playersReady.push(name);
    }
    setAttacker(name) {
        if (this.attacker !== undefined) {
            let index1 = this.players.findIndex((player) => player.playerName === this.attacker);
            this.players[index1].isAttacker = false;
        }
        let index2 = this.players.findIndex((player) => player.playerName === name);
        this.players[index2].isAttacker = true;
        this.attacker = name;
    }
    setDefender(name) {
        if (this.defender !== undefined) {
            let index1 = this.players.findIndex((player) => player.playerName === this.defender);
            this.players[index1].isDefender = false;
        }
        let index = this.players.findIndex((player) => player.playerName === name);
        this.players[index].isDefender = true;
        this.defender = name;
    }
    setCounter() {
        if (this.turnCounter === this.players.length - 1) {
            this.turnCounter = 0;
        }
        else {
            this.turnCounter++;
        }
    }
    startGame(deck) {
        this.players = deck.players;
        this.kozar = deck.kozar;
        this.deck = deck.deck;
        this.phase = 1;
        this.roomReady = true;
        this.setAttacker(this.players[0].playerName);
        this.setDefender(this.players[1].playerName);
        this.turnCounter = 1;
    }
    newRound() {
        this.phase = 1;
        this.attacker = this.players[this.turnCounter].playerName;
        this.defender = this.players[this.turnCounter + 1].playerName;
        this.setCounter;
    }
}
exports.MTF = MTF;
//# sourceMappingURL=MTF.js.map