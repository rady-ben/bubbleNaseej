import React from "react";
import Bubble from "@/component/Bubble";
import FaceIcon from "@mui/icons-material/Face";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E1E1E1",
      }}
    >
      <Bubble
        title="Naseej"
        icon={<FaceIcon />}
        accentColor="rgb(46, 71, 93)"
      />
    </main>
  );
}
