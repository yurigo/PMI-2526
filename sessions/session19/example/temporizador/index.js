function $(selector) {
  return document.querySelector(selector);
}

const inputMinutos = $("#minutos");
const inputSegundos = $("#segundos");

const buttonStart = $("#empezar");

buttonStart.addEventListener("click", handleClick);

let cuentaAtras = 0;

function handleClick(event) {
  const minutos = inputMinutos.value;
  const segundos = inputSegundos.value;

  cuentaAtras = parseInt(minutos) * 60 + parseInt(segundos);

  pintameElCrono();

  //   const minutero = $("#temporizador>#m");
  //   const segundero = $("#temporizador>#s");

  //   minutero.textContent = minutos;
  //   segundero.textContent = segundos;

  setTimeout(cadaSegundo, 1000);
  setTimeout(finalizarCuentaAtras, cuentaAtras * 1000);
}

function cadaSegundo() {
  cuentaAtras--;
  console.log(cuentaAtras);
  pintameElCrono();

  if (cuentaAtras > 0) setTimeout(cadaSegundo, 1000);
}

function finalizarCuentaAtras() {
  const body = $("body");
  body.classList.add("red");
}

function pintameElCrono() {
  const minutero = $("#temporizador>#m");
  const segundero = $("#temporizador>#s");

  let minutos = Math.floor(cuentaAtras / 60);
  let segundos = cuentaAtras % 60;

  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  minutero.textContent = minutos;
  segundero.textContent = segundos;
}
