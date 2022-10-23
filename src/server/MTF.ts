export class MTF{
roomReady: boolean
phase: number
admin: string

constructor(roomReady: boolean, phase: number, admin: string){
    this.roomReady = roomReady
    this.phase = phase
    this.admin = admin
}
}