import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Buscador } from './Components/buscador';
import {Contenedor} from './Components/Contenedor';
import {ContenedorPrincipal} from './Components/ContenedorPrincipal';
import {Cuerpo} from './Components/Cuerpo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Buscador/>
      
      <ContenedorPrincipal>
        <Contenedor/>
        
        <Cuerpo/>
   
      </ContenedorPrincipal>
      

  </React.StrictMode>

);

reportWebVitals();
