import { render, screen } from "@testing-library/react"
import { PrimeraBisApp } from "../src/PrimeraBisApp"


describe ('Pruebas en <PrimeraBisApp />', () => {

    const titulo = 'La Senda del Tiempo'
    const subTitulo = 'Celtas Cortos'

    test('Debe coincidir (hacer match) con el snapshot', () => { 
        const {contanier} = render (<PrimeraBisApp titulo={titulo} />)
        expect (contanier).toMatchSnapshot()
    })

    test('Debe mostrar literalmente "La Senda del Tiempo"', () => { 
        
        render (<PrimeraBisApp titulo={titulo} />)
        //screen.debug()
         expect(screen.getByText(titulo)).toBeTruthy()

    })

    test('Debe mostrar el titulo en una etiqueta h1', () => { 
        render (<PrimeraBisApp titulo={titulo} />)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(titulo)

    })

    test('Debe mostrar el subtitulo enviado por props', () => { 
        render (<PrimeraBisApp titulo={titulo} subTitulo={subTitulo} />)
        expect(screen.getAllByText(subTitulo).length).toBe(2)

    })



}) 