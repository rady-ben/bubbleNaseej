import styled from "@emotion/styled";

type TextVariant = "title" | "message" | "response";

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  textVariant?: TextVariant;
};

const Text = styled.span<TextProps>(({ textVariant }) => {
  if (textVariant === "title") {
    return {
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "Helvetica",
      color: "#fff",
    };
  }

  return {
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Helvetica",
    color: "rgb(66, 91, 118)",
  };
});

export default Text;
