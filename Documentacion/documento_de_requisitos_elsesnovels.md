# **Documento de requisitos**

## **Proyecto ElsesNovels — Plataforma Web de Lectura de Novelas**

**Biblioteca Elses**
_Elaborado conforme a IEEE Std 830-1998 e ISO/IEC/IEEE 29148:2018_

- **Versión:** 1.0
- **Fecha:** 22 de septiembre de 2026
- **Project Manager:** Eber Chiecher
- **Equipo técnico:** Delia Lucero (UX), Marcos Aurelio (Backend), Aristóteles (Frontend)

## **Control de Versiones**

| Campo          | Detalle                                                      |
| :------------- | :------------------------------------------------------------ |
| Versión        | 1.2                                                            |
| Fecha          | 22/09/2026                                                     |
| Autor          | Eber Chiecher (Project Manager)                                |
| Revisado por   | Equipo técnico (Delia Lucero, Marcos Aurelio, Aristóteles)     |
| Estado         | Borrador para aprobación del rector Juan Henrique              |
| Documento base | Acta de Constitución del Proyecto ElsesNovels, Revisión 1 (21/09/2026) |
| Cambios v1.1   | Se aprueba QR-05; se agrega TR-05 (límites de fases u operaciones, mantenimiento excluido); se agrega la Sección 5.3 con RF-09 y RF-10, evaluados y desaprobados |
| Cambios v1.2   | Se agrega RNF-06 (compatibilidad de navegadores) |

## **1. Introducción**

### **1.1 Propósito del documento**

El presente documento tiene como propósito especificar de manera completa, clasificada y verificable los requisitos del proyecto ElsesNovels — plataforma web de lectura de novelas de la Biblioteca Elses — a partir de las necesidades declaradas en el Acta de Constitución del Proyecto. Su elaboración sigue las buenas prácticas de la norma IEEE Std 830-1998 para especificaciones de requisitos de software (estructura del documento y atributos de calidad de cada requisito) y el marco de clasificación de tipos de requisitos definido por la norma ISO/IEC/IEEE 29148:2018 (requisitos de negocio, de interesados, de la solución, de transición, del proyecto y de calidad).

### **1.2 Alcance**

Este documento cubre la totalidad de los requisitos identificados para el desarrollo, despliegue y puesta en operación de la plataforma web ElsesNovels, destinada a la visualización y lectura por capítulos del catálogo de novelas de la Biblioteca Elses, almacenado en una base de datos relacional MariaDB provista por la institución. No cubre el diseño detallado de la solución (arquitectura de software, modelo de datos, diagramas de la API), el cual se desarrolla en documentos técnicos posteriores derivados de esta especificación.

### **1.3 Definiciones, Acrónimos y Abreviaturas**

| Término          | Definición                                                                                |
| :--------------- | :---------------------------------------------------------------------------------------- |
| BR               | Business Requirement — Requisito de negocio.                                              |
| StR               | Stakeholder Requirement — Requisito de interesado.                                        |
| SyR               | System/Solution Requirement — Requisito de la solución (subdividido en RF y RNF).         |
| RF / RNF          | Requisito Funcional / Requisito No Funcional.                                             |
| TR                | Transition Requirement — Requisito de transición y preparación operativa.                 |
| PR                | Project Requirement — Requisito del proyecto.                                             |
| QR                | Quality Requirement — Requisito de calidad.                                               |
| API REST          | Interfaz de programación de aplicaciones basada en el estilo arquitectónico REST.         |
| VPS               | Virtual Private Server — servidor privado virtual provisto por la institución.            |
| MariaDB           | Sistema de gestión de bases de datos relacionales usado por la Biblioteca Elses.          |
| Redis             | Base de datos en memoria usada para persistir el último capítulo leído por sesión.        |
| Penpot            | Herramienta de diseño de interfaces (open source) usada para los mockups del proyecto.    |
| Verif. (I/A/D/T)  | Método de verificación del requisito: Inspección, Análisis, Demostración o Prueba (Test). |

### **1.4 Referencias normativas**

- IEEE Std 830-1998 — IEEE Recommended Practice for Software Requirements Specifications.
- ISO/IEC/IEEE 29148:2018 — Systems and software engineering — Life cycle processes — Requirements engineering.
- Acta de Constitución del Proyecto ElsesNovels, Biblioteca Elses, Revisión 1 (21 de septiembre de 2026), documento base.

### **1.5 Visión general del documento — metodología de clasificación**

Siguiendo ISO/IEC/IEEE 29148:2018, los requisitos se clasifican en seis categorías jerárquicas, presentadas en las Secciones 3 a 8 de este documento:

- **Requisitos del Negocio (BR):** expresan el propósito estratégico y el valor cultural que persigue la Biblioteca Elses con el proyecto.
- **Requisitos de los Interesados (StR):** expresan las necesidades de cada parte interesada, agrupadas por interesado.
- **Requisitos de la Solución (SyR):** traducen las necesidades anteriores en capacidades concretas del sistema, divididos en Funcionales (RF) y No Funcionales (RNF).
- **Requisitos de Transición y Preparación Operativa (TR):** condiciones necesarias para pasar de la solución desarrollada a su operación real (configuración de VPS, despliegue, aceptación de diseños).
- **Requisitos del Proyecto (PR):** restricciones de plazo, costo y cronograma que enmarcan la ejecución del proyecto.
- **Requisitos de Calidad (QR):** atributos de calidad transversales exigidos a la solución y al proceso, alineados con los criterios de éxito del Acta de Constitución.

Cada requisito incluye, conforme a IEEE 830, un identificador único, una descripción verificable, el o los interesados de origen, una prioridad y un criterio de aceptación medible, detallados en la Sección 9 y en el glosario de verificación de la Sección 10.

## **2. Descripción General**

### **2.1 Perspectiva del producto**

ElsesNovels es una plataforma web nueva e independiente. No reemplaza ni modifica la base de datos MariaDB de la Biblioteca Elses; su función es exponer, a través de una API REST propia y una aplicación web en React, el catálogo de novelas ya existente, para que cualquier persona pueda leerlo gratuitamente por capítulos, desde escritorio o desde el celular.

### **2.2 Interesados del proyecto**

| Código | Interesado                                                                                       |
| :----- | :------------------------------------------------------------------------------------------------ |
| INT-01 | Rector de la Biblioteca Elses — Juan Henrique, patrocinador y cliente, aprueba o rechaza entregables. |
| INT-02 | Lectores — usuarios finales mayores de 16 años que leen novelas de forma gratuita, sin registro.  |
| INT-03 | Equipo de Gestión y Desarrollo — Project Manager, Diseñadora UX, Backend y Frontend.                |

### **2.3 Restricciones generales**

- Plazo de finalización: óptimo 1 mes, límite 2 meses desde la aceptación del Acta de Constitución.
- Costo directo de mano de obra: $0 USD (equipo en pasantía no remunerada); presupuesto de tokens de IA de hasta USD 800, aportado por la Biblioteca Elses.
- No se puede modificar la base de datos MariaDB provista por la institución.
- El esquema de datos no tiene tablas de usuarios, cuentas, favoritos ni "más vistos": solo novelas (con URL de imagen) divididas en capítulos de hasta 4.000 caracteres.
- Recursos de infraestructura fijos: VPS del frontend con 3 GB de RAM y 4 núcleos a 3 GHz; VPS de la API con 10 GB de RAM y 8 núcleos a 3 GHz.
- **Límites de fases u operaciones:** el proyecto comprende la creación, el despliegue y la aceptación de la plataforma. El soporte técnico y el mantenimiento de los servidores (frontend y API) posteriores a los 2 meses de duración del proyecto quedan excluidos; a partir de la entrega, la operación diaria pasa a cargo de la Biblioteca Elses.

### **2.4 Supuestos y dependencias**

- La institución proveerá las dos VPS con las especificaciones indicadas.
- La base de datos MariaDB será accesible desde la VPS de la API y su esquema no cambiará durante el proyecto.
- La base de datos incluye la información necesaria para categorizar y buscar novelas (categoría y título).
- El rector responderá a los diseños en un plazo razonable.
- El equipo tendrá disponibilidad durante los 2 meses del proyecto.
- El público objetivo son mayores de 16 años; el sistema no verifica la edad, dado que no hay usuarios ni registro.

## **3. Requisitos del Negocio (BR)**

| ID    | Descripción del Requisito                                                                                                                                    | Interesado      | Prioridad | Verif. | Criterio de Aceptación                                                                                     |
| :---- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------- |
| BR-01 | La plataforma debe permitir a la Biblioteca Elses difundir su catálogo de novelas de forma gratuita, para enriquecer culturalmente a personas de toda índole. | INT-01           | Alta      | D      | El catálogo completo de la base de datos es accesible y legible por cualquier persona sin registro.       |
| BR-02 | El proyecto debe ejecutarse con costo de mano de obra $0, financiando únicamente el uso de herramientas de IA con un presupuesto aportado por la biblioteca.  | INT-01           | Alta      | I      | No se registran gastos de mano de obra; el gasto en tokens de IA no supera los USD 800 aportados.          |
| BR-03 | El proyecto debe completarse dentro del plazo definido, con un óptimo de 1 mes y un límite de 2 meses desde la aceptación del Acta de Constitución.           | INT-01, INT-03   | Alta      | I      | Fecha de cierre y aceptación del rector igual o anterior a los 2 meses desde la firma del acta.            |
| BR-04 | La solución debe soportar la demanda de lectura esperada (10.000 usuarios simultáneos) dentro de los recursos de la VPS institucional provista.              | INT-01, INT-02   | Alta      | T      | Prueba de carga con 10.000 usuarios simultáneos solicitando un capítulo, ejecutada sobre la VPS definitiva. |

## **4. Requisitos de los Interesados (StR)**

### **INT-01 — Rector de la Biblioteca Elses**

| ID     | Descripción del Requisito                                                                                           | Interesado | Prioridad | Verif. | Criterio de Aceptación                                                                       |
| :----- | :--------------------------------------------------------------------------------------------------------------------- | :--------- | :-------- | :----- | :--------------------------------------------------------------------------------------------- |
| StR-01 | El rector debe poder revisar y aceptar o rechazar los diseños de interfaz (Penpot) antes de que se implementen.        | INT-01     | Alta      | D      | Existe una respuesta formal (aceptación o rechazo) del rector sobre los diseños entregados.    |
| StR-02 | El proyecto no debe requerir ninguna modificación de la base de datos MariaDB existente de la biblioteca.             | INT-01     | Alta      | I      | Al cierre del proyecto, el esquema y los datos de MariaDB son idénticos a los provistos al inicio. |
| StR-03 | El proyecto no debe generar costos económicos de mano de obra para la Biblioteca Elses.                               | INT-01     | Alta      | I      | No se registra facturación de horas de trabajo al cierre del proyecto.                          |

### **INT-02 — Lectores (usuarios finales)**

| ID     | Descripción del Requisito                                                                                | Interesado | Prioridad | Verif. | Criterio de Aceptación                                                                              |
| :----- | :---------------------------------------------------------------------------------------------------------- | :--------- | :-------- | :----- | :---------------------------------------------------------------------------------------------------- |
| StR-04 | Se debe poder acceder gratuitamente al catálogo de novelas sin necesidad de registrarse ni crear una cuenta. | INT-02     | Alta      | D      | Un usuario nuevo, sin cuenta, accede al catálogo y a una novela completa desde el primer ingreso.    |
| StR-05 | Se debe poder buscar y filtrar novelas por categoría, con una página dedicada a cada categoría.               | INT-02     | Alta      | D      | El lector encuentra una novela concreta usando el buscador o navegando por su categoría.              |
| StR-06 | Se debe poder leer las novelas cómodamente por capítulos, tanto desde el celular como desde la computadora.  | INT-02     | Alta      | D      | La lectura de un capítulo es legible y usable en un dispositivo móvil y en un navegador de escritorio. |
| StR-07 | Se debe poder retomar la lectura desde el último capítulo leído, incluso si el usuario vuelve más tarde.      | INT-02     | Media     | T      | Al reingresar al sitio en la misma sesión, el lector es dirigido al último capítulo que abrió.         |

### **INT-03 — Equipo de Gestión y Desarrollo del Proyecto**

| ID     | Descripción del Requisito                                                                                       | Interesado | Prioridad | Verif. | Criterio de Aceptación                                                                  |
| :----- | :------------------------------------------------------------------------------------------------------------- | :--------- | :-------- | :----- | :----------------------------------------------------------------------------------------- |
| StR-08 | El equipo debe contar con las VPS de frontend y de API configuradas por la institución para poder desplegar el sistema. | INT-03     | Alta      | I      | Ambas VPS están accesibles y con los accesos entregados al equipo antes del inicio del desarrollo. |
| StR-09 | El equipo debe poder ejecutar el proyecto dentro del presupuesto de tokens de IA asignado (USD 200 por integrante). | INT-03     | Media     | I      | El consumo de tokens de IA de cada integrante no supera los USD 200 al cierre del proyecto. |
| StR-10 | El equipo debe poder cumplir el cronograma de hitos definido en el Acta de Constitución dentro del plazo óptimo o límite. | INT-01, INT-03 | Alta  | I      | Cada hito se cumple dentro de la semana objetivo o, como máximo, dentro de la semana límite. |

## **5. Requisitos de la Solución (SyR)**

### **5.1 Requisitos Funcionales (RF)**

| ID    | Descripción del Requisito                                                                                          | Interesado      | Prioridad | Verif. | Criterio de Aceptación                                                                                       |
| :---- | :------------------------------------------------------------------------------------------------------------------ | :--------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------- |
| RF-01 | El sistema debe mostrar el catálogo de novelas paginado, con 20 novelas por página.                                  | INT-02            | Alta      | T      | Cada página del catálogo muestra exactamente 20 novelas, salvo la última.                                      |
| RF-02 | El sistema debe permitir filtrar el catálogo por categoría, mostrando una página dedicada a cada categoría.          | INT-02            | Alta      | D      | Al seleccionar una categoría, el listado muestra únicamente novelas de esa categoría, paginado de a 20.        |
| RF-03 | El sistema debe ofrecer un buscador de novelas desde la barra de navegación.                                        | INT-02            | Media     | T      | Una búsqueda por título devuelve la novela correspondiente entre los resultados.                                |
| RF-04 | El sistema debe mostrar el contenido de una novela dividido por capítulos, respetando el límite de 4.000 caracteres por capítulo tal como está en la base de datos. | INT-02 | Alta | T | Cada capítulo mostrado coincide exactamente con el contenido y el límite de caracteres almacenados en la base de datos. |
| RF-05 | El sistema debe identificar al lector mediante una cookie de sesión, sin requerir registro ni cuenta.                | INT-02            | Alta      | T      | Se genera una cookie de sesión al primer ingreso del usuario, sin solicitar datos personales.                   |
| RF-06 | El sistema debe guardar en Redis el último capítulo leído, asociado a la cookie de sesión del lector.                | INT-02, INT-03    | Alta      | T      | Al leer un capítulo, se registra en Redis la combinación sesión–última novela–último capítulo.                 |
| RF-07 | El sistema debe recuperar desde Redis el último capítulo leído al volver a visitar el sitio, incluso si la API se reinició. | INT-02, INT-03 | Alta | T | Tras reiniciar la API, un lector con cookie válida retoma exactamente en el capítulo donde había quedado.        |
| RF-08 | La API REST debe exponer endpoints para consultar el catálogo, las categorías, la búsqueda y los capítulos, sin modificar la base de datos MariaDB. | INT-03 | Alta | T | Todos los endpoints responden con datos correctos y ninguna operación realiza escrituras sobre MariaDB.          |

### **5.2 Requisitos No Funcionales (RNF)**

| ID     | Descripción del Requisito                                                                                                                    | Interesado      | Prioridad | Verif. | Criterio de Aceptación                                                                                   |
| :----- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :-------- | :----- | :----------------------------------------------------------------------------------------------------------- |
| RNF-01 | Rendimiento/Concurrencia: la API debe soportar 10.000 usuarios simultáneos solicitando un capítulo, con tasa de error menor al 1 % y percentil 95 de respuesta menor o igual a 2 segundos. | INT-01, INT-03 | Alta | T | La prueba de carga con 10.000 usuarios simultáneos cumple ambos umbrales.                                     |
| RNF-02 | Caché volátil por diseño: la API debe seguir respondiendo correctamente tras un reinicio, aun cuando el caché de catálogo en memoria RAM quede vacío. | INT-03           | Media     | T      | Tras un reinicio de la API, las consultas al catálogo responden correctamente aunque más lento en la primera solicitud. |
| RNF-03 | Persistencia de sesión: el dato de último capítulo leído en Redis debe mantenerse aunque la API se reinicie o se apague y vuelva a levantarse. | INT-02, INT-03  | Alta      | T      | Tras reiniciar la API (no Redis), el dato de último capítulo leído sigue disponible.                          |
| RNF-04 | Usabilidad/Responsive: la interfaz debe funcionar correctamente en escritorio y en dispositivos móviles, siguiendo los diseños aceptados por el rector. | INT-02          | Alta      | D      | La navegación, el buscador y el lector de capítulos son usables sin scroll horizontal ni elementos cortados en pantallas móviles y de escritorio. |
| RNF-05 | Recursos: el sistema debe operar dentro de los recursos fijos de las VPS provistas (frontend: 3 GB RAM / 4 núcleos; API: 10 GB RAM / 8 núcleos). | INT-01, INT-03  | Media     | A      | El monitoreo de recursos durante la prueba de carga no supera los límites de las VPS asignadas.               |
| RNF-06 | Compatibilidad de navegadores: la aplicación web debe funcionar correctamente en las dos últimas versiones estables de Google Chrome, Mozilla Firefox, Microsoft Edge y Safari, tanto en su versión de escritorio como en sus versiones para dispositivos móviles (Android e iOS). | INT-02          | Media     | T      | El sitio se prueba y funciona sin errores visuales ni funcionales en cada navegador y versión listados, en escritorio y en móvil. |

### **5.3 Requisitos evaluados y no aprobados**

Durante el relevamiento se propusieron requisitos adicionales que el equipo evaluó y **no aprobó** para esta versión del proyecto. Quedan documentados aquí por trazabilidad y se incorporarán como **exclusiones** en el futuro Enunciado del Alcance (Scope Statement).

| ID    | Descripción del requisito propuesto                                                                                          | Motivo del rechazo                                                                                                                                                       | Estado      | Próximo paso                                                        |
| :---- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------- | :--------------------------------------------------------------------- |
| RF-09 | Los lectores podrán calificar y dejar reseñas escritas sobre las novelas leídas.                                              | Requeriría tablas de usuarios, cuentas y reseñas que no existen en el esquema de MariaDB provisto (contradice StR-02 / QR-02: no modificar la base de datos); tampoco está contemplado en el presupuesto ni en el plazo de 2 meses. | Desaprobado | Se incorporará como exclusión en el Enunciado del Alcance (Scope Statement). |
| RF-10 | La plataforma debe ofrecer las novelas traducidas a múltiples idiomas (inglés y portugués), además del español.               | La base de datos provista solo contiene el contenido en su idioma original; traducir el catálogo excede el alcance, el presupuesto de tokens de IA y el plazo de 2 meses definidos en el Acta de Constitución. | Desaprobado | Se incorporará como exclusión en el Enunciado del Alcance (Scope Statement). |

## **6. Requisitos de Transición y Preparación Operativa (TR)**

| ID    | Descripción del Requisito                                                                                                      | Interesado      | Prioridad | Verif. | Criterio de Aceptación                                                                                  |
| :---- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :-------- | :----- | :----------------------------------------------------------------------------------------------------------- |
| TR-01 | Se debe configurar la VPS del frontend con Nginx antes de desplegar la aplicación React.                                          | INT-03           | Alta      | D      | El sitio React se sirve correctamente desde la VPS del frontend a través de Nginx.                            |
| TR-02 | Se debe configurar la VPS de la API, incluyendo el despliegue de Redis, antes de desplegar el backend.                            | INT-03           | Alta      | D      | La API y Redis quedan desplegados y accesibles entre sí en la VPS de la API.                                  |
| TR-03 | Se debe desplegar la plataforma completa (frontend y API) en las VPS de producción definitivas antes del cierre del proyecto.     | INT-01, INT-03   | Alta      | D      | El sitio y la API responden correctamente desde las VPS institucionales de producción.                        |
| TR-04 | Se deben validar y obtener la aceptación de los diseños Penpot por parte del rector antes de cerrar el desarrollo del frontend.    | INT-01, INT-03   | Alta      | I      | Existe una respuesta de aceptación del rector sobre los diseños, previa al cierre del desarrollo del frontend. |
| TR-05 | **Límites de fases u operaciones:** el soporte técnico y el mantenimiento de los servidores (frontend y API) posteriores a los 2 meses de duración del proyecto quedan excluidos del alcance; a partir de la entrega, la operación diaria y el mantenimiento quedan a cargo de la Biblioteca Elses. | INT-01, INT-03   | Alta      | I      | El acta de cierre del proyecto deja constancia de que el soporte y el mantenimiento post-entrega no están incluidos y quedan a cargo de la biblioteca. |

## **7. Requisitos del Proyecto (PR)**

| ID    | Descripción del Requisito                                                                                                  | Interesado      | Prioridad | Verif. | Criterio de Aceptación                                                                              |
| :---- | :--------------------------------------------------------------------------------------------------------------------------- | :--------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------ |
| PR-01 | El proyecto debe completarse dentro de un plazo óptimo de 1 mes y un límite de 2 meses desde la aceptación del Acta de Constitución. | INT-01, INT-03 | Alta | I | Fecha de cierre y aceptación del rector dentro de los 2 meses desde la firma del acta.                   |
| PR-02 | El proyecto debe ejecutarse con costo de mano de obra $0 USD.                                                                | INT-01           | Alta      | I      | No se registran gastos de mano de obra al cierre del proyecto.                                            |
| PR-03 | El gasto en tokens de IA no debe superar los USD 800 en total, aportados por la Biblioteca Elses.                            | INT-01, INT-03   | Alta      | I      | El registro de consumo de tokens de IA del equipo al cierre no supera los USD 800.                        |
| PR-04 | El cronograma de hitos (VPS, diseños, API, frontend, pruebas, despliegue) debe cumplirse dentro de las semanas óptimas o, como máximo, dentro de las semanas límite definidas en el acta. | INT-03 | Media | I | La fecha real de cada hito no excede la semana límite establecida para ese hito.                          |

## **8. Requisitos de Calidad (QR)**

| ID    | Descripción del Requisito                                                                                                          | Interesado      | Prioridad | Verif. | Criterio de Aceptación                                                                                    |
| :---- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------ |
| QR-01 | Las pruebas de integración, carga y estrés deben ejecutarse antes del cierre del proyecto y no reportar fallas críticas abiertas.   | INT-03           | Alta      | T      | El reporte final de pruebas no contiene fallas críticas sin resolver.                                          |
| QR-02 | Integridad de datos: la solución no debe modificar en ningún momento la base de datos MariaDB de la biblioteca.                      | INT-01           | Alta      | A      | Una auditoría de la base de datos al cierre no muestra escrituras ni cambios de esquema respecto al inicio.   |
| QR-03 | Portabilidad: el sitio debe funcionar de manera equivalente en los navegadores modernos (Chrome, Firefox, Edge).                     | INT-02           | Media     | T      | Las pruebas funcionales cruzadas no muestran diferencias perceptibles entre navegadores.                       |
| QR-04 | Resiliencia de Redis: si el servicio Redis falla, el sitio debe seguir funcionando y solo debe perderse la posición de lectura guardada. | INT-03         | Media     | T      | Con Redis caído, la navegación y lectura de novelas continúan funcionando; solo falla la recuperación del último capítulo. |
| QR-05 | Rendimiento del frontend: el tiempo de carga inicial de la página del catálogo debe ser menor a 3 segundos en una conexión de banda ancha estándar. | INT-02 | Baja | T | El promedio medido en pruebas de carga del frontend es igual o inferior a 3 segundos.                          |

## **9. Clasificación y Trazabilidad**

### **9.1 Clasificación por interesado**

| Interesado                                       | Requisitos que lo involucran (cantidad e IDs)                                                                                                                                       |
| :------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INT-01 — Rector de la Biblioteca Elses             | (17) BR-01, BR-02, BR-03, BR-04, StR-01, StR-02, StR-03, StR-10, RNF-01, RNF-05, TR-03, TR-04, TR-05, PR-01, PR-02, PR-03, QR-02                                                    |
| INT-02 — Lectores (usuarios finales)               | (17) BR-04, StR-04, StR-05, StR-06, StR-07, RF-01, RF-02, RF-03, RF-04, RF-05, RF-06, RF-07, RNF-03, RNF-04, RNF-06, QR-03, QR-05                                                  |
| INT-03 — Equipo de Gestión y Desarrollo            | (21) BR-03, StR-08, StR-09, StR-10, RF-06, RF-07, RF-08, RNF-01, RNF-02, RNF-03, RNF-05, TR-01, TR-02, TR-03, TR-04, TR-05, PR-01, PR-03, PR-04, QR-01, QR-04                       |

### **9.2 Clasificación por prioridad**

La prioridad de cada requisito se estableció en función de su criticidad para el cumplimiento de los objetivos SMART y los criterios de éxito por interesado definidos en el Acta de Constitución (secciones 3 y 13): **Alta** (indispensable para el cierre exitoso del proyecto), **Media** (necesario, pero sin bloquear la entrega si se posterga) y **Baja** (deseable, mejora la solución sin condicionar su aceptación).

| Prioridad  | Requisitos (cantidad e IDs)                                                                                                                                                                                                                                    |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alta (32)  | BR-01, BR-02, BR-03, BR-04, StR-01, StR-02, StR-03, StR-04, StR-05, StR-06, StR-08, StR-10, RF-01, RF-02, RF-04, RF-05, RF-06, RF-07, RF-08, RNF-01, RNF-03, RNF-04, TR-01, TR-02, TR-03, TR-04, TR-05, PR-01, PR-02, PR-03, QR-01, QR-02                     |
| Media (9)  | StR-07, StR-09, RF-03, RNF-02, RNF-05, RNF-06, PR-04, QR-03, QR-04                                                                                                                                                                                               |
| Baja (1)   | QR-05                                                                                                                                                                                                                                                              |

### **9.3 Distribución por categoría de requisito**

| Categoría (ISO/IEC/IEEE 29148)                        | Cantidad de requisitos |
| :----------------------------------------------------- | :---------------------- |
| Requisitos del Negocio (BR)                             | 4                        |
| Requisitos de los Interesados (StR)                     | 10                       |
| Requisitos de la Solución — Funcionales (RF)             | 8                        |
| Requisitos de la Solución — No Funcionales (RNF)         | 6                        |
| Requisitos de Transición y Preparación Operativa (TR)    | 5                        |
| Requisitos del Proyecto (PR)                             | 4                        |
| Requisitos de Calidad (QR)                               | 5                        |
| **TOTAL (aprobados)**                                    | **42**                   |

*No incluye los requisitos RF-09 y RF-10 de la Sección 5.3, evaluados y desaprobados para esta versión del proyecto.*

## **10. Criterios de Verificación y Validación**

| Código | Método de verificación                                                                                                        |
| :----- | :------------------------------------------------------------------------------------------------------------------------------ |
| I      | Inspección — revisión documental o de artefactos entregados (acta, cronograma, comprobantes, registros de horas y de gasto).    |
| A      | Análisis — evaluación técnica, cálculo o auditoría (p. ej. auditoría de la base de datos MariaDB, monitoreo de recursos de VPS). |
| D      | Demostración — ejecución guiada de una funcionalidad ante un evaluador, sin instrumentación formal.                              |
| T      | Prueba (Test) — ejecución de casos de prueba con medición cuantitativa de resultados (rendimiento, tiempos, tasas de error).     |

La validación integral de los requisitos de prioridad Alta se realiza durante el hito de "Pruebas de integración, carga y estrés" (sección 7 del Acta de Constitución), condición de aprobación establecida en la sección 13 del Acta: cumplimiento de la prueba de carga de 10.000 usuarios simultáneos y aceptación final del rector.

## **11. Aprobación del Documento**

Con la firma del presente documento, el rector de la Biblioteca Elses y el Project Manager validan la completitud y corrección de los requisitos aquí especificados como base formal para el diseño y desarrollo de ElsesNovels.

| Firma                     | Rol                                        | Fecha |
| :------------------------- | :------------------------------------------ | :---- |
| Juan Henrique               | Rector de la Biblioteca Elses (Patrocinador) |       |
| Eber Chiecher                | Project Manager                              |       |
