import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('Pruebas en 05-funciones', () => { 

    test('La funcion getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()
        console.log(user)

        expect(testUser).toEqual(user) 


    })

    test('La funcion getUsuarioActivo debe devolver un objeto', () => {
        const name = 'RAUL'
        const user = getUsuarioActivo(name)
        console.log(user)

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })


    } )

 })