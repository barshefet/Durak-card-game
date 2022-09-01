const SUITE = ["clubs", "hearts", "diamonds", "spades"];
const VALUES = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export class Deck {
    cards
  constructor(c: any) {
    this.cards = c;
  }

  shuffle(){
    for(let index = 1; index < this.cards.length; index++){
      let newIndex = Math.floor(Math.random() * (index + 1))
      let temp = this.cards[newIndex]
      this.cards[newIndex] = this.cards[index]  
      this.cards[index] = temp
    }
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
let deck = new Deck(makeDeck()).shuffle()
return deck
}


