import React from 'react'

const Banner = ({title, subtitle, backImage}) => {
  return (
    <div className="banner" id="home" style={{backgroundImage: `url(${backImage})`}}>
      <div className="overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Banner