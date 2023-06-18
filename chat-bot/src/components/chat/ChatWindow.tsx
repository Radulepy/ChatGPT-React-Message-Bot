import { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { CircularProgress } from "@mui/material";
import axios from "axios";

interface MessageInterface {
  message: string;
  type: "request" | "response";
}

const ChatWindow = () => {
  const API_URL = "http://localhost:4000/message";
  
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the container when new messages are added
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (message: MessageInterface) => {
    setMessages(prevMessages => [...prevMessages, message]);
    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        message: message.message,
      });

      const responseMessage: MessageInterface = {
        message: response.data.response,
        type: "response",
      };

      setMessages(prevMessages => [...prevMessages, responseMessage]);
      setLoading(false);
    } catch (error) {
      console.log("ERROR sending POST request: ", error);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "80vh",
        maxHeight: "750px",
        overflowY: "auto",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
      ref={containerRef}
    >
      {messages.map((message, index) => (
        <ChatMessage key={index} {...message} />
      ))}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </div>
      )}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
