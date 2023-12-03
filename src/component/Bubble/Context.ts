import React from "react";

type LangType = "en" | "ar" | "unknown";
type DirectionType = "ltr" | "rtl" | "unknown";

type ContextType = {
  accentColor?: string;
  lang?: LangType;
  direction?: DirectionType;
};

const defaultValue: ContextType = {
  accentColor: "rgb(46, 71, 93)",
  lang: "en",
  direction: "ltr",
};

const Context = React.createContext(defaultValue);

export default Context;
export { defaultValue };
export type { ContextType, LangType, DirectionType };
