import React from "react";
import { Box } from "@mui/material";
import Container from "./Container";
import Text from "../../Text";

type Props = {
  isMine?: boolean;
};

export default function Message({ isMine }: Props) {
  const justifyContent = isMine ? "flex-end" : "flex-start";
  const textVariant = isMine ? "message" : "response";
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent={justifyContent}
      pt="16px"
      pl="16px"
      pr="16px"
    >
      <Container isMine={isMine}>
        <Text textVariant={textVariant}>Hello, I am a message, Hello</Text>
      </Container>
    </Box>
  );
}
