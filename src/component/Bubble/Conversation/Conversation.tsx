import React, { ReactNode, useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import Container from "./Container";
import Header from "./Header";
import Message from "./Message";
import Context from "../Context";
import TextInput from "./TextInput";

type Props = {
  isOpened?: boolean;
  accentColor?: string;
  title?: string;
  icon?: ReactNode;
};

export default function Conversation({
  isOpened,
  accentColor,
  title,
  icon,
}: Props) {
  const [opacity, setOpacity] = useState(isOpened ? 1 : 0);
  const { direction } = useContext(Context);

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
        <Box display="flex" flexDirection="column" width="100%" height="100%">
          <Box flexGrow={1}>
            <Header accentColor={accentColor} title={title} icon={icon} />
            <Message accentColor={accentColor} />
            <Message accentColor={accentColor} isMine />
          </Box>
          <TextInput direction={direction} accentColor={accentColor} />
        </Box>
      </Container>
    </Box>
  );
}
