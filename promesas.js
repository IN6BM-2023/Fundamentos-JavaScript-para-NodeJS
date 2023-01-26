//Promesas

//db con arrays
let empleados = [{
    id: 1,
    nombre: 'Victor'
}, {
    id: 2,
    nombre: 'Sofia'
}, {
    id: 3,
    nombre: 'Josue'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 500
}]

//Funcion obtener empleados por id

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleadoDB = empleados.find((e) => e.id === id);

        if (!empleadoDB) {
            reject(`No existe trabajador con el id ${id} en la DB`);
        } else {
            resolve(empleadoDB);
        }

    })

}


const getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        const salarioDB = salarios.find((s) => s.id === empleado.id);

        if (!salarioDB) {
            reject(`No existe trabajador con el id ${id} en la DB`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }

    })

}





getEmpleado(2)
    .then(e => {
        return getSalario(e);
    })
    .then( resp => {
        console.log(`El salario de ${ resp.nombre } es de: ${ resp.salario }`);
    })
    .catch( err => {
        console.log(err);
    })