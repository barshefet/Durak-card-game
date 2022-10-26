export class Player {
  playerName: string;
  cards: any[];
  isAttacker: boolean = false
  isDefender: boolean = false

  constructor(p: string, c: any[]) {
    this.playerName = p;
    this.cards = c;
    
  }
}
