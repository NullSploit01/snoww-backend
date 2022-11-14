import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";

import { AuthRouter } from "./src/auth/auth";
import { NotFoundError } from "./src/errors/not-found-error";
import { errorHandler } from "./src/middlewares/error-handler";
import { requireAuth } from "./src/middlewares/require-auth";
const server = express();
// server.set("trust proxy", true);
server.use(express.json());
server.use(
  cookieSession({
    signed: false,
  })
);
server.use(AuthRouter);

server.all("*", () => {
  throw new NotFoundError();
});

server.use(errorHandler);

export { server };
