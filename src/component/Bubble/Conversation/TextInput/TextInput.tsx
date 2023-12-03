import React from "react";
import { Box, TextField } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MicIcon from "@mui/icons-material/Mic";
import InputAdornment from "@mui/material/InputAdornment";
import NavigationIcon from "@mui/icons-material/Navigation";
import type { DirectionType } from "../../Context";

type Props = {
  direction?: DirectionType;
  accentColor?: string;
};

export default function TextInput({ direction, accentColor }: Props) {
  return (
    <Box
      display="flex"
      flexDirection={direction === "ltr" ? "row" : "row-reverse"}
      alignItems="flex-end"
      p="16px"
    >
      <TextField
        fullWidth
        inputProps={{
          style: {
            direction: direction === "ltr" ? "ltr" : "rtl",
          },
        }}
        InputProps={{
          startAdornment:
            direction === "ltr" ? null : (
              <InputAdornment position="start">
                <NavigationIcon
                  sx={{
                    transform: "rotate(-90deg)",
                    color: accentColor,
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          endAdornment:
            direction === "rtl" ? null : (
              <InputAdornment position="start">
                <NavigationIcon
                  sx={{
                    transform: "rotate(90deg)",
                    color: accentColor,
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
        }}
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
