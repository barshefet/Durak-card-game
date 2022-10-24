export class Player {
  playerName: string;
  cards: any[];

  constructor(p: string, c: any[]) {
    this.playerName = p;
    this.cards = c;
  }
}
