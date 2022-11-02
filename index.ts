import dotenv from "dotenv";
import mongoose from "mongoose";
import { server } from "./server";

dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.URL;
const MONGOURI = process.env.MONGOURI;

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT Key mus be defined");
  }

  try {
    await mongoose.connect(MONGOURI!);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }

  server.listen(PORT, () => {
    console.log(`ServerRunning on ${URL}`);
  });
};

start();
