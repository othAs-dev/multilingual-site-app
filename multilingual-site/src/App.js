import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangue from "./Components/ToggleLangs/ToggleLangue";
import ContextProvider from "./context/LangContext";
function App() {
  return (
    <ContextProvider>
      <Contenu />
      <ToggleLangue />
    </ContextProvider>
  );
}

export default App;
