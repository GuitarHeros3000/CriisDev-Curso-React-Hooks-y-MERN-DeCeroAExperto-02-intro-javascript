
// Desestructuración
// Asignación Desestructurante

// La nueva versión de React (17). Ahora las palabras "use" y "set" al principio estan reservadas y solo se pueden usar en lugares específicos.
// La solución es cambiar el nombre a cualquier otro que no tenga "use" o "set" al principio.

const person = {
    name: 'Cristian',
    edad: 23,
    code: 'GuitarHeros3000'
};

// const { age, code, name, } = person;
 
// console.log( name );
// console.log( age );
// console.log( code );


const usedContext = ({ code, name, age, range = 'Capitán' }) => {


    // console.log( name, age, range );
    
    return {
        nameCode: code,
        years: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { nameCode, years, latlng: { lat, lng } } = usedContext( person );

console.log(nameCode, years);
console.log( lat, lng );

