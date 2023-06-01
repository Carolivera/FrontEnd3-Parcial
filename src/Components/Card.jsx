import React from "react";

const Card = ({data}) => {
  
  return( 
    <div className='tarjeta' >
        <h3>La cancion que elegiste se llama {data.song}</h3>
        <h2>La canta {data.artist}</h2>
    </div>
  )
};


export default Card;