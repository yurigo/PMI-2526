# Sesión 21 - Corrección de la Cuenta Atrás y Presentación de la Práctica

**Fecha:** 5 de mayo de 2026

## Contenidos de la Sesión

Esta sesión se dedicó a dos partes diferenciadas. En la primera mitad se realizó una **corrección en directo de la cuenta atrás hasta una fecha** construida en las sesiones 19 y 20: se revisaron los errores más frecuentes cometidos por el alumnado, se discutieron las causas y se mostraron las correcciones. En la segunda mitad se **presentó la práctica** de la asignatura: enunciado, criterios de evaluación y recomendaciones para abordarla.

No existe carpeta de ejemplos en esta sesión; el código analizado es el propio de [`session19/example/temporizador/`](../session19/example/temporizador/) y [`session20/cuentaAtras/`](../session20/cuentaAtras/).

---

### 1. Error más frecuente: concatenación de strings en lugar de suma

El error más repetido fue operar aritméticamente con valores de tipo **string** sin convertirlos antes a número. Como `.value` de un `<input>` devuelve siempre un string, sumar dos valores sin convertir produce concatenación:

```js
// ❌ Incorrecto — concatena strings
const minutos  = inputMinutos.value;   // "05" (string)
const segundos = inputSegundos.value;  // "30" (string)
const total    = minutos * 60 + segundos; // 300 + "30" → "30030" (¡mal!)
```

La solución es envolver cada lectura con `parseInt`:

```js
// ✅ Correcto — opera con números
const minutos  = parseInt(inputMinutos.value,  10); // 5  (number)
const segundos = parseInt(inputSegundos.value, 10); // 30 (number)
const total    = minutos * 60 + segundos;           // 330 (number)
```

> [!IMPORTANT]
> **`.value` siempre devuelve un string**, incluso cuando el `<input>` es de tipo `number`. Usa `parseInt(valor, 10)` para convertirlo a entero antes de cualquier operación aritmética. El segundo argumento `10` indica la base decimal y es una buena práctica incluirlo siempre.

---

### 2. Error: decimales en la pantalla por olvidar `Math.floor`

Al dividir el total de segundos entre 60 para obtener minutos, el resultado puede tener decimales. Sin `Math.floor`, estos decimales aparecen directamente en pantalla:

```js
// ❌ Incorrecto
let minutos  = cuentaAtras / 60;   // 5.5 → "5.5" en pantalla
let segundos = cuentaAtras % 60;   // correcto, pero la parte de arriba falla
```

```js
// ✅ Correcto
let minutos  = Math.floor(cuentaAtras / 60); // 5 → "5" en pantalla
let segundos = cuentaAtras % 60;             // 30
```

> [!NOTE]
> `Math.floor` redondea **hacia abajo** al entero más cercano (`Math.floor(5.9) === 5`). Es exactamente lo que se necesita para extraer la cantidad entera de minutos (o de horas, o de días) que caben en un número de segundos totales.

---

### 3. Error: mostrar `"5"` en lugar de `"05"` (padding de ceros)

Los números menores de 10 se mostraban sin el cero de relleno, lo que da un aspecto poco profesional al contador.

```
// ❌ Resultado en pantalla:  5:7
// ✅ Resultado esperado:     05:07
```

Hay dos formas de añadir el cero a la izquierda:

```js
// Opción A — con if (enfoque visto en sesiones anteriores)
if (minutos < 10) minutos = "0" + minutos;
if (segundos < 10) segundos = "0" + segundos;

// Opción B — con .padStart() (más conciso)
minutos  = String(minutos).padStart(2, "0");
segundos = String(segundos).padStart(2, "0");
```

> [!TIP]
> `String.padStart(longitud, caracterDeRelleno)` completa un string por la izquierda hasta alcanzar la longitud indicada. Es la forma moderna y recomendada de hacer padding de ceros.

---

### 4. Error: posición del `<script>` en el HTML

Varios alumnos colocaban el `<script>` al **final del `<body>`** en lugar de en el `<head>` con el atributo `defer`:

```html
<!-- ❌ Incorrecto — al final del body -->
<body>
  <!-- contenido -->
  <script src="index.js"></script>
</body>
```

```html
<!-- ✅ Correcto — en el <head> con defer -->
<head>
  <script src="index.js" defer></script>
</head>
```

> [!IMPORTANT]
> Tal como se explicó en la sesión 18, el `<script>` debe ir **siempre en el `<head>` con `defer`**. El atributo `defer` garantiza que el script se descarga en paralelo con el HTML y se ejecuta solo cuando todo el DOM ha sido construido. Poner el `<script>` al final del `<body>` es un patrón obsoleto que surgió como workaround antes de que `defer` existiera en todos los navegadores.

---

### 5. Error: no llamar a la función inmediatamente al cargar

En el patrón de `setTimeout` recursivo, si no se invoca la función principal al arrancar la página, el contador tarda **un segundo entero** en mostrarse por primera vez. Esto crea un efecto desagradable donde el usuario ve la pantalla vacía brevemente.

```js
// ❌ Incorrecto — espera 1 segundo antes del primer tick
setTimeout(handleTimeout, 1000);

function handleTimeout() {
  // actualiza el DOM
  setTimeout(handleTimeout, 1000);
}
```

```js
// ✅ Correcto — se muestra inmediatamente al cargar
handleTimeout(); // llamada inicial sin espera

function handleTimeout() {
  // actualiza el DOM
  setTimeout(handleTimeout, 1000);
}
```

> [!NOTE]
> La llamada inicial `handleTimeout()` fuera de cualquier temporizador hace que el DOM se actualice en el momento en que se ejecuta el script, sin esperar el primer intervalo de un segundo.

---

### 6. Buenas prácticas reforzadas

Durante la corrección se recordaron varias buenas prácticas generales de JavaScript:

#### `const` y `let`, nunca `var`

```js
// ❌ Prohibido
var contador = 0;

// ✅ Correcto
let contador  = 0;    // para valores que van a cambiar
const LIMITE  = 60;   // para valores constantes (SCREAMING_SNAKE_CASE)
```

#### Constantes con nombre para valores mágicos

Es mejor nombrar los valores fijos con una constante descriptiva que escribirlos directamente en el código:

```js
// ❌ Difícil de entender
setTimeout(handleTimeout, 1000);

// ✅ Más legible
const UN_SEGUNDO_EN_MS = 1000;
setTimeout(handleTimeout, UN_SEGUNDO_EN_MS);
```

#### Nombres descriptivos para las variables

```js
// ❌ Difícil de razonar
const x = new Date().getTime();

// ✅ Mucho más claro
const timestampDeHoy = new Date().getTime();
```

> [!TIP]
> Un buen nombre de variable hace que el código se lea casi como prosa. Si necesitas un comentario para explicar qué es `x`, el problema es el nombre de la variable, no la falta del comentario.

---

### 7. Repaso del patrón completo de la cuenta atrás

Como cierre de la corrección, se repasó el flujo completo de la cuenta atrás hasta una fecha, identificando las responsabilidades de cada función:

```
                  ┌─────────────────────────────────────────────┐
                  │              handleTimeout()                 │
                  │  1. Calcula los segundos restantes           │
                  │  2. Convierte a días/horas/minutos/segundos  │
                  │  3. Actualiza el DOM                         │
                  │  4. Se vuelve a llamar en 1 segundo          │
                  └─────────────────────────────────────────────┘
                        │               │              │
              calculaLosSegundos()   conversor()    printar()
              (Date + getTime)       (Math.floor    (getElementById
                                      + %)          + innerText)
```

Cada función tiene **una sola responsabilidad** (*single responsibility principle*): calcular, convertir o mostrar. Esta separación facilita la lectura y la depuración.

> [!TIP]
> Si una función necesita un nombre muy largo para describir todo lo que hace (p. ej. `calculaYConvierteyMuestraLaCuentaAtras`), es señal de que debería dividirse en funciones más pequeñas.

---

### 8. Presentación de la Práctica

En la segunda parte de la sesión se presentó el **enunciado de la práctica** de la asignatura. Se explicaron los criterios de evaluación y las recomendaciones para abordarla con éxito.

Las recomendaciones generales que se dieron fueron:

- **Planificar antes de escribir código**: bosquejar la estructura HTML, los estilos CSS y la lógica JavaScript antes de abrir el editor.
- **Ir paso a paso**: hacer que algo pequeño funcione antes de añadir más funcionalidad.
- **Usar el inspector del navegador** (DevTools → consola, elementos, red) para depurar.
- **Hacer commits frecuentes** con mensajes descriptivos para poder revertir cambios si algo falla.
- **No copiar código sin entenderlo**: el examen requerirá razonar sobre el código entregado.

> [!IMPORTANT]
> La práctica debe ser **trabajo propio**. Usar código de otros alumnos o generado íntegramente por IA sin comprenderlo se considera deshonestidad académica y puede suponer suspenso directo.

---

## Resumen

En esta sesión hemos repasado y reforzado:

- ✅ **`parseInt(valor, 10)`** — convertir strings a enteros antes de operar aritméticamente
- ✅ **`Math.floor`** — eliminar los decimales al calcular minutos y segundos
- ✅ **Padding de ceros** — usar `.padStart(2, "0")` para mostrar `"05"` en lugar de `"5"`
- ✅ **Posición del `<script>`** — siempre en `<head>` con `defer`, nunca al final del `<body>`
- ✅ **Llamada inicial en `setTimeout` recursivo** — invocar la función al cargar para evitar el retraso de un segundo
- ✅ **`const` / `let`** — nunca `var`; usar constantes con nombre para los valores fijos
- ✅ **Nombres descriptivos** — variables y funciones que explican su propósito sin necesidad de comentarios
- ✅ **Separación de responsabilidades** — cada función hace una sola cosa

**Lo más importante:**

> [!IMPORTANT]
>
> - **`.value` siempre es un string** — usa `parseInt(..., 10)` antes de cualquier cálculo numérico
> - **`Math.floor` es obligatorio** al convertir segundos a minutos (o minutos a horas) para evitar decimales
> - **El `<script>` va en el `<head>` con `defer`** — no al final del `<body>`
> - **Llama la función inmediatamente** además de programar el primer `setTimeout`, para que el DOM se actualice al instante

## Recursos Adicionales

- [MDN - `parseInt`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN - `Math.floor`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [MDN - `String.prototype.padStart`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [MDN - `defer`](https://developer.mozilla.org/es/docs/Web/HTML/Element/script#defer)
- [MDN - `setTimeout`](https://developer.mozilla.org/es/docs/Web/API/setTimeout)
- [MDN - `Date`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [javascript.info - Tipos de datos: números](https://es.javascript.info/number)
- [javascript.info - setTimeout y setInterval](https://es.javascript.info/settimeout-setinterval)