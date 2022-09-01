const SUITE = ["clubs", "hearts", "diamonds", "spades"];
const VALUES = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export class Deck {
    cards
  constructor(c: any) {
    this.cards = c;
  }
}


class Card {
    suite
    value
  constructor(suite: string, value: any) {
    this.suite = suite
    this.value = value
  }
}


const makeDeck = () => {
    return SUITE.flatMap((suit) => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

export const newDeck = () => {
return new Deck(makeDeck())
}