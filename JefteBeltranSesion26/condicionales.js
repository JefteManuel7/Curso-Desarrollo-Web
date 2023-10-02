// ESTRUCTURAS DE DECISION O CONDICIONALES
let num = 3;

if(num < 5){
    console.log('Felicidades Condicional');

}else{
    console.log('Fallastes');
}

num = 5

if(num > 0){
    console.log('Es un número positivo');

}else if(num == 0){
    console.log('Es cero');
}else if(num < 0){
    console.log('El numero es negativo');
}else{
    console.log('No es un número');
}

/// Operador condicional switch

let dayUserInput = prompt('Que dia de la semana es hoy?: ');

let day = dayUserInput.toLocaleLowerCase();

switch(day){
    case 'lunes':
        console.log('Hoy es el dia Lunes');
        break;
    case 'martes':
        console.log('Hoy es el dia Martes');
        break;
    case 'miércoles':
        console.log('Hoy es el dia Miércoles');
        break;

    case 'jueves':
        console.log('Hoy es el dia Lunes');
        break;

    case 'viernes':
        console.log('Hoy es el dia Viernes');
        break;

    case 'sabado':
        console.log('Hoy es el dia Sabado');
        break;

    case 'domingo':
        console.log('Hoy es el dia Domingo');
        break;

    default:
        console.log('Estas seguro que es un dia?');
}

//Operador ternario
let accesAllowed;
let age = prompt('Que edad tienes? ');

if (age >= 18) {
    accesAllowed = True;
} else {
    accesAllowed = false;

}

alert(accesAllowed);



age = prompt('Que edad tienes? ');

accessGranted = (age >= 18) ? true : false;
console.log(accessGranted);

