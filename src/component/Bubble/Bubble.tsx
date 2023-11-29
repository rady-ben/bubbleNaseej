"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "./Button";
import Conversation from "./Conversation";

export default function Bubble() {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Conversation isOpened={isOpened} />
      <Box mt={2}>
        <Button isOpened={isOpened} onClick={toggle} />
      </Box>
    </Box>
  );
}
