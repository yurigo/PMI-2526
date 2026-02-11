# Sesión 04 - Introducción a CSS

**Fecha:** TBD

## Contenidos de la Sesión

### 1. Introducción a CSS

**CSS (Cascading Style Sheets)** es un lenguaje de hojas de estilo que se utiliza para describir la presentación de documentos HTML. Mientras HTML define la estructura y el contenido, CSS controla cómo se ve ese contenido en pantalla, papel u otros medios.

**¿Por qué usar CSS?**

- **Separación de contenido y presentación**: Mantiene el HTML limpio y enfocado en la estructura
- **Reutilización**: Los mismos estilos se pueden aplicar a múltiples elementos
- **Mantenibilidad**: Es más fácil actualizar el diseño de todo un sitio
- **Consistencia**: Garantiza un aspecto uniforme en todo el sitio web
- **Responsive design**: Permite adaptar el diseño a diferentes tamaños de pantalla

### 2. Lugares donde Colocar CSS (CSS Places)

Existen tres formas de incluir CSS en una página HTML. Cada una tiene sus casos de uso, pero se recomienda encarecidamente usar **CSS externo** para proyectos profesionales.

#### CSS Inline (En línea)

CSS inline se aplica directamente en el elemento HTML usando el atributo `style`.

**Sintaxis:**

```html
<p style="color: red; font-size: 16px;">Este es un párrafo con estilo inline</p>
```

**Características:**

- Se aplica directamente en la etiqueta HTML
- Tiene la máxima prioridad (especificidad más alta)
- Solo afecta al elemento específico
- No se puede reutilizar

> [!IMPORTANT]
> **NO USAR CSS INLINE**
>
> - Dificulta el mantenimiento del código
> - Mezcla contenido con presentación
> - No es reutilizable
> - Hace el HTML más difícil de leer
> - Dificulta las actualizaciones masivas de estilos

**Única excepción:** En emails HTML donde el soporte de CSS externo es limitado.

#### CSS Internal (Interno)

CSS interno se define dentro del documento HTML usando la etiqueta `<style>` en el `<head>`.

**Sintaxis:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo CSS Interno</title>
    <style>
      p {
        color: blue;
        font-size: 18px;
      }
      .destacado {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>Este párrafo tendrá los estilos definidos arriba.</p>
    <p class="destacado">Este párrafo también está destacado.</p>
  </body>
</html>
```

**Características:**

- Se define en la sección `<head>` del documento
- Afecta solo al documento HTML actual
- Permite reutilización dentro de la misma página
- Aumenta el tamaño del archivo HTML

> [!IMPORTANT]
> **NO USAR CSS INTERNO**
>
> - No se puede compartir entre múltiples páginas
> - Aumenta el tamaño de cada archivo HTML
> - Dificulta el mantenimiento en sitios con múltiples páginas
> - Los estilos no se pueden cachear por separado
> - Mezcla estructura con presentación

**Única excepción:** Para estilos críticos "above the fold" en optimización de rendimiento avanzada.

#### CSS External (Externo) ✅

CSS externo se define en un archivo separado con extensión `.css` y se vincula al HTML usando la etiqueta `<link>`.

**Sintaxis:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo CSS Externo</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>Este párrafo tendrá los estilos definidos en styles.css</p>
  </body>
</html>
```

**Archivo styles.css:**

```css
p {
  color: green;
  font-size: 20px;
}
```

**Características:**

- Los estilos se definen en un archivo `.css` separado
- Se vincula mediante `<link rel="stylesheet" href="ruta/archivo.css">`
- Un solo archivo CSS puede ser usado por múltiples páginas HTML
- Los navegadores pueden cachear el archivo CSS
- Separa completamente contenido de presentación

> [!IMPORTANT]
> **USAR SIEMPRE CSS EXTERNO**
>
> **Ventajas:**
>
> - ✅ Reutilizable en múltiples páginas
> - ✅ Fácil mantenimiento y actualización
> - ✅ Mejor rendimiento (caching del navegador)
> - ✅ Código más limpio y organizado
> - ✅ Separación clara de responsabilidades
> - ✅ Facilita el trabajo en equipo
> - ✅ Permite usar preprocesadores (Sass, Less)

**Estructura recomendada:**

```
proyecto/
├── index.html
├── about.html
└── css/
    ├── styles.css
    └── reset.css
```

**Múltiples archivos CSS:**

```html
<head>
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
```

El orden importa: los estilos se aplican en cascada, los últimos pueden sobrescribir a los primeros.

### 3. Selectores CSS (CSS Selectors)

Los selectores CSS son patrones que se utilizan para seleccionar y aplicar estilos a elementos HTML específicos.

#### Selector de Etiqueta (Tag Selector)

Selecciona todos los elementos de un tipo específico de etiqueta HTML.

**Sintaxis:**

```css
etiqueta {
  propiedad: valor;
}
```

**Ejemplo:**

```css
/* Aplica a todos los párrafos */
p {
  color: blue;
  font-size: 16px;
}

/* Aplica a todos los h1 */
h1 {
  color: darkblue;
  font-size: 32px;
}

/* Aplica a todos los enlaces */
a {
  color: red;
  text-decoration: none;
}
```

**Características:**

- Selecciona TODOS los elementos de ese tipo en la página
- Es el selector más básico y general
- Útil para estilos base que quieres en todos los elementos del mismo tipo

#### Selector de ID (Id Selector)

Selecciona un elemento específico mediante su atributo `id`. El ID debe ser único en toda la página.

**Sintaxis:**

```css
#nombreId {
  propiedad: valor;
}
```

**Ejemplo HTML:**

```html
<div id="header">Cabecera Principal</div>
<p id="intro">Párrafo de introducción</p>
```

**Ejemplo CSS:**

```css
#header {
  background-color: navy;
  color: white;
  padding: 20px;
}

#intro {
  font-size: 18px;
  font-weight: bold;
}
```

**Características:**

- Se denota con el símbolo `#` seguido del nombre del ID
- Solo puede aplicarse a un elemento (los IDs son únicos)
- Tiene alta especificidad
- Útil para elementos únicos en la página

#### Selector de Clase (Class Selector)

Selecciona elementos mediante su atributo `class`. Múltiples elementos pueden compartir la misma clase.

**Sintaxis:**

```css
.nombreClase {
  propiedad: valor;
}
```

**Ejemplo HTML:**

```html
<p class="destacado">Primer párrafo destacado</p>
<p class="destacado">Segundo párrafo destacado</p>
<div class="contenedor">Contenedor especial</div>
```

**Ejemplo CSS:**

```css
.destacado {
  background-color: yellow;
  font-weight: bold;
}

.contenedor {
  border: 2px solid black;
  padding: 15px;
}
```

**Características:**

- Se denota con el símbolo `.` seguido del nombre de la clase
- Puede aplicarse a múltiples elementos
- Es el selector más usado y versátil
- Permite reutilización de estilos
- Especificidad media

#### Selectores Múltiples (Multiple Selectors)

Aplica los mismos estilos a múltiples selectores separándolos con comas.

**Sintaxis:**

```css
selector1,
selector2,
selector3 {
  propiedad: valor;
}
```

**Ejemplo:**

```css
h1,
h2,
h3 {
  font-family: Arial, sans-serif;
  color: darkblue;
}

.importante,
.destacado,
#principal {
  font-weight: bold;
}
```

**Características:**

- Evita repetición de código
- Aplica los mismos estilos a diferentes elementos
- Mejora la mantenibilidad

#### Selectores Anidados (Nested Selectors)

Selecciona elementos que están dentro de otros elementos específicos.

**Sintaxis:**

```css
selector1 selector2 {
  propiedad: valor;
}
```

**Ejemplo HTML:**

```html
<div class="contenedor">
  <p>Este párrafo está dentro del contenedor</p>
  <span>Este span también</span>
</div>
<p>Este párrafo NO está en el contenedor</p>
```

**Ejemplo CSS:**

```css
/* Solo los párrafos dentro de .contenedor */
.contenedor p {
  color: red;
}

/* Solo los spans dentro de divs */
div span {
  font-style: italic;
}

/* Anidación más específica */
header nav a {
  text-decoration: none;
  color: white;
}
```

**Características:**

- Permite ser más específico en la selección
- Se separan por espacios (descendientes en cualquier nivel)
- El elemento final es el que recibe los estilos
- Mayor especificidad

**Otros selectores de combinación:**

```css
/* Hijo directo (solo primer nivel) */
div > p {
  margin: 0;
}

/* Hermano adyacente (inmediatamente después) */
h1 + p {
  font-size: 20px;
}

/* Hermanos generales (todos los que siguen) */
h1 ~ p {
  color: gray;
}
```

#### Pseudo-Clases (Pseudo-Classes)

Las pseudo-clases son palabras clave que se añaden a los selectores para especificar un estado especial del elemento.

**Sintaxis:**

```css
selector:pseudo-clase {
  propiedad: valor;
}
```

**Pseudo-clases más comunes:**

**Estados de enlaces:**

```css
/* Estado normal del enlace */
a:link {
  color: blue;
}

/* Enlace ya visitado */
a:visited {
  color: purple;
}

/* Cuando el cursor está sobre el enlace */
a:hover {
  color: red;
  text-decoration: underline;
}

/* Cuando el enlace está siendo clickeado */
a:active {
  color: orange;
}
```

**Estados de interacción:**

```css
/* Cuando un elemento tiene el foco (ej: input) */
input:focus {
  border-color: blue;
  outline: 2px solid lightblue;
}

/* Cuando el cursor está sobre un elemento */
button:hover {
  background-color: darkblue;
  cursor: pointer;
}
```

**Selectores estructurales:**

```css
/* Primer hijo */
li:first-child {
  font-weight: bold;
}

/* Último hijo */
li:last-child {
  border-bottom: none;
}

/* Elemento n-ésimo */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: white;
}
```

**Características:**

- Se denotan con `:` seguido del nombre de la pseudo-clase
- Seleccionan elementos en estados específicos
- `:hover` es la más utilizada para interactividad
- Esenciales para crear interfaces interactivas sin JavaScript

#### Práctica con CSS Diner

**[CSS Diner](https://flukeout.github.io/)** es un juego interactivo que te enseña selectores CSS de forma práctica y divertida.

**¿Qué aprenderás?**

- Selectores básicos y avanzados
- Selectores de atributos
- Pseudo-clases
- Combinadores
- Especificidad de selectores

> [!TIP]
> Completa todos los niveles de CSS Diner para dominar los selectores CSS. Es una forma entretenida y efectiva de aprender.

**Otros recursos interactivos:**

- [CSS Selector Game](https://frontend30.com/css-selectors-cheatsheet/)
- [MDN - Selectores CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)

### 4. Propiedades CSS (CSS Properties)

Las propiedades CSS definen qué aspectos visuales de un elemento quieres cambiar. Aquí veremos las propiedades más fundamentales relacionadas con tipografía y colores.

> [!NOTE]
> **Popularidad de propiedades CSS**
>
> Puedes consultar las estadísticas de uso de propiedades CSS en navegadores reales:
> [CSS Properties Popularity - Chrome Status](https://chromestatus.com/metrics/css/popularity)
>
> Las propiedades más usadas incluyen: `display`, `width`, `height`, `color`, `background-color`, `font-size`, `margin`, `padding`, entre otras.

#### `font-family`

Define la familia tipográfica (tipo de letra) que se usará para el texto.

**Sintaxis:**

```css
selector {
  font-family: "Nombre de la fuente", fuente-alternativa, familia-genérica;
}
```

**Ejemplo:**

```css
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

h1 {
  font-family: Georgia, "Times New Roman", serif;
}

code {
  font-family: "Courier New", Courier, monospace;
}
```

**Familias genéricas:**

- `serif`: Fuentes con serifas (ej: Times New Roman, Georgia)
- `sans-serif`: Fuentes sin serifas (ej: Arial, Helvetica)
- `monospace`: Fuentes de ancho fijo (ej: Courier, Consolas)
- `cursive`: Fuentes de tipo cursiva
- `fantasy`: Fuentes decorativas

**Buenas prácticas:**

- Siempre incluir una fuente genérica al final como fallback
- Usar comillas para nombres de fuentes con espacios
- Listar fuentes en orden de preferencia (font stack)

#### `font-size`

Define el tamaño de la fuente.

**Sintaxis:**

```css
selector {
  font-size: valor;
}
```

**Ejemplo:**

```css
body {
  font-size: 16px;
}

h1 {
  font-size: 2.5rem; /* 40px si el base es 16px */
}

p {
  font-size: 1rem; /* 16px */
}

.small {
  font-size: 0.875rem; /* 14px */
}
```

**Unidades comunes:**

- `px`: Píxeles (valor absoluto)
- `rem`: Relativo al tamaño de fuente del elemento raíz (`<html>`)
- `em`: Relativo al tamaño de fuente del elemento padre
- `%`: Porcentaje del tamaño del padre

#### `line-height`

Define la altura de la línea (espacio vertical entre líneas de texto).

**Sintaxis:**

```css
selector {
  line-height: valor;
}
```

**Ejemplo:**

```css
body {
  line-height: 1.6; /* Sin unidad: multiplicador del font-size */
}

p {
  line-height: 24px; /* Valor fijo en píxeles */
}

h1 {
  line-height: 1.2; /* Títulos suelen tener menos espacio */
}
```

**Buenas prácticas:**

- Usar valores sin unidad (ej: 1.5, 1.6) para mejor escalabilidad
- Un `line-height` de 1.5-1.6 es ideal para lectura de texto
- Títulos pueden usar valores más bajos (1.2-1.3)

#### `font-weight`

Define el grosor o peso de la fuente.

**Sintaxis:**

```css
selector {
  font-weight: valor;
}
```

**Valores comunes:**

```css
.light {
  font-weight: 300; /* Ligera */
}

.normal {
  font-weight: 400; /* Normal (default) */
  font-weight: normal; /* Equivalente a 400 */
}

.medium {
  font-weight: 500; /* Media */
}

.semibold {
  font-weight: 600; /* Semi-negrita */
}

.bold {
  font-weight: 700; /* Negrita */
  font-weight: bold; /* Equivalente a 700 */
}

.extrabold {
  font-weight: 800; /* Extra negrita */
}
```

**Valores posibles:**

- Numéricos: 100, 200, 300, 400, 500, 600, 700, 800, 900
- Palabras clave: `normal` (400), `bold` (700), `lighter`, `bolder`

**Nota:** No todas las fuentes soportan todos los pesos.

#### `font-style`

Define el estilo de la fuente (normal, cursiva, oblicua).

**Sintaxis:**

```css
selector {
  font-style: valor;
}
```

**Valores:**

```css
.normal {
  font-style: normal; /* Estilo normal (default) */
}

.italic {
  font-style: italic; /* Cursiva */
}

.oblique {
  font-style: oblique; /* Oblicua (inclinada) */
}
```

**Ejemplo práctico:**

```css
em {
  font-style: italic; /* Los <em> suelen ser itálicos */
}

cite {
  font-style: italic; /* Las citas también */
}
```

#### `background-color`

Define el color de fondo de un elemento.

**Sintaxis:**

```css
selector {
  background-color: valor;
}
```

**Formatos de color:**

```css
/* Nombres de colores */
.box1 {
  background-color: red;
}

/* Hexadecimal */
.box2 {
  background-color: #ff0000;
  background-color: #f00; /* Forma corta */
}

/* RGB */
.box3 {
  background-color: rgb(255, 0, 0);
}

/* RGBA (con transparencia) */
.box4 {
  background-color: rgba(255, 0, 0, 0.5); /* 50% transparente */
}

/* HSL (Hue, Saturation, Lightness) */
.box5 {
  background-color: hsl(0, 100%, 50%);
}

/* Transparente */
.box6 {
  background-color: transparent;
}
```

#### `color`

Define el color del texto.

**Sintaxis:**

```css
selector {
  color: valor;
}
```

**Ejemplo:**

```css
body {
  color: #333; /* Gris oscuro para mejor legibilidad */
}

h1 {
  color: #1a1a1a; /* Casi negro */
}

a {
  color: #0066cc; /* Azul para enlaces */
}

.error {
  color: #d32f2f; /* Rojo para errores */
}

.success {
  color: #388e3c; /* Verde para éxito */
}
```

**Contraste y accesibilidad:**

Es importante mantener un buen contraste entre el color del texto y el fondo para legibilidad:

```css
/* Buen contraste */
.readable {
  background-color: white;
  color: #222;
}

/* Mal contraste - evitar */
.bad-contrast {
  background-color: lightgray;
  color: gray;
}
```

**Herramientas de contraste:**

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)

### 5. Google Fonts

**Google Fonts** es un servicio gratuito de Google que proporciona una biblioteca de fuentes tipográficas optimizadas para la web.

**¿Por qué usar Google Fonts?**

- ✅ Gratuito y de código abierto
- ✅ Fácil de implementar
- ✅ Optimizado para web (carga rápida)
- ✅ Gran variedad de fuentes profesionales
- ✅ Funciona en todos los navegadores
- ✅ CDN global (carga rápida en todo el mundo)

**Cómo usar Google Fonts:**

**Paso 1: Seleccionar una fuente**

1. Visita [Google Fonts](https://fonts.google.com/)
2. Explora y selecciona la fuente que deseas
3. Haz clic en "Select this style" para los pesos que necesites

**Paso 2: Copiar el código de importación**

Hay dos formas de incluir Google Fonts:

**Opción A: Usando `<link>` en HTML (recomendado)**

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  />
</head>
```

**Opción B: Usando `@import` en CSS**

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
```

**Paso 3: Usar la fuente en CSS**

```css
body {
  font-family: "Roboto", sans-serif;
}
```

**Ejemplo completo:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo Google Fonts</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap"
      rel="stylesheet"
    />

    <style>
      body {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
      }

      h1 {
        font-family: "Playfair Display", serif;
        font-weight: 700;
      }

      .light {
        font-weight: 300;
      }

      .bold {
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <h1>Título con Playfair Display</h1>
    <p>Texto normal con Roboto</p>
    <p class="light">Texto ligero con Roboto</p>
    <p class="bold">Texto negrita con Roboto</p>
  </body>
</html>
```

**Fuentes populares de Google Fonts:**

- **Roboto**: Moderna, limpia, versátil
- **Open Sans**: Legible, neutral, profesional
- **Lato**: Elegante, amigable
- **Montserrat**: Geométrica, moderna
- **Poppins**: Geométrica, amigable
- **Playfair Display**: Elegante, para títulos
- **Merriweather**: Serif, ideal para lectura

**Buenas prácticas:**

- No cargar demasiadas fuentes (máximo 2-3)
- Cargar solo los pesos que realmente necesitas
- Usar `display=swap` para mejor rendimiento
- Usar `preconnect` para optimizar la carga

**Recursos adicionales:**

- [Google Fonts](https://fonts.google.com/)
- [Google Fonts - Best Practices](https://fonts.google.com/knowledge)

### 6. Unidades CSS (CSS Units)

Las unidades CSS determinan el tamaño de los elementos. Hay dos tipos principales: absolutas y relativas.

#### Unidades Absolutas

**`px` (Píxeles)**

El píxel es una unidad de medida fija que no cambia según el contexto.

**Características:**

- Valor absoluto y fijo
- 1px = 1 píxel en la pantalla (aproximadamente)
- Fácil de entender y usar
- No es responsive por naturaleza
- Ignora las preferencias de accesibilidad del usuario

**Ejemplo:**

```css
.box {
  width: 200px;
  height: 100px;
  font-size: 16px;
  border: 2px solid black;
}
```

**Cuándo usar `px`:**

- Bordes (`border: 1px solid`)
- Sombras (`box-shadow`)
- Detalles muy específicos
- Medidas muy pequeñas

**Limitaciones:**

- No se adapta al tamaño de fuente preferido del usuario
- Menos flexible para diseño responsive
- Puede causar problemas de accesibilidad

#### Unidades Relativas

**`rem` (Root Em)**

`rem` es relativo al tamaño de fuente del elemento raíz (`<html>`).

**Cómo funciona:**

- `1rem` = tamaño de fuente del elemento `<html>`
- Por defecto, `1rem = 16px` (si no se modifica)
- Si cambias el `font-size` de `<html>`, todos los `rem` se ajustan

**Ejemplo:**

```css
html {
  font-size: 16px; /* Base: 1rem = 16px */
}

body {
  font-size: 1rem; /* 16px */
}

h1 {
  font-size: 2.5rem; /* 40px */
}

.small {
  font-size: 0.875rem; /* 14px */
}

.container {
  width: 60rem; /* 960px */
  padding: 2rem; /* 32px */
  margin: 1.5rem; /* 24px */
}
```

**Ventajas de `rem`:**

- ✅ Consistente en toda la página
- ✅ Respeta las preferencias del usuario
- ✅ Fácil de escalar todo el diseño
- ✅ Mejor para accesibilidad
- ✅ Cálculo sencillo (siempre relativo a la raíz)

**Técnica popular: Base de 10px**

```css
html {
  font-size: 62.5%; /* 10px (62.5% de 16px) */
}

body {
  font-size: 1.6rem; /* 16px */
}

h1 {
  font-size: 3.2rem; /* 32px */
}

.small {
  font-size: 1.4rem; /* 14px */
}
```

Esto hace los cálculos más intuitivos: `1.6rem = 16px`, `2.4rem = 24px`, etc.

**`em` (Em)**

`em` es relativo al tamaño de fuente del elemento padre.

**Cómo funciona:**

- `1em` = tamaño de fuente del elemento padre
- Se hereda y se multiplica en elementos anidados
- Puede ser confuso en estructuras profundas

**Ejemplo:**

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 0.8em; /* 16px (0.8 * 20px) */
  padding: 1em; /* 16px (1 * 16px del font-size del propio .child) */
}

.grandchild {
  font-size: 0.5em; /* 8px (0.5 * 16px del padre) */
}
```

**Problema de compounding (efecto multiplicador):**

```css
div {
  font-size: 1.2em;
}
```

```html
<div>
  <!-- 1.2em -->
  <div>
    <!-- 1.2 * 1.2 = 1.44em -->
    <div><!-- 1.2 * 1.44 = 1.728em --></div>
  </div>
</div>
```

Cada nivel multiplica el tamaño, lo que puede causar problemas inesperados.

**Cuándo usar `em`:**

- Para padding/margin que debe escalar con el texto
- Para componentes que deben ser proporcionales a su contexto
- Cuando quieres que algo se adapte al tamaño de su padre

**Ejemplo práctico:**

```css
button {
  font-size: 1rem;
  padding: 0.5em 1em; /* El padding se adapta al tamaño del texto del botón */
  border-radius: 0.25em;
}
```

#### Comparación y Recomendaciones

**Tabla comparativa:**

| Unidad | Relativa a          | Uso recomendado                                   | Ejemplo         |
| ------ | ------------------- | ------------------------------------------------- | --------------- |
| `px`   | Nada (absoluta)     | Bordes, sombras, detalles muy específicos         | `border: 1px`   |
| `rem`  | Fuente del `<html>` | Font-sizes, espaciados principales, anchos/altos  | `font-size: 2rem` |
| `em`   | Fuente del padre    | Padding/margin proporcional al texto del elemento | `padding: 1em`  |

**Buenas prácticas:**

- ✅ Usar `rem` para la mayoría de los tamaños (fuentes, espaciados, anchos)
- ✅ Usar `em` para padding/margin de componentes que deben escalar con su texto
- ✅ Usar `px` solo para bordes y detalles muy específicos
- ✅ Establecer una base clara en `html` para `rem`
- ❌ Evitar usar `px` para fuentes (afecta accesibilidad)
- ❌ Evitar anidaciones profundas con `em` (efecto multiplicador)

**Ejemplo de sistema de diseño:**

```css
/* Base */
html {
  font-size: 16px; /* o 62.5% para base de 10px */
}

/* Tipografía */
body {
  font-size: 1rem; /* 16px */
  line-height: 1.6;
}

h1 {
  font-size: 2.5rem; /* 40px */
}
h2 {
  font-size: 2rem; /* 32px */
}
h3 {
  font-size: 1.5rem; /* 24px */
}

/* Espaciados */
.container {
  padding: 2rem; /* 32px */
  margin: 0 auto;
}

/* Componentes */
button {
  font-size: 1rem;
  padding: 0.75em 1.5em; /* Proporcional al texto */
  border: 1px solid; /* Valor fijo pequeño */
}
```

## Recursos Adicionales y Práctica

### Videos de Kevin Powell (CSS Expert)

Kevin Powell es uno de los mejores educadores de CSS en YouTube. Aquí algunos recursos recomendados:

**Fundamentos de CSS:**

- [Learn CSS in 20 Minutes](https://www.youtube.com/watch?v=1PnVor36_40) - Introducción rápida y completa
- [CSS em and rem explained](https://www.youtube.com/watch?v=_-aDOAMmDHI) - Explicación de unidades relativas
- [CSS rem vs em units](https://www.youtube.com/watch?v=H4VH3XP_3Ac) - Diferencias entre rem y em

**Selectores CSS:**

- [CSS Specificity explained](https://www.youtube.com/watch?v=c0kfcP_nD9E) - Entendiendo la especificidad
- [Learn CSS Pseudo-classes In 8 Minutes](https://www.youtube.com/watch?v=3cGLHpyvHcw) - Pseudo-clases

**CSS Shorts (videos cortos):**

- [YouTube Shorts - Kevin Powell](https://www.youtube.com/@KevinPowell/shorts) - Tips rápidos de CSS

**Canal principal:**

- [Kevin Powell](https://www.youtube.com/@KevinPowell) - Suscríbete para aprender CSS moderno

### CSS Battle

**[CSS Battle](https://cssbattle.dev/)** es una plataforma de desafíos donde compites escribiendo el código CSS más corto posible para recrear diseños específicos.

**¿Por qué practicar en CSS Battle?**

- 🎯 Mejora tu comprensión de propiedades CSS
- 🧠 Desarrolla pensamiento creativo para resolver problemas
- ⚡ Aprendes técnicas avanzadas y trucos de CSS
- 🏆 Compites con otros desarrolladores
- 🎨 Practicas con diseños visuales reales

**Cómo empezar:**

1. Visita [cssbattle.dev](https://cssbattle.dev/)
2. Regístrate gratis
3. Comienza con los targets del Battle #1
4. Intenta recrear el diseño con CSS
5. Compara tu solución con otras de la comunidad

**Niveles de dificultad:**

- Battles numerados progresivamente (Battle #1, #2, #3...)
- Cada battle tiene múltiples targets
- Comienza con los primeros para aprender los fundamentos

> [!TIP]
> No te preocupes por hacer el código más corto al principio. Enfócate en lograr el diseño correctamente. Con la práctica aprenderás a optimizar.

**Ejemplo de un target:**

```
Target #1: Simply Square
Recrear un cuadrado naranja centrado en un fondo azul
```

**Recursos de CSS Battle:**

- [CSS Battle](https://cssbattle.dev/) - Plataforma principal
- [CSS Battle Solutions](https://github.com/topics/cssbattle) - Soluciones en GitHub
- [CSS Battle Tips](https://cssbattle.dev/tips) - Consejos y técnicas

### Otros Recursos Útiles

**Documentación:**

- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Documentación completa de CSS
- [CSS Tricks](https://css-tricks.com/) - Tutoriales y guías
- [Web.dev - Learn CSS](https://web.dev/learn/css/) - Curso completo de Google

**Herramientas:**

- [Can I Use](https://caniuse.com/) - Compatibilidad de propiedades CSS
- [CSS Gradient Generator](https://cssgradient.io/) - Generador de gradientes
- [ColorHunt](https://colorhunt.co/) - Paletas de colores

**Juegos y práctica:**

- [Flexbox Froggy](https://flexboxfroggy.com/#es) - Aprender Flexbox jugando
- [Grid Garden](https://cssgridgarden.com/#es) - Aprender Grid jugando
- [CSS Diner](https://flukeout.github.io/) - Practicar selectores

## Resumen

En esta sesión hemos aprendido:

- ✅ Qué es CSS y por qué es fundamental en desarrollo web
- ✅ Los tres lugares donde se puede colocar CSS (inline, internal, external)
- ✅ **DIRECTRIZ**: Usar **siempre CSS externo** para proyectos profesionales
- ✅ Selectores CSS: etiqueta, ID, clase, múltiples, anidados y pseudo-clases
- ✅ Propiedades CSS fundamentales de tipografía y color
- ✅ Cómo usar Google Fonts en nuestros proyectos
- ✅ Unidades CSS: px, rem y em, y cuándo usar cada una
- ✅ Recursos para seguir aprendiendo: Kevin Powell y CSS Battle

**Lo más importante:**

> [!IMPORTANT]
> **NO USAR CSS INLINE** ❌  
> **NO USAR CSS INTERNAL** ❌  
> **USAR SIEMPRE CSS EXTERNAL** ✅

Esto garantiza código mantenible, reutilizable y profesional.