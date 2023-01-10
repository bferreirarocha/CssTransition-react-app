import en from "./en.json";

export const translate = (key, subKey) => {
  let language = en;
  return language[key][subKey];
};
