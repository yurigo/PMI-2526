const titulo = document.getElementById("titulo");
const elinput = document.getElementById("elinput");
const elboton = document.getElementById("boton");
const cuadrados = document.getElementById("cuadrados");
const cuadrados2 = document.getElementById("cuadrados2");

elboton.addEventListener("click", handleClick);
elboton.addEventListener("click", handleClickExtra);

const cuadraditos = [];

function handleClick(evento) {
  // console.log("el input" , elinput.value);
  // console.log("el titulo" , titulo.innerText);

  // console.log("he hecho click en el boton");

  // titulo.textContent = elinput.value;
  // titulo.innerHTML = elinput.value;
  // titulo.innerText = elinput.value;

  // titulo.innerHTML =
  // `<div class="a">` + elinput.value + `</div>`;

  cuadraditos.push(elinput.value);

  // console.log(cuadraditos);

  // cuadrados.innerHTML =
  // `<div class="cuadrado">`+elinput.value+`</div>`;

  pintame(cuadraditos);
}

function pintame(parametro1) {
  let cuadraditosHTML = "";

  parametro1.forEach(function (elemento) {
    cuadraditosHTML =
      cuadraditosHTML + `<div class="cuadrado">` + elemento + `</div>`;
  });

  cuadrados.innerHTML = cuadraditosHTML;
}

function handleClickExtra(evento) {
  const nuevoElementoHtml = document.createElement("div");

  nuevoElementoHtml.classList.add("a");
  nuevoElementoHtml.classList.add("b");

  nuevoElementoHtml.textContent = elinput.value;

  cuadrados2.appendChild(nuevoElementoHtml);
}

setTimeout(functionTimeout, 1000);

function functionTimeout() {
  handleClickExtra();
  setTimeout(functionTimeout, 1000);
}
