import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";

import { AuthRouter } from "./src/auth/auth";

const server = express();
server.set("trust proxy", true);
server.use(express.json());
server.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
server.use(AuthRouter);

server.all("*", (req, res) => {
  res.status(404).json({ Error: "Resource Not Found" });
});

export { server };
