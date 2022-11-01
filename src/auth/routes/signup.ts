import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ message: "signup ok" });
});

export { router as SignupRouter };
