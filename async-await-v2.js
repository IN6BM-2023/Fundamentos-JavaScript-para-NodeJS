//Async - Await

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
}, {
    id: 4,
    nombre: 'Paco'
}
];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 500
}]


const getEmpleado = async (id) => {
    try {
        const empleadoDB = empleados.find((e) => e.id === id);
        if (!empleadoDB) {
            throw new Error(`No existe el trabajador ${id.nombre} en la DB`);
        } else {
            return (empleadoDB);
        }
    } catch (error) {
        return error;
    }
}

const getSalario = async (empleado) => {
    const salarioDB = salarios.find((s) => s.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No existe salario para el trabajador id ${empleado.id} en la DB`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}


let getInfoUsuario = async(id) => {
    try {
        let trabajador = await getEmpleado(id);
        let resp = await getSalario(trabajador);
        return `El trabajador ${ resp.nombre } tiene un salario de ${ resp.salario }`
    } catch (error) { 
        console.log(error);
    }
}


let buscar = 4;

getInfoUsuario( buscar )
    .then( msg => { 
        console.log( msg );
    } )
    .catch( err => {
        console.log(err);
    } )