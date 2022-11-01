import express from "express";

import { SigninRouter } from "./routes/signin";
import { SignupRouter } from "./routes/signup";
import { SignoutRouter } from "./routes/signout";
import { CurrentUserRouter } from "./routes/current-user";

const router = express.Router();

router.use(
  "/auth",
  SigninRouter,
  SignupRouter,
  SignoutRouter,
  CurrentUserRouter
);

export { router as AuthRouter };
