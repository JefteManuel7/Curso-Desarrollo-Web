/* Operadores de comparación

mayor que, menor que: x >y ; x<y
mayor o igual, menor o igual que: x >= y; x <= y
igual: x == y
diferente de: !=

Al utilizar estos operadores, su resultado es de tipo booleano
 */

console.log(2 >= 1)

console.log(4 != 1)

console.log(4 != 4)

console.log(0 == '')

console.log(0 == ' ')

console.log(0 === '')


console.log('a' > 'c')

console.log('a' < 'b')


let a = 0
console.log(Boolean(a))

let b = ' 0'
console.log(Boolean(b))

console.log(a == b)

console.log(a === b)



console.log(undefined == null);
console.log(undefined === null);


console.log(NaN == NaN);
console.log(NaN === NaN);


console.log('Hola'.length);

console.log('Hola'.length == 'Mundo'.length);
console.log('Hola'.length <= 'Mundo'.length);
console.log('Hola'.length >= 'Mundo'.length);
console.log('Hola'.length != 'Mundo'.length);
console.log('Hola'.length < 'Mundo'.length);

// Operador && (and)
const check = 4 > 3 && 10 > 5;
console.log('Es:', check);

// Operador or
const check4 = 4 > 3 || 10 > 5;
console.log('Es:', check4);


const check5 = 4 > 3 || 10 > 5;
console.log('Es:', check5);


console.log();

console.log();

console.log();

console.log();

console.log();
