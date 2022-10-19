import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { json } from "body-parser";

const app: Express = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(cors());
app.use(json());
const root: string = path.join(process.cwd(), "client");

app.use(express.static(root));

app.get("*", (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

io.on("connection", (socket: any) => {
  console.log(`a user connected on socket: ${socket}`);
});

const port = process.env.PORT || 4000;
// app.listen(4001, () => {
//   console.log("Hosted: http://localhost:" + port);
// });

server.listen(port, () => {
  console.log(`listening on port : ${port}`);
});

