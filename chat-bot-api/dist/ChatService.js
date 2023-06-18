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
exports.sendMessageToGPT = void 0;
const axios_1 = __importDefault(require("axios"));
const CHAT_GPT_API_URL = "https://api.openai.com/v1/completions";
const CHAT_GPT_BEARER_TOKEN = "sk-....";
// enter your Bearer API KEY above! 
function sendMessageToGPT(message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(CHAT_GPT_API_URL, {
                prompt: message,
                model: "text-davinci-003",
                max_tokens: 500,
                temperature: 0.7,
                top_p: 1,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CHAT_GPT_BEARER_TOKEN}`,
                },
            });
            console.log("Response Received: ", response.data.choices[0].text.trim());
            return response.data.choices[0].text.trim();
        }
        catch (error) {
            console.error("Error calling Chat GPT API:");
            console.error(error);
            throw error;
        }
    });
}
exports.sendMessageToGPT = sendMessageToGPT;
