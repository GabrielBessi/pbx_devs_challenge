import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("User conectado");
  // socket.on("chat message", (msg) => {
  //   io.emit("chat message", msg);
  // });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`App rodando em http://localhost:${PORT}`);
});
