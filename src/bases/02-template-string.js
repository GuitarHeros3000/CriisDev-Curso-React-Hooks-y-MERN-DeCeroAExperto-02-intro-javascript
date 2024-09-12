
const name   = 'Fernando';
const lastName = 'Herrera';


// const fullName = name + ' ' + lastName;
const fullName = `${ name } ${ lastName }`;

console.log( fullName );


function getGreet(name) {
    return 'Hola ' + name;
}

console.log( `Este es un texto: ${ getGreet( name ) }  ` );
