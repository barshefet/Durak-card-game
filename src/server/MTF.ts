//this is the MTF - master track file. all the data of the game is gathered here and is sent to all the players
//in that way all players table and cards are in sync.

import { Player } from "./Player";

export class MTF {
  roomReady: boolean;
  players: Player[];
  playersReady;
  phase: number;
  roomID: string;
  kozar;
  deck;
  attackCards;
  defenceCards;
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

  playerReady(playerName: string) {
    this.playersReady.push(playerName);
  }

  startGame(deck: any) {
    this.players = deck.players;
    this.kozar = deck.kozar;
    this.deck = deck.deck;
    this.phase = 1;
    this.roomReady = true;
    this.attacker = this.players[0].playerName;
    this.defender = this.players[1].playerName;
    this.turnCounter = 1;
  }

  newRound() {
    this.phase = 1;
    this.attacker = this.players[this.turnCounter].playerName;
    this.defender = this.players[this.turnCounter + 1].playerName;
    this.turnCounter++;//need refining
  }
}
