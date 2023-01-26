//Callbacks
//Es una función que se ejecuta en un tiempo estimado
// es mandar una función dentro de otra

// setTimeout ( function() {
//     console.log('Hola Mundo');
// }, 5000 );

// setTimeout( () => {
//     console.log('Hola Kinal, función de flecha')
// }, 2000 );

const getUsuarioById = ( id, callback ) => {

    const usuario = {
        id ,
        nombre: 'Victor'
    }

    if (id === 20) {
        callback(`El usuario con id: ${ id }, no exite en la base de datos`)
    } else {
        callback(null, usuario);
    }

};


getUsuarioById( 23, ( err,  usuario ) => {

    if (err) {
        return console.log(err);
    }
    console.log('El usuario esta en DB', usuario);
} );

