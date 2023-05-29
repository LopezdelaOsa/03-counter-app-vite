import { fireEvent, render, screen } from "@testing-library/react"
import {CounterApp} from  "../src/CounterApp"

describe('Pruebas en CounterApp', () => { 

    const valorInicial = 100

    test('Coincidencia con snapshot', () => { 
        const {container} = render(<CounterApp value={valorInicial}/>)
        expect(container).toMatchSnapshot()
    })

    test('Mostrar valor inicial: 100', () => { 
        render (<CounterApp value={valorInicial} />)
        expect(screen.getByText(100)).toBeTruthy()
        //expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')
    })

    test('Aumento con boton +1', () => { 
        render (<CounterApp value={valorInicial} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('101')).toBeTruthy()
    })

    test('Disminuir con boton +11', () => { 
        render (<CounterApp value={valorInicial} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('99')).toBeTruthy()
    })

    test('Iniciar el valor original', () => { 
        render (<CounterApp value={valorInicial} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))

        // fireEvent.click(screen.getByText('Inicio'))
        // expect(screen.getByText(valorInicial)).toBeTruthy()
        fireEvent.click( screen.getByRole('button', {name: 'boton-reset'}) )
        expect(screen.getByText(valorInicial)).toBeTruthy()
    })

 })