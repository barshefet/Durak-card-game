"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const MTF_1 = require("./MTF");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const root = path_1.default.join(process.cwd(), "client");
const server = http_1.default.createServer(app);
const ROOMS = [];
app.get("*", (_req, res) => {
    res.sendFile(path_1.default.join(root, "index.html"));
});
const io = new socket_io_1.Server(server, { cors: { origin: "http://localhost:3000" } });
io.on("connection", (socket) => {
    console.log(`client connected`);
    socket.on("create-room", (roomID, playerName) => {
        socket.join(roomID);
        let mtf = new MTF_1.MTF(roomID, false, [playerName], [], 0);
        ROOMS.push(mtf);
        console.log(ROOMS);
        io.to(roomID).emit("receive-mtf", mtf);
        console.log(`${playerName} created room: ${roomID}`);
    });
    socket.on("join-room", (ID, playerName) => {
        socket.join(ID);
        let roomMTF = ROOMS.find((room) => room.roomID === ID);
        roomMTF?.joinGame(playerName);
        console.log(`${playerName} joined room: ${ID}`);
    });
    socket.on("ready-to-play", (ID, playerName) => {
        let roomMTF = ROOMS.find((room) => room.roomID === ID);
        roomMTF?.playerReady(playerName);
        console.log(roomMTF);
    });
});
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map