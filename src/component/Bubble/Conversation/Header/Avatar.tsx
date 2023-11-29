import React, { ReactNode } from "react";
import { Box } from "@mui/material";

type Props = {
  icon: ReactNode;
};

export default function Avatar({ icon }: Props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#ffcd77"
      height="40px"
      width="40px"
      borderRadius="50%"
      sx={{
        border: "3px solid #fff",
      }}
    >
      {icon}
    </Box>
  );
}
