import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import { Box } from "@mui/material";
import Container from "./Container";
import Avatar from "./Avatar";
import Text from "../../Text";

type Props = {
  accentColor?: string;
  title: string;
};

export default function Header({ accentColor, title }: Props) {
  return (
    <Container accentColor={accentColor}>
      <Avatar icon={<FaceIcon sx={{ color: "#ff5c35" }} />} />
      <Box
        height="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        ml="10px"
      >
        <Text textVariant="title">{title || "Title"}</Text>
      </Box>
    </Container>
  );
}
