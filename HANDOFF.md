# Marea Studio — Handoff de decisiones

## Cerrado

- **Audiencia:** amplia, negocios, emprendedores y empresas de diversos rubros; no excluir nichos por ahora.
- **Dolores:** cinco hipótesis aprobadas, con prioridad en conseguir clientes sin desperdiciar inversión y comprender resultados. No presentarlas como validadas mediante entrevistas.
- **Portada:** titular «Probamos ideas. No probamos suerte.»; subtítulo «Tu negocio necesita clientes, no anuncios por anunciar. Diseñamos y gestionamos campañas en Instagram y Facebook con estrategia, creatividad y resultados medibles.»; CTA «Hablemos de tu negocio»; enlace secundario «Conocé cómo trabajamos».
- **Estilo de portada:** editorial minimalista, paleta actual de Marea y logo existente, sin decoración gratuita.
- **Sección 02 («El problema») aprobada:** titular «Más anuncios no siempre significan más clientes.»; tres situaciones (nunca anunció / anuncia sin entender resultados / recibe consultas con pocas ventas); puente «Tres situaciones diferentes. No se resuelven con la misma estrategia.»; cierre «No empezamos eligiendo anuncios. Empezamos haciendo las preguntas correctas.»
- **Sección 03 («Nuestra propuesta») aprobada:** etiqueta «03 / NUESTRA PROPUESTA», titular «Cada decisión tiene un porqué.» y cuerpo literal conservado en `copy-por-seccion.md`, incluyendo cierre «Porque una buena estrategia no es la que nunca cambia. Es la que sabe cuándo y por qué hacerlo.» Se eligió el tono editorial por encima de una explicación puramente transaccional.

## Sección 04 («Qué hacemos») — APROBADA (14-10-2026)

- Titular elegido: «El anuncio es solo una parte.» (opción A).
- Alcance de estrategia creativa aprobado: **estrategia y copy** (opción A). Marea define ideas, mensajes y textos publicitarios; **el cliente aporta imágenes y videos**. No incluir diseño de placas, carruseles, producción audiovisual ni edición de video como servicio comprometido.
- **Modelo comercial aprobado:** gestión de Meta Ads como servicio principal; landing pages y webs son servicios independientes que se cotizan por separado (no incluidos ni obligatorios con gestión publicitaria). Estrategia y copy forman parte de la propuesta publicitaria; el cliente aporta los materiales visuales.
- **Copy completo aprobado** por el usuario; versión definitiva en `copy-por-seccion.md`. Sin cambios en la web.
- **Sección 05 («Cómo trabajamos») APROBADA:** el usuario aprobó el titular B «Vos te ocupás de tu negocio. Nosotros, de tu publicidad.» y la totalidad del cuerpo, tres pasos y cierre de la versión 2. Se descartó el titular A «De la primera charla a la próxima mejora» por resultar menos directo y comercial. El texto íntegro está en `copy-por-seccion.md`; web sin cambios.
- **Sección 06 («Confianza y transparencia») APROBADA:** el usuario aprobó el texto completo, titular A «Una promesa que no hacemos: garantizarte ventas.», cuerpo y cierre «Preferimos una conversación honesta a una cifra inventada.»; la alternativa B fue descartada. Texto definitivo en `copy-por-seccion.md`.
- **Sección 07 («Preguntas frecuentes») APROBADA:** cinco preguntas con cotización personalizada, sin publicar precios; texto definitivo en `copy-por-seccion.md`.
- **Sección 08 («Primera conversación») APROBADA:** el usuario aprobó el texto completo y CTA «Hablemos de tu negocio»; sin precios ni promesas de auditorías gratuitas.
- **Sección 09 («Contacto») APROBADA:** título «Ahora sí, hablemos de tu negocio.», cuerpo, formulario corto y CTA «Enviar consulta». Se aprobó el copy, no la implementación del envío; la web mantiene su funcionamiento existente.
- **Paso 7:** las nueve secciones de copy quedaron aprobadas. La revisión general detectó posibles redundancias 08/09 y 03/05, además de una puntuación mejorable en la primera pregunta de FAQ. No reescribir el copy aprobado sin nueva aprobación.
- **Paso 8:** tres secuencias adaptadas a servicios documentadas en `estructura-variantes.md`; **se aprobó la A**. No hay casos de éxito verificados documentados para declarar una secuencia de «prueba primero».

## Alternativas descartadas de portada

- «Tu presupuesto no está para improvisar.»: se prefirió el carácter de la opción A.
- «No se trata de aparecer. Se trata de llegar a las personas correctas.»: menos distintiva que la elegida.
- Subtítulo explicativo «Antes de lanzar un anuncio, entendemos tu negocio...» y otras variantes: se eligió subtítulo más comercial.
- CTA «Contanos qué querés conseguir» y «Quiero impulsar mi negocio»: se eligió la opción abierta y cercana.
- Dirección editorial con gráfica propia: se priorizó la editorial minimalista para dejar protagonismo al mensaje.
- «Sin fórmulas mágicas»: se descartó por sonar a fórmula habitual del sector.

## Reglas de trabajo

- Aprobar cada sección antes de pasar a la siguiente.
- No modificar los archivos de la web durante la etapa de copy.
- Mantener la rama `paid-media-repositioning` para documentación, sin tocar `main`.
- El desarrollo visual y de estructura continúa después de cerrar el copy.

## Paso 08 — estructura APROBADA (14-10-2026)

- Se eligió explícitamente la variante **A, orientada a conversión**.
- Orden de IDs del copy: **01 Portada → 02 Problema → 03 Propuesta → 04 Servicios → 05 Proceso → 06 Transparencia → 08 Primera conversación (CTA intermedio) → 07 FAQ → 09 Contacto**.
- Se descartaron las alternativas B (confianza primero) y C (método primero). La variante A presenta la propuesta de valor y los servicios antes de desarrollar la metodología.
- En la implementación renumerar etiquetas visibles según el orden, sin reescribir el contenido aprobado.

## Paso 09 — sistema visual APROBADO (14-10-2026)

- Se inspeccionaron `styles.css`, `index.html` y SVG originales para tomar colores y fuentes sin estimación visual.
- `tokens.html` presenta la paleta auténtica, el CTA y tres alternativas tipográficas; no cambia el sitio.
- `design-system-record.md` registra fuentes de cada token, contrastes, propuestas y decisiones pendientes.
- **Decisión explícita:** opción tipográfica **A** — DM Serif Display + Instrument Sans — y línea editorial minimalista aprobadas. CTA amarillo/navy, esquinas casi rectas (~2px), divisores finos, sin sombras decorativas por defecto, logo SVG original.
- Solo archivos de documentación/tablero en la rama `paid-media-repositioning`; `main` y la web publicada no se modificaron.

## Paso 10 — próximo trabajo, SIN PUBLICAR

- Preparar maqueta/implementación revisable aislada; no alterar la web publicada ni `main` sin aprobación explícita.
- Respetar copy y orden aprobados; diferenciar sección 08 (CTA de transición) y sección 09 (formulario).
- QA 375px, tablet, desktop, navegación, accesibilidad, performance y envío real del formulario antes de cualquier publicación.

## Corrección de repositorio y entorno — 14-10-2026

- **Único repositorio canónico para la web conectada a Vercel:** `mareastudio/marea-studio-web` (organización `mareastudio`, rama productiva `main`).
- El repositorio `MarianEsteban/marea-studio-web` es otro repo distinto y se utilizó por error en las fases anteriores. **No continuar desarrollando ni buscando previews de Marea allí.**
- Se migraron la maqueta visual V1 (`index.html`, `styles.css`, `script.js`) y toda la documentación de decisiones desde la rama del repo equivocado a una nueva rama `marea-visual-v1` del repositorio canónico.
- El logo y favicon del repositorio canónico coinciden exactamente con los de la maqueta.
- Vercel detectó automáticamente `mareastudio/marea-studio-web` / `marea-visual-v1` y creó preview READY. No se modificó `main` ni la publicación productiva. La revisión visual real del usuario sigue pendiente.

## Paso 10 — versión visual V2 APROBADA (14-10-2026)

- El usuario revisó y aprobó expresamente la V2 de espaciado: «Sí. Quedó como quería».
- **Repositorio:** `mareastudio/marea-studio-web`. **Rama canónica de revisión actual:** `marea-spacing-v2` (proveniente de `marea-visual-v1`).
- Mantener los márgenes laterales, recortar aire vertical global y reservar más espacio para secciones de valor y transparencia. El copy, logo y tipografía no se modificaron en V2.
- **Pendientes antes de publicar:** decidir y comprobar mecanismo real de recepción de formulario (actualmente `mailto:`), QA visual/funcional mobile y desktop, validaciones de accesibilidad y performance. No tocar `main` ni el dominio publicado hasta autorización específica.

## Integración de contacto — preview (14-10-2026)

- **Rama vigente de implementación del formulario:** `marea-contact-v1`, creada desde la V2 de diseño aprobada `marea-spacing-v2`.
- El usuario proporcionó el endpoint público `https://formspree.io/f/xqpegerr`; quedó conectado en `index.html`. `script.js` realiza POST AJAX y usa mensajes de éxito/error, no `mailto:`.
- Despliegue preview Vercel READY; producción `main` intacta.
- **Sin prueba de recepción final:** se intentó enviar desde el entorno del asistente, pero falló la resolución DNS de `formspree.io`; no se hizo envío. La persona usuaria debe probar desde su navegador y confirmar entrada en Formspree y notificación a Gmail antes de publicación.
