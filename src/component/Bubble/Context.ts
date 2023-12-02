import React from "react";

type LangType = "en" | "ar";

type ContextType = {
  accentColor?: string;
  lang?: LangType;
  direction?: string;
};

const defaultValue: ContextType = {
  accentColor: "rgb(46, 71, 93)",
  lang: "en",
  direction: "ltr",
};

const Context = React.createContext(defaultValue);

export default Context;
export { defaultValue };
export type { ContextType, LangType };
