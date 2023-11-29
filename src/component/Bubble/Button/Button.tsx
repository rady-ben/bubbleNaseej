import React from "react";
import Container from "./Container";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  isOpened?: boolean;
  onClick: () => void;
};

export default function Button({ isOpened, onClick }: Props) {
  const Icon = isOpened ? CloseIcon : ChatIcon;

  return (
    <Container onClick={onClick}>
      <Icon sx={{ color: "white" }} />
    </Container>
  );
}
