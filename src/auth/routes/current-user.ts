import express from "express";

const router = express.Router();

router.get("/current-user", (req, res) => {
  res.json({ message: "current-user ok" });
});

export { router as CurrentUserRouter };
