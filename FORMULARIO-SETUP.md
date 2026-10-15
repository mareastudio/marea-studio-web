# Marea Studio — Formulario directo (rama de prueba)

**Repositorio canónico:** `mareastudio/marea-studio-web`  
**Rama:** `marea-contact-v1` (a partir de V2 de espaciados aprobada).  
**Estado:** código del envío AJAX listo; **sin activar ni probar recepción de una consulta real**. `main` y la web publicada no se modificaron.

## Integración elegida

Se propone **Formspree** porque permite gestionar un formulario en un sitio estático sin configurar un dominio de envío ni servidores propios. Formspree almacena las respuestas y puede notificarlas al **Target Email** verificado: `marea.studioweb@gmail.com`.

Referencia: https://help.formspree.io/articles/building-your-form/building-an-html-form/ y https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax

## Qué quedó implementado

- Formulario aprobado con sus seis campos originales; sin cambios de copy ni estructura.
- `<form>` con `data-formspree-endpoint=""` pendiente de asignar URL real.
- `script.js` envía `FormData` mediante `fetch(POST)` al endpoint de Formspree una vez configurado; ya no abre automáticamente una aplicación de correo.
- Validación HTML antes del envío, botón deshabilitado durante petición, límite de 20 s, manejo de error, confirmación accesible mediante `role=status`, reset tras éxito.
- Honeypot `_gotcha` oculto compatible con Formspree; el dashboard de Formspree debe tener configurada su protección antispam.
- **No existe un éxito falso:** si el endpoint no se ha configurado, el botón permanece deshabilitado y el usuario ve el email alternativo.

## Acción del propietario para activar el formulario

1. Entrar a https://formspree.io/register e iniciar sesión con el correo del estudio. Verificar el correo.
2. En Formspree, crear un formulario nuevo denominado **Contacto Marea Studio**.
3. Confirmar que el **Target Email** verificado es `marea.studioweb@gmail.com` y que las notificaciones están habilitadas.
4. Desde la sección **Integration**, copiar la URL exacta de endpoint, con forma `https://formspree.io/f/XXXXXXXX`. Esto es un identificador público de formulario, **no** una contraseña ni API key.
5. Compartir solo el enlace del endpoint con el asistente, para completar el valor de `data-formspree-endpoint` en `index.html` de **esta rama**.
6. Probar envío desde la preview con datos de prueba, confirmar recepción en el inbox de Formspree y en Gmail. Solo después marcar funcionalmente aprobado.

Si el servicio exige completar un CAPTCHA u otra verificación para AJAX, seguir la integración oficial según configuración de la cuenta y volver a probar. Nunca desactivar protección antispam automáticamente ni afirmar que llegan correos sin prueba real.

## Antes de pasar a producción

- QA real a 375px, 768px y 1440px; navegación, enlaces, respuestas FAQ y contraste.
- Test de envío real, mensaje de error, formulario inválido, anti-spam, notificación a Gmail y entregabilidad.
- Revisión de privacidad y términos de uso de servicios externos.
- **No fusionar a `main` ni asignar dominio productivo hasta aprobación expresa.**
