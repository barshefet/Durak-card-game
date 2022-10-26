import path from "path";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { MTF } from "./MTF";
import { newDeck } from "./Deck";

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
    let mtf: MTF = new MTF(roomID, false, [], [], 0, undefined, undefined, [], [], undefined, undefined, undefined);
    mtf.joinGame(playerName);
    ROOMS.push(mtf);
    io.to(roomID).emit("receive-mtf", mtf);
    console.log(`${playerName} created room: ${roomID}`);
  });

  socket.on("join-room", (ID: any, playerName: string) => {
    //TODO: if game started or max players are in : no one can join
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);

    if (
      ROOMS[roomMTF].roomReady === false &&
      ROOMS[roomMTF].players.length < 5
    ) {
      socket.join(ID);
      ROOMS[roomMTF]?.joinGame(playerName);
      io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
      console.log(`${playerName} joined room: ${ID}`);
    } else if (roomMTF === -1) {
      io.to(socket.id).emit("no-room");
    } else {
      io.to(socket.id).emit("no-join");
    }
  });

  socket.on("ready-to-play", (ID: string, playerName: string) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    ROOMS[roomMTF]?.playerReady(playerName);
    console.log(`${playerName} is ready`);
    if (
      ROOMS[roomMTF].playersReady.length >= 2 &&
      ROOMS[roomMTF].playersReady.length === ROOMS[roomMTF].players.length
    ) {
      let deck = newDeck(ROOMS[roomMTF].players);
      ROOMS[roomMTF].startGame(deck);
      io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
      console.log(`game is starting on room ${ID}`);
    } else {
      io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    }
  });

  socket.on('re-send', (ID: string) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);

  })

  socket.on('attack', (ID :string, cardIndex: number, playerIndex: number) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    ROOMS[roomMTF].attack(cardIndex, playerIndex)
    io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
  })
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
