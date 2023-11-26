// Tp6_react.js
import React from 'react';
import Contenu from './Composants/Contenu/Contenu';
import ToggleLangs from './Composants/ToggleLangs/ToggleLangs';
import ContextProvider from './context/langContext';


function Tp6_react() {

  return (
    <div>
      
      <ContextProvider>
        <ToggleLangs />
        <Contenu />
      </ContextProvider>
    </div>
  );
}

export default Tp6_react;
