import React from "react";
import Contenu from "./Composants/Contenu/Contenu";
import ToggleLangs from "./Composants/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function Tp6_react() {
  return (
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
  );
}

export default Tp6_react;
