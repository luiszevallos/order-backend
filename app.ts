import dotenv from "dotenv";
// MODELS
import { Server } from "./models";

dotenv.config();

const server = new Server();

server.listen();
