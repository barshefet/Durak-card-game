const SUITE = ["clubs", "hearts", "diamonds", "spades"];
const VALUES = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
const Player1: Card[] = [] 
const Player2: Card[] = []
const Player3: Card[] = []
const Player4: Card[] = []
let Players: any[] = [Player1,Player2,Player3,Player4] 

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

  kozar() {
    let Kozar = this.cards.shift() 
    return Kozar 
  }

  dealDeck(numberOfPlayers: number) {
    for (let i = 0; i < numberOfPlayers; i++){
      for(let j = 0; j < 6; j++){
        Players[i].push(this.cards.shift())
      }
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
let deck = new Deck(makeDeck())
deck.shuffle()
let sh = deck.kozar()
deck.dealDeck(4)
let MTF = {
  players: Players,
  kozar: sh,
  deck: deck
}
return MTF
}



