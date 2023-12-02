import type { LangType, DirectionType } from "./Context";

const defualtLang = "en";
const validLangs = ["en", "ar"];
const rtlLangs = ["ar"];

function getLanguageCode(input: string): LangType {
  const firstTwoLetters = input.substring(0, 2);
  if (validLangs.includes(firstTwoLetters)) {
    return firstTwoLetters as LangType;
  }
  return defualtLang;
}

const getDirectionFromLanguage = (lang: string): DirectionType => {
  return rtlLangs.includes(lang) ? "rtl" : "ltr";
};

export { getLanguageCode, getDirectionFromLanguage };
export type { DirectionType };
