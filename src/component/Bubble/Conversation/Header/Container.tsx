"use client";
import React, { useContext } from "react";
import styled from "@emotion/styled";
import Context from "../../Context";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  accentColor?: string;
};

const Container = styled("div")(({ accentColor }: Props) => {
  const { direction } = useContext(Context);
  return {
    display: "flex",
    flexDirection: direction === "ltr" ? "row" : "row-reverse",
    height: "60px",
    width: "100%",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    backgroundColor: accentColor || "rgb(46, 71, 93)",
    padding: "10px",
  };
});

export default Container;
