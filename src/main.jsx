import React from 'react'
import ReactDOM from 'react-dom/client' 
//import {App} from './HolaTodosApp'
//import App from './HolaTodosApp' (sin llaves si el export es 'default' a todo el fichero)
//import { HolaTodosApp } from './HolaTodosApp'
//import { PrimeraApp } from './PrimeraApp'
import { PrimeraBisApp } from './PrimeraBisApp'
import './estilos.css'
import { CounterApp } from './CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<PrimeraApp />*/}
        {/*<PrimeraBisApp titulo="La senda del tiempo" />*/}
        <CounterApp value={100} />
    </React.StrictMode>
)