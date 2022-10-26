import { Card } from "./cards.model";

export interface Player {
    playerName: string;
    cards: Card[];
    isAttacker: boolean
    isDefender: boolean
    isReady: boolean
  }
  