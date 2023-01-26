let nombre = 'Victor';
let apellido = 'Cancinos';

// Concatenación al estilo Java
console.log('Hola mi nombre es ' +  nombre + ' y mi apellido es ' + apellido);

//Con templates literales en JavaScript
console.log( `Hola mi nombre es ${ nombre } y mi apellido es ${ apellido }` );

//Lo mismo pero en una funcion
function getNombreCompleto() {
    return `Nombre: ${ nombre } ${ apellido }`;
}
console.log(`El nombre del alumno es: ${getNombreCompleto()}`);