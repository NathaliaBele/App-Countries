import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import Nav from "./Nav";
import {  useDispatch, useSelector } from 'react-redux'
import { getCountriesAction, getNumberPage, getPage, orderByAsc} from "../redux/reducers/countriesDucks";
import './home.css';


export default function Home() {
  const [currentPage, setCurrentPage] = useState(undefined);
  const dispatch = useDispatch();
  const state = useSelector(state=> state);
  const [select, setSelect] = useState("")

  useEffect(() => {
    dispatch(getCountriesAction())   
  }, []) 
  
  useEffect(() => {
    dispatch(getNumberPage(state.countries))
    if(currentPage === undefined){setCurrentPage(0)}
    dispatch( getPage(currentPage === undefined ?0 : currentPage, state.countries));
  }, [state.countries])
  
;

  useEffect(() => {
    
    dispatch( getPage(currentPage === undefined ?0 : currentPage, state.countries));
  }, [currentPage]);

useEffect(()=>{
dispatch(orderByAsc(state.countries, select ))
dispatch( getPage(currentPage === undefined ?0 : currentPage, state.countries));
},[select])


  return (
    <div className='home'>
      <div className="navbar">
      <Nav />
      </div>
      
      <div className="paginated">
      {state.countriesPage.length > 0 &&
        state.countriesPage.map((b, key) => {
          return <button key={key +  Date.now}onClick={() =>setCurrentPage(b)}>{b + 1}</button>;
        })}
      </div>
     
      <div className="ordenamiento">
      <label>
        Ordernar paises por
        
      </label>
      <select
      defaultValue={''}
      onChange={(e) =>{
        setSelect(e.target.value)
      }}  
      >
      <option value={''} >Selección</option>
      <option value={'País ascendente'}>A-Z</option>
      <option value={'País descendente'}>Z-A</option>
      </select>
      </div>  
      <div className="container__cards">
      {state.tenCountries.length > 0 && state.tenCountries[0] !== undefined ? (
        state.tenCountries.map((ctr, key) => ( 
          <Card key={key + Date.now} country={ctr} />
        
         
        ))
      ) : (
        <h1>Loading...</h1>
      )}

      </div>
      
      
    </div>
  );
}
