import React, { useState } from "react";
import Container from "./Container";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  isOpened?: boolean;
  onClick: () => void;
};

export default function Button({ isOpened, onClick }: Props) {
  const [chatIconOpacity, setChatIconOpacity] = useState(0);
  const [closeIconOpacity, setCloseIconOpacity] = useState(1);

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
            opacity: closeIconOpacity,
            transition: "opacity 0.3s ease-in",
            position: "absolute",
          }}
        />
      </Container>
      <button
        onClick={() => {
          setChatIconOpacity(!chatIconOpacity ? 1 : 0);
          setCloseIconOpacity(!closeIconOpacity ? 1 : 0);
        }}
      >
        tap
      </button>
    </div>
  );
}
