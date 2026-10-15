# Marea Studio — Spacing V2 / Auditoría de ritmo visual

**Fecha:** 14-10-2026. **Repositorio canónico:** `mareastudio/marea-studio-web`.  
**Rama:** `marea-spacing-v2` (creada desde `marea-visual-v1`).  
**Objetivo de esta V2:** reducir aire excesivo arriba y abajo y equilibrar la densidad del sitio en desktop, tablet y celular. **No modificar copy, branding ni producción.**

## Cambios de espaciado

| Elemento | V1 | V2 | Motivo |
| --- | --- | --- | --- |
| Padding vertical general (escritorio 1440px, por lado) | `144px` | `109.44px` | Reducir altura acumulada sin perder aire |
| Margen etiqueta → contenido a 1440px | `108px` | `72px` | Mejor jerarquía y cohesión |
| Padding vertical general en 375px | `80px` | `68px` | Compactar recorrido móvil |
| Margen etiqueta → contenido en 375px | `44px` | `34px` | Evitar espacios desproporcionados |
| Servicios, padding arriba/abajo de fila desktop | `42px` | `31px` | Listado más continuo |
| «El primer paso», margen etiqueta → contenido móvil | `80px` | `34px` | Solucionar inconsistencia de especificidad CSS |
| «El primer paso», padding vertical en 375px | `80px` | `62px` | CTA intermedio ágil |
| Footer, margen antes de copyright en desktop | `75px` | `45px` | Cierre menos largo |
| Footer, margen antes de copyright móvil | `58px` | `35px` | Cierre compacto |

También se ajustaron: altura mínima de hero, espacio entre portada y subtítulo/CTA, párrafos del problema, conclusión, encabezado de servicios, cierre de servicios, separación y relleno de pasos, cierre del proceso, bloque de transparencia, párrafos de invitación, acordeón FAQ, separación del contacto y margen de email.

**Excepciones intencionales:** se conserva más espacio en «Nuestra propuesta» y «Sin promesas vacías» para que funcionen como pausas editoriales. El hero sigue siendo protagonista; no reducimos el margen lateral del contenedor (1180px máximo, 20px en celular estrecho).

## Comprobaciones de código

- `styles.css` V2: llaves `{}` equilibradas.
- Los breakpoints `1070px`, `800px`, `500px`, `360px` siguen presentes.
- Se verificaron los overrides móviles de sección, etiqueta, hero e invitación.
- `index.html` mantiene el SHA `1712b5610d7a933ebe80ff9a2c613acefc4c1cbd`, idéntico a V1.
- `main/index.html` mantiene el SHA `896079bf072acb3737e8cb46c4e1f4d6184493c4` comprobado durante el trabajo.
- La paleta y fuentes originales permanecen intactas.

## Validación pendiente

Este control verifica reglas y consistencia de archivos, pero **no equivale a una inspección visual de screenshots renderizados** en 375/768/1440px ni prueba el formulario. La vista previa de Vercel se creó correctamente y requiere una revisión visual en el navegador para aprobar esta versión.

**Nunca aplicar a `main` ni publicar sin aprobación del usuario.**

## Aprobación del usuario — 14-10-2026

El usuario revisó la V2 de espaciados en Vercel y confirmó: **«Sí. Quedó como quería.»** Se considera **APROBADA LA DIRECCIÓN VISUAL Y EL RITMO V2** (márgenes y separaciones). Esto **no autoriza** fusionar a `main` ni publicar en producción. El formulario continúa usando `mailto:` y la validación técnica final de navegación, accesibilidad, responsive y contacto sigue pendiente antes de un lanzamiento.
