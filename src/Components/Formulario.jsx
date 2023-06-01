import React from 'react'

const Formulario = ({data, setData, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <label className='label'>Tu nombre:</label>
        <input type="text" onChange={(e) => setData({...data, name: e.target.value})}/>

        <label className='label'>Una cancion con + de 6 letras:</label>
        <input type="text" onChange={(e) => setData((prevData) => ({...prevData, song: e.target.value}))}/>

        <label className='label'>La canta:</label>
        <input type="text" onChange={(e) => setData((prevData) => ({...prevData, artist: e.target.value}))}/>

        <button className='button'>ENVIAR</button>
    </form>
  )
}

export default Formulario;