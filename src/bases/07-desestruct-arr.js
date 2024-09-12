
const characters = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = characters;
console.log(p3);

const returnArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);

// Tarea de desestructuración
// 1. El primer valor del arr se llamará name
// 2. Se llamará setName
const usedState = (value) => {
    return [value, () => { console.log('Hola Mundo'); }];
}

const [name, setName] = usedState('Goku');

console.log(name);
setName();
