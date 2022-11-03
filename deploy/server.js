"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const MTF_1 = require("./MTF");
const Deck_1 = require("./Deck");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const root = path_1.default.join(process.cwd(), "client");
const server = http_1.default.createServer(app);
const ROOMS = [];
app.use((0, cors_1.default)());
app.use(express_1.default.static(root));
app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(root, "index.html"));
});
const io = new socket_io_1.Server(server);
io.on("connection", (socket) => {
    console.log(`client connected`);
    socket.on("create-room", (roomID, playerName) => {
        socket.join(roomID);
        let mtf = new MTF_1.MTF(roomID, false, [], [], 0, undefined, undefined, [], [], undefined, undefined);
        mtf.joinGame(playerName);
        ROOMS.push(mtf);
        io.to(roomID).emit("receive-mtf", mtf);
        console.log(`${playerName} created room: ${roomID}`);
    });
    socket.on("join-room", (ID, playerName) => {
        //TODO: if game started or max players are in : no one can join
        let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
        if (ROOMS[roomMTF].roomReady === false &&
            ROOMS[roomMTF].players.length < 4) {
            socket.join(ID);
            ROOMS[roomMTF]?.joinGame(playerName);
            io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
            console.log(`${playerName} joined room: ${ID}`);
        }
        else if (roomMTF === -1) {
            io.to(socket.id).emit("no-room");
        }
        else {
            io.to(socket.id).emit("no-join");
        }
    });
    socket.on("ready-to-play", (ID, playerName) => {
        let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
        ROOMS[roomMTF]?.playerReady(playerName);
        console.log(`${playerName} is ready`);
        if (ROOMS[roomMTF].playersReady.length >= 2 &&
            ROOMS[roomMTF].playersReady.length === ROOMS[roomMTF].players.length) {
            let deck = (0, Deck_1.newDeck)(ROOMS[roomMTF].players);
            ROOMS[roomMTF].startGame(deck);
            io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
            console.log(`game is starting on room ${ID}`);
        }
        else {
            io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
        }
    });
    socket.on("re-send", (ID) => {
        let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
        io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    });
    socket.on("attack", (ID, cardIndex, playerIndex) => {
        let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
        ROOMS[roomMTF].attack(cardIndex, playerIndex);
        ROOMS[roomMTF].nextPhase();
        io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    });
    socket.on("defend", (ID, cardIndex, playerIndex, defenceIndex) => {
        let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
        ROOMS[roomMTF].defend(cardIndex, playerIndex, defenceIndex);
        ROOMS[roomMTF].nextPhase();
        io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
        ROOMS[roomMTF].didDefenderSucceed();
        io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    });
    socket.on("give-up", (ID, index) => {
        let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
        ROOMS[roomMTF].giveUp(index);
        io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    });
    socket.on("im-out", (ID, playerIndex) => {
        let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
        ROOMS[roomMTF].playersOut(playerIndex);
        //maybe add a restriction later
        ROOMS[roomMTF].didDefenderSucceed();
        io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    });
    socket.on("try-forward", (ID, cardIndex, playerIndex) => {
        let roomMTF = ROOMS.findIndex((room) => room.roomID === ID);
        ROOMS[roomMTF].tryForward(cardIndex, playerIndex);
        io.to(ID).emit("receive-mtf", ROOMS[roomMTF]);
    });
});
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map