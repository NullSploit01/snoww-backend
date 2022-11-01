import express from "express";

const router = express.Router();

router.post("/signout", (req, res) => {
  res.json({ message: "signout ok" });
});

export { router as SignoutRouter };
