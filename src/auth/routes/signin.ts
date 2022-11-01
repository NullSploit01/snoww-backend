import express from "express";

const router = express.Router();

router.post("/signin", (req, res) => {
  res.json({ message: "login ok" });
});

export { router as SigninRouter };
