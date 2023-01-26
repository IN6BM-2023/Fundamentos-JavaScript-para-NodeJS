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

//Callbacks

const getEmpleado = (id, callback) => {

    const empleadoDB = empleados.find( (e) => e.id === id );

    if(!empleadoDB){
        callback(`No existe trabajador con el id ${ id } en la DB`);
    } else {
        callback(null, empleadoDB);
    }

}


const getSalario = ( empleado, callback  ) => {

    const salarioDB = salarios.find( (s) => s.id === empleado.id );

    if(!salarioDB){
        callback(`El usuario con el id: ${ empleado.id } y su nombre es: ${ empleado.nombre }, no existe, ni tiene salario`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}






















getEmpleado( 3, ( err, empleado ) => {

    if(err) {
        return console.log(err);
    }

    getSalario(empleado, ( err, res ) => {

        if(err) {
            return console.log(err);
        }

        console.log(`El salario de ${ res.nombre } es de Q.${res.salario}`);

    }  )


}  )