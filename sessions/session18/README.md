Se ha enseñado correctamente a colocar el script: en el head y con defer (o type="module")

Se ha comentado como antiguamente se colocaba en el final del body <strike>o con domcontentloaded </strike> para evitar accesos nulos al DOM.

prohibido colocarlo al final del body
prohibido colocarlo en el head y el script con DOMcontentloaded

las buenas practicas son utilizar: defer o async (si el script no hace accesos al DOM...)

se ha explicado:

- `document.getElementByID`

se han visto los atributos de los elementos como `style` o `classList` y sus métodos `remove` o `add` (o más adelante: `toggle`)

- `element.addEventListener`  y programación dirigida por eventos.

se han añadido varios botones y se ha llegado a la conclusión que trabajar con ids llegará un momento que pueda no llegar a ser escalable...

Necesitamos otras herramientas. se ha explicado: `document.getElementsByClass`
y recibes una colección de elementos.

---

> Se ha introducido el Array y sus métodos.
>
> de éstos métodos se ha explicado hoy: `pop`, `push` y `forEach`
>
> se ha practicado el `forEach`y explicado qué es un funcion callback.

---

Se ha retomado la colección de botones y con un `forEach` se han asignado sus eventos de click.

El ejemplo lo tienes en ./example




