import React, { useState, useEffect } from "react";
import Container from "./Container";
import { Box } from "@mui/material";

type Props = {
  isOpened?: boolean;
};

export default function Conversation({ isOpened }: Props) {
  const [opacity, setOpacity] = useState(1);

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
      <Container></Container>
    </Box>
  );
}
