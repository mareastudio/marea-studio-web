# Marea Studio — Revisión final antes de publicar

**Fecha:** 15 de octubre de 2026  
**Repositorio canónico:** `mareastudio/marea-studio-web`  
**Rama:** `marea-final-review` (basada en `marea-contact-v1`, que incorpora los márgenes V2 aprobados)  
**Estado:** PREVIEW READY; **no fusionada a `main`; producción intacta**.

## Confirmaciones recibidas del usuario
- Estructura, copy, diseño y tipografías aprobados en las etapas anteriores.
- V2 de márgenes aprobada: «Sí. Quedó como quería».
- Formspree `https://formspree.io/f/xqpegerr`: usuario confirmó **«Llega excelente»** después de su prueba de envío en la preview anterior.

## Ajustes menores realizados en esta rama
1. Corregida solo la puntuación de la primera pregunta frecuente: «Nunca hice publicidad. ¿Puedo trabajar con Marea?».
2. Fallback nativo `action="https://formspree.io/f/xqpegerr"` y botón inicialmente habilitado, para que visitantes sin JavaScript puedan completar el envío usando la confirmación de Formspree; con JavaScript continúa el envío AJAX que confirmó el usuario.
3. Mejorada la visibilidad del foco de campos del formulario (subrayado amarillo de 2 px).
4. Se marca `aria-busy` durante el envío.
5. Aviso breve de tratamiento de datos bajo el formulario. No se incorporan rastreadores, testimonios ni promesas de rendimiento.

## QA estático ejecutado
- **9 secciones**, **1 H1**, **8 H2**, **5 FAQ**.
- IDs únicos; sin links de ancla rotos.
- Todos los labels del formulario apuntan a IDs presentes.
- Links con `target="_blank"` protegidos con `rel="noopener noreferrer"`.
- `required` presente en 5 campos, honeypot para spam, respuesta de éxito solo tras `response.ok`, mensajes de error; fallback nativo Formspree.
- Adaptaciones responsive `1070px, 800px, 500px, 360px` vigentes.
- Llaves de CSS/JS equilibradas.
- Logo y favicon originales.
- Botón principal no muestra confirmación exitosa por adelantado.
- No se encontraron en HTML/JS patrones de claves privadas.
- CSS mantiene el espaciado V2 aprobado.

## Pendientes antes del lanzamiento
- **QA visual en navegador real no ejecutada desde el entorno del asistente**: la preview está protegida o no accesible con la navegación disponible. Validar visualmente Safari en celular y escritorio, incluyendo que ningún título se corte.
- El usuario ya confirmó que llegó un mensaje de Formspree en la versión anterior; tras el ajuste de fallback es conveniente enviar **una sola nueva consulta de prueba** para confirmar que los cambios no introdujeron regresiones.
- Revisar si se necesita una política de privacidad formal según la actividad comercial y el tratamiento de datos antes del lanzamiento.
- Hacer la revisión visual de la V3 con el usuario y solicitar autorización expresa para fusionar a `main` y publicar.

## Política de publicación
**NO publicar en producción, NO fusionar a main y NO sustituir dominio** sin orden explícita del usuario.
