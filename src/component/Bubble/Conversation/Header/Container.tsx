"use client";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  return {
    display: "flex",
    height: "60px",
    width: "100%",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    backgroundColor: "rgb(46, 71, 93)",
  };
});

export default Container;
