# PMI-2526

## Sobre la Asignatura

Programación de Medios Interactivos (PMI) es una asignatura fundamental que introduce los conceptos básicos de programación web. En este repositorio encontrarás todos los apuntes y proyectos de cada sesión, desde los fundamentos de HTML, CSS y JavaScript hasta conceptos más avanzados de desarrollo web.

## Sesiones Completadas

| #   | Sesión                         | Temas                                                                                                                                                                          | Proyectos |
| --- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| 1   | Sesión 01 - Introducción a Web | Introducción a la asignatura, Visual Studio Code, Arquitectura cliente-servidor, Live Server, Introducción a HTML, Estructura básica de documentos HTML, Etiquetas principales | -         |
| 2   | Sesión 02 - HTML Avanzado      | Imágenes, Listas (ordenadas y desordenadas), Tablas, Contenedores (div y span), Enlaces externos, Elementos multimedia (audio y video)                                         | -         |
| 3   | Sesión 03 - HTML5 Semántico    | Elementos block vs inline, Atributos generales (id, class, title), Etiquetas semánticas HTML5 (header, main, footer, nav, aside, section, article)                             | -         |

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
    └── session03/              # HTML5 Semántico
        ├── README.md
        └── examples/
            └── html5/          # CV con etiquetas semánticas HTML5
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

- [ ] form
- [ ] label
- [ ] input
  - [ ] type: text
  - [ ] type: email
  - [ ] type: password
  - [ ] type: number
  - [ ] type: date
  - [ ] type: datetime
  - [ ] type: checkbox
  - [ ] type: radio
- [ ] textarea
- [ ] select
- [ ] option
- [ ] button
  - [ ] type: submit
  - [ ] type: reset

---

- [ ] Ejercicio 6. Añade un formulario a tu CV para que contácten contigo.

---

## CSS

### CSS places

- [ ] Inline
- [ ] Internal
- [ ] External

### CSS Selectors:

- [ ] Tag Selector
- [ ] Id Selector
- [ ] Class Selector
- [ ] Multiple Selectors
- [ ] Nested Selectors
- [ ] Pseudo-Classes

- [ ] [CSS Diner](https://flukeout.github.io/)

### CSS Properties:

> [!NOTE]
> [CSS properties popularity](https://chromestatus.com/metrics/css/popularity)

- [ ] font-family
- [ ] font-size
- [ ] line-height
- [ ] font-weight
- [ ] font-style
- [ ] background-color
- [ ] color

### Google Fonts

### CSS Units:

- [ ] px
- [ ] rem
- [ ] em
- [ ] %
- [ ] vw
- [ ] vh

### Reset & Normalize

- [ ] https://meyerweb.com/eric/tools/css/reset/
- [ ] https://necolas.github.io/normalize.css/
  - [ ] https://github.com/sindresorhus/modern-normalize
    - [ ] https://tailwindcss.com/docs/preflight
- [ ] https://piccalil.li/blog/a-more-modern-css-reset/
- [ ] https://www.joshwcomeau.com/css/custom-css-reset/
- [ ] https://x.com/souporserious/status/1746311121949356469

#### Discussion

- [ ] https://www.reddit.com/r/webdev/comments/1bqymin/is_normalizecss_still_a_good_use_despite_being_6/

### CSS Properties:

- [ ] border
  - [ ] border-width
  - [ ] border-style
  - [ ] border-color
- [ ] border-radius
  - [ ] border-top-left-radius
  - [ ] border-top-right-radius
  - [ ] border-bottom-left-radius
  - [ ] border-bottom-right-radius
- [ ] box-shadow
- [ ] width
- [ ] height
- [ ] background
- [ ] background-image
- [ ] background-repeat
- [ ] background-size
- [ ] background-attachment
- [ ] margin
  - [ ] margin-top
  - [ ] margin-right
  - [ ] margin-bottom
  - [ ] margin-left
  - [ ] margin-inline
    - [ ] margin-inline-start
    - [ ] margin-inline-end
  - [ ] margin-block
    - [ ] margin-block-start
    - [ ] margin-block-end
- [ ] padding
  - [ ] padding-top
  - [ ] padding-right
  - [ ] padding-bottom
  - [ ] padding-left
  - [ ] padding-inline
    - [ ] padding-inline-start
    - [ ] padding-inline-end
  - [ ] padding-block
    - [ ] padding-block-start
    - [ ] padding-block-end
- [ ] cursor
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
