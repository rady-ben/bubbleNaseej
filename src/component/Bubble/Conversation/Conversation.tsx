import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Container from "./Container";
import Header from "./Header";

type Props = {
  isOpened?: boolean;
  accentColor?: string;
  title: string;
};

export default function Conversation({ isOpened, accentColor, title }: Props) {
  const [opacity, setOpacity] = useState(isOpened ? 1 : 0);

  useEffect(() => {
    setOpacity(isOpened ? 1 : 0);
  }, [isOpened]);

  return (
    <Box
      sx={{
        transition: "all 0.3s ease-in",
        opacity,
      }}
    >
      <Container>
        <Header accentColor={accentColor} title={title} />
      </Container>
    </Box>
  );
}
