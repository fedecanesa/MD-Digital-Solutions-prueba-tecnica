import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Nav from './Components/Nav';
import Wellcome from './Components/Wellcome';
import Table from './Components/R2/R2';
import Web from './Components/R3/R3';
import Users from './Components/R4/Users'; 
import Footer from './Components/Footer.js';


function App() {


  //Obtener la fecha para el footer
  const date = new Date().getFullYear();

  return (

    <Router>
      <Header 
        title= 'Prueba Técnica desarrollo frontend | Federico Canesa'
      />
      <Nav />
        <Switch>
          <Route exact path="/"><Wellcome /></Route>
          <Route exact path="/R2"><Table /></Route>
          <Route exact path="/R3"><Web /></Route>
          <Route exact path="/R4"><Users /></Route>
        </Switch>

      <Footer 
        date = {date}
      /> 
    </Router>
  )}

export default App;