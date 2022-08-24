import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav';
import "./DetailCountry.css"

export default function DetailCountry() {
  const [country, setCountry] = useState([]);

  let {id} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:3001/countries/${id}`).then((respuesta) =>
     respuesta.json().then((body)=>{
      setCountry(body)
     })
    );
  },[])
  
  
  return (
    <div>
      <div className='navbar'>
      <Nav />
      </div>
      <div className='containerDetail'>

        <div className='cardDetail'>
        <div className='containerImage'>
        <img src={country.flags} alt='' className='cardImage'/>
        <div/>
        <div className='containerDataDetail'>

        </div>
        <h1 className='titleDetail'>Name: {country.name}</h1>
        <h1 className='continentDetal'>Continent: {country.continent}</h1>
        <h1 className='temperamentDetail'>Capital: {country.capital}</h1>
        <h1 className='weigthDetail'>SubRegion: {country.subregion}</h1>
        <h1 className='weigthDetail'>Área: {country.area}</h1>
        <h1 className='weigthDetail'>Population: {country.population}</h1>
    </div>

        </div>
      DetailCountry
       
      </div>  
      
    </div>
  )
}
