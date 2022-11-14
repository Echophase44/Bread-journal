import React from 'react'
import WheatIcon from "../../public/images/wheat.png"

function Card (props){
  return ( 
    <div className='card--container'>
      <div className='card--imgContainer'>
        {props.item.dairyFree === true && <div className='card--badge'>Dairy Free</div>}
        <img className='card--img' src= { props.item.breadImg }  alt="Bread" />
      </div>
      <div className='card--contentContainer'>
        <div className='card--titleContent'>
          <img className='card--wheatIcon' src={ WheatIcon } alt="Wheat Icon" />
          <h3>{props.item.type}</h3>
          <span className='card--recipe'>View full recipe</span>
        </div>
        <h1 className='card--breadTitle'>{props.item.title}</h1>
        <p className='card--cookingTime'>Cooking Time: {props.item.cookTime}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Card;