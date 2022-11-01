import express from "express";

import { SigninRouter } from "./routes/signin";
import { SignupRouter } from "./routes/signup";
import { SignoutRouter } from "./routes/signout";
import { CurrentUserRouter } from "./routes/current-user";

const router = express.Router();

router.use("/auth", SigninRouter);
router.use("/auth", SignupRouter);
router.use("/auth", SignoutRouter);
router.use("/auth", CurrentUserRouter);

export { router as AuthRouter };
