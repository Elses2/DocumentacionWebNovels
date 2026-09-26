# ACTA DE CONSTITUCIÓN DE PROYECTO — ElsesNovels

## Datos generales

| Campo | Detalle |
|---|---|
| **Nombre del proyecto** | ElsesNovels: plataforma web de lectura de novelas de la Biblioteca Elses |
| **Número de proyecto** | Por asignar |
| **Fecha** | 21/09/2026 |
| **Revisión / versión** | 1 |
| **Preparado por** | Eber Chiecher, Project Manager |
| **Cliente / Aprobador** | Juan Henrique, rector de la Biblioteca Elses |
| **Project Manager** | Eber Chiecher |
| **Tipo de producto** | Aplicación web (frontend React + API REST Spring Boot), con versión de escritorio y móvil |

---

## 1. Propósito y justificación

Este proyecto consiste en crear una página web para la Biblioteca Elses que permita visualizar el catálogo de novelas que la biblioteca tiene almacenado en su servidor, en una base de datos relacional MariaDB.

El propósito es enriquecer culturalmente a la sociedad, de modo que personas de toda índole puedan disfrutar de un buen catálogo de novelas de forma gratuita.

Las novelas se leerán **por capítulos**, respetando cómo está construida la base de datos provista: cada capítulo tiene un máximo de 4.000 caracteres (equivalente a unas 5 páginas).

## 2. Beneficios esperados

- **Para los lectores:** acceso gratuito, desde cualquier dispositivo, a un catálogo de novelas organizado por categorías y con búsqueda.
- **Para la Biblioteca Elses:** un canal digital para difundir su catálogo y cumplir con su misión cultural.
- **Para el equipo:** experiencia real de desarrollo, diseño y gestión de un proyecto (pasantía no remunerada).

## 3. Objetivos (SMART)

| # | Objetivo | Criterio de éxito (medible) | Fecha objetivo |
|---|---|---|---|
| 1 | Publicar ElsesNovels (frontend y API) en las VPS de la institución | Sitio accesible por navegador y API respondiendo en producción | Óptimo: 1 mes. Límite: 2 meses desde la aceptación del acta |
| 2 | Soportar alta concurrencia de lectura | 10.000 usuarios simultáneos solicitando un capítulo, verificado con prueba de carga | Antes de la aceptación final |
| 3 | Navegación liviana para el cliente | Listados paginados con 20 novelas por página | Antes de la aceptación final |
| 4 | Diseño validado por el cliente | Diseños Penpot (móvil y escritorio) aceptados por el rector antes de cerrar el frontend | Según cronograma (sección 7) |
| 5 | Costo económico controlado | Mano de obra de USD 0 y gasto en tokens de IA de hasta USD 800 | Durante todo el proyecto |

## 4. Descripción y alcance

### 4.1 Descripción general y enfoque

El sistema tendrá dos capas: una **API REST** (Java, Spring Boot) que accede a la base de datos MariaDB de la biblioteca, y una **aplicación web** (React) servida con Nginx que consume esa API. Ambas se alojarán en VPS provistas por la institución.

El diseño de interfaces se hará en Penpot (átomos, moléculas y organismos) para escritorio y móvil, y deberá ser aceptado por el rector antes de avanzar con su implementación completa.

### 4.2 Qué INCLUYE el proyecto

- Visualización del catálogo de novelas y lectura por capítulos (máximo 4.000 caracteres por capítulo).
- Barra de navegación con **buscador** y **filtros por categoría de novela**.
- Una **página por categoría**, con listados paginados de 20 novelas por página, para evitar que el navegador del usuario se quede sin recursos.
- Recordar el **último capítulo leído** por el usuario mediante una **cookie** de sesión.
- Uso de **Redis** para persistir, por sesión, el último capítulo leído, de modo que ese dato sobrevive aunque el servidor de la API se reinicie.
- Caché en memoria RAM dentro de la API REST para otros datos de catálogo, sin persistencia (ver requisito RQ1).
- Diseños en Penpot para versión móvil y de escritorio.
- Configuración de la VPS del frontend (Nginx) y de la VPS de la API.
- Pruebas de integración, de carga y de estrés.

### 4.3 Qué NO incluye el proyecto

- **Modificar la base de datos MariaDB** de la biblioteca.
- **Persistencia del caché general** de catálogo: fuera del dato de "último capítulo leído" (que sí persiste en Redis), el resto del caché en RAM se pierde si la API se apaga.
- Usuarios, cuentas, favoritos ni ranking de "más vistos": el esquema provisto no tiene tablas para eso, solo novelas (con URL de imagen) divididas en capítulos.

### 4.4 Requisitos del producto

| ID | Requisito |
|---|---|
| RQ1 | **Caché volátil por diseño (catálogo general):** la API guarda el caché de datos de catálogo únicamente en memoria RAM. Cuando la API se reinicia o se apaga, ese caché se pierde, y esto es el comportamiento esperado del producto. Tras un reinicio, la API debe seguir respondiendo correctamente con ese caché vacío. |
| RQ2 | **Persistencia de sesión de lectura con Redis:** el último capítulo leído por cada usuario (identificado por su cookie de sesión) se guarda en Redis. Este dato debe mantenerse aunque el servidor de la API se reinicie o se apague y vuelva a levantarse. |
| RQ3 | **Concurrencia:** el sistema debe soportar la petición de un capítulo por parte de 10.000 usuarios en simultáneo. |
| RQ4 | **Paginación:** los listados de novelas muestran 20 novelas por página. |
| RQ5 | **Capítulos:** se muestran tal como están en la base de datos, con un máximo de 4.000 caracteres cada uno. |

## 5. Roles de usuario e historias

| Rol | Descripción |
|---|---|
| **Lector** | Usuario final, mayor de 16 años, que quiere leer novelas gratis. No requiere registro. |

| ID | Rol | Historia |
|---|---|---|
| H1 | Lector | Como lector, quiero ver el catálogo paginado de a 20 novelas para que la página cargue rápido en mi dispositivo. |
| H2 | Lector | Como lector, quiero filtrar novelas por categoría para encontrar rápido lo que me interesa. |
| H3 | Lector | Como lector, quiero buscar novelas desde la barra de navegación para llegar directo a una que ya conozco. |
| H4 | Lector | Como lector, quiero leer una novela capítulo por capítulo para leer en tramos cortos. |
| H5 | Lector | Como lector, quiero retomar desde el último capítulo que leí para no perder mi lugar. |
| H6 | Lector | Como lector, quiero usar el sitio cómodamente desde el celular y desde la computadora. |

## 6. Entregables y criterios de aceptación

| # | Entregable | Responsable | Criterio de aceptación |
|---|---|---|---|
| E1 | Diseños en Penpot (átomos, moléculas y organismos) para móvil y escritorio | Delia Lucero | Aceptación (respuesta) del rector Juan Henrique. Sin aceptación no se cierra el frontend. |
| E2 | Configuración de la VPS del frontend con Nginx | Marcos Aurelio | El sitio React se sirve correctamente desde la VPS. |
| E3 | Configuración de la VPS de la API REST | Marcos Aurelio | La API queda desplegada y accesible, con conexión a MariaDB. |
| E4 | API REST (Spring Boot) que accede a MariaDB | Marcos Aurelio | Endpoints para catálogo, categorías, búsqueda y capítulos, con paginación de 20 novelas. Sin modificar la base de datos. |
| E5 | Aplicación web React (barra de navegación con buscador y filtros, páginas por categoría, lector por capítulos) | Aristóteles | Implementa los diseños aceptados y las historias H1 a H6 en móvil y escritorio. |
| E6 | Cookie de sesión + persistencia del "último capítulo leído" en Redis | Aristóteles (cookie) y Marcos Aurelio (Redis) | Al volver al sitio, el lector retoma en el último capítulo abierto, incluso si el servidor de la API se reinició. |
| E7 | Pruebas de integración, carga y estrés | Marcos Aurelio | Prueba de carga con **10.000 usuarios simultáneos** pidiendo un capítulo, con tasa de error < 1 % y percentil 95 de respuesta ≤ 2 s. |
| E8 | Configuración de Redis en la VPS de la API | Marcos Aurelio | Redis desplegado y accesible desde la API. Al reiniciar la API o el propio Redis (persistencia habilitada), los datos de último capítulo leído se conservan. |

## 7. Cronograma e hitos

**Duración:** 2 meses desde la aceptación del acta. **Tiempo óptimo: 1 mes. Tiempo límite: 2 meses.**

Hitos del proyecto:

| Hito | Semana objetivo (óptimo) | Semana límite | Entregable asociado |
|---|---|---|---|
| Aprobación del acta | 0 | 0 | Acta firmada |
| VPS configuradas (frontend y API) | 1 | 3 | E2, E3 |
| Diseños entregados al rector | 2 | 3 | E1 |
| Aceptación de diseños por el rector | 2 | 4 | E1 aceptado |
| API REST funcional y Redis configurado | 3 | 5 | E4, E8 |
| Frontend integrado con la API (incluye cookie y persistencia en Redis) | 3 | 6 | E5, E6 |
| Pruebas de integración, carga y estrés | 4 | 7 | E7 |
| Despliegue final y aceptación del rector | 4 | 8 | Cierre del proyecto |

## 8. Costos y recursos

| Tipo de costo | Detalle | Monto / cantidad |
|---|---|---|
| **Económico (personal)** | Todo el equipo son estudiantes en pasantía no paga | USD 0 |
| **Tokens de IA** | USD 200 por integrante (PM, diseñadora, backend y frontend) vía OpenRouter, aportados por la Biblioteca Elses | USD 800 en total |
| **Computacional: VPS del frontend** | 3 GB de RAM, 4 núcleos a 3 GHz, con Nginx. Costo considerado despreciable | Provista por la institución |
| **Computacional: VPS de la API** | 10 GB de RAM, 8 núcleos a 3 GHz. **Es el recurso a vigilar** | Provista por la institución |
| **Tiempo** | Óptimo 1 mes, límite 2 meses | — |

**Fuente de financiamiento de los USD 800:** Biblioteca Elses.

## 9. Supuestos

- La institución proveerá las dos VPS con las especificaciones indicadas.
- La base de datos MariaDB será accesible desde la VPS de la API y su esquema no cambiará durante el proyecto.
- La base de datos incluye la información necesaria para categorizar y buscar novelas (categoría y título).
- El rector responderá a los diseños en un plazo razonable.
- El equipo tendrá disponibilidad durante los 2 meses del proyecto.
- El público objetivo son mayores de 16 años. El sistema no verifica la edad (no hay usuarios ni registro).

## 10. Restricciones

- No se puede modificar la base de datos MariaDB.
- El esquema no tiene tablas de usuarios, favoritos ni "más vistos".
- Capítulos de un máximo de 4.000 caracteres (≈ 5 páginas), según la base provista.
- Listados de 20 novelas por página.
- Plazo límite de 2 meses desde la aceptación del acta.
- Presupuesto económico de USD 0 en mano de obra y USD 800 en tokens de IA.
- Recursos de la VPS de la API: 10 GB de RAM y 8 núcleos a 3 GHz.

## 11. Riesgos de alto nivel

| # | Riesgo | Probabilidad | Impacto | Estrategia de mitigación |
|---|---|---|---|---|
| R1 | La API no soporta 10.000 lectores simultáneos con los recursos de la VPS | Media | Alto | Caché en RAM de capítulos, pruebas de carga tempranas, ajuste de pool de conexiones a MariaDB |
| R2 | El rector demora o rechaza los diseños | Media | Alto | Entregar diseños en etapas y acordar plazo de respuesta |
| R3 | Retrasos por ser una pasantía sin remuneración y con equipo estudiantil | Baja | Alto | Seguimiento semanal del PM, hitos con fecha óptima y límite |
| R4 | La base de datos no tiene los campos necesarios para categorías o búsqueda | Baja | Alto | Revisar el esquema en la primera semana |
| R5 | Agotar el presupuesto de tokens de IA | Baja | Alto | Seguimiento del consumo por integrante |
| R6 | El lector borra las cookies y pierde su último capítulo | Alta | Bajo | Aceptado como limitación (no hay cuentas de usuario); Redis solo persiste el dato mientras la cookie de sesión exista |
| R7 | Falla o caída del servicio Redis | Baja | Medio | Monitoreo del servicio y reinicio automático; si Redis no responde, el sitio sigue funcionando y solo se pierde la posición de lectura guardada |

## 12. Interesados y organización del proyecto

| Función | Nombre | Rol y responsabilidades | Autoridad | Influencia |
|---|---|---|---|---|
| Rector de la Biblioteca Elses (cliente) | Juan Henrique | Representa a la biblioteca. Acepta o rechaza los entregables. | Aprobación de entregables | Alta |
| Project Manager | Eber Chiecher | Estudiante de Administración de Empresas. Punto de contacto de todas las partes interesadas, dirige y gestiona el proyecto. | Gestión del equipo y seguimiento | Alta |
| Diseñadora UX | Delia Lucero | Estudiante de Diseño Gráfico. Diseña en Penpot átomos, moléculas y organismos, para escritorio y móvil. | Decisiones de diseño | Media |
| Backend | Marcos Aurelio | Estudiante de Ingeniería en Sistemas. Configura la VPS, diseña la API REST con Java Spring y ejecuta pruebas de integración, carga y estrés. | Decisiones técnicas del backend | Media |
| Frontend | Aristóteles | Estudiante de Ingeniería en Sistemas. Desarrolla la aplicación web con React. | Decisiones técnicas del frontend | Media |
| Usuarios finales | Lectores mayores de 16 años | Leen novelas gratis. | — | Baja |

## 13. Criterios generales de éxito y aceptación

El rector Juan Henrique es quien acepta o rechaza los entregables. Un entregable se considera aceptado cuando cumple su criterio de la sección 6 y el rector lo confirma. El proyecto se considera exitoso cuando el sitio está publicado, soporta la prueba de 10.000 usuarios simultáneos y el rector acepta el resultado final dentro del plazo límite de 2 meses.

## 14. Autorización del proyecto

Al firmar, los abajo firmantes aprueban esta acta y autorizan el inicio del proyecto.

| Rol | Nombre | Firma | Fecha |
|---|---|---|---|
| Rector de la Biblioteca Elses (cliente) | Juan Henrique | | |
| Project Manager | Eber Chiecher | | |
