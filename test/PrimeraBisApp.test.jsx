import { render } from "@testing-library/react"
import { PrimeraBisApp } from "../src/PrimeraBisApp"


describe ('Pruebas en <PrimeraBisAPP />', () => {

    // test('Debe coincidir (hacer match) con el snapshot', () => { 

    //     const titulo = 'La senda del tiempo'
    //     const {container} = render( <PrimeraBisApp titulo={titulo} /> )

    //     //console.log(container)
    //     expect(container).toMatchSnapshot()
    //  })

    test('Debe mostrar el titulo en un <h1>', () => { 
        const titulo = 'La senda del tiempo'
        const {container, getByText, getByTestId} = render( <PrimeraBisApp titulo={titulo} /> )

        expect(getByText(titulo)).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // console.log(h1.innerHTML)
        // expect(h1.innerHTML).toContain(titulo)

        expect(getByTestId('test-titulo')).toBeTruthy()
        expect(getByTestId('test-titulo').innerHTML).toBe(titulo) // .toContain
     })

     test('Debe mostrar el subtitulo enviado por props', () => {
        const titulo = 'La senda del tiempo'
        const subTitulo = 'Celtas Cortos'
        {
            /*const { getByText} = render( <PrimeraBisApp titulo={titulo} subTitulo={subTitulo} /> )

        expect(getByText(subTitulo)).toBeTruthy() */ }
        const { getAllByText} = render( <PrimeraBisApp titulo={titulo} subTitulo={subTitulo} /> )
        expect(getAllByText(subTitulo).length).toBe(2)
      })

}) 