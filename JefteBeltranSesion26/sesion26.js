console.log('Hola Mundo');
//alert('Hola mundo');
console.log('Prueba');


/* */
let x = 2, y= 3;
console.log('El resultado es: ', y-x)

/* OPERADORES MATEMATICOS 
suma: +
resta: -
multiplicacion: *
division: /
resto: %
potenciacion: **  */

let numOne = 4
let numTwo = 6

let sum = numOne + numTwo;
console.log(sum)

let diff = numOne - numTwo;

console.log(diff);

let multi = numOne * numTwo;
console.log(multi);

let remainder = numOne % numTwo;
console.log(remainder);

let powerof = numOne ** numTwo;
console.log(powerof);


//alert( 4 ** 2 - 4 ** (1/2));


const PI = 3.14
let radius = 100

// formula para calcular el area//
const areaCircle = PI * radius ** 2
console.log(`El valor del área del circulo es ${areaCircle}`);


/* CONCATENACION DE CADENAS CON EL OPERADOR BINARIO +*/
let str = 'my' + ' ' + 'string';
console.log(str);

console.log(2 + 2 + '1');

/* CONVERSIÓN NÚMERICA, CON EL OPERADOR UNARIO + */
let z = 1, w = 2;
console.log(z + w);


let zz = '1', ww = '-2';
console.log(zz + ww);

let suma = zz + ww;
console.log(suma);
console.log(typeof suma);

console.log('Resultado de la suma', +zz + +w);


/* jerarquia de operadores */
let compute = 2 ** 2 + 1 - 5 * 3;
console.log(`El resultado de orden de operacion es: ${compute}`);

let a=2, b= 3;
let task = 3 - 4 *(a = b + 1);
console.log(task);


let n1, n2, n3;
n1 = n2 = n3 = 3 + 4;
console.log(n1, n2, n3);

/* MODIFICACIONES */
let n = 3
n = n + 5
n = n * 2
n += 5
n *= 2
console.log(n);

let num1 = 2;
num1 *= 3 + 5;
console.log(num1);



/* Incremento/Decremento */
let counter = 2;
counter++;
console.log(counter);

counter--;
console.log(counter);



let num3 = (1 + 2, 3 + 4);
console.log(num3);


