"use client";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    backgroundColor: "rgb(46, 71, 93);",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)", // Add this line for the shadow
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      transform: "scale(1.1)",
    },
  };
});

export default Container;
