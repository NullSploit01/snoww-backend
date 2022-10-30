import express, { Request, Response} from "express";
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const URL = process.env.URL

app.get("/", (req: Request, res: Response) => {
    res.json({message: "ok"})
})

app.listen(PORT, () => {
    console.log(`Server running on ${URL}`);
})