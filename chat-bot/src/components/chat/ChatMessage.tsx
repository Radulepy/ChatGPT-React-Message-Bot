import React from "react";
import { Typography, Paper } from "@mui/material";

interface ChatMessageProps {
  message: string;
  type: "request" | "response";
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, type }) => {
  const isRequest = type === "request";
  const alignment = isRequest ? "flex-end" : "flex-start";
  const backgroundColor = isRequest ? "#2196f3" : "#e0e0e0";
  const color = isRequest ? "#fff" : "#000";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: alignment,
        marginBottom: "10px",
      }}
    >
      <Paper
        style={{
          backgroundColor,
          color,
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "70%",
          minWidth: "40%",
          borderTopRightRadius: isRequest ? "150px" : "10px",
          borderBottomLeftRadius: isRequest ? "10px" : "150px",
        }}
        elevation={5}
      >
        <Typography>{message}</Typography>
      </Paper>
    </div>
  );
};

export default ChatMessage;
