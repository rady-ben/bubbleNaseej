import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import NavigationIcon from "@mui/icons-material/Navigation";
import IconButton from "@mui/material/IconButton";

type Props = {
  rotation?: string;
  disabled?: boolean;
  hide?: boolean;
  accentColor?: string;
  onValidate?: () => void;
};

export default function SubmitIcon({
  rotation,
  disabled,
  onValidate,
  accentColor,
  hide,
}: Props) {
  if (hide) {
    return null;
  }

  return (
    <InputAdornment position="start">
      <IconButton onClick={onValidate} disabled={disabled}>
        <NavigationIcon
          sx={{
            transform: rotation,
            color: disabled ? "gray" : accentColor,
            cursor: "pointer",
          }}
        />
      </IconButton>
    </InputAdornment>
  );
}
