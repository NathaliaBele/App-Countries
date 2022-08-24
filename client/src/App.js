import React from 'react'
import styles from "./App.module.css"
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import CreatedActivity from './components/CreatedActivity'
import DetailCountry from './components/DetailCountry'
import Home from './components/Home'
import Landing from './components/Landing'
import Nav from './components/Nav'
// import SearchBar from './components/SearchBar'
// import Nav from './components/Nav'


//Todos los componetntes que querramos renderizar.
//vamos a tener siempre todo nuestro ruteo.


//este es el componente que los renderice. el de abajo.
function App() {

  return (
    <BrowserRouter>
           <div>

          <Route exact path='/' component={Landing} />
          <Route path='/home' component={Home} />
          <Route path='/detailCountry/:id' component={DetailCountry} />
          <Route path='/CreatedActivity' component={CreatedActivity} />
        </div>


    </BrowserRouter>

  );
}

export default App;
