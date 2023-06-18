# ChatGPT-Message-Bot-Template

This is a React ChatGPT Message Bot Full Stack Template (React + Node.js using TypeScript). It can be used as a starting template to build customer/service bots or any other AI driven messaging service.

It contains both the frontend part (React + Material UI 5.x) `chat-bot` and the Backend API Part (Node.js + Express) `chat-bot-api`

<img src="https://github.com/Radulepy/ChatGPT-React-Message-Bot/raw/master/DEMO.png" alt="React ChatGPT Message Bot Node" width="400">


## Features

- **Frontend:** The frontend part of the template is built with React and utilizes Material UI 5.x for the user interface components.
- **Backend API:** The backend API is implemented using Node.js and Express framework.

## Getting Started

Follow the steps below to set up and run the ChatGPT Message Bot:

0) Install the needed dependencies `npm i` in the root folder

1) Set your ChatGPT's API Bearer Token in `src/ChatService.ts` in the `CHAT_GPT_BEARER_TOKEN` variable

2) Start the `chat-bot-api` project by runing: `npx tsc` and `node dist/server.js` in the `/chat-bot-api` project path!
This will ensure the backend will run on port 4000.

3) Start the `chat-bot` project by runing:
`npm start` in the `/chat-bot` project path!
This will start the frontend project on port 3000.

## Usage

Once the ChatGPT Message Bot is up and running, you can interact with it through the frontend interface. Open your web browser and access `http://localhost:3000` to start using the bot.

## Customization

Feel free to customize the template according to your specific requirements. You can modify the frontend components, add additional features, or extend the backend functionality as needed.

## Credits

The ChatGPT-Message-Bot-Template was created by [Radu Lepădatu](https://www.linkedin.com/in/radu-lepadatu-lepysoft/) and is based on the work of [OpenAI](https://openai.com/).

If you have any questions or need further assistance, please contact me.
