import React, { useState } from "react";
import { Box } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MicIcon from "@mui/icons-material/Mic";
import InputAdornment from "@mui/material/InputAdornment";
import NavigationIcon from "@mui/icons-material/Navigation";
import IconButton from "@mui/material/IconButton";
import type { DirectionType } from "../../Context";
import OutlinedInput from "@mui/material/OutlinedInput";
import type { MessageData } from "../../Bubble";

type Props = {
  direction?: DirectionType;
  accentColor?: string;
  onValidate?: (message: MessageData) => void;
};

export default function TextInput({
  direction,
  accentColor,
  onValidate,
}: Props) {
  const [text, setText] = useState("");

  const validate = () => {
    if (onValidate) {
      onValidate({ owner: "me", content: text });
    }
    setText("");
  };

  return (
    <Box
      display="flex"
      flexDirection={direction === "ltr" ? "row" : "row-reverse"}
      alignItems="flex-end"
      p="16px"
    >
      <OutlinedInput
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        inputProps={{
          style: {
            direction: direction === "ltr" ? "ltr" : "rtl",
          },
        }}
        startAdornment={
          direction === "ltr" ? null : (
            <InputAdornment position="start">
              <IconButton onClick={validate}>
                <NavigationIcon
                  sx={{
                    transform: "rotate(-90deg)",
                    color: accentColor,
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </InputAdornment>
          )
        }
        endAdornment={
          direction === "rtl" ? null : (
            <InputAdornment position="start">
              <IconButton onClick={validate}>
                <NavigationIcon
                  sx={{
                    transform: "rotate(90deg)",
                    color: accentColor,
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </InputAdornment>
          )
        }
      />
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
  );
}
