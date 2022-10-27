import { Card } from "./Deck"

export class DefenceCard{
    index: number
    card: Card
    constructor(index: number, card: Card){
        this.index = index
        this.card = card
    }
}