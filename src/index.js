import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Components/buscador'
import { Buscador } from './Components/buscador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Buscador/>
  </React.StrictMode>
  
);

reportWebVitals();
