import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: {
    message: string;
    type: "request" | "response";
  }) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<{
    message: string;
    type: "request" | "response";
  }>({
    message: "",
    type: "request",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, message: event.target.value });
  };

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage({ message: "", type: "request" });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.message.length > 0) {
      handleSendMessage();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "20px",
      }}
    >
      <TextField
        label="Enter your message"
        variant="outlined"
        style={{ marginBottom: "20px" }}
        fullWidth
        value={message.message}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={message.message.length === 0}
        onClick={handleSendMessage}
        fullWidth
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
