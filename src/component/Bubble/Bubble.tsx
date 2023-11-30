"use client";
import React, { ReactNode, useState } from "react";
import { Box } from "@mui/material";
import Button from "./Button";
import Conversation from "./Conversation";

type Props = {
  accentColor?: string;
  title: string;
  icon?: ReactNode;
};

export default function Bubble({ accentColor, title, icon }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Conversation
        isOpened={isOpened}
        accentColor={accentColor}
        title={title}
        icon={icon}
      />
      <Box mt={2}>
        <Button
          isOpened={isOpened}
          onClick={toggle}
          accentColor={accentColor}
        />
      </Box>
    </Box>
  );
}
