import express from "express";
import http from "http";
import { Server } from "socket.io";
import userRouter from "./routes/user.routes";
import "dotenv/config";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

app.use("/", userRouter);

// io.on("connection", (socket) => {
//   console.log("User conectado");
//   socket.on("get_user", ({ user_id, database }) => {
//     socket.emit("get_user", "//user passado");
//   });
// });

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`App rodando em http://localhost:${PORT}`);
});

export default app;
