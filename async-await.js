//Async - Await

//Al agregarle async a la función devuelve una promesa

// let getNombre =  async() => {
//     return 'Victor Cancinos';
// }

// getNombre().then( () => {
//     console.log('Todo OK')
// } )



//Promesa

let getNombre = () => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            resolve('Victor');
        }, 3000 );

    } );

}


let saludar = async()  => {

    let nombreDeLaPersonaASaludar = await getNombre();

    return `Hola ${ nombreDeLaPersonaASaludar }`

}


saludar().then( (msg) => {
    console.log(`Buenos dias, este es un saludo cordial.... ${ msg }`);
} )