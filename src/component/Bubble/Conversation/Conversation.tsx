import React, { ReactNode, useState, useEffect, useContext } from "react";
import { Box, TextField } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MicIcon from "@mui/icons-material/Mic";
import Container from "./Container";
import Header from "./Header";
import Message from "./Message";
import Context from "../Context";

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
          <Box
            display="flex"
            flexDirection={direction === "ltr" ? "row" : "row-reverse"}
            alignItems="flex-end"
            p="16px"
          >
            <TextField fullWidth />
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              ml="8px"
            >
              <InsertPhotoIcon
                sx={{ color: accentColor, fontSize: "25px", cursor: "pointer" }}
              />
              <Box ml="8px" mr="8px" pt="5px">
                <MicIcon sx={{ color: accentColor, cursor: "pointer" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
