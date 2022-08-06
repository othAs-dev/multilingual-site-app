import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const supportedLanguage = ["FR", "EN", "ES", "AR"];
  let browserLang = navigator.language.slice(0, 2).toUpperCase();
  const [lang, setLang] = useState(browserLang);
  const toogleLang = (changeLang) => {
    setLang(changeLang);
  };
  if (supportedLanguage.indexOf(browserLang) === -1) {
    console.log("not supported");
    browserLang = "EN";
  }
  console.log(lang);
  return (
    <Context.Provider value={{ lang, toogleLang }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
