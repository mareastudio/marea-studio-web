# Marea Studio — Vista visual V1 / estado y QA

**Fecha:** 14-10-2026  
**Repositorio CANÓNICO vinculado a Vercel:** `mareastudio/marea-studio-web`  
**Rama aislada:** `marea-visual-v1`  
**Estado:** nueva maquetación implementada para revisión. **NO publicada**. `main` y los dominios de producción no se modificaron mediante esta tarea.

## Archivos de la versión visual V1
- `index.html` — nueve secciones aprobadas, en estructura A; IDs visuales continuos 01–09.
- `styles.css` — paleta aprobada, tipografía DM Serif Display + Instrument Sans, diseño responsive y componentes editoriales.
- `script.js` — menú móvil, Escape para cerrarlo, cierre al navegar, actualización de año, contacto mediante composición de correo.
- `assets/brand/marea-logo-primary-dark.svg` y `assets/brand/marea-favicon-dark.svg` — activos originales sin cambios.

## QA estático (inspección de contenido en GitHub)
- Se encontraron **9 secciones**, en orden: inicio → punto-de-partida → propuesta → servicios → proceso → transparencia → primer-paso → preguntas → contacto.
- **5 FAQ** desplegables mediante `<details>`; **3** servicios; **3** pasos de proceso.
- Anclas internas: **sin destinos faltantes**.
- IDs: **sin duplicados**.
- CSS: **llaves equilibradas**, breakpoints 1070, 800, 500 y 360 px.
- Formulario: campos definidos, validaciones HTML `required` y email; **todavía no usa backend**.
- El envío usa `mailto:` y requiere acción final del visitante en su app de correo, explicado explícitamente en la página.
- No hay afirmaciones inventadas de resultados ni testimonios.

## Limitaciones / bloqueadores
1. **Preview Vercel RESUELTA:** el bloqueo anterior se debía a que las primeras tareas se hicieron por error en `MarianEsteban/marea-studio-web`, que no es el repositorio conectado a Vercel. Se transfirieron los archivos y documentos a la nueva rama `marea-visual-v1` en `mareastudio/marea-studio-web`; Vercel detectó automáticamente el push y generó un despliegue en estado `READY`, de tipo preview (`target: null`). Vista previa de referencia: `https://marea-studio-at08rkqwh-mariano-esteban.vercel.app` (puede requerir iniciar sesión en Vercel por Deployment Protection). La conexión a producción no se modificó.
2. **QA visual real:** no se han ejecutado pruebas de renderizado en navegador desktop/375px sobre esta rama; el CSS responsive está implementado, pero falta verificación visual y de accesibilidad real.
3. **Formulario:** la apertura de correo no confirma envío. Antes de ponerlo en producción, decidir si se mantiene el fallback o si se implementa un endpoint seguro de recepción, con protección anti-spam.
4. **FAQ:** la primera pregunta conserva la puntuación literal previamente aprobada «¿Nunca hice publicidad. Puedo trabajar con Marea?»; está anotada para corrección editorial posterior («Nunca hice publicidad. ¿Puedo trabajar con Marea?») sin alterar silenciosamente el copy aprobado.
5. **Copy adicional mínimo no aprobado:** pequeños textos de apoyo/navegación añadidos para componer interfaz (por ejemplo, eyebrow auxiliar y línea introductoria del FAQ); revisarlos al evaluar la maqueta.

## Continuación sugerida
- Abrir el código de la rama `marea-visual-v1` para revisar cambios; vista navegable requiere host de preview o correr el sitio como estático localmente.
- **Preview creada;** revisar el sitio en Safari iniciando sesión en Vercel si Deployment Protection lo exige. No publicar en producción.
- Testear visualmente 375px, 768px, 1440px, menú, acordeones, anclas y campos obligatorios.
- Revisar copy final, conexión de contacto y aprobar ajustes antes de fusionar a `main`.
