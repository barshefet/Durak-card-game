"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newDeck = exports.Deck = void 0;
const SUITE = ["clubs", "hearts", "diamonds", "spades"];
const VALUES = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
const Player1 = [];
const Player2 = [];
const Player3 = [];
const Player4 = [];
let Players = [Player1, Player2, Player3, Player4];
class Deck {
    constructor(c) {
        this.cards = c;
    }
    shuffle() {
        for (let index = 1; index < this.cards.length; index++) {
            let newIndex = Math.floor(Math.random() * (index + 1));
            let temp = this.cards[newIndex];
            this.cards[newIndex] = this.cards[index];
            this.cards[index] = temp;
        }
    }
    kozar() {
        let Kozar = this.cards.shift();
        return Kozar;
    }
    dealDeck(numberOfPlayers) {
        for (let i = 0; i < numberOfPlayers; i++) {
            for (let j = 0; j < 6; j++) {
                Players[i].push(this.cards.shift());
            }
        }
    }
}
exports.Deck = Deck;
class Card {
    constructor(suite, value) {
        this.suite = suite;
        this.value = value;
    }
}
const makeDeck = () => {
    return SUITE.flatMap((suit) => {
        return VALUES.map(value => {
            return new Card(suit, value);
        });
    });
};
const newDeck = () => {
    let deck = new Deck(makeDeck());
    deck.shuffle();
    let sh = deck.kozar();
    deck.dealDeck(4);
    let MTF = {
        players: Players,
        kozar: sh,
        deck: deck
    };
    return MTF;
};
exports.newDeck = newDeck;
//# sourceMappingURL=Deck.js.map