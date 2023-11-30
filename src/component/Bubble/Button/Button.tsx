import React, { useState, useEffect } from "react";
import Container from "./Container";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  isOpened?: boolean;
  onClick: () => void;
  accentColor?: string;
};

export default function Button({ isOpened, onClick, accentColor }: Props) {
  const [chatIconVisible, setChatIconOpacity] = useState(isOpened ? 0 : 1);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    setChatIconOpacity(isOpened ? 0 : 1);
    setRotationAngle(isOpened ? 45 : 0);
  }, [isOpened]);

  return (
    <Container onClick={onClick} accentColor={accentColor}>
      <ChatIcon
        sx={{
          opacity: chatIconVisible,
          transition: "all 0.3s ease-in",
          transform: `rotate(${rotationAngle}deg)`,
          position: "absolute",
        }}
      />
      <CloseIcon
        sx={{
          opacity: chatIconVisible === 0 ? 1 : 0,
          transition: "all 0.3s ease-in",
          transform: `rotate(${rotationAngle + 45}deg)`,
          position: "absolute",
        }}
      />
    </Container>
  );
}
