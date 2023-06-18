import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Buscador } from './Components/buscador';
import {Contenedor} from './Components/Contenedor'
import {ContenedorPrincipal} from './Components/ContenedorPrincipal'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Buscador/>
      
      <Contenedor/>

  </React.StrictMode>

);

reportWebVitals();
