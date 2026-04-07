# Responsividad# 📱💻 Responsividad en Diseño Web

## 🧠 ¿Qué es la responsividad?

La **responsividad** es la capacidad de una página web para adaptarse a diferentes tamaños de pantalla (móvil, tablet, laptop, desktop).

👉 No son varias webs  
👉 Es **una sola web que se adapta**

---

## 🎯 ¿Por qué es importante?

- 📱 La mayoría de usuarios navega desde móvil  
- 👀 Mejora la experiencia de usuario  
- 🚀 Es un estándar en diseño web moderno  

> “Si una web no es responsive, está mal diseñada.”

---

## ⚙️ ¿Cómo funciona?

### 🔹 Media Queries

Permiten aplicar estilos según el tamaño de pantalla.

```css
@media (max-width: 600px) {
  body {
    background-color: red;
  }
}
```

Si la pantalla es menor o igual a 600px → cambia el estilo

## Breakpoints (puntos de cambio)

- 📱 Móvil → hasta 600px
- 📲 Tablet → 600px – 1024px
- 💻 Laptop → 1024px – 1440px
- 🖥️ Desktop → más de 1440px


### 🧩 Sintaxis de Media Queries

#### ✅ Sintaxis clásica (recomendada)

```css
@media (max-width: 600px) { }
@media (min-width: 600px) { }
max-width → hasta ese tamaño
min-width → desde ese tamaño
``` 

#### 🆕 Sintaxis moderna

```css
@media (width <= 600px) { }
@media (width >= 600px) { }
```

👉 Más intuitiva, pero menos compatible


## 📱💻 Mobile First vs Desktop First

### 📱 Mobile First

Diseñas primero para móvil y luego amplías.

```css
/* móvil por defecto */

@media (min-width: 600px) {
  /* tablet */
}
```

- Construyes hacia arriba
- Añades contenido

### 💻 Desktop First

Diseñas primero para ordenador y luego reduces.

```css
/* desktop por defecto */

@media (max-width: 600px) {
  /* móvil */
}
```

- Construyes hacia abajo
- Vas recortando