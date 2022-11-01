"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newDeck = exports.Card = exports.Deck = void 0;
const SUITE = ["clubs", "hearts", "diamonds", "spades"];
const VALUES = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
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
    //the "top card" on the deck is pulled and defined as the Kozar
    kozar() {
        let Kozar = this.cards.shift();
        this.cards.push(Kozar);
        return Kozar;
    }
    //each player gets 6 cards
    dealDeck(players) {
        for (let i = 0; i < players.length; i++) {
            for (let j = 0; j < 6; j++) {
                players[i].cards.push(this.cards.shift());
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
exports.Card = Card;
const makeDeck = () => {
    return SUITE.flatMap((suit) => {
        return VALUES.map((value) => {
            return new Card(suit, value);
        });
    });
};
const newDeck = (players) => {
    let deck = new Deck(makeDeck());
    deck.shuffle();
    let kozar = deck.kozar();
    deck.dealDeck(players);
    let result = {
        players: players,
        kozar: kozar,
        deck: deck,
    };
    return result;
};
exports.newDeck = newDeck;
//# sourceMappingURL=Deck.js.map