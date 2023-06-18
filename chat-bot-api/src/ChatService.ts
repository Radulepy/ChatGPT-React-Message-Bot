import axios from "axios"

const CHAT_GPT_API_URL = "https://api.openai.com/v1/completions";
const CHAT_GPT_BEARER_TOKEN = "sk-...."
// enter your Bearer API KEY above! 

export async function sendMessageToGPT(message: string): Promise<string> {

    try {
        const response = await axios.post(CHAT_GPT_API_URL, {
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

        console.log("Response Received: ", response.data.choices[0].text.trim())
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error calling Chat GPT API:");
        console.error(error);
        throw error;
    }
}