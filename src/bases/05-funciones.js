
// Funciones en JS

// const greet = function (name) {
//     return `Hola, ${name}`;
// }

const greet2 = (name) => {
    return `Hola, ${name}`;
}

const greet3 = (name) => `Hola, ${name}`;

const greet4 = () => `Hola Mundo`;

// console.log(greet('Cristian'));
console.log(greet2('CriisDev'));
console.log(greet3('Criis'));
console.log(greet4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'GuitaHeros3000',
});

const user = getUser();
console.log(user);


// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Realizar pruebas

const getUserActive = (name) => ({
        uid: 'ABC567',
        username: name,
});

const userActive = getUserActive('Cristian');
console.log(userActive);
