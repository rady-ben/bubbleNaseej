"use client";
import React from "react";
import styled from "@emotion/styled";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  accentColor?: string;
};

const Container = styled("div")(({ accentColor }: Props) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    backgroundColor: accentColor || "rgb(46, 71, 93)",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)", // Add this line for the shadow
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      transform: "scale(1.1)",
    },
  };
});

export default Container;
