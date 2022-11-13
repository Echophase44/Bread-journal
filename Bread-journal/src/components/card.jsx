import React from 'react'
import WheatIcon from "../../public/images/wheat.png"
import Bread from "../../public/images/sourdough.jpg"

function Card (){
  return (
    <div className='card--container'>
      <div className='card--imgContainer'>
        <img className='card--img' src= { Bread }  alt="Wheat Icon" />
      </div>
      <div className='card--contentContainer'>
        <div className='card--titleContent'>
          <img className='card--wheatIcon' src={ WheatIcon} alt="" />
          <h3>Sourdough</h3>
          <span>View full recipe</span>
        </div>
        <h1 className='card--breadType'>Dutch Oven Sourdough</h1>
        <p>Cooking Time</p>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, odit atque voluptatum pariatur a ad est! Dignissimos eaque sapiente dolores beatae eos laboriosam et debitis rem, vitae, reprehenderit, facere aliquid!</p>
      </div>
    </div>
  )
}

export default Card;