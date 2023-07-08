import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Buscador } from './Components/buscador';
import {Contenedor} from './Components/Contenedor';
import {ContenedorPrincipal} from './Components/ContenedorPrincipal';
import {CuerpoParteSuperior} from './Components/CuerpoParteSuperior';
import {Item} from './Components/Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Buscador/>
      
      <ContenedorPrincipal>
       
        <Contenedor/>

       <div class ="cuadro">
          <CuerpoParteSuperior/>
          <br/>
          <Item bgColor="#A3E5B7" titulo="Finanzas"/>
        </div> 
        
   
      </ContenedorPrincipal>
      

  </React.StrictMode>

);

reportWebVitals();
