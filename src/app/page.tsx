import React from "react";
import Bubble from "@/component/Bubble";
import FaceIcon from "@mui/icons-material/Face";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      height="100vh"
      width="100vw"
      bgcolor="#E1E1E1"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [`@media (max-width: 768px)`]: {
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "10px",
        },
      }}
    >
      <Bubble title="" icon={<FaceIcon />} accentColor="rgb(46, 71, 93)" />
    </Box>
  );
}
