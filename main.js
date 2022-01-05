
let inscripcion = [
    {id: 1, nombre: 'Andres', curso: 'Classroom', edad: 23},
    {id: 2, nombre: 'Marcela', curso: 'Meet', edad: 45},
    {id: 3, nombre: 'Carolina', curso: 'Drive', edad: 38},
    {id: 4, nombre: 'Juan', curso: 'Forms', edad: 56},
    {id: 5, nombre: 'Matias', curso: 'KEep', edad: 32},
]

// ordenamiento de menor a mayor
// const alumnos_ordenados = inscripcion.sort((alum1, alum2) => {
//     return alum1.edad - alum2.edad;
// })

//ordenamiento por ordem alfabetico
const alumnos_ordenados = inscripcion.sort((alum1, alum2) => {
    return (alum1.nombre < alum2.nombre) ? - 1 : 1
})

console.log(inscripcion)
