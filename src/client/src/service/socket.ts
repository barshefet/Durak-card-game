import * as io from "socket.io-client";


export const socket = io.connect("https://durak-card-game-barshefet.herokuapp.com/")

// if(process.env.NODE_ENV === "development"){
//     socket = io.connect("http://localhost:4000");
// }else{
//     socket = io.connect("https://durak-card-game-barshefet.herokuapp.com/")
    
// }