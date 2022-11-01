import express from "express";
import dotenv from "dotenv";

import { AuthRouter } from "./src/auth/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL;

app.use(AuthRouter);

app.all("*", (req, res) => {
  res.status(404).json({ Error: "Resource Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${URL}`);
});
