"use client";
import styled from "@emotion/styled";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  accentColor?: string;
};

const Container = styled("div")(({ accentColor }: Props) => {
  return {
    display: "flex",
    height: "60px",
    width: "100%",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    backgroundColor: accentColor || "rgb(46, 71, 93)",
    padding: "10px",
  };
});

export default Container;
