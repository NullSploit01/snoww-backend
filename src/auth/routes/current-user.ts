import express from "express";
import { currentUser } from "../../middlewares/current-user";

const router = express.Router();

router.get("/current-user", currentUser, (req, res) => {
  res.json({ currentUser: req.currentUser || null });
});

export { router as CurrentUserRouter };
