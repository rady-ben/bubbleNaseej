type LangType = "en" | "ar";

function getLanguageCode(input: string): LangType {
  const validLangs = ["en", "ar"];
  const firstTwoLetters = input.substring(0, 2);
  if (validLangs.includes(firstTwoLetters)) {
    return firstTwoLetters as LangType;
  }
  return "en";
}

export default getLanguageCode;
