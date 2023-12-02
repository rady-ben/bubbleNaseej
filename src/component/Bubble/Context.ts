import React from "react";

type ContextType = {
  accentColor?: string;
  lang?: string;
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
