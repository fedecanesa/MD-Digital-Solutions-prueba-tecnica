import React from 'react';

import Header from './Components/Header.js'
import Nav from './Components/Nav';
import Table from './Components/R2.js';
import Web from './Components/R3.js'
//import Mensaje from './Components/Mensaje.js';
import Footer from './Components/Footer.js';

function App() {

  //Obtener la fecha para el footer
  const date = new Date().getFullYear();


  return (
    <div className="container">
      <Header 
        title= 'Prueba Técnica desarrollo frontend | Federico Canesa'
      />
      <Nav/>
      {/* <Mensaje /> */}
      <Table />
      <Web/>
      <Footer 
        date = {date}
      /> 
    </div>
  )}

export default App;