const variableButton = document.getElementById("btn");
const variableButton2 = document.getElementById("btn2");

// 
const variableButton3 = document.getElementById("btn3");
const variableButton4 = document.getElementById("btn4");
const variableButton5 = document.getElementById("btn5");


// hay alguna forma que los botones no tenga que acceder a todos?

//const buttons = document.getElementsByClassName("button")

// lamentablemente getElementsByClassName no nos devuelve un array y no se puede
// utilizar el forEach...  se debe convertir esa Collection en Array gracias a
// Array.from(<<collection>>)
const buttons = Array.from(document.getElementsByClassName("button"))
console.log(buttons);

buttons.forEach(function (elemento, index, array){
    console.log(elemento)
});

buttons.forEach(function (elemento, index, array){
    elemento.addEventListener("click", handleClick)
});


function handleClick(evento){

    console.log(evento.target)
    const botonclicado = evento.target;

    // este algoritmo está correcto
    // if (botonclicado.classList.contains("red")){
    //     // console.log("Alguien ha hecho click!!!");
    //     botonclicado.classList.remove("red")
    //     botonclicado.classList.add("blue")
    // }else{
    //     botonclicado.classList.remove("blue")
    //     botonclicado.classList.add("red")
    // }

    // pero existe toggle que implementa lo anterior
    botonclicado.classList.toggle("red");
    botonclicado.classList.toggle("blue");
}

// variableButton.addEventListener("click" , handleClick);
// variableButton2.addEventListener("click" , handleClick);
// variableButton3.addEventListener("click" , handleClick);
// variableButton4.addEventListener("click" , handleClick);
// variableButton5.addEventListener("click" , handleClick);
// ... insostenible ...
// necesitamos alguna solución dinámica...
// ojala existieran colecciones o arrays de botones...
// oh wait

// function handleClick2(evento){
//     if (variableButton2.classList.contains("red")){
//         // console.log("Alguien ha hecho click!!!");
//         variableButton2.classList.remove("red")
//         variableButton2.classList.add("blue")
//     }else{
//         variableButton2.classList.remove("blue")
//         variableButton2.classList.add("red")
//     }
// }

// variableButton.addEventListener("click" , handleClick2);

// function handleClick3(evento){
//     if (variableButton3.classList.contains("red")){
//         // console.log("Alguien ha hecho click!!!");
//         variableButton3.classList.remove("red")
//         variableButton3.classList.add("blue")
//     }else{
//         variableButton3.classList.remove("blue")
//         variableButton3.classList.add("red")
//     }
// }

// variableButton.addEventListener("click" , handleClick3);



// ************************************ vamos a hablar de arrays! *****************************************

const v1 = 100;
const v2 = true;

const arr = [];
const arr2 = [1,2,3,4,5,6,7,8];
const arr3 = ['a', true, 78, ["1", "a"], {}, null];



// char arr[8];
// arr[0] = '2';
// arr[3] = 'a';
// arr[2] = 'z';


console.log(arr);
console.log(arr2);
console.log(arr3);

// arr = 5; // ERROR: porque estoy asignado un nuevo valor al arr (const),

arr2[0] = 10000;  // esto va porque lo que no se puede cambiar es el valor pero no el contenido
arr2[1] = 20000;
arr2[2] = 30000;
//...
arr2[3] = 40000;
arr2[4] = 50000;
arr2[5] = 60000;
arr2[6] = 70000;
arr2[7] = 80000;

for (let i = 0; i < arr2.length ; i++){
    // arr2[i] = arr2[i] / 10000; 
    arr2[i] /= 10000000000;  // esto a un humano le cueste leer
    arr2[i] /= 10_000_000_000;   // esto ya no tanto
    arr2[i] /= 1_0_0_0_000_0000;   // el humano que ha escrito esto es tonto
}

// el mundo de los arrays.
console.log(arr2);

const frutas = ['banana' , 'apple' , 'orange', 'grape'];
console.log(frutas);

frutas.push("kiwi");
console.log(frutas);

const fruta = frutas.pop();
console.log(frutas);
console.log("elemento quitado" , fruta);

//for clasico
for (let i = 0; i < frutas.length; i++){
    const fruta = frutas[i];
    console.log(frutas[i]);
}

// con esto paso del clasico al forof...
for (let i = 0; i < frutas.length; i++){
    const fruta = frutas[i];
    console.log(fruta);
}

// forof
for (const fruta of frutas) {
    console.log(fruta);
}

function hazAlgoConLaFruta(fruta, index, array){
    console.log("*" , fruta , "*: ", index, "->" , array);
}

const hazAlgoConLaFrutaExpression = function(value){
    console.log("lorem", value);
}

frutas.forEach(hazAlgoConLaFruta);
frutas.forEach(hazAlgoConLaFrutaExpression)
frutas.forEach(function (xxx){
    console.log("hola!" , xxx)
})



