import React from "react";
import Bubble from "@/component/Bubble";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Bubble />
    </main>
  );
}
