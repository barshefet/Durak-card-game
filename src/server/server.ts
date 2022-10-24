import path from "path";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { MTF } from "./MTF";

const app = express();
const PORT = process.env.PORT || 4000;
const root: string = path.join(process.cwd(), "client");

const server = http.createServer(app);

const ROOMS: MTF[] = [];

app.get("*", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

const io = new Server(server, { cors: { origin: "http://localhost:3000" } });

io.on("connection", (socket: any) => {
  console.log(`client connected`);

  socket.on("create-room", (roomID: string, playerName: string) => {
    socket.join(roomID);
    let mtf: MTF = new MTF(roomID, false, [playerName], [], 0);
    ROOMS.push(mtf);
    io.to(roomID).emit("receive-mtf", mtf);
    console.log(`${playerName} created room: ${roomID}`);
  });

  socket.on("join-room", (ID: any, playerName: string) => {
    //TODO: if game started or max players are in : no one can join 
    socket.join(ID);
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    ROOMS[roomMTF]?.joinGame(playerName);
    io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    console.log(`${playerName} joined room: ${ID}`);
  });

  socket.on("ready-to-play", (ID: string, playerName: string) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    ROOMS[roomMTF]?.playerReady(playerName)
    console.log(`${playerName} is ready`)
    if(ROOMS[roomMTF].playersReady.length >= 2 && ROOMS[roomMTF].playersReady.length === ROOMS[roomMTF].players.length){
      console.log('game is starting')
      //handle deck
      //send new phase
    }else{
    io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    }
  });
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
