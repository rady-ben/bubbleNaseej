import React, { useState, useEffect } from "react";
import Container from "./Container";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  isOpened?: boolean;
  onClick: () => void;
};

export default function Button({ isOpened, onClick }: Props) {
  const [chatIconOpacity, setChatIconOpacity] = useState(isOpened ? 0 : 1);

  useEffect(() => {
    setChatIconOpacity(isOpened ? 0 : 1);
  }, [isOpened]);

  return (
    <div>
      <Container onClick={onClick}>
        <ChatIcon
          sx={{
            opacity: chatIconOpacity,
            transition: "opacity 0.3s ease-in",
            position: "absolute",
          }}
        />
        <CloseIcon
          sx={{
            opacity: chatIconOpacity === 0 ? 1 : 0,
            transition: "opacity 0.3s ease-in",
            position: "absolute",
          }}
        />
      </Container>
    </div>
  );
}
