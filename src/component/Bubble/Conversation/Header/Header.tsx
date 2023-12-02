import React, { ReactNode, useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import Container from "./Container";
import Avatar from "./Avatar";
import Text from "../../Text";
import Context, { LangType } from "../../Context";
import CONTENT from "../../content";

type Props = {
  title?: string;
  accentColor?: string;
  icon?: ReactNode;
};

export default function Header({ accentColor, title, icon }: Props) {
  const { lang } = useContext(Context);
  return (
    <Container accentColor={accentColor}>
      <Avatar icon={icon || <AccountCircleIcon sx={{ color: "#ff5c35" }} />} />
      <Box
        height="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        ml="10px"
      >
        <Text textVariant="title">
          {title || CONTENT[lang as LangType].NASEEJ}
        </Text>
      </Box>
    </Container>
  );
}
