# Sesión 21 - Corrección de la Cuenta Atrás y Presentación de la Práctica

**Fecha:** 5 de mayo de 2026

## Contenidos de la Sesión

Esta sesión se dedicó a dos partes diferenciadas. En la primera mitad se realizó una **corrección en directo de la cuenta atrás hasta una fecha** construida en las sesiones 19 y 20.

## Entregas

<iframe width="100%" height="600" src="https://mybirthday-eta.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://birthdaycountdown-lime.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://arnauvavi.github.io/contadorcumple/">
</iframe>

<iframe width="100%" height="600" src="https://temporizador-cumple.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://Honza1414.github.io/interactive-media">
</iframe>

<iframe width="100%" height="600" src="https://joeltempest56.github.io/Mi-cumplea-os/">
</iframe>

<iframe width="100%" height="600" src="https://pmicumplejordicarrasco.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://cuenta-atras-kohl.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://birthday-countdown-alpha-umber.vercel.app/">
</iframe>

# Presentació de la Pràctica

## TripPlanner+

### Objetivo General

Desarrollar **TripPlanner+**, una plataforma web interactiva y moderna para la planificación personalizada de viajes.

Esta aplicación permitirá a los usuarios crear y gestionar sus viajes, añadiendo actividades por días y consultando información meteorológica actualizada.

TripPlanner+ buscará proporcionar una experiencia de usuario fluida y eficiente, simulando características comunes de aplicaciones de planificación de viajes.

---

### Descripción del Proyecto

TripPlanner+ será una aplicación web dinámica que simulará un entorno de planificación de viajes.

Los usuarios podrán crear viajes, añadir actividades o puntos de interés, y consultar el tiempo de su destino en tiempo real.

La aplicación también ofrecerá visualizaciones atractivas y una interfaz intuitiva para facilitar la gestión y consulta de viajes.

---

### Requisitos

#### 1. Interfaz de Usuario

- Desarrollar una interfaz responsiva y visualmente atractiva que sea intuitiva y fácil de usar.
- Implementar interacciones dinámicas utilizando JavaScript para mejorar la experiencia del usuario, como menús desplegables, diálogos modales y formularios interactivos.

#### 2. Funcionalidades de la Aplicación

- **Creación y gestión de viajes:** Permitir a los usuarios crear nuevos viajes con información básica (nombre, fechas, origen, destino).
- **Actividades dentro del viaje:** Posibilidad de añadir, editar o eliminar actividades asociadas a un viaje concreto (título, descripción, hora o día).
- **Consulta del tiempo:** Para garantizar la coherencia entre todos los proyectos, se deberá utilizar la API pública de OpenWeatherMap (versión gratuita) para todas las consultas meteorológicas. No se permite utilizar otros servicios o APIs alternativas.
- **Sugerencias de viaje:** Implementar una función de sugerencias para que los usuarios puedan interactuar con una IA (Gemini) y que esta dé sugerencias de viaje.

#### 3. Requisitos Técnicos

- El desarrollo de la práctica se debe realizar utilizando **vanilla HTML, CSS y vanilla JavaScript** (sin ningún framework o librería externa).
- Se permite el uso opcional de frameworks CSS para mejorar el diseño y la responsividad, como Bootstrap o TailwindCSS.
- **No se permite** el uso de frameworks de JavaScript como React, Vue, Angular...

---

### Descripción Detallada de las Páginas y Funcionalidades

#### Página Principal (Home)

**Objetivo:** Dar la bienvenida a los usuarios y explicar las ventajas de utilizar TripPlanner+.

**Contenidos:**

- **Mensaje de Bienvenida:** Breve introducción a la plataforma.
- **Descripción de Características:** Enumeración de las principales funcionalidades como la gestión de viajes, consulta del tiempo y sistema de sugerencias.

---

#### Pantalla de Viajes

**Objetivo:** Permitir la visualización y gestión de los viajes creados.

**Funcionalidades:**

- Listado de viajes guardados.
- Formulario para añadir nuevos viajes (nombre, fechas, destino).
- Posibilidad de ver, editar o eliminar viajes.
- Por cada viaje, posibilidad de añadir actividades diarias.
- Los datos se deben guardar automáticamente para que se mantengan después de cerrar el navegador.

---

#### Pantalla de Clima

**Objetivo:** Mostrar información meteorológica del destino seleccionado.

**Funcionalidades:**

- Consulta de datos mediante una API pública de meteorología.
- Mostrar temperatura actual, estado del cielo, icono y fecha.
- Opcionalmente, mostrar también la previsión de los próximos días.

---

#### Página Sobre Nosotros (About Us)

**Objetivo:** Informar a los usuarios sobre los creadores del proyecto y su misión.

**Contenidos:**

- **Información del Equipo:** Breves biografías o descripciones del equipo detrás de TripPlanner+.
- **Misión y Visión:** Explicación de los objetivos y aspiraciones del proyecto.
- **Contacto:** Información de contacto o formulario para enviar mensajes al equipo de TripPlanner+ con campos como Nombre, Apellidos, Email, Mensaje…
- Cuando el usuario rellene el formulario de contacto, debe llegar un correo al equipo de TripPlanner+ y otro al cliente que ha escrito el mensaje indicándole que se han recibido sus consultas y que el equipo las responderá lo antes posible.
- Para realizar el envío de mails, se propone hacerlo a través de la **API REST de EmailJS** haciendo uso de FETCH/AJAX/Axios o similar, pero queda **estrictamente prohibido** usar su SDK.

---

#### Sistema de Sugerencias IA

**Objetivo:** Simular un sistema para permitir a los usuarios obtener sugerencias sobre nuevos viajes.

**Funcionalidades:**

- **Interfaz de Sugerencias:** Área de mensajes donde los usuarios pueden escribir y enviar mensajes.
- **Respuestas Automáticas:** Implementación de respuestas automáticas utilizando la **API de Gemini de Google**.
- **Formato de Chat Realista:** Diseño que emula aplicaciones de chat reales, con mensajes entrantes y salientes claramente diferenciados.
- La funcionalidad de sugerencias IA se debe implementar obligatoriamente utilizando la API de Gemini de Google. Esta solo se utilizará para generar ideas o sugerencias de destinos o actividades de viaje, sin funciones adicionales de análisis o recomendaciones personalizadas avanzadas.

> En la sesión 23 se proporcionará un ejemplo de cómo integrar la API de Gemini de Google para generar respuestas automáticas a partir de las preguntas o mensajes enviados por los usuarios en el sistema de sugerencias IA.

---

#### Gestión y Persistencia de Datos

**Objetivo:** Garantizar que los datos del viaje y las actividades se mantengan disponibles después de cerrar el navegador.

**Tecnología a utilizar:** Se hará uso de **LocalStorage**, que permite almacenar información de forma persistente en el navegador del usuario.

- Todos los datos (viajes, actividades, etc.) se deben guardar exclusivamente en el LocalStorage del navegador.
- **No se permite** el uso de bases de datos remotas, ni ningún tipo de backend o servidor para la persistencia.
