import path from "path";
import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { MTF } from "./MTF";
import { newDeck } from "./Deck";
import { Player } from "./Player";

const app = express();
const PORT = process.env.PORT || 4000;
const root: string = path.join(process.cwd(), "client");

const server = http.createServer(app);

const ROOMS: MTF[] = [];

app.use(cors());
app.use(express.static(root));

app.get("/", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

const io = new Server(server);

io.on("connection", (socket: any) => {
  let socketID = socket.id;
  console.log(`client connected with socketId: ${socketID}`);

  socket.on("create-room", (roomID: string, playerName: string) => {
    let roomIndex = ROOMS.findIndex((room) => room.roomID === roomID);

    if (roomIndex === -1) {
      socket.join(roomID);
      let mtf: MTF = new MTF(
        roomID,
        false,
        [],
        [],
        0,
        undefined,
        undefined,
        [],
        [],
        undefined,
        undefined
      );
      mtf.joinGame(playerName);
      ROOMS.push(mtf);
      io.to(roomID).emit("room-aproved");
      io.to(roomID).emit("receive-mtf", mtf);
      console.log(`${playerName} created room: ${roomID}`);
    } else {
      io.to(socketID).emit("alert", "Room already exists");
    }
  });

  socket.on("join-room", (ID: string, playerName: string) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    let checkPlayerName = ROOMS[roomMTF].players.every(
      (player: Player) => player.playerName !== playerName
    );

    if (
      ROOMS[roomMTF].roomReady === false &&
      ROOMS[roomMTF].players.length < 4 &&
      checkPlayerName
    ) {
      socket.join(ID);
      ROOMS[roomMTF]?.joinGame(playerName);
      io.to(ID).emit("room-aproved");
      io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
      console.log(`${playerName} joined room: ${ID}`);
    } else if (roomMTF === -1) {
      io.to(socketID).emit("alert", "Room doesn't exist");
    } else if (ROOMS[roomMTF].roomReady === true) {
      io.to(socketID).emit("alert", "Game already started");
    }else if(!checkPlayerName){
      io.to(socketID).emit("alert", "Player Name is taken")
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

  socket.on("re-send", (ID: string) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
  });

  socket.on("attack", (ID: string, cardIndex: number, playerIndex: number) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    ROOMS[roomMTF].attack(cardIndex, playerIndex);
    ROOMS[roomMTF].nextPhase();
    io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
  });

  socket.on(
    "defend",
    (
      ID: string,
      cardIndex: number,
      playerIndex: number,
      defenceIndex: number
    ) => {
      let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
      ROOMS[roomMTF].defend(cardIndex, playerIndex, defenceIndex);
      ROOMS[roomMTF].nextPhase();
      io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
      ROOMS[roomMTF].didDefenderSucceed();
      io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    }
  );

  socket.on("give-up", (ID: string, index: number) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    ROOMS[roomMTF].giveUp(index);
    io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
  });

  socket.on("im-out", (ID: string, playerIndex: number) => {
    let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
    ROOMS[roomMTF].playersOut(playerIndex);
    //maybe add a restriction later
    ROOMS[roomMTF].didDefenderSucceed();
    io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
  });

  socket.on(
    "try-forward",
    (ID: string, cardIndex: number, playerIndex: number) => {
      let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
      ROOMS[roomMTF].tryForward(cardIndex, playerIndex);
      io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    }
  );
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
