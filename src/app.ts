import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Olá socket !</h1>");
});

io.on("connection", (socket) => {
  console.log("User conectado");
  socket.on("get_user", ({ user_id, database }) => {
    socket.emit("get_user", "//user passado");
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`App rodando em http://localhost:${PORT}`);
});
