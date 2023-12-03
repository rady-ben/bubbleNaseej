import React, { ReactNode, useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import Container from "./Container";
import Header from "./Header";
import Message from "./Message";
import Context from "../Context";
import TextInput from "./TextInput";
import type { MessageData } from "../Bubble";

type Props = {
  isOpened?: boolean;
  accentColor?: string;
  title?: string;
  icon?: ReactNode;
  messages?: MessageData[];
};

export default function Conversation({
  isOpened,
  accentColor,
  title,
  icon,
  messages,
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
        flexGrow: 1,
        paddingTop: "10px",
        display: "flex",
        flexDirection: "column",
        maxHeight: "600px",
        [`@media (max-width: 768px)`]: {
          maxHeight: "100%",
        },
      }}
    >
      <Container>
        <Box display="flex" flexDirection="column" width="100%" height="100%">
          <Box flexGrow={1} maxHeight="85%" overflow="auto">
            <Header accentColor={accentColor} title={title} icon={icon} />
            {messages?.map((message, index) => (
              <Message
                key={index}
                accentColor={accentColor}
                isMine={message.owner === "me"}
                content={message.content}
              />
            ))}
          </Box>
          <TextInput direction={direction} accentColor={accentColor} />
        </Box>
      </Container>
    </Box>
  );
}
