"use client";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "450px",
    width: "350px",
    borderRadius: "16px",
    backgroundColor: "#f00",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)", // Add this line for the shadow
    transition: "all 0.3s ease-in-out",
  };
});

export default Container;