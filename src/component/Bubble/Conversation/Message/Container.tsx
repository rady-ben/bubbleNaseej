"use client";
import styled from "@emotion/styled";

const Container = styled("span")(() => {
  return {
    display: "inline-block",
    minWidth: "100px",
    paddingTop: "8px",
    marginTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
    backgroundColor: "rgb(234, 240, 246)",
  };
});

export default Container;
