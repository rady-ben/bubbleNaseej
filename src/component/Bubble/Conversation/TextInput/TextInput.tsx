import React, { useState } from "react";
import { Box } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MicIcon from "@mui/icons-material/Mic";
import type { DirectionType } from "../../Context";
import OutlinedInput from "@mui/material/OutlinedInput";
import type { MessageData } from "../../Bubble";
import SubmitIcon from "./SubmitIcon";

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
        endAdornment={
          <SubmitIcon
            disabled={text.length === 0}
            accentColor={accentColor}
            onValidate={validate}
            hide={direction === "rtl"}
            rotation="rotate(90deg)"
          />
        }
        startAdornment={
          <SubmitIcon
            disabled={text.length === 0}
            accentColor={accentColor}
            onValidate={validate}
            hide={direction === "ltr"}
            rotation="rotate(-90deg)"
          />
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
