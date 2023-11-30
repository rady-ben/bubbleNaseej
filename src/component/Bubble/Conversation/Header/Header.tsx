import React from "react";
import Container from "./Container";
import Avatar from "./Avatar";
import FaceIcon from "@mui/icons-material/Face";

type Props = {
  accentColor?: string;
};

export default function Header({ accentColor }: Props) {
  return (
    <Container accentColor={accentColor}>
      <Avatar icon={<FaceIcon sx={{ color: "#ff5c35" }} />} />
    </Container>
  );
}
