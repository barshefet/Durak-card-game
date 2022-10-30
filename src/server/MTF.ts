//this is the MTF - master track file. all the data of the game is gathered here and is sent to all the players
//in that way all players table and cards are in sync.

import { Card } from "./Deck";
import { DefenceCard } from "./DefenceCard";
import { Player } from "./Player";

export class MTF {
  roomReady: boolean;
  players: Player[];
  playersReady;
  phase: number;
  roomID: string;
  kozar: Card;
  deck: Card[];
  attackCards: Card[];
  defenceCards: DefenceCard[];
  attacker: string;
  defender: string;
  turnCounter1: number = 0;
  turnCounter2: number = 1;
  playersDone: string[] = [];

  constructor(
    roomID: string,
    roomReady: boolean,
    players: Player[],
    playersReady: any,
    phase: number,
    kozar: any,
    deck: any,
    attackCards: any,
    defenceCards: any,
    attacker: any,
    defender: any
  ) {
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

  joinGame(playerName: string) {
    let player = new Player(playerName, []);
    this.players.push(player);
  }

  playerReady(name: string) {
    let index = this.players.findIndex((player) => player.playerName === name);
    this.players[index].isReady = true;
    this.playersReady.push(name);
  }

  setAttacker(index: number) {
    this.players[index].isAttacker = true;
    this.attacker = this.players[index].playerName;
  }

  setDefender(index: number) {
    this.players[index].isDefender = true;
    this.defender = this.players[index].playerName;
  }

  setCounter() {
    if (this.turnCounter1 === this.players.length - 1) {
      this.turnCounter1 = 0;
    } else {
      this.turnCounter1++;
    }
    if (this.turnCounter2 === this.players.length - 1) {
      this.turnCounter2 = 0;
    } else {
      this.turnCounter2++;
    }
  }

  attack(cardindex: number, playerIndex: number) {
    let card: Card[] = this.players[playerIndex].cards.splice(cardindex, 1);
    this.attackCards.push(card[0]);
  }

  defend(cardindex: number, playerIndex: number, defenceIndex: number) {
    let card: Card[] = this.players[playerIndex].cards.splice(cardindex, 1);
    let defenceCard = new DefenceCard(defenceIndex, card[0]);
    this.defenceCards.push(defenceCard);
  }

  startGame(deck: any) {
    this.players = deck.players;
    this.kozar = deck.kozar;
    this.deck = deck.deck.cards;
    this.phase = 1;
    this.roomReady = true;
    this.setAttacker(0);
    this.setDefender(1);
  }

  drawFromDeck(player: Player) {
    let length = player.cards.length;
    if (length < 6 && this.deck.length !== 0) {
      let cardCount = 6 - length;
      for (let i = 0; i < cardCount; i++) {
        let drawnCard = this.deck.shift();
        player.cards.push(drawnCard!);
      }
    }
  }

  newRound(defenderSucceeded: boolean) {
    this.players[this.turnCounter1].isAttacker = false;
    this.players[this.turnCounter2].isDefender = false;
    if (!defenderSucceeded) {
      this.setCounter();
    }
    this.setCounter();
    this.setAttacker(this.turnCounter1);
    this.setDefender(this.turnCounter2);
    this.players.forEach((player: Player) => {
      this.drawFromDeck(player);
    });
    this.phase = 1;
    this.playersDone.splice(0, this.playersDone.length);
  }

  nextPhase() {
    if (this.attackCards.length < 6) {
      this.phase = 2;
    } else {
      this.phase = 3;
    }
  }

  giveUp(defenderIndex: number) {
    this.attackCards.forEach((card: Card) =>
      this.players[defenderIndex].cards.push(card)
    );
    this.defenceCards.forEach((defenceCard: DefenceCard) =>
      this.players[defenderIndex].cards.push(defenceCard.card)
    );
    this.attackCards.splice(0, this.attackCards.length);
    this.defenceCards.splice(0, this.defenceCards.length);
    this.newRound(false);
  }

  playersOut(playerIndex: number) {
    if (this.playersDone.length < this.players.length - 1) {
      this.playersDone.push(this.players[playerIndex].playerName);
    }
  }

  didDefenderSucceed() {
    if (
      this.players.length - 1 === this.playersDone.length &&
      this.defenceCards.length === this.attackCards.length
    ) {
      this.attackCards.splice(0, this.attackCards.length);
      this.defenceCards.splice(0, this.defenceCards.length);
      this.newRound(true);
    }
  }

  tryForward(cardIndex: number, playerIndex: number) {
    let allValuesEqual = this.attackCards.every(
      (card: Card) =>
        card.value === this.players[playerIndex].cards[cardIndex].value
    );
    if (this.defenceCards.length === 0 && allValuesEqual) {
      this.attack(cardIndex, playerIndex);
      this.players[this.turnCounter1].isAttacker = false;
      this.players[this.turnCounter2].isDefender = false;
      this.setCounter();
      this.setAttacker(this.turnCounter1);
      this.setDefender(this.turnCounter2);
    }
  }
}
