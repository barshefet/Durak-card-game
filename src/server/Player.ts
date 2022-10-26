import { Card } from "./Deck";

export class Player {
  playerName: string;
  cards: Card[];
  isAttacker: boolean = false
  isDefender: boolean = false
  isReady: boolean = false

  constructor(p: string, c: any[]) {
    this.playerName = p;
    this.cards = c;
    
  }
}
