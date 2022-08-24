import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

export const Card = ({country}) => {

  return (
    <div className="card__country">
        <img className='card__country__img' src={country.flags} alt=''/>
        <h1>{country.name}</h1>
        <h1>{country.continent}</h1>  
        <button className='card__country__button'> <Link className='card__country__link' to={`/detailCountry/${country.id}`}>Show more</Link></button>   
    </div>
  )
}

