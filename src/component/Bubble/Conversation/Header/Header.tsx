import React from "react";
import Container from "./Container";
import Avatar from "./Avatar";
import FaceIcon from "@mui/icons-material/Face";

export default function Header() {
  return (
    <Container>
      <Avatar icon={<FaceIcon sx={{ color: "#ff5c35" }} />} />
    </Container>
  );
}
