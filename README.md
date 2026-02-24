# PMI-2526

## Sobre la Asignatura

Programación de Medios Interactivos (PMI) es una asignatura fundamental que introduce los conceptos básicos de programación web. En este repositorio encontrarás todos los apuntes y proyectos de cada sesión, desde los fundamentos de HTML, CSS y JavaScript hasta conceptos más avanzados de desarrollo web.

## Sesiones Completadas

| #   | Sesión                         | Temas                                                                                                                                                                          | Proyectos |
| --- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| 1   | [Sesión 01 - Introducción a Web](./sessions/session01/) | <ul><li>Introducción a la asignatura</li><li>Visual Studio Code</li><li>Arquitectura cliente-servidor</li><li>Live Server</li><li>Introducción a HTML</li><li>Estructura básica de documentos HTML</li><li>Etiquetas principales</li></ul> | [helloworld](./sessions/session01/examples/helloworld/) |
| 2   | [Sesión 02 - HTML Avanzado](./sessions/session02/) | <ul><li>Imágenes</li><li>Listas (ordenadas y desordenadas)</li><li>Tablas</li><li>Contenedores (div y span)</li><li>Enlaces externos</li><li>Elementos multimedia (audio y video)</li></ul> | [helloworld-2](./sessions/session02/examples/helloworld-2/) |
| 3   | [Sesión 03 - HTML5 Semántico](./sessions/session03/) | <ul><li>Elementos block vs inline</li><li>Atributos generales (id, class, title)</li><li>Etiquetas semánticas HTML5 (header, main, footer, nav, aside, section, article)</li></ul> | [html5](./sessions/session03/examples/html5/) |
| 4   | [Sesión 04 - Introducción a CSS](./sessions/session04/) | <ul><li>CSS Places (Inline, Internal, External)</li><li>Selectores CSS (Tag, Id, Class, Multiple, Nested, Pseudo-Classes)</li><li>Propiedades CSS (font-family, font-size, line-height, font-weight, font-style, background-color, color)</li><li>Google Fonts</li><li>Unidades CSS (px, rem, em)</li></ul> | [harry](./sessions/session04/examples/harry/) |
| 5   | [Sesión 05 - Formularios HTML](./sessions/session05/) | <ul><li>Formularios (form, action, method)</li><li>Input (text, password, email, date, color, radio, checkbox)</li><li>Atributo name (importancia en submit y agrupación de radio)</li><li>Label (atributo for)</li><li>Button (type submit)</li><li>Textarea</li><li>Centrado con margin: 0 auto</li><li>Reset de font-family</li></ul> | [Session05](./sessions/session05/examples/session05/) |
| 6   | [Sesión 06 - CSS Box Model y Reset](./sessions/session06/) | <ul><li>CSS Reset (Meyer's Reset vs Josh Comeau's Modern Reset)</li><li>Box Model (content, padding, border, margin)</li><li>box-sizing: border-box</li><li>Propiedades shorthand de margin, padding y border</li><li>Propiedades lógicas (margin-inline, padding-block)</li><li>Display (block, inline, inline-block)</li><li>Width y Height</li></ul> | [reset](./sessions/session06/examples/reset/), [box-model](./sessions/session06/examples/box-model/) |
| 7   | [Sesión 07 - CSS: border-radius, box-shadow y height](./sessions/session07/) | <ul><li>Repaso de margin y border</li><li>border-radius (círculos, píldoras, formas orgánicas)</li><li>box-shadow (sombras múltiples, inset)</li><li>height: 100vh vs height: 100% vs height: 100dvh</li><li>cursor: pointer y cursores personalizados</li></ul> | [session07](./sessions/session07/examples/session07/) |

## Estructura del Repositorio

```
PMI-2526/
├── README.md
└── sessions/
    ├── session01/              # Introducción a Web
    │   ├── README.md
    │   └── examples/
    │       └── helloworld/     # Ejemplo básico de HTML
    ├── session02/              # HTML Avanzado
    │   ├── README.md
    │   └── examples/
    │       └── helloworld-2/   # CV con imágenes, tablas y multimedia
    ├── session03/              # HTML5 Semántico
    │   ├── README.md
    │   └── examples/
    │       └── html5/          # CV con etiquetas semánticas HTML5
    ├── session04/              # Introducción a CSS
    │   └── README.md
    ├── session05/              # Formularios HTML
    │   └── README.md
    ├── session06/              # CSS Box Model y Reset
    │   ├── README.md
    │   └── examples/
    │       ├── reset/          # Ejemplo de CSS Reset
    │       └── box-model/      # Ejemplo de Box Model
    └── session07/              # CSS: border-radius, box-shadow y height
        ├── README.md
        └── examples/
            └── session07/      # Ejemplos de border-radius, box-shadow, height y cursor
```

## Herramientas

- [x] Chrome (firefox, edge, opera, safari)
- [x] VSCode
- [x] Git
- [x] Github
- [x] Netlify
- [x] [Sqwoss](https://squoosh.app/)

## Extensiones

- [ ] HTMLHint
- [ ] <strike>Auto Close Tag</strike>
- [x] Auto Rename Tag
- [x] Live Server
- [ ] Live Share

## Shortcuts

- [x] Alt + ⬆
- [x] Alt + ⬇
- [x] Alt + Shift + ⬆
- [x] Alt + Shift + ⬇

## Emmet

- [x] ! + tab
- [x] lorem314 + tab

## VSCode configurations

- [x] Ctrl + S -> new binding save all.

## HTML

- !DOCTYPE
  - [x] !DOCTYPE html
  - [ ] !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"
  - [ ] !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"
  - [ ] !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"
  - [ ] !DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"
  - https://www.w3schools.com/tags/ref_html_dtd.asp

- [x] Tag Syntax
- [x] Attribut Sytax

---

- [x] html
  - [ ] lang
- [x] head
- [x] meta
  - [ ] https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/los-meta-tags-mas-importantes-y-su-funcion/
- [x] title
- [x] body
- [x] h1, h2, h3, h4, h5, h6
- [x] p
- [x] strong

---

- [x] Ejercicio. Hacer un CV

---

- [ ] Ejercicio. texto/apuntes PMI a html

---

- [x] a
- [x] img
  - [x] [lazy](https://web.dev/articles/browser-level-image-lazy-loading?hl=es-419)
  - [x] alt
  - [x] width & height // style
- [x] audio
  - [x] source
- [x] video
  - [x] source
- [x] ul
- [x] ol
- [x] li
- [x] table
  - [x] thead
    - [x] tr
    - [x] th
  - [x] tbody
    - [x] tr
    - [x] td

---

- [ ] Ejercicio. Choose your pokemon

---

- [x] Block vs inline
- [x] HTML Containers:
  - [x] div
  - [x] span
- [x] Attributs
  - [x] id
  - [x] class
  - [x] <strike>style</strike>
- [x] \***\*HTML5\*\***
  - [x] header
  - [x] nav
  - [x] main
  - [x] section
  - [x] article
  - [x] aside
  - [x] footer

---

- [x] Ejercicio. Buscar información sobre cada uno de los tags y su significado semantico

---

- [x] Ejercicio. Arreglar CV para que sea HTML5
- [ ] Ejercicio. Arreglar documentación para que sea HTM5.
- [ ] Ejercicio. Arreglar Pokemon Choose your Pokemon para que sea HTML5

---

- [x] form
- [x] label
- [x] input
  - [x] type: text
  - [x] type: email
  - [x] type: password
  - [x] type: number
  - [x] type: date
  - [ ] type: datetime
  - [x] type: checkbox
  - [x] type: radio
  - [x] type: color
- [x] textarea
- [x] select
- [x] option
- [x] button
  - [x] type: submit
  - [ ] type: reset

---

- [x] Ejercicio 6. Añade un formulario a tu CV para que contácten contigo.

---

## CSS

### CSS places

- [x] Inline
- [x] Internal
- [x] External

### CSS Selectors:

- [x] Tag Selector
- [x] Id Selector
- [x] Class Selector
- [x] Multiple Selectors
- [x] Nested Selectors
- [ ] Pseudo-Classes

- [x] [CSS Diner](https://flukeout.github.io/)

### CSS Properties:

> [!NOTE]
> [CSS properties popularity](https://chromestatus.com/metrics/css/popularity)

- [x] font-family
- [x] font-size
- [x] line-height
- [x] font-weight
- [x] font-style
- [x] background-color
- [x] color

### Google Fonts

### CSS Units:

- [x] px
- [x] rem
- [x] em
- [x] %
- [x] vw
- [x] vh

### Reset & Normalize

- [x] https://meyerweb.com/eric/tools/css/reset/
- [ ] https://necolas.github.io/normalize.css/
  - [ ] https://github.com/sindresorhus/modern-normalize
    - [ ] https://tailwindcss.com/docs/preflight
- [ ] https://piccalil.li/blog/a-more-modern-css-reset/
- [x] https://www.joshwcomeau.com/css/custom-css-reset/
- [ ] https://x.com/souporserious/status/1746311121949356469

#### Discussion

- [ ] https://www.reddit.com/r/webdev/comments/1bqymin/is_normalizecss_still_a_good_use_despite_being_6/

### CSS Properties:

- [x] border
  - [x] border-width
  - [x] border-style
  - [x] border-color
- [x] border-radius
  - [x] border-top-left-radius
  - [x] border-top-right-radius
  - [x] border-bottom-left-radius
  - [x] border-bottom-right-radius
- [x] box-shadow
- [x] width
- [x] height
- [x] background
- [x] background-image
- [x] background-repeat
- [x] background-size
- [ ] background-attachment
- [x] margin
  - [x] margin-top
  - [x] margin-right
  - [x] margin-bottom
  - [x] margin-left
  - [x] margin-inline
    - [x] margin-inline-start
    - [x] margin-inline-end
  - [x] margin-block
    - [x] margin-block-start
    - [x] margin-block-end
- [x] padding
  - [x] padding-top
  - [x] padding-right
  - [x] padding-bottom
  - [x] padding-left
  - [x] padding-inline
    - [x] padding-inline-start
    - [x] padding-inline-end
  - [x] padding-block
    - [x] padding-block-start
    - [x] padding-block-end
- [x] cursor
- [ ] outline
- [ ] display: block

### CSS Properties:

- [ ] text-decoration
- [ ] box-sizing
- [ ] text-align
- [ ] display: none
- [ ] display: inline-block
- [ ] calc()
- [ ] margin: 0 auto
- [ ] display: flex

### Flexbox

> [!IMPORTANT]
>
> - [CSS Tricks - CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
> - [Josh Comeau - An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

- [ ] display: flex
  - [ ] flex-direction
    - [ ] _row_
    - [ ] row-reverse
    - [ ] column
    - [ ] column-reverse
  - [ ] flex-wrap
    - [ ] wrap
    - [ ] wrap-reverse
    - [ ] _nowrap_
  - [ ] flex-flow
  - [ ] justify-content
    - [ ] _flex-start_
    - [ ] flex-end
    - [ ] center
    - [ ] space-between
    - [ ] space-around
    - [ ] space-evenly
  - [ ] align-items
    - [ ] flex-start
    - [ ] flex-end
    - [ ] center
    - [ ] _strech_
    - [ ] baseline
  - [ ] align-content
    - [ ] flex-start
    - [ ] flex-end
    - [ ] center
    - [ ] stretch
    - [ ] space-between
    - [ ] space-around
    - [ ] space-evenly
    - [ ] _normal_
  - [ ] gap
    - [ ] row-gap
    - [ ] column-gap
  - [ ] order
  - [ ] flex-grow
  - [ ] flex-shrink
  - [ ] flex-basis
  - [ ] flex
  - [ ] align-self

> [!IMPORTANT]
> [flexboxfroggy](https://flexboxfroggy.com/#es)

### Grid

> [!IMPORTANT]
>
> - [CSS Tricks - CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
> - [Josh comeau - An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)

- [ ] display: grid
- [ ] grid-template-columns
- [ ] grid-gap
- [ ] grid-column
  - [ ] grid-column-start
  - [ ] grid-column-end
  - [ ] `span`
- [ ] grid-row
  - [ ] grid-row-start
  - [ ] grid-row-end
  - [ ] `span`
- [ ] repeat(autofit, minmax())
- [ ] grid-template-areas
- [ ] grid-area

> [!NOTE]
> [layoutit](https://grid.layoutit.com/)

> [!IMPORTANT]
> [gridgarden](https://flexboxfroggy.com/#es)

### Positioning

- [ ] position:
  - [ ] relative
  - [ ] absolute
  - [ ] sticky
  - [ ] fixed
- [ ] top
- [ ] left
- [ ] right
- [ ] bottom
- [ ] z-index

### Transform

- [ ] transform:
  - [ ] rotate()
  - [ ] translate()
  - [ ] translateY()
  - [ ] translateX()
  - [ ] scale()

### Transitions

- [ ] transition:
  - [ ] transition-duration
  - [ ] transition-timing-function
  - [ ] transition-delay

### Animations

- [ ] animation:
  - [ ] animation-name
  - [ ] animation-duration
  - [ ] animation-timing-function
  - [ ] animation-delay
  - [ ] animation-iteration-count
  - [ ] animation-fill-mode
- [ ] @keyframes

#### Actividad

1. Crea una página web que tenga un spinner en el centro de la página. Sólo con css.

2. Modifica la página para que el spinner aparezca en la izquierda de la pantalla y se mueva y se quede en la derecha.

### Responsive

- [ ] @media
- [ ] min-width: 500px 👴
- [ ] width > 500px 👶
- [ ] HTML <link> tag Attribute: media="screen and (max-width: ...)"

#### Actividad

1. Crea una página web que tenga un título y un icono (centrados). Con las siguientes indicaciones:

- Este título será uno de los siguientes nombres (phone, tablet, laptop, desktop) y solo debe mostrarse si el tamaño de la pantalla corresponde al tamaño del dispositivo en cuestión.
- El icono también debe corresponder con el título mostrado.
- Además, se debe cambiar el color de fondo de la pantalla para cada dispositivo.
- Utiliza los iconos:

| Desktop                               | Laptop                              | Tablet                             | Phone                             |
| ------------------------------------- | ----------------------------------- | ---------------------------------- | --------------------------------- |
| ![desktop](./assets/desktop-icon.svg) | ![laptop](./assets/laptop-icon.svg) | ![phone](./assets/tablet-icon.svg) | ![phone](./assets/phone-icon.svg) |

### Frameworks

- [ ] Bootstrap 5.0
- [ ] Tailwind

## [Javascript](https://github.com/yurigo/javascript)

- [ ] hello world!
  - [ ] scripting
  - [ ] dynamic + weakly typed
- [ ] link script to the page
  - [ ] `defer`
  - [ ] `async`
  - [ ] `type="module"`
- [ ] `console.log("hello world")`
- [ ] `document`
  - [ ] `.getElementByID("ID")`
- [ ] 3rd party libraries

### Types

#### Primitive types ([📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values))

- [ ] Null
- [ ] Undefined
- [ ] Boolean
- [ ] Number
- [ ] BigInt
- [ ] String
- [ ] Symbol

#### Objects ([📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))

- [ ] Objetos
- [ ] Funciones
- [ ] [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ ] [Fechas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Functions ([📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions))

- [ ] Function declaration
- [ ] Function expression
- [ ] Arrow Function

### Promise ([📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise))

- [ ] [then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)/[catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

- [ ] [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

### Fetch API ([📚](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))

- [ ] then/catch
- [ ] async/await

### DOM Manipulation

- [ ] getElementById
- [ ] getElementsByClassName
- [ ] getElementsByTagName
- [ ] getElementsByName
- [ ] querySelector
- [ ] querySelectorAll
- [ ] style
- [ ] classList
- [ ] innerHTML
- [ ] innerText
- [ ] textContent
- [ ] getAttribute
- [ ] setAttribute
- [ ] removeAttribute
- [ ] createElement
- [ ] appendChild
- [ ] removeChild
- [ ] replaceChild
- [ ] insertBefore

### Event handling

- [ ] click
- [ ] submit
- [ ] change
- [ ] keydown
- [ ] keyup
- [ ] keypress
- [ ] focus
- [ ] blur
- [ ] mouseover
- [ ] mouseout
- [ ] mousemove
- [ ] mousedown
- [ ] mouseup
- [ ] mouseenter
- [ ] mouseleave
- [ ] touchstart
- [ ] touchend
- [ ] touchmove
- [ ] touchcancel
- [ ] scroll
- [ ] resize
- [ ] load
- [ ] addEventListener
- [ ] removeEventListener

### Ejercicios

TBD

### Boilerplate

[boilerplate](https://github.com/yurigo/vanilla-html-template)

## Deploy

- [ ] Netlify!!
- [ ] Vercel
- [ ] Github Pages
- [ ] Firebase Hosting
- [ ] Render
