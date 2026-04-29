confetti();

// const EL_DIA_DE_MI_CUMPLE = new Date("2026-11-30");

// triquiñuela para que siempre se vean 10 segundos al llegar a la pagina...
let EL_DIA_DE_MI_CUMPLE = new Date();
EL_DIA_DE_MI_CUMPLE.setSeconds(EL_DIA_DE_MI_CUMPLE.getSeconds() + 2);

/**
 * calcula los segundos que que quedan hasta el dia de mi cumple
 * @returns devuelve los segundos que quedan hasta el dia de mi cumple
 */
function calculaLosSegundos() {
  const elDiaDeMiCumple = EL_DIA_DE_MI_CUMPLE;
  // cuantos segundos faltan para elDiaDeMiCUmple
  const timestampDelDiaDeMiCumple = elDiaDeMiCumple.getTime();
  const timestampDeHoy = new Date().getTime();
  const milisegundosQueQuedanHastaMiCumple =
    timestampDelDiaDeMiCumple - timestampDeHoy;

  const segundosQueQuedanHastaMiCumple = conversorSegundos(
    milisegundosQueQuedanHastaMiCumple,
  );

  return segundosQueQuedanHastaMiCumple;
}

/**
 * convierte milisegundos a segundos
 * @param {miliseconds} m los milisegundos a convertir
 * @returns segundos convertidos a partir de los milisegundos
 */
function conversorSegundos(m) {
  return m / 1000;
}

function conversor(segundos) {
  let m = Math.floor(segundos / 60); // me quedo con la parte entera de la division
  const s = segundos % 60;

  let h = Math.floor(m / 60);
  m = m % 60;

  const d = Math.floor(h / 24);
  h = h % 24;

  // console.log(s, m, h, d);

  // const isMyBirthday = d === 0 && h === 0 && m === 0 && Math.floor(s) === 0;
  const isMyBirthday = segundos < 0;

  const chupiguay = {
    dias: d,
    horas: h,
    minutos: m,
    segundos: Math.floor(s),
    isMyBirthday: isMyBirthday,
  };

  return chupiguay;
}

handleTimeout();

function handleTimeout() {
  const s = calculaLosSegundos();
  const valor = conversor(s);

  if (valor.isMyBirthday) {
    // for (let i = 0; i < 100; i++) {
    //   confetti();

    // }
    confetti({
      position: { x: 0, y: 0 }, // Origin position
      count: 100, // Number of particles
      size: 1, // Size of the particles
      velocity: 200, // Initial particle velocity
      fade: false, // Particles fall off the screen, or fade out
    });
    confetti({
      position: { x: window.innerWidth, y: 0 }, // Origin position
      count: 100, // Number of particles
      size: 1, // Size of the particles
      velocity: 200, // Initial particle velocity
      fade: false, // Particles fall off the screen, or fade out
    });
  }

  printar(valor);
  setTimeout(handleTimeout, 1000);
}

/**
 * Se encarga de pintar en el DOM los segundos, minutos, horas y días.
 * @param {*} valor
 */
function printar(valor) {
  const segundos = document.getElementById("segundos");
  const minutos = document.getElementById("minutos");
  const horas = document.getElementById("horas");
  const dias = document.getElementById("dias");

  segundos.innerText = valor.segundos;
  minutos.innerText = valor.minutos;
  horas.innerText = valor.horas;
  dias.innerText = valor.dias;
}
