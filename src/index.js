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
          <div style={{ overflow: 'auto', height: '300px', display: 'flex', alignItems:"center",flexDirection: 'column'}} id="contenedorITems" > 
          <Item bgColor="#A3E5B7" titulo="Finanzas"/>
          <Item bgColor="#D8D8D8" titulo="Iso 901"/>
          <Item bgColor="#D8D8D8" titulo="Cosoerm"/>
          <Item bgColor="#D8D8D8" titulo="LFTA Y ACTIVOS"/>
          <Item bgColor="#D8D8D8" titulo="Cuentas contables"/>
          <Item bgColor="#D8D8D8" titulo="Cuentas contables"/>
          <Item bgColor="#D8D8D8" titulo="Cuentas contables"/>
          <Item bgColor="#D8D8D8" titulo="Cuentas contables"/>
          <Item bgColor="#D8D8D8" titulo="Cuentas contables"/>
          <Item bgColor="#D8D8D8" titulo="Cuentas contables"/>
          <Item bgColor="#D8D8D8" titulo="Cuentas contables"/>
          <Item bgColor="#D8D8D8" titulo="Cuentas contables"/>
          </div>
        </div> 
        
   
      </ContenedorPrincipal>
      

  </React.StrictMode>

);

reportWebVitals();
