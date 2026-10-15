# Marea Studio — Registro del sistema de diseño

**Fecha de trabajo:** 14 de octubre de 2026  
**Etapa:** Paso 09 · **APROBADO** (14-10-2026).  
**Tablero:** [tokens.html](./tokens.html) — archivo independiente en la rama `paid-media-repositioning`.  
**Implementación de la web:** SIN CAMBIOS; no se editaron `index.html`, `styles.css` ni `script.js`.

## Fuente y trazabilidad

Se inspeccionaron los archivos de la propia marca en la rama de trabajo:

- `styles.css` (`:root`, botones, tipografía, responsive).
- `index.html` (carga de fuentes y vínculo al logo).
- `assets/brand/marea-logo-primary-dark.svg` (colores y familias originales).
- `assets/brand/marea-favicon-dark.svg` (tratamiento del monograma).

Los códigos abajo **no fueron extraídos a ojo de imágenes**: se copiaron del CSS y de los SVG reales. Los colores se escriben normalizados en mayúsculas; CSS los define en minúsculas, que son equivalentes.

## Tokens existentes de la marca (referencia, no propuestas nuevas)

| Token | Valor | Uso actual |
| --- | --- | --- |
| `--navy` | `#0D1B2A` | Hero, cabecera y fondos oscuros |
| `--blue` | `#1E3A5F` | Secciones secundarias |
| `--slate` | `#415A77` | Acentos y texto de apoyo en fondo claro |
| `--yellow` | `#FFE39A` | CTA principal y énfasis |
| `--paper` | `#F7F5F0` | Fondo claro y texto sobre azul |
| `--ink` | `#1A1F26` | Texto principal en superficies claras |
| `--serif` | `'DM Serif Display', serif` | Titulares y logotipo |
| `--sans` | `'Instrument Sans', sans-serif` | Cuerpo y logotipo |
| `--line` | `rgba(26,31,38,.18)` | Divisores |
| Alto de botón | `52px` mínimo | Botones principales |
| Contenedor | `1180px` máximo | Layout principal |
| Mobile estrecho | `16px` de margen a 375px | `@media (max-width: 420px)` |
| Secciones | `76px` mobile y `124px` desktop | CSS actual (según breakpoint) |

## Comprobaciones de contraste (WCAG relativo, valores calculados)

- Amarillo `#FFE39A` sobre navy `#0D1B2A`: **13,84:1**, excelente para texto y botón.
- Marfil `#F7F5F0` sobre navy `#0D1B2A`: **15,96:1**.
- Azul pizarra `#415A77` sobre marfil `#F7F5F0`: **6,53:1**.
- Azul pizarra `#415A77` sobre navy `#0D1B2A`: **2,45:1**; no utilizarlo para texto pequeño normal sobre este fondo.

## Tipografía — opción A APROBADA

A. **DM Serif Display + Instrument Sans** (APROBADA): es la pareja original y figura literalmente en el SVG del logotipo. Es coherente con la dirección editorial minimalista aprobada.
B. **Newsreader + Instrument Sans**: alternativa editorial más suave para titulares de web; el logotipo no cambia.
C. **Fraunces + Instrument Sans**: alternativa más expresiva para titulares de web; el logotipo no cambia.

Son fuentes de Google Fonts. Nunca modificar el lettering del logotipo desde estas pruebas.

## Tokens propuestos — línea de diseño aprobada

| Token | Propuesta | Justificación |
| --- | --- | --- |
| `--radius-sm` | `2px` | CTA casi recto; evitar el look de «card genérica» |
| `--radius-md` | `4px` | Opcional para objetos excepcionales |
| `--shadow-subtle` | `0 8px 24px rgba(13,27,42,.08)` | Usar solo cuando la elevación ayuda, no por decoración |
| `--button-min-height` | `52px` | Formalizar valor ya utilizado |
| `--gutter` | `16px` mobile, `40px` desktop | Formalizar valores existentes |
| `--content-max` | `1180px` | Formalizar valor existente |

## Componentes aprobados como dirección visual

- CTA primario: fondo amarillo + texto navy, `52px` alto mínimo, `2px` radio propuesto, sin sombra base; texto aprobado «Hablemos de tu negocio».
- Enlace secundario: texto marfil con subrayado fino, visualmente subordinado al CTA.
- Titulares: composición editorial con jerarquía tipográfica y márgenes amplios; sin fotos de stock ni decoraciones no funcionales.
- Bloques informativos: bordes/divisores finos; no tarjetas redondeadas sistemáticas.
- Vista a 375px: comprobación real pendiente antes del desarrollo final, el tablero es una muestra conceptual.

## Decisiones ya cerradas de otras etapas

- Mantener paleta azul profundo, amarillo pastel y marfil.
- Mantener logo original SVG.
- Dirección A: editorial minimalista.
- Estructura A orientada a conversión: `01 → 02 → 03 → 04 → 05 → 06 → 08 → 07 → 09` (identificadores de contenido; la numeración visual se actualiza más adelante).

## Pendientes / próximo paso

**Aprobación explícita recibida:** el usuario eligió «la A» ante la consulta de si se aprobaba la combinación A y la dirección editorial minimalista. Se conserva DM Serif Display para titulares e Instrument Sans para cuerpo/controles y el logotipo SVG original. Se adopta la dirección visual del tablero: CTA amarillo sobre navy, esquinas casi rectas (referencia de 2px), ausencia de sombras decorativas, separadores finos y espacios amplios. La validación visual y QA mobile siguen pendientes; medidas indicadas como «propuestas» podrán ajustarse por legibilidad o accesibilidad en implementación, sin alterar la identidad aprobada.

**Paso 10:** preparar la maquetación en una versión aislada/de revisión y validarla a 375px, tablet y desktop. Mantener sin cambios la web publicada, `main` y los archivos productivos hasta autorizar explícitamente la aplicación. No afirmar que existe formulario funcional antes de probar recepción de consultas.
