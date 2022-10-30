const SUITE = ["clubs", "hearts", "diamonds", "spades"];
const VALUES = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

export class Deck {
  cards: Card[];
  constructor(c: Card[]) {
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
    this.cards.push(Kozar!);
    return Kozar;
  }

  //each player gets 6 cards
  dealDeck(players: any) {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < 6; j++) {
        players[i].cards.push(this.cards.shift());
      }
    }
  }
}

export class Card {
  suite;
  value;
  constructor(suite: string, value: any) {
    this.suite = suite;
    this.value = value;
  }
}

const makeDeck = () => {
  return SUITE.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
};

export const newDeck = (players: any) => {
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
