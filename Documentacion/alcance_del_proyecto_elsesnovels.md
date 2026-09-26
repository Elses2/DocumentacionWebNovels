# **Enunciado del Alcance del Proyecto**

**Descripción**
El proyecto **"ElsesNovels"** consiste en el diseño, desarrollo e implementación de una plataforma web para la visualización y lectura por capítulos del catálogo de novelas de la Biblioteca Elses, ya almacenado en una base de datos relacional MariaDB provista por la institución. Su propósito es ofrecer un canal digital gratuito, sin necesidad de registro, que permita a cualquier persona mayor de 16 años disfrutar del catálogo cultural de la biblioteca desde escritorio o desde el celular.

---

# PROYECTO:

## Alcance

El alcance del proyecto abarca el ciclo completo desde la configuración de la infraestructura hasta el despliegue en producción y la aceptación final del rector (Release 1.0).
<br> _Incluye:_

- Gestión del proyecto bajo un esfuerzo de mano de obra de $0 USD (equipo en pasantía no remunerada) y un presupuesto de tokens de IA de hasta USD 800, aportado por la Biblioteca Elses, dentro de un plazo óptimo de 1 mes y límite de 2 meses desde la aceptación del Acta de Constitución.
- Configuración de las VPS institucionales para el frontend (Nginx) y para la API (incluyendo Redis).
- Diseño de interfaces en Penpot (escritorio y móvil) y su validación y aceptación por parte del rector antes de cerrar el desarrollo del frontend.
- Desarrollo de la API REST (Spring Boot) y de la aplicación web (React) que exponen el catálogo de la Biblioteca Elses, sin modificar la base de datos MariaDB.
- Ejecución de pruebas de integración, carga (10.000 usuarios simultáneos) y estrés.
- Despliegue de la plataforma completa en las VPS institucionales de producción.
- Cierre formal del proyecto, incluyendo la aceptación final del rector.
  <br> En síntesis: el alcance del proyecto comprende _todo el trabajo necesario_ —y únicamente ese trabajo— para entregar exitosamente el producto ElsesNovels con las características especificadas, dentro del tiempo, costo y calidad definidos en el Acta de Constitución.

_No incluye:_

- Soporte técnico y mantenimiento de los servidores (frontend y API) posteriores a los 2 meses de duración del proyecto: a partir de la entrega, la operación diaria queda a cargo de la Biblioteca Elses (aclaración de límites de fases u operaciones, requisito TR-05).
- Modificación de la base de datos MariaDB de la Biblioteca Elses, bajo ninguna circunstancia (StR-02 / QR-02).
- Adquisición de hardware, licencias comerciales o servicios pagos de terceros que excedan los USD 800 de tokens de IA aportados por la biblioteca (coherente con la restricción de $0 USD en mano de obra).
- Uso de Redis como caché general de todo el catálogo: su única función es persistir el último capítulo leído por sesión (RQ1/RNF-02 del caché volátil de catálogo).
- Documentación técnica de arquitectura y manuales de usuario del producto: no se elaboran en este proyecto. La documentación del proyecto en sí (Acta de Constitución, Documento de Requisitos, Matriz de Requisitos y este Enunciado del Alcance) sí está contemplada y ya forma parte de los artefactos del proyecto.

## Entregables — Documentación y Cierre

- **Reportes de QA:** evidencia de las pruebas de integración, carga y estrés ejecutadas (QR-01). _Propuesto por: Equipo de desarrollo. Aprobado por: Eber Chiecher (PM)._
- **Acta de cierre del proyecto:** documento firmado por el rector que deja constancia de la aceptación final y de que el soporte y mantenimiento post-entrega no están incluidos (TR-05). _Propuesto por: Equipo de desarrollo. Aprobado por: Eber Chiecher (PM)._

### Criterios de Aceptación asociados

- **Costo:** evidencia comprobable de que el proyecto se ejecutó con $0 USD de mano de obra y que el gasto en tokens de IA no superó los USD 800 aportados por la Biblioteca Elses (BR-02, PR-02, PR-03).

## Supuestos

- La institución proveerá las dos VPS con las especificaciones indicadas (frontend: 3 GB RAM / 4 núcleos; API: 10 GB RAM / 8 núcleos).
- La base de datos MariaDB será accesible desde la VPS de la API y su esquema no cambiará durante el proyecto.
- La base de datos incluye la información necesaria para categorizar y buscar novelas (categoría y título).
- El rector responderá a los diseños en un plazo razonable.
- El equipo tendrá disponibilidad durante los 2 meses del proyecto.

## Exclusiones

- Sustitución de cualquier sistema interno de gestión bibliotecaria de la Biblioteca Elses: ElsesNovels es un canal de lectura complementario para el público, no un reemplazo de los sistemas administrativos o de gestión de la institución.

## Restricciones

- **Tiempo:** plazo óptimo de 1 mes, límite de 2 meses desde la aceptación del Acta de Constitución.
- **Costo:** mano de obra $0 USD; presupuesto de tokens de IA de hasta USD 800, aportado por la Biblioteca Elses.
- **Recursos de infraestructura:** VPS fijas provistas por la institución (frontend: 3 GB RAM / 4 núcleos a 3 GHz; API: 10 GB RAM / 8 núcleos a 3 GHz), sin posibilidad de ampliación dentro del proyecto.

---

# PRODUCTO:

## Alcance

El alcance del producto comprende las funcionalidades y características del sistema final "ElsesNovels":
<br> _Incluye:_

- _Catálogo:_ listado paginado de novelas, 20 por página, con filtro por categoría (una página por categoría) y buscador desde la barra de navegación (RF-01, RF-02, RF-03).
- _Lectura por capítulos:_ visualización del contenido de cada novela dividido en capítulos, respetando el límite de 4.000 caracteres tal como está en la base de datos (RF-04).
- _Identificación sin registro:_ cookie de sesión que identifica al lector sin pedirle cuenta ni datos personales (RF-05).
- _Persistencia de lectura:_ guardado en Redis del último capítulo leído por sesión, recuperable incluso tras un reinicio del servidor de la API (RF-06, RF-07, RNF-03).
- _API REST:_ endpoints para consultar catálogo, categorías, búsqueda y capítulos, sin modificar la base de datos MariaDB (RF-08).
- _Interfaz responsive:_ funcionamiento correcto en escritorio y en dispositivos móviles, según los diseños aceptados por el rector (RNF-04).
- _Rendimiento:_ soporte de 10.000 usuarios simultáneos solicitando un capítulo, con tasa de error menor al 1 % y percentil 95 de respuesta menor o igual a 2 segundos (BR-04, RNF-01).
- _Compatibilidad de navegadores:_ funcionamiento correcto en las dos últimas versiones estables de Google Chrome, Mozilla Firefox, Microsoft Edge y Safari, tanto en escritorio como en dispositivos móviles (RNF-06).

_No incluye:_

- Cuentas de usuario, perfiles, favoritos, calificaciones o reseñas de novelas: el esquema de la base de datos provista no tiene tablas para eso (StR-02).
- Traducción del catálogo a otros idiomas además del original en que está cargado en la base de datos.
- Persistencia del caché general del catálogo: solo el último capítulo leído se persiste en Redis; el resto del caché en RAM se pierde si la API se reinicia (RNF-02).
- Verificación de la edad de los lectores: el público objetivo son mayores de 16 años, pero el sistema no lo comprueba, dado que no hay usuarios ni registro.
- [POR CONFIRMAR] Aplicaciones móviles nativas o clientes de escritorio instalables: no está mencionado explícitamente en el Acta de Constitución, pero se infiere porque el producto se describe siempre como una "página web" / "aplicación web".

## Entregables — Software

- **Configuración de infraestructura:** VPS del frontend con Nginx y VPS de la API con Redis (E2, E3, E8).
- **API REST:** desarrollada en Java Spring Boot, conectada a la base de datos MariaDB (E4).
- **Aplicación web:** desarrollada en React, con catálogo paginado, buscador, filtro por categoría y lector de capítulos (E5).
- **Módulo de sesión y persistencia de lectura:** cookie de sesión y guardado del último capítulo leído en Redis (E6).
- **Diseños de interfaz:** mockups en Penpot (átomos, moléculas y organismos) para escritorio y móvil, aceptados por el rector (E1).
- **Reportes de pruebas:** evidencia de las pruebas de integración, carga y estrés (E7).

### Criterios de Aceptación asociados

- **Catálogo y paginación:** cada página del catálogo muestra exactamente 20 novelas, salvo la última (RF-01).
- **Rendimiento y concurrencia:** la prueba de carga con 10.000 usuarios simultáneos solicitando un capítulo cumple una tasa de error menor al 1 % y un percentil 95 de respuesta menor o igual a 2 segundos (RNF-01, BR-04).
- **Persistencia de sesión:** tras reiniciar la API, un lector con cookie de sesión válida retoma exactamente en el capítulo donde había quedado (RF-07, RNF-03).
- **Diseño:** existe una aceptación formal del rector sobre los diseños Penpot antes de cerrar el desarrollo del frontend (TR-04).
- **Integridad de datos:** al cierre del proyecto, el esquema y los datos de MariaDB son idénticos a los provistos al inicio (StR-02, QR-02).

## Supuestos

- El público objetivo son mayores de 16 años; el sistema no verifica la edad, dado que no hay usuarios ni registro.
- [POR CONFIRMAR] Los lectores finales dispondrán de una conexión a internet estable y utilizarán navegadores web modernos y actualizados: no está enunciado explícitamente en el Acta de Constitución ni en el Documento de Requisitos, se propone por analogía con el requisito de compatibilidad entre navegadores (QR-03).

## Exclusiones

- **Calificaciones y reseñas de novelas (RF-09):** evaluado y desaprobado por el equipo. Requeriría tablas de usuarios, cuentas y reseñas que no existen en el esquema de MariaDB provisto y no está contemplado en el presupuesto ni en el plazo de 2 meses.
- **Traducción del catálogo a múltiples idiomas (RF-10):** evaluado y desaprobado por el equipo. La base de datos provista solo contiene el contenido en su idioma original; traducirlo excede el alcance, el presupuesto de tokens de IA y el plazo de 2 meses.

## Restricciones

- **Técnicas:** el contenido de cada capítulo no puede exceder los 4.000 caracteres, tal como está estructurada la base de datos provista por la biblioteca; el sistema no puede modificar dicha estructura.
- **Técnicas — Compatibilidad de navegadores:** el sistema debe soportar las dos últimas versiones estables de Google Chrome, Mozilla Firefox, Microsoft Edge y Safari, en escritorio y en dispositivos móviles (Android e iOS) (RNF-06).

---
