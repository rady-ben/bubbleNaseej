import React, { ReactNode, useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import Container from "./Container";
import Header from "./Header";
import Message from "./Message";

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
          <Header accentColor={accentColor} title={title} icon={icon} />
          <Message accentColor={accentColor} />
          <Message accentColor={accentColor} isMine />
          <Box
            width="100%"
            flexGrow={1}
            display="flex"
            alignItems="flex-end"
            p="16px"
          >
            <TextField id="outlined-basic" sx={{ width: "100%" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
