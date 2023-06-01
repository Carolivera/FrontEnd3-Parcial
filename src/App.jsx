import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Formulario from './Components/Formulario'

function App() {
  const [data, setData] = useState({
    name: '',
    song: '',
    artist: ''
  })

  const [show, setShow] = useState(false)

  const validarNombre = (nombreUsuario) => {
    const nombreSinEspacio = nombreUsuario.trim();
    if (nombreSinEspacio.length >= 3){
      return true;
    }
    else {
      return false;
    }
  }

  const validarCancion = (nombreCancion) => {
    if (nombreCancion.length >= 6){
      return true;
    }
    else {
      return false;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const nombreValido = validarNombre(data.name);
    const cancionValida = validarCancion(data.song);

    if (nombreValido && cancionValida){
      console.log("La tarjeta se creo con exito");
      setShow(true)      
    }
    else{
      alert("Por favor chequea que la información sea correcta")
    }
  }

  return (
    <>
      <div>
      <h1>Te damos la bienvenida, {data.name}!</h1>
        <Formulario data={data} setData={setData} handleSubmit={handleSubmit}/>
        {show && <Card data={data} />}
      </div>
      
    </>
  )
}

export default App;