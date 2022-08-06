import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import ArabicFlag from "../../assets/ae.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/LangContext";
const ToggleLangue = () => {
  const { toogleLang } = useContext(Context);
  console.log(toogleLang);

  return (
    <div className="container-langs">
      <img onClick={() => toogleLang("FR")} src={FrenchFlag} alt="" />
      <img onClick={() => toogleLang("EN")} src={EnglishFlag} alt="" />
      <img onClick={() => toogleLang("ES")} src={SpanishFlag} alt="" />
      <img onClick={() => toogleLang("AR")} src={ArabicFlag} alt="" />
    </div>
  );
};

export default ToggleLangue;
