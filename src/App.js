// src/App.js
import React from 'react';
import NavbarComponent from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div>
      <NavbarComponent />
      <ItemListContainer greeting="¡Bienvenido a LossTime!" />
    </div>
  );
}

export default App;
