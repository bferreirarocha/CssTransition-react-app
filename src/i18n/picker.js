import en from "./en.json";
import it from "./it.json";

export const translate = (lang, key, subKey) => {
  let language = en;
  if (lang !== null && lang === "it") {
    language = it;
  }
  return language[key][subKey];
};
