import React from "react";
import Container from "./Container";

type Props = {
  isOpened?: boolean;
  onClick: () => void;
};

export default function Conversation({ isOpened }: Props) {
  return <Container></Container>;
}
