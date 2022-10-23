export class MTF{
roomReady: boolean
playersReady: []
phase: number
admin: string

constructor(roomReady: boolean, playersReady: [],phase: number, admin: string){
    this.roomReady = roomReady
    this.playersReady = playersReady
    this.phase = phase
    this.admin = admin
}
}