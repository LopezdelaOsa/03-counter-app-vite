
describe('Pruebas en <ComponenteDemo />', () => {

    test('Esta prueba no debe fallar', () => {

        /*if ( 0 === 1) {
            throw new Error('No puede ser cero')
        }*/
    
        //1. Inicializaci�n
        const mensaje1 = 'Hola a todos'
    
        //2. Est�mulo
        const mensaje2 = mensaje1.trim()
    
        //3. Observar comportamiento
        expect( mensaje1 ).toBe( mensaje2 )

    })    

})