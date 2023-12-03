"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { Box } from "@mui/material";
import Button from "./Button";
import Conversation from "./Conversation";
import Context, { defaultValue, LangType } from "./Context";
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
  const [lang, setLang] = useState<LangType>("unknown");
  const [direction, setDirection] = useState<DirectionType>("unknown");

  useEffect(() => {
    const lang = getLanguageCode(navigator.language) || "en";
    setLang(lang);
    setDirection(getDirectionFromLanguage(lang) || "ltr");
  }, []);

  const toggle = () => setIsOpened(!isOpened);

  if (lang === "unknown" || direction === "unknown") {
    return null;
  }

  return (
    <Context.Provider
      value={{
        accentColor: accentColor || defaultValue.accentColor,
        lang: lang || defaultValue.lang,
        direction: direction || defaultValue.direction,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          [`@media (max-width: 768px)`]: {
            height: "100%",
            justifyContent: "flex-end",
          },
        }}
      >
        <Conversation
          isOpened={isOpened}
          accentColor={accentColor}
          title={title}
          icon={icon}
        />
        <Box
          mt={2}
          width="100%"
          display="flex"
          justifyContent={direction === "rtl" ? "flex-start" : "flex-end"}
        >
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
