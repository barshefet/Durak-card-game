import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "http://localhost:3000" } });

io.on("connection", (socket:any) => {
  console.log(typeof socket)
  console.log(`client connected`)

  
})

server.listen(4000, () => {
  console.log('server started on port 4000')
})