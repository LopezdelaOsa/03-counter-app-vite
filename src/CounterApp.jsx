
import {useState} from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ( {value} ) => {
    const [counter, setCounter] = useState (value)

    /*function handleAdd (event) {*/
    const handleAdd = (event) => {
        /*console.log(event)
        value += 1
        console.log (value)*/

        //setCounter(counter + 1)
        setCounter ( (c) => c + 1 )
    }

    const handleSubtract = (event) => {
        setCounter (counter - 1)
    }

    const handleReset = (event) => setCounter(value)

    return (
        <>
            <h1>Counter - App</h1>
            <h2>{ counter }</h2>
            {/*<button onClick={ (event) => handleAdd(event) }>*/}
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubtract }> -1 </button>
            <button aria-label='boton-reset' onClick={ handleReset }> Inicio </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}