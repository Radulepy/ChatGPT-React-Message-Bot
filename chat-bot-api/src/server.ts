import express, { Request, Response } from "express";
import { sendMessageToGPT } from "./ChatService";
import cors from "cors";

const app = express().use(express.json());
app.use(cors());
const port = 4000;

app.post("/message", async (req: Request, res: Response) => {
    const { message } = req.body;
    try {
        const response = await sendMessageToGPT(message);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while processing the message." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
