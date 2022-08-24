import React from 'react'; //hacer logia de componente
import ReactDOM from 'react-dom'; //insertarlo en el html y el DOM
import './index.css'; //
import App from './App'; //trayendo componente app que es el pincipal
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom' //hacer todo el sistema de ruteo
import { Provider } from 'react-redux'; //contacto con el store 
import  store  from './redux/store' //propiedad store que necesita provider, solo se necesita importar acá

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// el render tiene dos propiedades 
// componente principal y segundo el elemento en el cual se va a hacer la conexión del HTML

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//el provider deja disponible a todos los componentes al store
