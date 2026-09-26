import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-6">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-700 mb-4">{title}</h3>
    {children}
  </div>
);

const Table = ({ headers, rows, className = '' }) => (
  <div className="overflow-x-auto mb-6">
    <table className={`min-w-full border border-gray-300 text-sm ${className}`}>
      <thead>
        <tr className="bg-gray-100">
          {headers.map((h, i) => (
            <th key={i} className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, j) => (
              <td key={j} className="border border-gray-300 px-3 py-2 text-gray-700">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Paragraph = ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>;

const UnorderedList = ({ items }) => (
  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

export default function Requisitos() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">ElsesNovels</h1>
      <p className="text-gray-500 mb-8">Plataforma de Lectura de Novelas</p>

      <Section title="Documento de requisitos">
        <SubSection title="Proyecto ElsesNovels — Plataforma Web de Lectura de Novelas">
          <Paragraph><strong>Biblioteca Elses</strong></Paragraph>
          <p className="text-gray-600 mb-4">Elaborado conforme a IEEE Std 830-1998 e ISO/IEC/IEEE 29148:2018</p>
          <ul className="list-none space-y-1 text-gray-700 mb-4">
            <li><strong>Versión:</strong> 1.0</li>
            <li><strong>Fecha:</strong> 22 de septiembre de 2026</li>
            <li><strong>Project Manager:</strong> Eber Chiecher</li>
            <li><strong>Equipo técnico:</strong> Delia Lucero (UX), Marcos Aurelio (Backend), Aristóteles (Frontend)</li>
          </ul>
        </SubSection>

        <SubSection title="Control de Versiones">
          <Table
            headers={['Campo', 'Detalle']}
            rows={[
              ['Versión', '1.2'],
              ['Fecha', '22/09/2026'],
              ['Autor', 'Eber Chiecher (Project Manager)'],
              ['Revisado por', 'Equipo técnico (Delia Lucero, Marcos Aurelio, Aristóteles)'],
              ['Estado', 'Borrador para aprobación del rector Juan Henrique'],
              ['Documento base', 'Acta de Constitución del Proyecto ElsesNovels, Revisión 1 (21/09/2026)'],
              ['Cambios v1.1', 'Se aprueba QR-05; se agrega TR-05 (límites de fases u operaciones, mantenimiento excluido); se agrega la Sección 5.3 con RF-09 y RF-10, evaluados y desaprobados'],
              ['Cambios v1.2', 'Se agrega RNF-06 (compatibilidad de navegadores)'],
            ]}
          />
        </SubSection>
      </Section>

      <Section title="1. Introducción">
        <SubSection title="1.1 Propósito del documento">
          <Paragraph>
            El presente documento tiene como propósito especificar de manera completa, clasificada y verificable los requisitos del proyecto ElsesNovels — plataforma web de lectura de novelas de la Biblioteca Elses — a partir de las necesidades declaradas en el Acta de Constitución del Proyecto. Su elaboración sigue las buenas prácticas de la norma IEEE Std 830-1998 para especificaciones de requisitos de software (estructura del documento y atributos de calidad de cada requisito) y el marco de clasificación de tipos de requisitos definido por la norma ISO/IEC/IEEE 29148:2018 (requisitos de negocio, de interesados, de la solución, de transición, del proyecto y de calidad).
          </Paragraph>
        </SubSection>

        <SubSection title="1.2 Alcance">
          <Paragraph>
            Este documento cubre la totalidad de los requisitos identificados para el desarrollo, despliegue y puesta en operación de la plataforma web ElsesNovels, destinada a la visualización y lectura por capítulos del catálogo de novelas de la Biblioteca Elses, almacenado en una base de datos relacional MariaDB provista por la institución. No cubre el diseño detallado de la solución (arquitectura de software, modelo de datos, diagramas de la API), el cual se desarrolla en documentos técnicos posteriores derivados de esta especificación.
          </Paragraph>
        </SubSection>

        <SubSection title="1.3 Definiciones, Acrónimos y Abreviaturas">
          <Table
            headers={['Término', 'Definición']}
            rows={[
              ['BR', 'Business Requirement — Requisito de negocio.'],
              ['StR', 'Stakeholder Requirement — Requisito de interesado.'],
              ['SyR', 'System/Solution Requirement — Requisito de la solución (subdividido en RF y RNF).'],
              ['RF / RNF', 'Requisito Funcional / Requisito No Funcional.'],
              ['TR', 'Transition Requirement — Requisito de transición y preparación operativa.'],
              ['PR', 'Project Requirement — Requisito del proyecto.'],
              ['QR', 'Quality Requirement — Requisito de calidad.'],
              ['API REST', 'Interfaz de programación de aplicaciones basada en el estilo arquitectónico REST.'],
              ['VPS', 'Virtual Private Server — servidor privado virtual provisto por la institución.'],
              ['MariaDB', 'Sistema de gestión de bases de datos relacionales usado por la Biblioteca Elses.'],
              ['Redis', 'Base de datos en memoria usada para persistir el último capítulo leído por sesión.'],
              ['Penpot', 'Herramienta de diseño de interfaces (open source) usada para los mockups del proyecto.'],
              ['Verif. (I/A/D/T)', 'Método de verificación del requisito: Inspección, Análisis, Demostración o Prueba (Test).'],
            ]}
          />
        </SubSection>

        <SubSection title="1.4 Referencias normativas">
          <UnorderedList items={[
            'IEEE Std 830-1998 — IEEE Recommended Practice for Software Requirements Specifications.',
            'ISO/IEC/IEEE 29148:2018 — Systems and software engineering — Life cycle processes — Requirements engineering.',
            'Acta de Constitución del Proyecto ElsesNovels, Biblioteca Elses, Revisión 1 (21 de septiembre de 2026), documento base.',
          ]} />
        </SubSection>

        <SubSection title="1.5 Visión general del documento — metodología de clasificación">
          <Paragraph>
            Siguiendo ISO/IEC/IEEE 29148:2018, los requisitos se clasifican en seis categorías jerárquicas, presentadas en las Secciones 3 a 8 de este documento:
          </Paragraph>
          <UnorderedList items={[
            '<strong>Requisitos del Negocio (BR):</strong> expresan el propósito estratégico y el valor cultural que persigue la Biblioteca Elses con el proyecto.',
            '<strong>Requisitos de los Interesados (StR):</strong> expresan las necesidades de cada parte interesada, agrupadas por interesado.',
            '<strong>Requisitos de la Solución (SyR):</strong> traducen las necesidades anteriores en capacidades concretas del sistema, divididos en Funcionales (RF) y No Funcionales (RNF).',
            '<strong>Requisitos de Transición y Preparación Operativa (TR):</strong> condiciones necesarias para pasar de la solución desarrollada a su operación real (configuración de VPS, despliegue, aceptación de diseños).',
            '<strong>Requisitos del Proyecto (PR):</strong> restricciones de plazo, costo y cronograma que enmarcan la ejecución del proyecto.',
            '<strong>Requisitos de Calidad (QR):</strong> atributos de calidad transversales exigidos a la solución y al proceso, alineados con los criterios de éxito del Acta de Constitución.',
          ]} />
          <Paragraph>
            Cada requisito incluye, conforme a IEEE 830, un identificador único, una descripción verificable, el o los interesados de origen, una prioridad y un criterio de aceptación medible, detallados en la Sección 9 y en el glosario de verificación de la Sección 10.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="2. Descripción General">
        <SubSection title="2.1 Perspectiva del producto">
          <Paragraph>
            ElsesNovels es una plataforma web nueva e independiente. No reemplaza ni modifica la base de datos MariaDB de la Biblioteca Elses; su función es exponer, a través de una API REST propia y una aplicación web en React, el catálogo de novelas ya existente, para que cualquier persona pueda leerlo gratuitamente por capítulos, desde escritorio o desde el celular.
          </Paragraph>
        </SubSection>

        <SubSection title="2.2 Interesados del proyecto">
          <Table
            headers={['Código', 'Interesado']}
            rows={[
              ['INT-01', 'Rector de la Biblioteca Elses — Juan Henrique, patrocinador y cliente, aprueba o rechaza entregables.'],
              ['INT-02', 'Lectores — usuarios finales mayores de 16 años que leen novelas de forma gratuita, sin registro.'],
              ['INT-03', 'Equipo de Gestión y Desarrollo — Project Manager, Diseñadora UX, Backend y Frontend.'],
            ]}
          />
        </SubSection>

        <SubSection title="2.3 Restricciones generales">
          <UnorderedList items={[
            'Plazo de finalización: óptimo 1 mes, límite 2 meses desde la aceptación del Acta de Constitución.',
            'Costo directo de mano de obra: $0 USD (equipo en pasantía no remunerada); presupuesto de tokens de IA de hasta USD 800, aportado por la Biblioteca Elses.',
            'No se puede modificar la base de datos MariaDB provista por la institución.',
            'El esquema de datos no tiene tablas de usuarios, cuentas, favoritos ni "más vistos": solo novelas (con URL de imagen) divididas en capítulos de hasta 4.000 caracteres.',
            'Recursos de infraestructura fijos: VPS del frontend con 3 GB de RAM y 4 núcleos a 3 GHz; VPS de la API con 10 GB de RAM y 8 núcleos a 3 GHz.',
            '<strong>Límites de fases u operaciones:</strong> el proyecto comprende la creación, el despliegue y la aceptación de la plataforma. El soporte técnico y el mantenimiento de los servidores (frontend y API) posteriores a los 2 meses de duración del proyecto quedan excluidos; a partir de la entrega, la operación diaria pasa a cargo de la Biblioteca Elses.',
          ]} />
        </SubSection>

        <SubSection title="2.4 Supuestos y dependencias">
          <UnorderedList items={[
            'La institución proveerá las dos VPS con las especificaciones indicadas.',
            'La base de datos MariaDB será accesible desde la VPS de la API y su esquema no cambiará durante el proyecto.',
            'La base de datos incluye la información necesaria para categorizar y buscar novelas (categoría y título).',
            'El rector responderá a los diseños en un plazo razonable.',
            'El equipo tendrá disponibilidad durante los 2 meses del proyecto.',
            'El público objetivo son mayores de 16 años; el sistema no verifica la edad, dado que no hay usuarios ni registro.',
          ]} />
        </SubSection>
      </Section>

      <Section title="3. Requisitos del Negocio (BR)">
        <Table
          headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
          rows={[
            ['BR-01', 'La plataforma debe permitir a la Biblioteca Elses difundir su catálogo de novelas de forma gratuita, para enriquecer culturalmente a personas de toda índole.', 'INT-01', 'Alta', 'D', 'El catálogo completo de la base de datos es accesible y legible por cualquier persona sin registro.'],
            ['BR-02', 'El proyecto debe ejecutarse con costo de mano de obra $0, financiando únicamente el uso de herramientas de IA con un presupuesto aportado por la biblioteca.', 'INT-01', 'Alta', 'I', 'No se registran gastos de mano de obra; el gasto en tokens de IA no supera los USD 800 aportados.'],
            ['BR-03', 'El proyecto debe completarse dentro del plazo definido, con un óptimo de 1 mes y un límite de 2 meses desde la aceptación del Acta de Constitución.', 'INT-01, INT-03', 'Alta', 'I', 'Fecha de cierre y aceptación del rector igual o anterior a los 2 meses desde la firma del acta.'],
            ['BR-04', 'La solución debe soportar la demanda de lectura esperada (10.000 usuarios simultáneos) dentro de los recursos de la VPS institucional provista.', 'INT-01, INT-02', 'Alta', 'T', 'Prueba de carga con 10.000 usuarios simultáneos solicitando un capítulo, ejecutada sobre la VPS definitiva.'],
          ]}
        />
      </Section>

      <Section title="4. Requisitos de los Interesados (StR)">
        <SubSection title="INT-01 — Rector de la Biblioteca Elses">
          <Table
            headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
            rows={[
              ['StR-01', 'El rector debe poder revisar y aceptar o rechazar los diseños de interfaz (Penpot) antes de que se implementen.', 'INT-01', 'Alta', 'D', 'Existe una respuesta formal (aceptación o rechazo) del rector sobre los diseños entregados.'],
              ['StR-02', 'El proyecto no debe requerir ninguna modificación de la base de datos MariaDB existente de la biblioteca.', 'INT-01', 'Alta', 'I', 'Al cierre del proyecto, el esquema y los datos de MariaDB son idénticos a los provistos al inicio.'],
              ['StR-03', 'El proyecto no debe generar costos económicos de mano de obra para la Biblioteca Elses.', 'INT-01', 'Alta', 'I', 'No se registra facturación de horas de trabajo al cierre del proyecto.'],
            ]}
          />
        </SubSection>

        <SubSection title="INT-02 — Lectores (usuarios finales)">
          <Table
            headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
            rows={[
              ['StR-04', 'Se debe poder acceder gratuitamente al catálogo de novelas sin necesidad de registrarse ni crear una cuenta.', 'INT-02', 'Alta', 'D', 'Un usuario nuevo, sin cuenta, accede al catálogo y a una novela completa desde el primer ingreso.'],
              ['StR-05', 'Se debe poder buscar y filtrar novelas por categoría, con una página dedicada a cada categoría.', 'INT-02', 'Alta', 'D', 'El lector encuentra una novela concreta usando el buscador o navegando por su categoría.'],
              ['StR-06', 'Se debe poder leer las novelas cómodamente por capítulos, tanto desde el celular como desde la computadora.', 'INT-02', 'Alta', 'D', 'La lectura de un capítulo es legible y usable en un dispositivo móvil y en un navegador de escritorio.'],
              ['StR-07', 'Se debe poder retomar la lectura desde el último capítulo leído, incluso si el usuario vuelve más tarde.', 'INT-02', 'Media', 'T', 'Al reingresar al sitio en la misma sesión, el lector es dirigido al último capítulo que abrió.'],
            ]}
          />
        </SubSection>

        <SubSection title="INT-03 — Equipo de Gestión y Desarrollo del Proyecto">
          <Table
            headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
            rows={[
              ['StR-08', 'El equipo debe contar con las VPS de frontend y de API configuradas por la institución para poder desplegar el sistema.', 'INT-03', 'Alta', 'I', 'Ambas VPS están accesibles y con los accesos entregados al equipo antes del inicio del desarrollo.'],
              ['StR-09', 'El equipo debe poder ejecutar el proyecto dentro del presupuesto de tokens de IA asignado (USD 200 por integrante).', 'INT-03', 'Media', 'I', 'El consumo de tokens de IA de cada integrante no supera los USD 200 al cierre del proyecto.'],
              ['StR-10', 'El equipo debe poder cumplir el cronograma de hitos definido en el Acta de Constitución dentro del plazo óptimo o límite.', 'INT-01, INT-03', 'Alta', 'I', 'Cada hito se cumple dentro de la semana objetivo o, como máximo, dentro de la semana límite.'],
            ]}
          />
        </SubSection>
      </Section>

      <Section title="5. Requisitos de la Solución (SyR)">
        <SubSection title="5.1 Requisitos Funcionales (RF)">
          <Table
            headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
            rows={[
              ['RF-01', 'El sistema debe mostrar el catálogo de novelas paginado, con 20 novelas por página.', 'INT-02', 'Alta', 'T', 'Cada página del catálogo muestra exactamente 20 novelas, salvo la última.'],
              ['RF-02', 'El sistema debe permitir filtrar el catálogo por categoría, mostrando una página dedicada a cada categoría.', 'INT-02', 'Alta', 'D', 'Al seleccionar una categoría, el listado muestra únicamente novelas de esa categoría, paginado de a 20.'],
              ['RF-03', 'El sistema debe ofrecer un buscador de novelas desde la barra de navegación.', 'INT-02', 'Media', 'T', 'Una búsqueda por título devuelve la novela correspondiente entre los resultados.'],
              ['RF-04', 'El sistema debe mostrar el contenido de una novela dividido por capítulos, respetando el límite de 4.000 caracteres por capítulo tal como está en la base de datos.', 'INT-02', 'Alta', 'T', 'Cada capítulo mostrado coincide exactamente con el contenido y el límite de caracteres almacenados en la base de datos.'],
              ['RF-05', 'El sistema debe identificar al lector mediante una cookie de sesión, sin requerir registro ni cuenta.', 'INT-02', 'Alta', 'T', 'Se genera una cookie de sesión al primer ingreso del usuario, sin solicitar datos personales.'],
              ['RF-06', 'El sistema debe guardar en Redis el último capítulo leído, asociado a la cookie de sesión del lector.', 'INT-02, INT-03', 'Alta', 'T', 'Al leer un capítulo, se registra en Redis la combinación sesión–última novela–último capítulo.'],
              ['RF-07', 'El sistema debe recuperar desde Redis el último capítulo leído al volver a visitar el sitio, incluso si la API se reinició.', 'INT-02, INT-03', 'Alta', 'T', 'Tras reiniciar la API, un lector con cookie válida retoma exactamente en el capítulo donde había quedado.'],
              ['RF-08', 'La API REST debe exponer endpoints para consultar el catálogo, las categorías, la búsqueda y los capítulos, sin modificar la base de datos MariaDB.', 'INT-03', 'Alta', 'T', 'Todos los endpoints responden con datos correctos y ninguna operación realiza escrituras sobre MariaDB.'],
            ]}
          />
        </SubSection>

        <SubSection title="5.2 Requisitos No Funcionales (RNF)">
          <Table
            headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
            rows={[
              ['RNF-01', 'Rendimiento/Concurrencia: la API debe soportar 10.000 usuarios simultáneos solicitando un capítulo, con tasa de error menor al 1 % y percentil 95 de respuesta menor o igual a 2 segundos.', 'INT-01, INT-03', 'Alta', 'T', 'La prueba de carga con 10.000 usuarios simultáneos cumple ambos umbrales.'],
              ['RNF-02', 'Caché volátil por diseño: la API debe seguir respondiendo correctamente tras un reinicio, aun cuando el caché de catálogo en memoria RAM quede vacío.', 'INT-03', 'Media', 'T', 'Tras un reinicio de la API, las consultas al catálogo responden correctamente aunque más lento en la primera solicitud.'],
              ['RNF-03', 'Persistencia de sesión: el dato de último capítulo leído en Redis debe mantenerse aunque la API se reinicie o se apague y vuelva a levantarse.', 'INT-02, INT-03', 'Alta', 'T', 'Tras reiniciar la API (no Redis), el dato de último capítulo leído sigue disponible.'],
              ['RNF-04', 'Usabilidad/Responsive: la interfaz debe funcionar correctamente en escritorio y en dispositivos móviles, siguiendo los diseños aceptados por el rector.', 'INT-02', 'Alta', 'D', 'La navegación, el buscador y el lector de capítulos son usables sin scroll horizontal ni elementos cortados en pantallas móviles y de escritorio.'],
              ['RNF-05', 'Recursos: el sistema debe operar dentro de los recursos fijos de las VPS provistas (frontend: 3 GB RAM / 4 núcleos; API: 10 GB RAM / 8 núcleos).', 'INT-01, INT-03', 'Media', 'A', 'El monitoreo de recursos durante la prueba de carga no supera los límites de las VPS asignadas.'],
              ['RNF-06', 'Compatibilidad de navegadores: la aplicación web debe funcionar correctamente en las dos últimas versiones estables de Google Chrome, Mozilla Firefox, Microsoft Edge y Safari, tanto en su versión de escritorio como en sus versiones para dispositivos móviles (Android e iOS).', 'INT-02', 'Media', 'T', 'El sitio se prueba y funciona sin errores visuales ni funcionales en cada navegador y versión listados, en escritorio y en móvil.'],
            ]}
          />
        </SubSection>

        <SubSection title="5.3 Requisitos evaluados y no aprobados">
          <Paragraph>
            Durante el relevamiento se propusieron requisitos adicionales que el equipo evaluó y <strong>no aprobó</strong> para esta versión del proyecto. Quedan documentados aquí por trazabilidad y se incorporarán como <strong>exclusiones</strong> en el futuro Enunciado del Alcance (Scope Statement).
          </Paragraph>
          <Table
            headers={['ID', 'Descripción del requisito propuesto', 'Motivo del rechazo', 'Estado', 'Próximo paso']}
            rows={[
              ['RF-09', 'Los lectores podrán calificar y dejar reseñas escritas sobre las novelas leídas.', 'Requeriría tablas de usuarios, cuentas y reseñas que no existen en el esquema de MariaDB provisto (contradicte StR-02 / QR-02: no modificar la base de datos); tampoco está contemplado en el presupuesto ni en el plazo de 2 meses.', 'Desaprobado', 'Se incorporará como exclusión en el Enunciado del Alcance (Scope Statement).'],
              ['RF-10', 'La plataforma debe ofrecer las novelas traducidas a múltiples idiomas (inglés y portugués), además del español.', 'La base de datos provista solo contiene el contenido en su idioma original; traducir el catálogo excede el alcance, el presupuesto de tokens de IA y el plazo de 2 meses definidos en el Acta de Constitución.', 'Desaprobado', 'Se incorporará como exclusión en el Enunciado del Alcance (Scope Statement).'],
            ]}
          />
        </SubSection>
      </Section>

      <Section title="6. Requisitos de Transición y Preparación Operativa (TR)">
        <Table
          headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
          rows={[
            ['TR-01', 'Se debe configurar la VPS del frontend con Nginx antes de desplegar la aplicación React.', 'INT-03', 'Alta', 'D', 'El sitio React se sirve correctamente desde la VPS del frontend a través de Nginx.'],
            ['TR-02', 'Se debe configurar la VPS de la API, incluyendo el despliegue de Redis, antes de desplegar el backend.', 'INT-03', 'Alta', 'D', 'La API y Redis quedan desplegados y accesibles entre sí en la VPS de la API.'],
            ['TR-03', 'Se debe desplegar la plataforma completa (frontend y API) en las VPS de producción definitivas antes del cierre del proyecto.', 'INT-01, INT-03', 'Alta', 'D', 'El sitio y la API responden correctamente desde las VPS institucionales de producción.'],
            ['TR-04', 'Se deben validar y obtener la aceptación de los diseños Penpot por parte del rector antes de cerrar el desarrollo del frontend.', 'INT-01, INT-03', 'Alta', 'I', 'Existe una respuesta de aceptación del rector sobre los diseños, previa al cierre del desarrollo del frontend.'],
            ['TR-05', 'Límites de fases u operaciones: el soporte técnico y el mantenimiento de los servidores (frontend y API) posteriores a los 2 meses de duración del proyecto quedan excluidos del alcance; a partir de la entrega, la operación diaria y el mantenimiento quedan a cargo de la Biblioteca Elses.', 'INT-01, INT-03', 'Alta', 'I', 'El acta de cierre del proyecto deja constancia de que el soporte y el mantenimiento post-entrega no están incluidos y quedan a cargo de la biblioteca.'],
          ]}
        />
      </Section>

      <Section title="7. Requisitos del Proyecto (PR)">
        <Table
          headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
          rows={[
            ['PR-01', 'El proyecto debe completarse dentro de un plazo óptimo de 1 mes y un límite de 2 meses desde la aceptación del Acta de Constitución.', 'INT-01, INT-03', 'Alta', 'I', 'Fecha de cierre y aceptación del rector dentro de los 2 meses desde la firma del acta.'],
            ['PR-02', 'El proyecto debe ejecutarse con costo de mano de obra $0 USD.', 'INT-01', 'Alta', 'I', 'No se registran gastos de mano de obra al cierre del proyecto.'],
            ['PR-03', 'El gasto en tokens de IA no debe superar los USD 800 en total, aportados por la Biblioteca Elses.', 'INT-01, INT-03', 'Alta', 'I', 'El registro de consumo de tokens de IA del equipo al cierre no supera los USD 800.'],
            ['PR-04', 'El cronograma de hitos (VPS, diseños, API, frontend, pruebas, despliegue) debe cumplirse dentro de las semanas óptimas o, como máximo, dentro de las semanas límite definidas en el acta.', 'INT-03', 'Media', 'I', 'La fecha real de cada hito no excede la semana límite establecida para ese hito.'],
          ]}
        />
      </Section>

      <Section title="8. Requisitos de Calidad (QR)">
        <Table
          headers={['ID', 'Descripción del Requisito', 'Interesado', 'Prioridad', 'Verif.', 'Criterio de Aceptación']}
          rows={[
            ['QR-01', 'Las pruebas de integración, carga y estrés deben ejecutarse antes del cierre del proyecto y no reportar fallas críticas abiertas.', 'INT-03', 'Alta', 'T', 'El reporte final de pruebas no contiene fallas críticas sin resolver.'],
            ['QR-02', 'Integridad de datos: la solución no debe modificar en ningún momento la base de datos MariaDB de la biblioteca.', 'INT-01', 'Alta', 'A', 'Una auditoría de la base de datos al cierre no muestra escrituras ni cambios de esquema respecto al inicio.'],
            ['QR-03', 'Portabilidad: el sitio debe funcionar de manera equivalente en los navegadores modernos (Chrome, Firefox, Edge).', 'INT-02', 'Media', 'T', 'Las pruebas funcionales cruzadas no muestran diferencias perceptibles entre navegadores.'],
            ['QR-04', 'Resiliencia de Redis: si el servicio Redis falla, el sitio debe seguir funcionando y solo debe perderse la posición de lectura guardada.', 'INT-03', 'Media', 'T', 'Con Redis caído, la navegación y lectura de novelas continúan funcionando; solo falla la recuperación del último capítulo.'],
            ['QR-05', 'Rendimiento del frontend: el tiempo de carga inicial de la página del catálogo debe ser menor a 3 segundos en una conexión de banda ancha estándar.', 'INT-02', 'Baja', 'T', 'El promedio medido en pruebas de carga del frontend es igual o inferior a 3 segundos.'],
          ]}
        />
      </Section>

      <Section title="9. Clasificación y Trazabilidad">
        <SubSection title="9.1 Clasificación por interesado">
          <Table
            headers={['Interesado', 'Requisitos que lo involucran (cantidad e IDs)']}
            rows={[
              ['INT-01 — Rector de la Biblioteca Elses', 'BR-01, BR-02, BR-03, BR-04, StR-01, StR-02, StR-03, StR-10, RNF-01, RNF-05, TR-03, TR-04, TR-05, PR-01, PR-02, PR-03, QR-02 (17)'],
              ['INT-02 — Lectores (usuarios finales)', 'BR-04, StR-04, StR-05, StR-06, StR-07, RF-01, RF-02, RF-03, RF-04, RF-05, RF-06, RF-07, RNF-03, RNF-04, RNF-06, QR-03, QR-05 (17)'],
              ['INT-03 — Equipo de Gestión y Desarrollo', 'BR-03, StR-08, StR-09, StR-10, RF-06, RF-07, RF-08, RNF-01, RNF-02, RNF-03, RNF-05, TR-01, TR-02, TR-03, TR-04, TR-05, PR-01, PR-03, PR-04, QR-01, QR-04 (21)'],
            ]}
          />
        </SubSection>

        <SubSection title="9.2 Clasificación por prioridad">
          <Paragraph>
            La prioridad de cada requisito se estableció en función de su criticidad para el cumplimiento de los objetivos SMART y los criterios de éxito por interesado definidos en el Acta de Constitución (secciones 3 y 13): <strong>Alta</strong> (indispensable para el cierre exitoso del proyecto), <strong>Media</strong> (necesario, pero sin bloquear la entrega si se posterga) y <strong>Baja</strong> (deseable, mejora la solución sin condicionar su aceptación).
          </Paragraph>
          <Table
            headers={['Prioridad', 'Requisitos (cantidad e IDs)']}
            rows={[
              ['Alta (32)', 'BR-01, BR-02, BR-03, BR-04, StR-01, StR-02, StR-03, StR-04, StR-05, StR-06, StR-08, StR-10, RF-01, RF-02, RF-04, RF-05, RF-06, RF-07, RF-08, RNF-01, RNF-03, RNF-04, TR-01, TR-02, TR-03, TR-04, TR-05, PR-01, PR-02, PR-03, QR-01, QR-02'],
              ['Media (9)', 'StR-07, StR-09, RF-03, RNF-02, RNF-05, RNF-06, PR-04, QR-03, QR-04'],
              ['Baja (1)', 'QR-05'],
            ]}
          />
        </SubSection>

        <SubSection title="9.3 Distribución por categoría de requisito">
          <Table
            headers={['Categoría (ISO/IEC/IEEE 29148)', 'Cantidad de requisitos']}
            rows={[
              ['Requisitos del Negocio (BR)', '4'],
              ['Requisitos de los Interesados (StR)', '10'],
              ['Requisitos de la Solución — Funcionales (RF)', '8'],
              ['Requisitos de la Solución — No Funcionales (RNF)', '6'],
              ['Requisitos de Transición y Preparación Operativa (TR)', '5'],
              ['Requisitos del Proyecto (PR)', '4'],
              ['Requisitos de Calidad (QR)', '5'],
              ['TOTAL (aprobados)', '42'],
            ]}
          />
          <p className="text-sm text-gray-500 mt-2">No incluye los requisitos RF-09 y RF-10 de la Sección 5.3, evaluados y desaprobados para esta versión del proyecto.</p>
        </SubSection>
      </Section>

      <Section title="10. Criterios de Verificación y Validación">
        <Table
          headers={['Código', 'Método de verificación']}
          rows={[
            ['I', 'Inspección — revisión documental o de artefactos entregados (acta, cronograma, comprobantes, registros de horas y de gasto).'],
            ['A', 'Análisis — evaluación técnica, cálculo o auditoría (p. ej. auditoría de la base de datos MariaDB, monitoreo de recursos de VPS).'],
            ['D', 'Demostración — ejecución guiada de una funcionalidad ante un evaluador, sin instrumentación formal.'],
            ['T', 'Prueba (Test) — ejecución de casos de prueba con medición cuantitativa de resultados (rendimiento, tiempos, tasas de error).'],
          ]}
        />
        <Paragraph>
          La validación integral de los requisitos de prioridad Alta se realiza durante el hito de "Pruebas de integración, carga y estrés" (sección 7 del Acta de Constitución), condición de aprobación establecida en la sección 13 del Acta: cumplimiento de la prueba de carga de 10.000 usuarios simultáneos y aceptación final del rector.
        </Paragraph>
      </Section>

      {/* Matrix from matriz_de_requisitos_elsesnovels.md */}
      <Section title="Matriz de Trazabilidad de Requisitos — ElsesNovels">
        <SubSection title="Control de versiones">
          <Table
            headers={['Versión', 'Hecha por', 'Revisada por', 'Aprobada por', 'Fecha', 'Motivo']}
            rows={[
              ['1.0', 'Eber Chiecher (PM)', '[POR CONFIRMAR]', 'Juan Henrique (Rector) [POR CONFIRMAR]', '22/09/2026', 'Versión original'],
              ['1.1', 'Eber Chiecher (PM)', '[POR CONFIRMAR]', 'Juan Henrique (Rector) [POR CONFIRMAR]', '22/09/2026', 'Se aprueba QR-05; se agrega TR-05 (límites de fases u operaciones); se agregan RF-09 y RF-10, evaluados y desaprobados'],
              ['1.2', 'Eber Chiecher (PM)', '[POR CONFIRMAR]', 'Juan Henrique (Rector) [POR CONFIRMAR]', '22/09/2026', 'Se agrega RNF-06 (compatibilidad de navegadores)'],
            ]}
          />
          <Table
            headers={['Nombre del proyecto', 'Siglas del proyecto']}
            rows={[['ElsesNovels — Plataforma web de lectura de novelas de la Biblioteca Elses', 'EN']]}
          />
        </SubSection>

        <SubSection title="Leyendas">
          <Table
            headers={['Estado actual', 'Abreviatura']}
            rows={[['Activo', 'AC'], ['Cancelado', 'CA'], ['Diferido', 'DI'], ['Cumplido', 'CU']]}
          />
          <Table
            headers={['Nivel de estabilidad', 'Abreviatura']}
            rows={[['Alto', 'A'], ['Mediano', 'M'], ['Bajo', 'B']]}
          />
          <Table
            headers={['Grado de complejidad', 'Abreviatura']}
            rows={[['Alto', 'A'], ['Mediano', 'M'], ['Bajo', 'B']]}
          />
          <Table
            headers={['Impacto (IMP)', 'Escala']}
            rows={[['Crítico', '9–10'], ['Alto', '7–8'], ['Medio', '4–6'], ['Bajo', '1–3']]}
          />
          <Table
            headers={['Método de verificación', 'Abreviatura']}
            rows={[['Inspección', 'I'], ['Análisis', 'A'], ['Demostración', 'D'], ['Prueba (Test)', 'T']]}
          />
        </SubSection>

        <SubSection title="Matriz de trazabilidad de requisitos">
          <Table
            headers={['Código', 'Categoría', 'Descripción del requisito', 'Fuente / Sustento de inclusión', 'Fecha de inclusión', 'Propietario', 'Prioridad', 'Estado actual', 'Fecha de cumplimiento', 'Nivel de estabilidad', 'Grado de complejidad', 'Criterio de aceptación', 'Entregable / Objetivo relacionado', 'Verificación', 'Impacto (IMP)']}
            rows={[
              ['BR-01', 'BR', 'Difundir el catálogo de novelas gratuitamente para enriquecer culturalmente a la sociedad.', 'Acta — Propósito y justificación (Sec. 1)', '22/09/2026', 'Juan Henrique (Rector)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'Catálogo completo accesible y legible sin registro.', 'E4, E5', 'D', '9'],
              ['BR-02', 'BR', 'Ejecutar el proyecto con mano de obra $0 y tokens de IA de hasta USD 800.', 'Acta — Costos y recursos (Sec. 8)', '22/09/2026', 'Juan Henrique (Rector)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Sin gastos de mano de obra; gasto en IA ≤ USD 800.', 'Sec. 8 (Costos)', 'I', '8'],
              ['BR-03', 'BR', 'Completar el proyecto en 1 mes óptimo / 2 meses límite desde la aceptación del acta.', 'Acta — Cronograma e hitos (Sec. 7)', '22/09/2026', 'Eber Chiecher (PM)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'Cierre y aceptación del rector ≤ 2 meses desde la firma.', 'Sec. 7 (Cronograma)', 'I', '9'],
              ['BR-04', 'BR', 'Soportar 10.000 usuarios simultáneos dentro de los recursos de la VPS institucional.', 'Acta — Objetivos SMART (Sec. 3)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'A', 'Prueba de carga con 10.000 usuarios simultáneos exitosa.', 'E7', 'T', '10'],
              ['StR-01', 'StR', 'El rector debe poder aceptar o rechazar los diseños Penpot antes de implementarlos.', 'Acta — Entregables E1', '22/09/2026', 'Juan Henrique (Rector) / Delia Lucero (UX)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Respuesta formal del rector sobre los diseños entregados.', 'E1', 'D', '8'],
              ['StR-02', 'StR', 'No modificar la base de datos MariaDB existente.', 'Acta — Restricciones (Sec. 4.3 / 10)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Esquema y datos de MariaDB idénticos al cierre del proyecto.', 'Sec. 4.3 (Restricciones)', 'I', '10'],
              ['StR-03', 'StR', 'No generar costos económicos de mano de obra para la Biblioteca Elses.', 'Acta — Costos y recursos (Sec. 8)', '22/09/2026', 'Juan Henrique (Rector)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Sin facturación de horas de trabajo al cierre del proyecto.', 'Sec. 8 (Costos)', 'I', '7'],
              ['StR-04', 'StR', 'Acceder gratuitamente al catálogo sin necesidad de registrarse ni crear una cuenta.', 'Borrador del Acta — Necesidad del cliente', '22/09/2026', 'Aristóteles (Frontend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Un usuario nuevo, sin cuenta, accede al catálogo y a una novela.', 'E5', 'D', '9'],
              ['StR-05', 'StR', 'Buscar y filtrar novelas por categoría, con página dedicada a cada categoría.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'M', 'M', 'El lector encuentra una novela por buscador o por categoría.', 'E5', 'D', '7'],
              ['StR-06', 'StR', 'Leer las novelas cómodamente por capítulos, en móvil y en escritorio.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend) / Delia Lucero (UX)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'Lectura usable en un dispositivo móvil y en escritorio.', 'E5', 'D', '8'],
              ['StR-07', 'StR', 'Retomar la lectura desde el último capítulo leído al volver al sitio.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend) / Marcos Aurelio (Backend)', 'Media', 'AC', '[POR CONFIRMAR]', 'M', 'M', 'Al reingresar en la misma sesión, se abre el último capítulo leído.', 'E6', 'T', '6'],
              ['StR-08', 'StR', 'Contar con las VPS de frontend y de API configuradas por la institución.', 'Acta — Entregables E2, E3', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Ambas VPS accesibles antes del inicio del desarrollo.', 'E2, E3', 'I', '8'],
              ['StR-09', 'StR', 'Ejecutar el proyecto dentro del presupuesto de tokens de IA asignado (USD 200 por integrante).', 'Acta — Costos y recursos (Sec. 8)', '22/09/2026', 'Eber Chiecher (PM)', 'Media', 'AC', '[POR CONFIRMAR]', 'M', 'B', 'Consumo de IA de cada integrante ≤ USD 200 al cierre.', 'Sec. 8 (Costos)', 'I', '5'],
              ['StR-10', 'StR', 'Cumplir el cronograma de hitos definido en el Acta de Constitución.', 'Acta — Cronograma e hitos (Sec. 7)', '22/09/2026', 'Eber Chiecher (PM)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'Cada hito cumplido dentro de la semana objetivo o límite.', 'Sec. 7 (Cronograma)', 'I', '8'],
              ['RF-01', 'RF', 'Mostrar el catálogo de novelas paginado, con 20 novelas por página.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Cada página del catálogo muestra 20 novelas, salvo la última.', 'E5', 'T', '7'],
              ['RF-02', 'RF', 'Permitir filtrar el catálogo por categoría, con página dedicada por categoría.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'M', 'M', 'El listado por categoría muestra solo esa categoría, paginado.', 'E5', 'D', '7'],
              ['RF-03', 'RF', 'Ofrecer un buscador de novelas desde la barra de navegación.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend)', 'Media', 'AC', '[POR CONFIRMAR]', 'M', 'M', 'Una búsqueda por título devuelve la novela correspondiente.', 'E5', 'T', '6'],
              ['RF-04', 'RF', 'Mostrar el contenido por capítulos, respetando el límite de 4.000 caracteres de la base de datos.', 'Borrador del Acta — Restricción de la base de datos', '22/09/2026', 'Aristóteles (Frontend) / Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Cada capítulo coincide con el contenido y límite almacenados.', 'E4, E5', 'T', '8'],
              ['RF-05', 'RF', 'Identificar al lector mediante cookie de sesión, sin registro ni cuenta.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Se genera cookie de sesión sin solicitar datos personales.', 'E6', 'T', '6'],
              ['RF-06', 'RF', 'Guardar en Redis el último capítulo leído, asociado a la cookie de sesión.', 'Acta — Modificación de Redis (cambio de última hora)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'A', 'Se registra en Redis la combinación sesión–novela–capítulo.', 'E6, E8', 'T', '8'],
              ['RF-07', 'RF', 'Recuperar desde Redis el último capítulo leído tras un reinicio de la API.', 'Acta — Modificación de Redis (cambio de última hora)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'A', 'Tras reiniciar la API, el lector retoma en el capítulo correcto.', 'E6, E8', 'T', '8'],
              ['RF-08', 'RF', 'Exponer endpoints REST para catálogo, categorías, búsqueda y capítulos, sin modificar MariaDB.', 'Borrador del Acta — Entregables', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'A', 'Endpoints correctos; ninguna operación escribe sobre MariaDB.', 'E4', 'T', '9'],
              ['RF-09', 'RF', 'Los lectores podrán calificar y dejar reseñas escritas sobre las novelas leídas.', 'Propuesta del equipo redactor — evaluada y desaprobada', '22/09/2026', 'Eber Chiecher (PM)', '—', 'CA', 'No aplica (rechazado)', 'B', 'A', 'No aplica — requisito rechazado; contradice StR-02/QR-02 (no modificar MariaDB) y excede presupuesto y plazo. Pasará al Enunciado del Alcance como exclusión.', '—', '—', '—'],
              ['RF-10', 'RF', 'La plataforma debe ofrecer las novelas traducidas a múltiples idiomas (inglés y portugués), además del español.', 'Propuesta del equipo redactor — evaluada y desaprobada', '22/09/2026', 'Eber Chiecher (PM)', '—', 'CA', 'No aplica (rechazado)', 'B', 'A', 'No aplica — requisito rechazado; excede el alcance, el presupuesto de IA y el plazo de 2 meses. Pasará al Enunciado del Alcance como exclusión.', '—', '—', '—'],
              ['RNF-01', 'RNF', 'Soportar 10.000 usuarios simultáneos con error < 1% y P95 de respuesta ≤ 2 s.', 'Borrador del Acta — Requisito de rendimiento', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'A', 'La prueba de carga cumple ambos umbrales.', 'E7', 'T', '10'],
              ['RNF-02', 'RNF', 'Caché volátil de catálogo en RAM (RQ1): responder correctamente tras un reinicio con caché vacío.', 'Acta — Requisitos del producto, RQ1 (Sec. 4.4)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Media', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'Tras reiniciar la API, el catálogo responde aunque el caché esté vacío.', 'E4', 'T', '5'],
              ['RNF-03', 'RNF', 'Persistencia de sesión en Redis (RQ2): el último capítulo leído sobrevive a un reinicio de la API.', 'Acta — Requisitos del producto, RQ2 (Sec. 4.4)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'A', 'Tras reiniciar la API (no Redis), el dato sigue disponible.', 'E6, E8', 'T', '8'],
              ['RNF-04', 'RNF', 'Ser usable y responsive en escritorio y móvil, según los diseños aceptados por el rector.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend) / Delia Lucero (UX)', 'Alta', 'AC', '[POR CONFIRMAR]', 'M', 'M', 'Navegación y lectura usables sin scroll horizontal ni cortes.', 'E5', 'D', '7'],
              ['RNF-05', 'RNF', 'Operar dentro de los recursos fijos de las VPS provistas.', 'Acta — Costos y recursos (Sec. 8)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Media', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'El monitoreo de recursos no supera los límites de las VPS.', 'E2, E3', 'A', '6'],
              ['RNF-06', 'RNF', 'Compatibilidad de navegadores: funcionamiento correcto en las dos últimas versiones estables de Chrome, Firefox, Edge y Safari, en escritorio y en dispositivos móviles.', 'Enunciado del Alcance — Restricciones técnicas del producto (aclaración aprobada)', '22/09/2026', 'Aristóteles (Frontend)', 'Media', 'AC', '[POR CONFIRMAR]', 'M', 'M', 'El sitio funciona sin errores visuales ni funcionales en cada navegador y versión listados.', 'E5', 'T', '5'],
              ['TR-01', 'TR', 'Configurar la VPS del frontend con Nginx antes de desplegar la app React.', 'Acta — Entregables E2', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'El sitio React se sirve correctamente desde la VPS vía Nginx.', 'E2', 'D', '7'],
              ['TR-02', 'TR', 'Configurar la VPS de la API, incluyendo el despliegue de Redis.', 'Acta — Entregables E3, E8', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'La API y Redis quedan desplegados y accesibles entre sí.', 'E3, E8', 'D', '8'],
              ['TR-03', 'TR', 'Desplegar la plataforma completa en las VPS de producción definitivas.', 'Acta — Entregables (todos)', '22/09/2026', 'Marcos Aurelio (Backend) / Aristóteles (Frontend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'El sitio y la API responden desde las VPS institucionales.', 'E2, E3, E4, E5', 'D', '9'],
              ['TR-04', 'TR', 'Validar y obtener la aceptación de los diseños Penpot antes de cerrar el frontend.', 'Acta — Entregables E1', '22/09/2026', 'Juan Henrique (Rector) / Delia Lucero (UX)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Aceptación del rector previa al cierre del desarrollo del frontend.', 'E1', 'I', '8'],
              ['TR-05', 'TR', 'Límites de fases u operaciones: el soporte técnico y el mantenimiento de los servidores (frontend y API) posteriores a los 2 meses del proyecto quedan excluidos del alcance; a partir de la entrega, la operación diaria pasa a cargo de la Biblioteca Elses.', 'Documento de Requisitos — Sec. 2.3 y 6 (aclaración aprobada)', '22/09/2026', 'Juan Henrique (Rector) / Eber Chiecher (PM)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'El acta de cierre deja constancia de que el soporte y mantenimiento post-entrega quedan a cargo de la biblioteca.', 'Sec. 7 (Cronograma) / Cierre del proyecto', 'I', '7'],
              ['PR-01', 'PR', 'Completar el proyecto en un plazo óptimo de 1 mes y límite de 2 meses.', 'Acta — Cronograma e hitos (Sec. 7)', '22/09/2026', 'Eber Chiecher (PM)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'M', 'Cierre y aceptación del rector dentro de los 2 meses desde la firma.', 'Sec. 7', 'I', '9'],
              ['PR-02', 'PR', 'Ejecutar el proyecto con costo de mano de obra $0 USD.', 'Acta — Costos y recursos (Sec. 8)', '22/09/2026', 'Eber Chiecher (PM)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'No se registran gastos de mano de obra al cierre del proyecto.', 'Sec. 8', 'I', '7'],
              ['PR-03', 'PR', 'No superar los USD 800 de gasto en tokens de IA, aportados por la Biblioteca Elses.', 'Acta — Costos y recursos (Sec. 8)', '22/09/2026', 'Eber Chiecher (PM)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'El consumo de tokens de IA del equipo al cierre no supera USD 800.', 'Sec. 8', 'I', '6'],
              ['PR-04', 'PR', 'Cumplir el cronograma de hitos dentro de las semanas óptimas o límite definidas.', 'Acta — Cronograma e hitos (Sec. 7)', '22/09/2026', 'Eber Chiecher (PM)', 'Media', 'AC', '[POR CONFIRMAR]', 'M', 'M', 'La fecha real de cada hito no excede la semana límite.', 'Sec. 7', 'I', '6'],
              ['QR-01', 'QR', 'Ejecutar pruebas de integración, carga y estrés sin fallas críticas abiertas.', 'Acta — Entregables E7', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'A', 'El reporte final de pruebas no contiene fallas críticas sin resolver.', 'E7', 'T', '9'],
              ['QR-02', 'QR', 'No modificar en ningún momento la base de datos MariaDB de la biblioteca.', 'Acta — Restricciones (Sec. 4.3 / 10)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Alta', 'AC', '[POR CONFIRMAR]', 'A', 'B', 'Una auditoría de la base de datos no muestra cambios respecto al inicio.', 'Sec. 4.3', 'A', '10'],
              ['QR-03', 'QR', 'Funcionar de manera equivalente en los navegadores modernos.', 'Borrador del Acta — Entregables', '22/09/2026', 'Aristóteles (Frontend)', 'Media', 'AC', '[POR CONFIRMAR]', 'M', 'M', 'Las pruebas cruzadas no muestran diferencias entre navegadores.', 'E5', 'T', '5'],
              ['QR-04', 'QR', 'Si el servicio Redis falla, el sitio debe seguir funcionando; solo se pierde la posición de lectura.', 'Acta — Riesgo R7 (Sec. 11)', '22/09/2026', 'Marcos Aurelio (Backend)', 'Media', 'AC', '[POR CONFIRMAR]', 'M', 'A', 'Con Redis caído, la navegación y lectura continúan funcionando.', 'E8', 'T', '6'],
              ['QR-05', 'QR', 'El tiempo de carga inicial de la página del catálogo debe ser menor a 3 segundos.', 'Propuesta del equipo redactor — aprobada por el rector Juan Henrique', '22/09/2026', 'Aristóteles (Frontend)', 'Baja', 'AC', '[POR CONFIRMAR]', 'B', 'M', 'Promedio medido en pruebas de carga del frontend ≤ 3 s.', 'E5', 'T', '3'],
            ]}
          />
        </SubSection>

        <SubSection title="Notas sobre esta versión">
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1 text-sm">
            <li><strong>Estado actual:</strong> los requisitos aprobados figuran como <strong>Activo (AC)</strong>. Los requisitos evaluados y desaprobados (RF-09 y RF-10) figuran como <strong>Cancelado (CA)</strong>, que en esta matriz se usa para representar "desaprobado": quedan documentados por trazabilidad, pero no forman parte del alcance activo del proyecto.</li>
            <li><strong>Fecha de cumplimiento:</strong> queda <strong>[POR CONFIRMAR]</strong> en todas las filas activas, ya que se completa recién cuando cada requisito se verifica en la práctica. En RF-09 y RF-10 no aplica, por tratarse de requisitos rechazados.</li>
            <li><strong>Nivel de estabilidad, grado de complejidad e Impacto (IMP):</strong> son una primera estimación del equipo redactor, para poder priorizar visualmente. Quedan sujetos a que el equipo y el rector los revisen y ajusten.</li>
            <li><strong>Revisada por / Aprobada por (control de versiones):</strong> quedan <strong>[POR CONFIRMAR]</strong>, porque todavía no se definió quién revisa el documento antes de pasarlo al rector para su aprobación.</li>
            <li><strong>QR-05</strong> (tiempo de carga del catálogo &lt; 3 s) fue aprobado por el rector Juan Henrique.</li>
            <li><strong>TR-05</strong> es una aclaración nueva de "límites de fases u operaciones": el soporte técnico y el mantenimiento de los servidores posteriores a los 2 meses del proyecto quedan excluidos del alcance. Fue aprobada.</li>
            <li><strong>RF-09 y RF-10</strong> son requisitos inventados a modo de ejemplo de requisitos evaluados y desaprobados. Quedan reservados para incorporarse como <strong>exclusiones</strong> en el futuro Enunciado del Alcance (Scope Statement).</li>
          </ul>
        </SubSection>
      </Section>

      {/* Section 11 at the very end, below the matrix */}
      <Section title="11. Aprobación del Documento">
        <Paragraph>
          Con la firma del presente documento, el rector de la Biblioteca Elses y el Project Manager validan la completitud y corrección de los requisitos aquí especificados como base formal para el diseño y desarrollo de ElsesNovels.
        </Paragraph>
        <Table
          headers={['Firma', 'Rol', 'Fecha']}
          rows={[
            ['Juan Henrique', 'Rector de la Biblioteca Elses (Patrocinador)', ''],
            ['Eber Chiecher', 'Project Manager', ''],
          ]}
        />
      </Section>

    </div>
  );
}
