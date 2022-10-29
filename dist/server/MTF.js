"use strict";
//this is the MTF - master track file. all the data of the game is gathered here and is sent to all the players
//in that way all players table and cards are in sync.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MTF = void 0;
const DefenceCard_1 = require("./DefenceCard");
const Player_1 = require("./Player");
class MTF {
    constructor(roomID, roomReady, players, playersReady, phase, kozar, deck, attackCards, defenceCards, attacker, defender) {
        this.turnCounter = { counter1: 0, counter2: 1 };
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
        if (this.turnCounter.counter1 === this.players.length - 1) {
            this.turnCounter.counter1 = 0;
        }
        else {
            this.turnCounter.counter1++;
        }
        if (this.turnCounter.counter2 === this.players.length - 1) {
            this.turnCounter.counter2 = 0;
        }
        else {
            this.turnCounter.counter2++;
        }
    }
    attack(cardindex, playerIndex) {
        let card = this.players[playerIndex].cards.splice(cardindex, 1);
        this.attackCards.push(card[0]);
    }
    defend(cardindex, playerIndex) {
        let card = this.players[playerIndex].cards.splice(cardindex, 1);
        let defenceCard = new DefenceCard_1.DefenceCard(cardindex, card[0]);
        this.defenceCards.push(defenceCard);
    }
    startGame(deck) {
        this.players = deck.players;
        this.kozar = deck.kozar;
        this.deck = deck.deck;
        this.phase = 1;
        this.roomReady = true;
        this.setAttacker(this.players[0].playerName);
        this.setDefender(this.players[1].playerName);
    }
    newRound() {
        this.phase = 1;
        this.setCounter;
        this.attacker = this.players[this.turnCounter.counter1].playerName;
        this.defender = this.players[this.turnCounter.counter2].playerName;
    }
    nextPhase() {
        if (this.attackCards.length < 6) {
            this.phase = 2;
        }
        else {
            this.phase = 3;
        }
    }
    giveUp() {
        let defenderIndex = this.players.findIndex((player) => player.playerName = this.defender);
        this.attackCards.forEach((card) => this.players[defenderIndex].cards.push(card));
        this.defenceCards.forEach((defenceCard) => this.players[defenderIndex].cards.push(defenceCard.card));
        this.attackCards.splice(0, this.attackCards.length);
        this.defenceCards.splice(0, this.defenceCards.length);
        this.newRound();
    }
}
exports.MTF = MTF;
//# sourceMappingURL=MTF.js.map