import React from 'react'
import "./background.scss"
export const Background = ({ data }) => {
  
  return (
    <div className="background">
      <img className="bg-image" src={`../assets/backgrounds/${data.weather[0].icon}.gif`} alt="weather background" autoPlay={true} loop />
    </div>
  )
}
