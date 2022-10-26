//this is the MTF - master track file. all the data of the game is gathered here and is sent to all the players
//in that way all players table and cards are in sync.

import { Card } from "./Deck";
import { Player } from "./Player";

export class MTF {
  roomReady: boolean;
  players: Player[];
  playersReady;
  phase: number;
  roomID: string;
  kozar;
  deck: Card[];
  attackCards: Card[];
  defenceCards: Card[];
  attacker;
  defender;
  turnCounter;

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
    if(this.turnCounter === this.players.length - 1){
      this.turnCounter = 0
    }else{
      this.turnCounter++
    }
  }

  addDefenceCard(card: Card) {
    this.defenceCards.push(card)
  }

  attack(cardindex: number, playerIndex: number) {
    let card: Card[] = this.players[playerIndex].cards.splice(cardindex, 1)
    this.attackCards.push(card[0])
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
    this.setCounter
  }


}
