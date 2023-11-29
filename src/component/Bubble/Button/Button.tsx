import React from "react";
import Container from "./Container";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  isOpened?: boolean;
};

export default function Button({ isOpened }: Props) {
  const Icon = isOpened ? CloseIcon : ChatIcon;

  return (
    <Container>
      <Icon sx={{ color: "white" }} />
    </Container>
  );
}
