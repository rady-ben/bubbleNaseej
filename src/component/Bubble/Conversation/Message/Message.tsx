import React, { useContext } from "react";
import { Box } from "@mui/material";
import Container from "./Container";
import Text from "../../Text";
import Context from "../../Context";

type Props = {
  isMine?: boolean;
  accentColor?: string;
  content: string;
};

export default function Message({ isMine, accentColor, content }: Props) {
  const textVariant = isMine ? "message" : "response";
  const { direction } = useContext(Context);
  let justifyContent = "flex-start";
  if (direction === "rtl") {
    justifyContent = isMine ? "flex-start" : "flex-end";
  } else {
    justifyContent = isMine ? "flex-end" : "flex-start";
  }
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent={justifyContent}
      pt="16px"
      pl="16px"
      pr="16px"
    >
      <Container isMine={isMine} accentColor={accentColor}>
        <Text textVariant={textVariant}>{content}</Text>
      </Container>
    </Box>
  );
}
