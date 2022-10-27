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
  attacker;
  defender;
  turnCounter: number;

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
    defender: any,
    turnCounter: any
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
    this.turnCounter = turnCounter;
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

  setAttacker(name: string) {
    if (this.attacker !== undefined) {
      let index1 = this.players.findIndex(
        (player) => player.playerName === this.attacker
      );
      this.players[index1].isAttacker = false;
    }
    let index2 = this.players.findIndex((player) => player.playerName === name);
    this.players[index2].isAttacker = true;
    this.attacker = name;
  }

  setDefender(name: string) {
    if (this.defender !== undefined) {
      let index1 = this.players.findIndex(
        (player) => player.playerName === this.defender
      );
      this.players[index1].isDefender = false;
    }
    let index = this.players.findIndex((player) => player.playerName === name);
    this.players[index].isDefender = true;
    this.defender = name;
  }

  setCounter() {
    if (this.turnCounter === this.players.length - 1) {
      this.turnCounter = 0;
    } else {
      this.turnCounter++;
    }
  }

  attack(cardindex: number, playerIndex: number) {
    let card: Card[] = this.players[playerIndex].cards.splice(cardindex, 1);
    this.attackCards.push(card[0]);
  }

  defend(cardindex: number, playerIndex: number) {
    let card: Card[] = this.players[playerIndex].cards.splice(cardindex, 1);
    let defenceCard = new DefenceCard(cardindex, card[0])
    this.defenceCards.push(defenceCard);
  }

  startGame(deck: any) {
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

  nextPhase() {
    if (this.attackCards.length < 6) {
      this.phase = 2;
    } else {
      this.phase = 3;
    }
  }

  giveUp() {
    let defenderIndex = this.players.findIndex((player) => player.playerName = this.defender)
    this.attackCards.forEach((card: Card) => this.players[defenderIndex].cards.push(card))
    this.defenceCards.forEach((defenceCard: DefenceCard) => this.players[defenderIndex].cards.push(defenceCard.card))
    this.attackCards.splice(0,this.attackCards.length)
    this.defenceCards.splice(0, this.defenceCards.length)
    this.newRound()

  }
}
