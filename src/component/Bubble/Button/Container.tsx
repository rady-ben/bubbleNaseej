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
    backgroundColor: "#ff5c35",
  };
});

export default Container;
