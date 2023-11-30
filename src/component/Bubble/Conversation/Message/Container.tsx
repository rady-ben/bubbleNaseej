"use client";
import React from "react";
import styled from "@emotion/styled";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  isMine?: boolean;
};

const Container = styled("span")(({ isMine }: Props) => {
  const backgroundColor = isMine ? "rgb(46, 71, 93)" : "rgb(234, 240, 246)";
  return {
    display: "inline-block",
    minWidth: "100px",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    borderTopRightRadius: isMine ? "0px" : "8px",
    borderTopLeftRadius: isMine ? "8px" : "0px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
    backgroundColor,
  };
});

export default Container;
