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
app.get("*", (_req, res) => {
    res.sendFile(path_1.default.join(root, "index.html"));
});
const io = new socket_io_1.Server(server, { cors: { origin: "http://localhost:3000" } });
io.on("connection", (socket) => {
    console.log(`client connected`);
    socket.on('create-room', (roomID, playerName) => {
        socket.join(roomID);
        console.log(`${playerName} created room: ${roomID}`);
        let mtf = new MTF_1.MTF(false, 0, playerName);
        console.log(mtf);
    });
    socket.on('join-room', (roomID) => {
        socket.join(roomID);
        console.log(`client joined room: ${roomID}`);
    });
});
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map