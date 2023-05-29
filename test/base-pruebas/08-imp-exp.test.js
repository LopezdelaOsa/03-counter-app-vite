import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp"
import heroes from '../../src/data/heroes'

describe('Pruebas en 08-imp-exp', () => { 

    test ('La funcion getHeroeById debe devolver un heroe segun la ID', () => {
        const id = 1
        const hero = getHeroeById (id)
        //console.log(hero)
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test ('Si no existe el id, la funcion getHeroeById debe devolver undefined', () => {
        const id = 53
        const hero = getHeroeById (id)
        //console.log(hero)
        expect(hero).toBeFalsy()
    })

    //Tarea:
    //Debe devolver un array con los héroes de DC
    //Length === 3
    //toEqual al array filtrado
    test ('getHeroesByOwner devuelve array con los de DC', () => {
        const propietario = 'DC'
        const hero = getHeroesByOwner(propietario)

        console.log(hero)
        //expect(heroes).toHaveLength(3)
        expect(hero.length).toBe(3)
        /*expect(hero).toEqual(            
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        )*/

        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === propietario ))

    })


    //Debe devolver un array con los héroes de Marvel
    //length === 2
    test ('Devolver array con los de Marvel', () => {
        const propietario = 'Marvel'
        const hero = getHeroesByOwner(propietario)

        expect(hero).toHaveLength(2)
        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === propietario ))

    })

 })