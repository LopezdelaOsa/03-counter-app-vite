import { getImagen } from '../../src/base-pruebas/11-async-await'


describe('Pruebas en 11-async-await', () => { 

    test('La funcion getImagen debe devolver una URL de la imagen', async() => {

        const url = await getImagen()
        //console.log(url)
        expect (typeof url).toBe('string')

    })

    test('Ahora getImagen debe devolver el texto literal: No se encontro la imagen ', async() => {

        const url = await getImagen()
        //console.log(url)
        expect ( url).toBe('No se encontro la imagen')

    })
 })