# Plan de Gestión de Partes Interesadas (Stakeholder Management Plan)

**Proyecto:** Banco de Señales Biomédicas ("BioSignal")
**Institución:** Universidad Nacional de Villa Mercedes (UNViMe)
**Director del Proyecto:** Astudillo, Mateo Tomás
**Versión:** 1.0
**Fecha:** Septiembre 2026

---

## Control de Versiones

| Versión | Fecha    | Autor                         | Descripción del Cambio        |
| :------ | :------- | :---------------------------- | :---------------------------- |
| 1.0     | Sep/2026 | Ávila Gelbes, Ignacio Nicolás | Emisión inicial del documento |

---

## 1. Propósito del Documento

Este documento identifica a todas las personas, grupos y organizaciones que pueden afectar o verse afectados por el proyecto BioSignal, analiza sus expectativas, su nivel de interés e influencia sobre el proyecto, y define las estrategias de comunicación y participación necesarias para gestionar su involucramiento de forma efectiva a lo largo del ciclo de vida del proyecto.

Este plan **no define asignaciones de trabajo del EDT ni responsabilidades técnicas de ejecución** (eso corresponde al RACI del Diccionario del EDT y, si se decide formalizar, a una Matriz de Roles y Responsabilidades separada). Aquí el foco está puesto en gestionar expectativas, comunicación y relación, no en quién ejecuta qué tarea.

---

## 2. Identificación de Interesados (Registro de Stakeholders)

| Código | Interesado / Grupo                                                                            | Tipo                                                 | Rol respecto al proyecto                                                            |
| :----- | :-------------------------------------------------------------------------------------------- | :--------------------------------------------------- | :---------------------------------------------------------------------------------- |
| ST-01  | Alejandro Rosas — Director de la Escuela de Ingeniería y Ciencias Ambientales (EICA)          | Interno / Institucional                              | Patrocinador (Sponsor) — autoriza y aprueba el cierre del proyecto                  |
| ST-02  | Grupo de Administradores de Bioingeniería                                                     | Interno / Institucional                              | Colaboradores de carga de datos — proveen señales EDF de prueba/reales anonimizadas |
| ST-03  | Estudiantes y Docentes de la Escuela de Ciencias de la Salud (ECS) y Escuela de Medicina (EM) | Externo (respecto al equipo) / Interno (a la UNViMe) | Usuarios finales / clientes académicos de la plataforma                             |
| ST-04  | Astudillo, Mateo Tomás                                                                        | Interno                                              | Director del Proyecto (PM)                                                          |
| ST-05  | Ávila Gelbes, Ignacio Nicolás                                                                 | Interno                                              | Asistente del Director del Proyecto                                                 |
| ST-06  | Herrera, Germán Ezequiel                                                                      | Interno                                              | Desarrollador Backend / QA                                                          |
| ST-07  | Chiecher, Eber Blas                                                                           | Interno                                              | Desarrollador Backend / Infraestructura                                             |
| ST-08  | Pereyra, Rocío                                                                                | Interno                                              | Desarrolladora Frontend                                                             |
| ST-09  | Mosainer, Martín David                                                                        | Interno                                              | Desarrollador Full-Stack / Soporte Técnico                                          |
| ST-10  | Área de Infraestructura / TI de la UNViMe                                                     | Interno / Institucional                              | Provee (o autoriza el uso de) servidores institucionales para el despliegue         |
| ST-11  | Cátedras de Bioingeniería (evaluadores académicos, si aplica)                                 | Interno / Institucional                              | Evalúan el proyecto como trabajo práctico/final de carrera                          |

---

## 3. Clasificación por Poder e Interés (Matriz Poder/Interés)

| Interesado                                    | Poder / Influencia | Interés | Cuadrante                           | Estrategia general                                                         |
| :-------------------------------------------- | :----------------- | :------ | :---------------------------------- | :------------------------------------------------------------------------- |
| ST-01 (Sponsor — Alejandro Rosas)             | Alto               | Alto    | **Gestionar de cerca**              | Informar y consultar activamente; involucrar en hitos clave y aprobaciones |
| ST-02 (Bioingeniería, colaboradores de datos) | Medio              | Alto    | **Mantener informado / satisfecho** | Coordinación frecuente, seguimiento cercano por ser un riesgo crítico (R1) |
| ST-03 (Usuarios finales ECS/EM)               | Bajo               | Alto    | **Mantener informado**              | Comunicación periódica sobre avances, sin sobrecargar                      |
| ST-04 (PM — Mateo Astudillo)                  | Alto               | Alto    | **Gestionar de cerca**              | Rol activo, no requiere gestión externa (es quien gestiona)                |
| ST-05 (Asistente PM — Ignacio Ávila)          | Alto               | Alto    | **Gestionar de cerca**              | Comunicación directa y constante con el PM                                 |
| ST-06 a ST-09 (Desarrolladores)               | Medio              | Alto    | **Mantener satisfecho / informado** | Reuniones de seguimiento (standups), claridad de tareas y reconocimiento   |
| ST-10 (Infraestructura/TI UNViMe)             | Medio              | Bajo    | **Mantener satisfecho**             | Coordinación puntual antes del despliegue (Hito 5)                         |
| ST-11 (Cátedras / evaluadores)                | Medio              | Medio   | **Mantener informado**              | Entrega de documentación formal en instancias de evaluación                |

---

## 4. Nivel de Involucramiento Actual vs. Deseado

Escala: **Desconocedor** (D) · **Reticente** (R) · **Neutral** (N) · **Partidario/Apoya** (A) · **Líder** (L)

| Interesado                                   | Involucramiento Actual | Involucramiento Deseado | Brecha / Acción                                                                                          |
| :------------------------------------------- | :--------------------- | :---------------------- | :------------------------------------------------------------------------------------------------------- |
| ST-01 Sponsor                                | A                      | L                       | Mantener reportes de avance por hito para que continúe validando y removiendo obstáculos institucionales |
| ST-02 Bioingeniería                          | N                      | A                       | Acercamiento proactivo desde el Hito 1 para asegurar el envío temprano de señales (mitiga R1)            |
| ST-03 Usuarios finales (ECS/EM)              | D                      | A                       | Difusión y demo del sistema antes del Hito 3, para generar expectativa y adopción                        |
| ST-04 a ST-09 Equipo de Gestión y Desarrollo | A                      | L                       | Ya están involucrados activamente; mantener motivación y comunicación fluida                             |
| ST-10 Infraestructura/TI UNViMe              | N                      | A                       | Contacto formal antes del Hito 5 para coordinar la disponibilidad del entorno de despliegue              |
| ST-11 Cátedras/evaluadores                   | N                      | A                       | Presentaciones formales en instancias de evaluación curricular                                           |

---

## 5. Requisitos de Comunicación por Interesado

| Interesado                 | Información que necesita                                            | Canal                               | Frecuencia                         | Responsable de comunicar                         |
| :------------------------- | :------------------------------------------------------------------ | :---------------------------------- | :--------------------------------- | :----------------------------------------------- |
| ST-01 Sponsor              | Estado de hitos, riesgos, necesidad de aprobaciones                 | Reunión formal / informe escrito    | Por hito (5 instancias)            | PM (Mateo Astudillo)                             |
| ST-02 Bioingeniería        | Requerimientos de datos, formatos aceptados, fechas límite de carga | Reunión / correo                    | Quincenal / según necesidad        | Asistente PM (Ignacio Ávila)                     |
| ST-03 Usuarios finales     | Disponibilidad de la plataforma, instructivos de uso, demo          | Correo institucional / presentación | Al finalizar Hito 3 y en el cierre | PM / Asistente PM                                |
| ST-04 a ST-09 Equipo       | Estado de tareas, bloqueos, cambios de alcance                      | Reunión de equipo (standup)         | Semanal                            | PM                                               |
| ST-10 Infraestructura/TI   | Requisitos técnicos de despliegue, ventanas de mantenimiento        | Correo / reunión técnica            | Antes del Hito 5                   | Desarrollador de Infraestructura (Eber Chiecher) |
| ST-11 Cátedras/evaluadores | Documentación formal del proyecto (acta, requisitos, EDT)           | Entrega formal / presentación       | Según cronograma académico         | PM                                               |

---

## 6. Intereses, Expectativas y Motivaciones por Interesado

Esta sección detalla **qué le interesa específicamente a cada parte** en el éxito (o en la ejecución) del proyecto — más allá de su rol formal.

### ST-01 — Alejandro Rosas (Sponsor / Director EICA)

- Que la UNViMe cuente con una herramienta propia que reduzca la dependencia de plataformas externas (LightWAVE/PhysioNet).
- Fortalecer la vinculación entre la carrera de Bioingeniería y las Escuelas de Ciencias de la Salud y Medicina.
- Que el proyecto se ejecute sin comprometer presupuesto institucional (costo $0 USD).
- Contar con un caso de éxito institucional que pueda mostrarse ante autoridades superiores de la universidad.

### ST-02 — Grupo de Administradores de Bioingeniería

- Disponer de un repositorio propio y centralizado para organizar señales biomédicas, en lugar de depender de herramientas externas.
- Que la carga y gestión de metadatos sea simple y rápida (menos de 3 minutos por registro).
- Ver reconocido su aporte de datos como parte fundacional del catálogo del sistema.

### ST-03 — Usuarios Finales (Estudiantes y Docentes de ECS y EM)

- Poder acceder a señales clínicas reales (anonimizadas) para prácticas académicas sin instalar software.
- Una herramienta de visualización simple e intuitiva que no interrumpa sus tiempos de clase o estudio.
- Que la plataforma efectivamente se adopte como material de cátedra, mejorando su formación práctica.

### ST-04 — Mateo Astudillo (Director del Proyecto)

- Entregar el proyecto exitosamente dentro del plazo y del rango de horas estimado, como cierre de su recorrido académico.
- Desarrollar y demostrar competencias de gestión de proyectos aplicadas a un caso real.
- Construir un antecedente sólido (portfolio) que respalde su perfil profesional.

### ST-05 — Ignacio Ávila Gelbes (Asistente del Director del Proyecto)

- Ganar experiencia concreta en gestión de proyectos y documentación técnica, complementando su formación.
- Que el proyecto quede bien documentado, ya que es co-responsable de esa tarea.
- Reconocimiento del equipo y del Sponsor por su rol de apoyo a la dirección.

### ST-06 — Germán Ezequiel Herrera (Desarrollador Backend / QA)

- Adquirir experiencia técnica en desarrollo backend y en procesos de aseguramiento de calidad (testing).
- Que el sistema funcione correctamente en producción, ya que buena parte de su trabajo se valida en la etapa de QA.
- Sumar un proyecto real y verificable a su portfolio/CV.

### ST-07 — Eber Blas Chiecher (Desarrollador Backend / Infraestructura)

- Ganar experiencia en despliegue e infraestructura con recursos gratuitos/institucionales, un desafío técnico interesante.
- Que el despliegue final sea estable, ya que es un entregable bajo su responsabilidad directa.
- Fortalecer su perfil como desarrollador con foco en infraestructura y DevOps.

### ST-08 — Rocío Pereyra (Desarrolladora Frontend)

- Poder mostrar un producto visual terminado (el visor de señales) como pieza central de su portfolio.
- Experiencia concreta trabajando con renderizado gráfico (Canvas/WebGL), poco común en proyectos académicos.
- Que la interfaz sea bien recibida por los usuarios finales, validando su trabajo de diseño/UX.

### ST-09 — Martín David Mosainer (Desarrollador Full-Stack / Soporte Técnico)

- Experiencia integral full-stack al participar en la integración frontend-backend.
- Ser un nexo de soporte técnico valorado dentro del equipo, más allá de una tarea puntual asignada.
- Sumar versatilidad técnica demostrable a su perfil profesional.

### ST-10 — Área de Infraestructura / TI de la UNViMe

- Que el despliegue no genere sobrecarga ni riesgos de seguridad sobre la infraestructura institucional existente.
- Recibir requerimientos técnicos claros y con anticipación, no sobre la fecha límite.

### ST-11 — Cátedras / Evaluadores Académicos (si aplica)

- Que el proyecto cumpla con los criterios formales de gestión de proyectos exigidos por la carrera.
- Evidencia clara y documentada del proceso (acta, requisitos, EDT, riesgos, cierre) para la evaluación.

---

## 7. Estrategias de Gestión de Interesados Clave

| Interesado               | Riesgo de no gestionarlo bien                                       | Estrategia de mitigación                                                                            |
| :----------------------- | :------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------- |
| ST-01 Sponsor            | Pérdida de apoyo institucional o demoras en aprobaciones            | Reportes cortos y puntuales por cada hito; escalar riesgos temprano, no al final                    |
| ST-02 Bioingeniería      | Retraso en la entrega de señales EDF (Riesgo R1 del Acta)           | Solicitar datos desde el Hito 1; tener fuentes alternativas (ej. PhysioNet) como respaldo           |
| ST-03 Usuarios finales   | Baja adopción de la plataforma al finalizar el proyecto             | Involucrarlos con una demo temprana (fin del Hito 3) para recoger feedback antes del cierre         |
| ST-04 a ST-09 Equipo     | Sobrecarga o desmotivación durante períodos de exámenes (Riesgo R3) | Flexibilidad de cronograma ya prevista entre Hitos 2 y 3; comunicación abierta sobre disponibilidad |
| ST-10 Infraestructura/TI | Indisponibilidad de infraestructura cerca de la fecha límite        | Confirmar disponibilidad y permisos con anticipación al Hito 5, no durante                          |

---

## 8. Revisión y Actualización del Documento

Este documento debe revisarse en cada cambio de hito o ante la incorporación de un nuevo interesado no contemplado originalmente. Es responsabilidad del Director del Proyecto (Mateo Astudillo) y su Asistente (Ignacio Ávila Gelbes) mantenerlo actualizado.

---

## 9. Aprobación

| Firma                  | Rol                        | Fecha |
| :--------------------- | :------------------------- | :---- |
| Rosas, Alejandro       | Director de EICA (Sponsor) |       |
| Astudillo, Mateo Tomás | Director del Proyecto (PM) |       |
