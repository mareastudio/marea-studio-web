# Marea Studio — Formulario directo (rama de prueba)

**Repositorio canónico:** `mareastudio/marea-studio-web`  
**Rama:** `marea-contact-v1` (a partir de V2 de espaciados aprobada).  
**Estado:** endpoint de Formspree **configurado** por el usuario; integración AJAX habilitada en la preview. **Falta una prueba real desde el navegador y verificar recepción en Formspree y Gmail.** `main` y la web publicada no se modificaron.

## Integración elegida

Se propone **Formspree** porque permite gestionar un formulario en un sitio estático sin configurar un dominio de envío ni servidores propios. Formspree almacena las respuestas y puede notificarlas al **Target Email** verificado: `marea.studioweb@gmail.com`.

Referencia: https://help.formspree.io/articles/building-your-form/building-an-html-form/ y https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax

## Qué quedó implementado

- Formulario aprobado con sus seis campos originales; sin cambios de copy ni estructura.
- `<form>` con `data-formspree-endpoint="https://formspree.io/f/xqpegerr"` configurado en la rama de preview, de acuerdo con el enlace aportado por el usuario. Es un endpoint público de formularios, no un secreto.
- `script.js` envía `FormData` mediante `fetch(POST)` al endpoint de Formspree una vez configurado; ya no abre automáticamente una aplicación de correo.
- Validación HTML antes del envío, botón deshabilitado durante petición, límite de 20 s, manejo de error, confirmación accesible mediante `role=status`, reset tras éxito.
- Honeypot `_gotcha` oculto compatible con Formspree; el dashboard de Formspree debe tener configurada su protección antispam.
- **No existe un éxito falso:** el botón se habilita cuando el endpoint tiene un formato válido y JavaScript inicializa; un mensaje de éxito solo aparece tras respuesta HTTP satisfactoria. Si el endpoint falta o tiene formato inválido, se mantiene deshabilitado.

## Configuración recibida y prueba pendiente

- Endpoint proporcionado por el usuario el 14-10-2026: `https://formspree.io/f/xqpegerr`.
- Código conectado en `index.html` de la rama `marea-contact-v1` y deployment de Vercel `READY`.
- Se intentó un envío de prueba desde el entorno de ejecución del asistente, pero la conexión externa falló por DNS (`Could not resolve host: formspree.io`, HTTP 000). **No hay constancia de envío ni recepción.**
- **Siguiente paso del usuario:** abrir la URL de preview, completar una consulta con el nombre «PRUEBA FORMULARIO MAREA», presionar Enviar consulta y comprobar que aparezca el mensaje de confirmación. Después revisar el inbox de Formspree y `marea.studioweb@gmail.com` (incluyendo spam). Confirmar que el Target Email esté verificado y que las notificaciones estén activas.
- Ante error `429` esperar y reintentar; evitar múltiples envíos innecesarios. Formspree cuenta con controles de spam y CAPTCHA. No se puede certificar recepción en Gmail solo a partir de la respuesta HTTP.

## Antes de pasar a producción

- QA real a 375px, 768px y 1440px; navegación, enlaces, respuestas FAQ y contraste.
- Test de envío real, mensaje de error, formulario inválido, anti-spam, notificación a Gmail y entregabilidad.
- Revisión de privacidad y términos de uso de servicios externos.
- **No fusionar a `main` ni asignar dominio productivo hasta aprobación expresa.**
