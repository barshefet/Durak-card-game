import path from "path";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { MTF } from "./MTF";

const app = express();
const PORT = process.env.PORT || 4000;
const root: string = path.join(process.cwd(), "client");

const server = http.createServer(app);

app.get("*", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

const io = new Server(server, { cors: { origin: "http://localhost:3000" } });

io.on("connection", (socket: any) => {
  console.log(`client connected`);

  socket.on('create-room', (roomID: string, playerName: string) => {
    socket.join(roomID)
    console.log(`${playerName} created room: ${roomID}`)
    let mtf = new MTF(false, 0, playerName)
    console.log(mtf)
    // socket.to(roomID).emit(mtf)
  })
  
  socket.on('join-room', (roomID:any) => {
    socket.join(roomID)
    console.log(`client joined room: ${roomID}`)
  })
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
