// console.log("Esto es un script externo");

// variables:

// int a = 10;
var a;
console.log(typeof a);

a = 10;
console.log(typeof a);

a = "hola";
console.log(typeof a);

a = 4.5;
console.log(typeof a);

a = true;
console.log(typeof a);

a = false;
console.log(typeof a);

a = null;
console.log(typeof a); // javascript estas bien?  quieres una pastilla?

a = undefined;
console.log(typeof a);

a = {};
console.log(typeof a);

a = [];
console.log(typeof a);

a = [1,2,3,4,5,6];
console.log(a);


// condicionales
if (true){
    console.log("esto");
}

a = 99;

// condicionales
if (a > 100){
    console.log("esto no se ejecuta");
}else{
    console.log("pero esto sí");
}

// and
// true and true
true && true
// or 
true || false
// not
!true // será false

!!true // será true

// >, < >= <= = == === != !==

if (a == "3"){
    console.log("esto es igual!");
}

if (3 === "3"){
    console.log("esto es igual!");
}else{
    console.log("esto no es igual!");
}

if (typeof 3 == typeof "3"){
    console.log("esto es igual!");
}



let b = 10;
const c = 10;

b = "hola";

// esto da error porque index.js:87 Uncaught TypeError: Assignment to constant variable.
// c = "21984";

let i = 1; //hay que usar el let en lugar de var

for (i; i <= 100; i++){
    console.log("f", i);
}

while(i < 200){
    console.log("w" , i);
    i++;
}

console.log("out:" , i);

do{
    console.log("d", i);
    i++;
}while(i < 300);

a = 2;

switch(a){
    case 1:
        console.log("vale 1");
        break;
    case 2:
        console.log("vale 2");
        break;
    default:
        console.log("vale otro");
        break;
}



for (let j = 0; j < 5; j++ ){
    if (j === 1) continue;
    if (j === 3) break;
    console.log(j);
}

console.log("chim pom")


// operadores aritméticos
// + suma
// - resta
// / division
// * multiplicacion
// ** exponente
// % modulo

a = 1000;

a += 1;  // 1001
a -= 2;  // 999
a *= 3;  // 2997
a /= 7;  // 428.14285714285717

a++;
a--;
++a;
--a;

console.log(a);

// declaración de funciones
function suma ( a , b ){
    return a + b;
}

function resta ( a , b ){
    return a - b;
}

function multiplicacion ( a , b ){
    return a * b;
}

function division ( a , b ){
    return a / b;
}

// invocación de funciones
const elevador = suma(1,4);

console.log(suma(1,2) , elevador);


// a la pregunta para que sirve javascript?

// respuesta: para dar interactividad a la página,
// por ejemplo, en las siguientes sesiones veremos cosas
// como esto:

// OJO: para esta sección se ha movido el script al final del body
//      no se explica por ahora el porqué.
const x = document.getElementById("titulo");

x.addEventListener("click", () => {
    const color = getRandomColor()
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
    x.innerHTML = color;
})


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
