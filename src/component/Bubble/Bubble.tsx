"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { Box } from "@mui/material";
import Button from "./Button";
import Conversation from "./Conversation";
import Context, { defaultValue } from "./Context";
import { LangType } from "./Context";
import {
  getLanguageCode,
  getDirectionFromLanguage,
  DirectionType,
} from "./utils";

type Props = {
  accentColor?: string;
  title?: string;
  icon?: ReactNode;
};

export default function Bubble({ accentColor, title, icon }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [lang, setLanguage] = useState<LangType>("en");
  const [direction, setDirection] = useState<DirectionType>("ltr");

  useEffect(() => {
    setLanguage(getLanguageCode(navigator.language) || "en");
    setDirection(getDirectionFromLanguage(navigator.language) || "ltr");
  }, []);

  const toggle = () => setIsOpened(!isOpened);
  return (
    <Context.Provider
      value={{
        accentColor: accentColor || defaultValue.accentColor,
        lang: lang || defaultValue.lang,
        direction: direction || defaultValue.direction,
      }}
    >
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
    </Context.Provider>
  );
}
