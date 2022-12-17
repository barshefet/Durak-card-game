# Durak card game
Made by Bar Shefet.

A Multiplayer Card game of "Durak" (fool in russian) that lets the client manipulate SVG elelments of cards
the game can be played with 2-4 players that can connect together to a "game-room".
the game updates to all players at the same time using a socket.IO server that monitors the game and makes sure all players get 
the same game room info in real-time.

## Stack
React, Express and Socket.IO

## Link to the deployed project
Durak.up.railway.app

## How to run localy
1. make sure to install all packages. both at the client folder and at the server. (npm ci)

2. in src/Client/Service/socket.ts change the url to: 
const socket = io("http://localhost:4000")

3. in src/Server/server.ts change line 25 to:
const io = new Server(server, {cors: {origin: 'http://localhost:3000'}});

