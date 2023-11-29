"use client";
import React, { useState } from "react";
import Button from "./Button";

export default function Bubble() {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  return (
    <div>
      <Button isOpened={isOpened} onClick={toggle} />
    </div>
  );
}
