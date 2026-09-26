# MATRIZ DE TRAZABILIDAD DE REQUISITOS — ElsesNovels

## Control de versiones

| Versión | Hecha por | Revisada por | Aprobada por | Fecha | Motivo |
|---|---|---|---|---|---|
| 1.0 | Eber Chiecher (PM) | [POR CONFIRMAR] | Juan Henrique (Rector) [POR CONFIRMAR] | 22/09/2026 | Versión original |
| 1.1 | Eber Chiecher (PM) | [POR CONFIRMAR] | Juan Henrique (Rector) [POR CONFIRMAR] | 22/09/2026 | Se aprueba QR-05; se agrega TR-05 (límites de fases u operaciones); se agregan RF-09 y RF-10, evaluados y desaprobados |
| 1.2 | Eber Chiecher (PM) | [POR CONFIRMAR] | Juan Henrique (Rector) [POR CONFIRMAR] | 22/09/2026 | Se agrega RNF-06 (compatibilidad de navegadores) |

| Nombre del proyecto | Siglas del proyecto |
|---|---|
| ElsesNovels — Plataforma web de lectura de novelas de la Biblioteca Elses | EN |

## Leyendas

| Estado actual | Abreviatura |
|---|---|
| Activo | AC |
| Cancelado | CA |
| Diferido | DI |
| Cumplido | CU |

| Nivel de estabilidad | Abreviatura |
|---|---|
| Alto | A |
| Mediano | M |
| Bajo | B |

| Grado de complejidad | Abreviatura |
|---|---|
| Alto | A |
| Mediano | M |
| Bajo | B |

| Impacto (IMP) | Escala |
|---|---|
| Crítico | 9–10 |
| Alto | 7–8 |
| Medio | 4–6 |
| Bajo | 1–3 |

| Método de verificación | Abreviatura |
|---|---|
| Inspección | I |
| Análisis | A |
| Demostración | D |
| Prueba (Test) | T |

## Matriz de trazabilidad de requisitos

| Código | Categoría | Descripción del requisito | Fuente / Sustento de inclusión | Fecha de inclusión | Propietario | Prioridad | Estado actual | Fecha de cumplimiento | Nivel de estabilidad | Grado de complejidad | Criterio de aceptación | Entregable / Objetivo relacionado | Verificación | Impacto (IMP) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BR-01 | BR | Difundir el catálogo de novelas gratuitamente para enriquecer culturalmente a la sociedad. | Acta — Propósito y justificación (Sec. 1) | 22/09/2026 | Juan Henrique (Rector) | Alta | AC | [POR CONFIRMAR] | A | M | Catálogo completo accesible y legible sin registro. | E4, E5 | D | 9 |
| BR-02 | BR | Ejecutar el proyecto con mano de obra $0 y tokens de IA de hasta USD 800. | Acta — Costos y recursos (Sec. 8) | 22/09/2026 | Juan Henrique (Rector) | Alta | AC | [POR CONFIRMAR] | A | B | Sin gastos de mano de obra; gasto en IA ≤ USD 800. | Sec. 8 (Costos) | I | 8 |
| BR-03 | BR | Completar el proyecto en 1 mes óptimo / 2 meses límite desde la aceptación del acta. | Acta — Cronograma e hitos (Sec. 7) | 22/09/2026 | Eber Chiecher (PM) | Alta | AC | [POR CONFIRMAR] | A | M | Cierre y aceptación del rector ≤ 2 meses desde la firma. | Sec. 7 (Cronograma) | I | 9 |
| BR-04 | BR | Soportar 10.000 usuarios simultáneos dentro de los recursos de la VPS institucional. | Acta — Objetivos SMART (Sec. 3) | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | A | Prueba de carga con 10.000 usuarios simultáneos exitosa. | E7 | T | 10 |
| StR-01 | StR | El rector debe poder aceptar o rechazar los diseños Penpot antes de implementarlos. | Acta — Entregables E1 | 22/09/2026 | Juan Henrique (Rector) / Delia Lucero (UX) | Alta | AC | [POR CONFIRMAR] | A | B | Respuesta formal del rector sobre los diseños entregados. | E1 | D | 8 |
| StR-02 | StR | No modificar la base de datos MariaDB existente. | Acta — Restricciones (Sec. 4.3 / 10) | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | B | Esquema y datos de MariaDB idénticos al cierre del proyecto. | Sec. 4.3 (Restricciones) | I | 10 |
| StR-03 | StR | No generar costos económicos de mano de obra para la Biblioteca Elses. | Acta — Costos y recursos (Sec. 8) | 22/09/2026 | Juan Henrique (Rector) | Alta | AC | [POR CONFIRMAR] | A | B | Sin facturación de horas de trabajo al cierre del proyecto. | Sec. 8 (Costos) | I | 7 |
| StR-04 | StR | Acceder gratuitamente al catálogo sin necesidad de registrarse ni crear una cuenta. | Borrador del Acta — Necesidad del cliente | 22/09/2026 | Aristóteles (Frontend) | Alta | AC | [POR CONFIRMAR] | A | B | Un usuario nuevo, sin cuenta, accede al catálogo y a una novela. | E5 | D | 9 |
| StR-05 | StR | Buscar y filtrar novelas por categoría, con página dedicada a cada categoría. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) | Alta | AC | [POR CONFIRMAR] | M | M | El lector encuentra una novela por buscador o por categoría. | E5 | D | 7 |
| StR-06 | StR | Leer las novelas cómodamente por capítulos, en móvil y en escritorio. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) / Delia Lucero (UX) | Alta | AC | [POR CONFIRMAR] | A | M | Lectura usable en un dispositivo móvil y en escritorio. | E5 | D | 8 |
| StR-07 | StR | Retomar la lectura desde el último capítulo leído al volver al sitio. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) / Marcos Aurelio (Backend) | Media | AC | [POR CONFIRMAR] | M | M | Al reingresar en la misma sesión, se abre el último capítulo leído. | E6 | T | 6 |
| StR-08 | StR | Contar con las VPS de frontend y de API configuradas por la institución. | Acta — Entregables E2, E3 | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | B | Ambas VPS accesibles antes del inicio del desarrollo. | E2, E3 | I | 8 |
| StR-09 | StR | Ejecutar el proyecto dentro del presupuesto de tokens de IA asignado (USD 200 por integrante). | Acta — Costos y recursos (Sec. 8) | 22/09/2026 | Eber Chiecher (PM) | Media | AC | [POR CONFIRMAR] | M | B | Consumo de IA de cada integrante ≤ USD 200 al cierre. | Sec. 8 (Costos) | I | 5 |
| StR-10 | StR | Cumplir el cronograma de hitos definido en el Acta de Constitución. | Acta — Cronograma e hitos (Sec. 7) | 22/09/2026 | Eber Chiecher (PM) | Alta | AC | [POR CONFIRMAR] | A | M | Cada hito cumplido dentro de la semana objetivo o límite. | Sec. 7 (Cronograma) | I | 8 |
| RF-01 | RF | Mostrar el catálogo de novelas paginado, con 20 novelas por página. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) | Alta | AC | [POR CONFIRMAR] | A | B | Cada página del catálogo muestra 20 novelas, salvo la última. | E5 | T | 7 |
| RF-02 | RF | Permitir filtrar el catálogo por categoría, con página dedicada por categoría. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) | Alta | AC | [POR CONFIRMAR] | M | M | El listado por categoría muestra solo esa categoría, paginado. | E5 | D | 7 |
| RF-03 | RF | Ofrecer un buscador de novelas desde la barra de navegación. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) | Media | AC | [POR CONFIRMAR] | M | M | Una búsqueda por título devuelve la novela correspondiente. | E5 | T | 6 |
| RF-04 | RF | Mostrar el contenido por capítulos, respetando el límite de 4.000 caracteres de la base de datos. | Borrador del Acta — Restricción de la base de datos | 22/09/2026 | Aristóteles (Frontend) / Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | B | Cada capítulo coincide con el contenido y límite almacenados. | E4, E5 | T | 8 |
| RF-05 | RF | Identificar al lector mediante cookie de sesión, sin registro ni cuenta. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) | Alta | AC | [POR CONFIRMAR] | A | B | Se genera cookie de sesión sin solicitar datos personales. | E6 | T | 6 |
| RF-06 | RF | Guardar en Redis el último capítulo leído, asociado a la cookie de sesión. | Acta — Modificación de Redis (cambio de última hora) | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | A | Se registra en Redis la combinación sesión–novela–capítulo. | E6, E8 | T | 8 |
| RF-07 | RF | Recuperar desde Redis el último capítulo leído tras un reinicio de la API. | Acta — Modificación de Redis (cambio de última hora) | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | A | Tras reiniciar la API, el lector retoma en el capítulo correcto. | E6, E8 | T | 8 |
| RF-08 | RF | Exponer endpoints REST para catálogo, categorías, búsqueda y capítulos, sin modificar MariaDB. | Borrador del Acta — Entregables | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | A | Endpoints correctos; ninguna operación escribe sobre MariaDB. | E4 | T | 9 |
| RF-09 | RF | Los lectores podrán calificar y dejar reseñas escritas sobre las novelas leídas. | Propuesta del equipo redactor — evaluada y desaprobada | 22/09/2026 | Eber Chiecher (PM) | — | CA | No aplica (rechazado) | B | A | No aplica — requisito rechazado; contradice StR-02/QR-02 (no modificar MariaDB) y excede presupuesto y plazo. Pasará al Enunciado del Alcance como exclusión. | — | — | — |
| RF-10 | RF | La plataforma debe ofrecer las novelas traducidas a múltiples idiomas (inglés y portugués), además del español. | Propuesta del equipo redactor — evaluada y desaprobada | 22/09/2026 | Eber Chiecher (PM) | — | CA | No aplica (rechazado) | B | A | No aplica — requisito rechazado; excede el alcance, el presupuesto de IA y el plazo de 2 meses. Pasará al Enunciado del Alcance como exclusión. | — | — | — |
| RNF-01 | RNF | Soportar 10.000 usuarios simultáneos con error < 1% y P95 de respuesta ≤ 2 s. | Borrador del Acta — Requisito de rendimiento | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | A | La prueba de carga cumple ambos umbrales. | E7 | T | 10 |
| RNF-02 | RNF | Caché volátil de catálogo en RAM (RQ1): responder correctamente tras un reinicio con caché vacío. | Acta — Requisitos del producto, RQ1 (Sec. 4.4) | 22/09/2026 | Marcos Aurelio (Backend) | Media | AC | [POR CONFIRMAR] | A | M | Tras reiniciar la API, el catálogo responde aunque el caché esté vacío. | E4 | T | 5 |
| RNF-03 | RNF | Persistencia de sesión en Redis (RQ2): el último capítulo leído sobrevive a un reinicio de la API. | Acta — Requisitos del producto, RQ2 (Sec. 4.4) | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | A | Tras reiniciar la API (no Redis), el dato sigue disponible. | E6, E8 | T | 8 |
| RNF-04 | RNF | Ser usable y responsive en escritorio y móvil, según los diseños aceptados por el rector. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) / Delia Lucero (UX) | Alta | AC | [POR CONFIRMAR] | M | M | Navegación y lectura usables sin scroll horizontal ni cortes. | E5 | D | 7 |
| RNF-05 | RNF | Operar dentro de los recursos fijos de las VPS provistas. | Acta — Costos y recursos (Sec. 8) | 22/09/2026 | Marcos Aurelio (Backend) | Media | AC | [POR CONFIRMAR] | A | M | El monitoreo de recursos no supera los límites de las VPS. | E2, E3 | A | 6 |
| RNF-06 | RNF | Compatibilidad de navegadores: funcionamiento correcto en las dos últimas versiones estables de Chrome, Firefox, Edge y Safari, en escritorio y en dispositivos móviles. | Enunciado del Alcance — Restricciones técnicas del producto (aclaración aprobada) | 22/09/2026 | Aristóteles (Frontend) | Media | AC | [POR CONFIRMAR] | M | M | El sitio funciona sin errores visuales ni funcionales en cada navegador y versión listados. | E5 | T | 5 |
| TR-01 | TR | Configurar la VPS del frontend con Nginx antes de desplegar la app React. | Acta — Entregables E2 | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | B | El sitio React se sirve correctamente desde la VPS vía Nginx. | E2 | D | 7 |
| TR-02 | TR | Configurar la VPS de la API, incluyendo el despliegue de Redis. | Acta — Entregables E3, E8 | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | M | La API y Redis quedan desplegados y accesibles entre sí. | E3, E8 | D | 8 |
| TR-03 | TR | Desplegar la plataforma completa en las VPS de producción definitivas. | Acta — Entregables (todos) | 22/09/2026 | Marcos Aurelio (Backend) / Aristóteles (Frontend) | Alta | AC | [POR CONFIRMAR] | A | M | El sitio y la API responden desde las VPS institucionales. | E2, E3, E4, E5 | D | 9 |
| TR-04 | TR | Validar y obtener la aceptación de los diseños Penpot antes de cerrar el frontend. | Acta — Entregables E1 | 22/09/2026 | Juan Henrique (Rector) / Delia Lucero (UX) | Alta | AC | [POR CONFIRMAR] | A | B | Aceptación del rector previa al cierre del desarrollo del frontend. | E1 | I | 8 |
| TR-05 | TR | Límites de fases u operaciones: el soporte técnico y el mantenimiento de los servidores (frontend y API) posteriores a los 2 meses del proyecto quedan excluidos del alcance; a partir de la entrega, la operación diaria pasa a cargo de la Biblioteca Elses. | Documento de Requisitos — Sec. 2.3 y 6 (aclaración aprobada) | 22/09/2026 | Juan Henrique (Rector) / Eber Chiecher (PM) | Alta | AC | [POR CONFIRMAR] | A | B | El acta de cierre deja constancia de que el soporte y mantenimiento post-entrega quedan a cargo de la biblioteca. | Sec. 7 (Cronograma) / Cierre del proyecto | I | 7 |
| PR-01 | PR | Completar el proyecto en un plazo óptimo de 1 mes y límite de 2 meses. | Acta — Cronograma e hitos (Sec. 7) | 22/09/2026 | Eber Chiecher (PM) | Alta | AC | [POR CONFIRMAR] | A | M | Cierre y aceptación del rector dentro de los 2 meses desde la firma. | Sec. 7 | I | 9 |
| PR-02 | PR | Ejecutar el proyecto con costo de mano de obra $0 USD. | Acta — Costos y recursos (Sec. 8) | 22/09/2026 | Eber Chiecher (PM) | Alta | AC | [POR CONFIRMAR] | A | B | No se registran gastos de mano de obra al cierre del proyecto. | Sec. 8 | I | 7 |
| PR-03 | PR | No superar los USD 800 de gasto en tokens de IA, aportados por la Biblioteca Elses. | Acta — Costos y recursos (Sec. 8) | 22/09/2026 | Eber Chiecher (PM) | Alta | AC | [POR CONFIRMAR] | A | B | El consumo de tokens de IA del equipo al cierre no supera USD 800. | Sec. 8 | I | 6 |
| PR-04 | PR | Cumplir el cronograma de hitos dentro de las semanas óptimas o límite definidas. | Acta — Cronograma e hitos (Sec. 7) | 22/09/2026 | Eber Chiecher (PM) | Media | AC | [POR CONFIRMAR] | M | M | La fecha real de cada hito no excede la semana límite. | Sec. 7 | I | 6 |
| QR-01 | QR | Ejecutar pruebas de integración, carga y estrés sin fallas críticas abiertas. | Acta — Entregables E7 | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | A | El reporte final de pruebas no contiene fallas críticas sin resolver. | E7 | T | 9 |
| QR-02 | QR | No modificar en ningún momento la base de datos MariaDB de la biblioteca. | Acta — Restricciones (Sec. 4.3 / 10) | 22/09/2026 | Marcos Aurelio (Backend) | Alta | AC | [POR CONFIRMAR] | A | B | Una auditoría de la base de datos no muestra cambios respecto al inicio. | Sec. 4.3 | A | 10 |
| QR-03 | QR | Funcionar de manera equivalente en los navegadores modernos. | Borrador del Acta — Entregables | 22/09/2026 | Aristóteles (Frontend) | Media | AC | [POR CONFIRMAR] | M | M | Las pruebas cruzadas no muestran diferencias entre navegadores. | E5 | T | 5 |
| QR-04 | QR | Si el servicio Redis falla, el sitio debe seguir funcionando; solo se pierde la posición de lectura. | Acta — Riesgo R7 (Sec. 11) | 22/09/2026 | Marcos Aurelio (Backend) | Media | AC | [POR CONFIRMAR] | M | A | Con Redis caído, la navegación y lectura continúan funcionando. | E8 | T | 6 |
| QR-05 | QR | El tiempo de carga inicial de la página del catálogo debe ser menor a 3 segundos. | Propuesta del equipo redactor — aprobada por el rector Juan Henrique | 22/09/2026 | Aristóteles (Frontend) | Baja | AC | [POR CONFIRMAR] | B | M | Promedio medido en pruebas de carga del frontend ≤ 3 s. | E5 | T | 3 |
## Notas sobre esta versión

- **Estado actual:** los requisitos aprobados figuran como **Activo (AC)**. Los requisitos evaluados y desaprobados (RF-09 y RF-10) figuran como **Cancelado (CA)**, que en esta matriz se usa para representar "desaprobado": quedan documentados por trazabilidad, pero no forman parte del alcance activo del proyecto.
- **Fecha de cumplimiento:** queda **[POR CONFIRMAR]** en todas las filas activas, ya que se completa recién cuando cada requisito se verifica en la práctica. En RF-09 y RF-10 no aplica, por tratarse de requisitos rechazados.
- **Nivel de estabilidad, grado de complejidad e Impacto (IMP):** son una primera estimación del equipo redactor, para poder priorizar visualmente. Quedan sujetos a que el equipo y el rector los revisen y ajusten.
- **Revisada por / Aprobada por (control de versiones):** quedan **[POR CONFIRMAR]**, porque todavía no se definió quién revisa el documento antes de pasarlo al rector para su aprobación.
- **QR-05** (tiempo de carga del catálogo < 3 s) fue aprobado por el rector Juan Henrique.
- **TR-05** es una aclaración nueva de "límites de fases u operaciones": el soporte técnico y el mantenimiento de los servidores posteriores a los 2 meses del proyecto quedan excluidos del alcance. Fue aprobada.
- **RF-09 y RF-10** son requisitos inventados a modo de ejemplo de requisitos evaluados y desaprobados. Quedan reservados para incorporarse como **exclusiones** en el futuro Enunciado del Alcance (Scope Statement).
