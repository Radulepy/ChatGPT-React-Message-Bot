"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ChatService_1 = require("./ChatService");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)().use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 4000;
app.post("/message", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = req.body;
    try {
        const response = yield (0, ChatService_1.sendMessageToGPT)(message);
        res.json({ response });
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while processing the message." });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
