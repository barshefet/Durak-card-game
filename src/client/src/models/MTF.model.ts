import { Player } from "./player.model";

export interface MTF {
    roomReady: boolean;
    players: Player[];
    playersReady: any
    phase: number;
    roomID: string;
    kozar: any
    deck: any
    attackCards: any
    defenceCards: any
    attacker: any
    defender: any
    turnCounter: any
}