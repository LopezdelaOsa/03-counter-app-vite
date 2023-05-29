
//rafc

/*
import {Fragment} from 'react'

export const PrimeraApp = () => {
    return ( <Fragment>
        <h2>Primera APP de Raúl</h2>
        <p>Esto es el subtítulo</p>
        </Fragment> )
}*/

//const nuevoMensaje = [1,2,3,4]
const nuevoMensaje = {
    mensaje: 'Hola a todos',
    titulo: 'Raul'
}

const resultado = (a, b) => {
    return ('Esto lo que debe salir' + a + b)
}

export const PrimeraApp = () => {

    return ( <>
    {/*        <code> { JSON.stringify(nuevoMensaje) }</code>    */}
        <h1>{resultado(7,3)}</h1>
        <p>Esto es el subtitulo, sin fragmentos</p>
        </> )
}