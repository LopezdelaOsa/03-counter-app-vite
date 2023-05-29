import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"


describe('Pruebas en 09-promesas', () => { 

    test('La funcion getHeroeByIdAsync debe devolver un heroe', (done) => {

        const id = 1
        getHeroeByIdAsync(id)
            .then (hero => {
                expect(hero).toEqual(  {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done()
            })
    })


    test('Si el heroe no existe, la funcion getHeroeByIdAsync debe devolver un error', (done) => {

        const id = 53
        getHeroeByIdAsync(id)
            .then (hero => {
                expect(hero).toBeFalsy()
                done()
            })
            .catch(error => {
                //console.log(error)
                expect(error).toBe(`No se pudo encontrar el héroe: ${id}`)
                done()
            })
    })

})