import { Link } from 'react-router-dom'
import { ChevronRight, FileText, Users, Building2, Clock } from 'lucide-react'

export default function Acta() {
  return (
    <div className="bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Acta de Constitución</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <FileText className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Acta de Constitución del Proyecto
            </h1>
          </div>
          <p className="text-slate-500 text-lg">ElsesNovels — Plataforma de Lectura de Novelas</p>
        </header>

        {/* Meta bar */}
        <div className="flex flex-wrap gap-4 mb-10 p-4 bg-white rounded-lg border border-gray-300">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Building2 className="w-4 h-4 text-amber-700" />
            <span>UNViMe — Carrera de Ingeniería en Sistemas de Información</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-amber-700" />
            <span>21 de Septiembre de 2026</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-amber-700" />
            <span>Project Manager: Eber Chiecher</span>
          </div>
        </div>

        {/* Content */}
        <article className="doc-article space-y-8">
          <Section title="Datos generales">
            <Table
              columns={['Campo', 'Detalle']}
              rows={[
                ['Nombre del proyecto', 'ElsesNovels: plataforma web de lectura de novelas de la Biblioteca Elses'],
                ['Número de proyecto', 'Por asignar'],
                ['Fecha', '21/09/2026'],
                ['Revisión / versión', '1'],
                ['Preparado por', 'Eber Chiecher, Project Manager'],
                ['Cliente / Aprobador', 'Juan Henrique, rector de la Biblioteca Elses'],
                ['Project Manager', 'Eber Chiecher'],
                ['Tipo de producto', 'Aplicación web (frontend React + API REST Spring Boot), con versión de escritorio y móvil'],
              ]}
            />
          </Section>

          <Section title="1. Propósito y Justificación">
            <p className="text-gray-700">
              Este proyecto consiste en crear una página web para la Biblioteca Elses que permita visualizar
              el catálogo de novelas que la biblioteca tiene almacenado en su servidor, en una base de datos
              relacional MariaDB.
            </p>
            <p className="text-gray-700 mt-3">
              El propósito es enriquecer culturalmente a la sociedad, de modo que personas de toda índole
              puedan disfrutar de un buen catálogo de novelas de forma gratuita.
            </p>
            <p className="text-gray-700 mt-3">
              Las novelas se leerá <strong>por capítulos</strong>, respetando cómo está construida la base
              de datos provista: cada capítulo tiene un máximo de 4.000 caracteres (equivalente a unas 5 páginas).
            </p>
          </Section>

          <Section title="2. Beneficios Esperados">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Para los lectores:</strong> acceso gratuito, desde cualquier dispositivo, a un catálogo de novelas organizado por categorías y con búsqueda.</li>
              <li><strong>Para la Biblioteca Elses:</strong> un canal digital para difundir su catálogo y cumplir con su misión cultural.</li>
              <li><strong>Para el equipo:</strong> experiencia real de desarrollo, diseño y gestión de un proyecto (pasantía no remunerada).</li>
            </ul>
          </Section>

          <Section title="3. Objetivos (SMART)">
            <Table
              columns={['#', 'Objetivo', 'Criterio de éxito (medible)', 'Fecha objetivo']}
              rows={[
                ['1', 'Publicar ElsesNovels (frontend y API) en las VPS de la institución', 'Sitio accesible por navegador y API respondiendo en producción', 'Óptimo: 1 mes. Límite: 2 meses desde la aceptación del acta'],
                ['2', 'Soportar alta concurrencia de lectura', '10.000 usuarios simultáneos solicitando un capítulo, verificado con prueba de carga', 'Antes de la aceptación final'],
                ['3', 'Navegación liviana para el cliente', 'Listados paginados con 20 novelas por página', 'Antes de la aceptación final'],
                ['4', 'Diseño validado por el cliente', 'Diseños Penpot (móvil y escritorio) aceptados por el rector antes de cerrar el frontend', 'Según cronograma (sección 7)'],
                ['5', 'Costo económico controlado', 'Mano de obra de USD 0 y gasto en tokens de IA de hasta USD 800', 'Durante todo el proyecto'],
              ]}
            />
          </Section>

          <Section title="4. Descripción y Alcance">
            <SubSection title="4.1 Descripción general y enfoque">
              <p className="text-gray-700">
                El sistema tendrá dos capas: una <strong>API REST</strong> (Java, Spring Boot) que accede a la
                base de datos MariaDB de la biblioteca, y una <strong>aplicación web</strong> (React) servida
                con Nginx que consume esa API. Ambas se alojarán en VPS provistas por la institución.
              </p>
              <p className="text-gray-700 mt-3">
                El diseño de interfaces se hará en Penpot (átomos, moléculas y organismos) para escritorio y
                móvil, y deberá ser aceptado por el rector antes de avanzar con su implementación completa.
              </p>
            </SubSection>

            <SubSection title="4.2 Qué INCLUYE el proyecto">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Visualización del catálogo de novelas y lectura por capítulos (máximo 4.000 caracteres por capítulo).</li>
                <li>Barra de navegación con <strong>buscador</strong> y <strong>filtros por categoría de novela</strong>.</li>
                <li>Una <strong>página por categoría</strong>, con listados paginados de 20 novelas por página, para evitar que el navegador del usuario se quede sin recursos.</li>
                <li>Recordar el <strong>último capítulo leído</strong> por el usuario mediante una <strong>cookie</strong> de sesión.</li>
                <li>Uso de <strong>Redis</strong> para persistir, por sesión, el último capítulo leído, de modo que ese dato sobrevive aunque el servidor de la API se reinicie.</li>
                <li>Caché en memoria RAM dentro de la API REST para otros datos de catálogo, sin persistencia (ver requisito RQ1).</li>
                <li>Diseños en Penpot para versión móvil y de escritorio.</li>
                <li>Configuración de la VPS del frontend (Nginx) y de la VPS de la API.</li>
                <li>Pruebas de integración, de carga y de estrés.</li>
              </ul>
            </SubSection>

            <SubSection title="4.3 Qué NO incluye el proyecto">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Modificar la base de datos MariaDB</strong> de la biblioteca.</li>
                <li><strong>Persistencia del caché general</strong> de catálogo: fuera del dato de "último capítulo leído" (que sí persiste en Redis), el resto del caché en RAM se pierde si la API se apaga.</li>
                <li>Usuarios, cuentas, favoritos ni ranking de "más vistos": el esquema provisto no tiene tablas para eso, solo novelas (con URL de imagen) divididas en capítulos.</li>
              </ul>
            </SubSection>

            <SubSection title="4.4 Requisitos del Producto">
              <Table
                columns={['ID', 'Requisito']}
                rows={[
                  ['RQ1', 'Caché volátil por diseño (catálogo general): la API guarda el caché de datos de catálogo únicamente en memoria RAM. Cuando la API se reinicia o se apaga, ese caché se pierde, y esto es el comportamiento esperado del producto. Tras un reinicio, la API debe seguir respondiendo correctamente con ese caché vacío.'],
                  ['RQ2', 'Persistencia de sesión de lectura con Redis: el último capítulo leído por cada usuario (identificado por su cookie de sesión) se guarda en Redis. Este dato debe mantenerse aunque el servidor de la API se reinicie o se apague y vuelva a levantarse.'],
                  ['RQ3', 'Concurrencia: el sistema debe soportar la petición de un capítulo por parte de 10.000 usuarios en simultáneo.'],
                  ['RQ4', 'Paginación: los listados de novelas muestran 20 novelas por página.'],
                  ['RQ5', 'Capítulos: se muestran tal como están en la base de datos, con un máximo de 4.000 caracteres cada uno.'],
                ]}
              />
            </SubSection>
          </Section>

          <Section title="5. Roles de Usuario e Historias">
            <SubSection title="Roles">
              <Table
                columns={['Rol', 'Descripción']}
                rows={[
                  ['Lector', 'Usuario final, mayor de 16 años, que quiere leer novelas gratis. No requiere registro.'],
                ]}
              />
            </SubSection>

            <SubSection title="Historias de Usuario">
              <Table
                columns={['ID', 'Rol', 'Historia']}
                rows={[
                  ['H1', 'Lector', 'Como lector, quiero ver el catálogo paginado de a 20 novelas para que la página cargue rápido en mi dispositivo.'],
                  ['H2', 'Lector', 'Como lector, quiero filtrar novelas por categoría para encontrar rápido lo que me interesa.'],
                  ['H3', 'Lector', 'Como lector, quiero buscar novelas desde la barra de navegación para llegar directo a una que ya conozco.'],
                  ['H4', 'Lector', 'Como lector, quiero leer una novela capítulo por capítulo para leer en tramos cortos.'],
                  ['H5', 'Lector', 'Como lector, quiero retomar desde el último capítulo que leí para no perder mi lugar.'],
                  ['H6', 'Lector', 'Como lector, quiero usar el sitio cómodamente desde el celular y desde la computadora.'],
                ]}
              />
            </SubSection>
          </Section>

          <Section title="6. Entregables y Criterios de Aceptación">
            <Table
              columns={['#', 'Entregable', 'Responsable', 'Criterio de aceptación']}
              rows={[
                ['E1', 'Diseños en Penpot (átomos, moléculas y organismos) para móvil y escritorio', 'Delia Lucero', 'Aceptación (respuesta) del rector Juan Henrique. Sin aceptación no se cierra el frontend.'],
                ['E2', 'Configuración de la VPS del frontend con Nginx', 'Marcos Aurelio', 'El sitio React se sirve correctamente desde la VPS.'],
                ['E3', 'Configuración de la VPS de la API REST', 'Marcos Aurelio', 'La API queda desplegada y accesible, con conexión a MariaDB.'],
                ['E4', 'API REST (Spring Boot) que accede a MariaDB', 'Marcos Aurelio', 'Endpoints para catálogo, categorías, búsqueda y capítulos, con paginación de 20 novelas. Sin modificar la base de datos.'],
                ['E5', 'Aplicación web React (barra de navegación con buscador y filtros, páginas por categoría, lector por capítulos)', 'Aristóteles', 'Implementa los diseños aceptados y las historias H1 a H6 en móvil y escritorio.'],
                ['E6', 'Cookie de sesión + persistencia del "último capítulo leído" en Redis', 'Aristóteles (cookie) y Marcos Aurelio (Redis)', 'Al volver al sitio, el lector retoma en el último capítulo abierto, incluso si el servidor de la API se reinició.'],
                ['E7', 'Pruebas de integración, carga y estrés', 'Marcos Aurelio', 'Prueba de carga con 10.000 usuarios simultáneos pidiendo un capítulo, con tasa de error < 1 % y percentil 95 de respuesta ≤ 2 s.'],
                ['E8', 'Configuración de Redis en la VPS de la API', 'Marcos Aurelio', 'Redis desplegado y accesible desde la API. Al reiniciar la API o el propio Redis (persistencia habilitada), los datos de último capítulo leído se conservan.'],
              ]}
            />
          </Section>

          <Section title="7. Cronograma e Hitos">
            <p className="text-gray-700 mb-4">
              <strong>Duración:</strong> 2 meses desde la aceptación del acta.{' '}
              <strong>Tiempo óptimo: 1 mes.</strong> <strong>Tiempo límite: 2 meses.</strong>
            </p>
            <Table
              columns={['Hito', 'Semana objetivo (óptimo)', 'Semana límite', 'Entregable asociado']}
              rows={[
                ['Aprobación del acta', '0', '0', 'Acta firmada'],
                ['VPS configuradas (frontend y API)', '1', '3', 'E2, E3'],
                ['Diseños entregados al rector', '2', '3', 'E1'],
                ['Aceptación de diseños por el rector', '2', '4', 'E1 aceptado'],
                ['API REST funcional y Redis configurado', '3', '5', 'E4, E8'],
                ['Frontend integrado con la API (incluye cookie y persistencia en Redis)', '3', '6', 'E5, E6'],
                ['Pruebas de integración, carga y estrés', '4', '7', 'E7'],
                ['Despliegue final y aceptación del rector', '4', '8', 'Cierre del proyecto'],
              ]}
            />
          </Section>

          <Section title="8. Costos y Recursos">
            <Table
              columns={['Tipo de costo', 'Detalle', 'Monto / cantidad']}
              rows={[
                ['Económico (personal)', 'Todo el equipo son estudiantes en pasantía no paga', 'USD 0'],
                ['Tokens de IA', 'USD 200 por integrante (PM, diseñadora, backend y frontend) vía OpenRouter, aportados por la Biblioteca Elses', 'USD 800 en total'],
                ['Computacional: VPS del frontend', '3 GB de RAM, 4 núcleos a 3 GHz, con Nginx. Costo considerado despreciable', 'Provista por la institución'],
                ['Computacional: VPS de la API', '10 GB de RAM, 8 núcleos a 3 GHz. Es el recurso a vigilar', 'Provista por la institución'],
                ['Tiempo', 'Óptimo 1 mes, límite 2 meses', '—'],
              ]}
            />
            <p className="text-gray-700 mt-3">
              <strong>Fuente de financiamiento de los USD 800:</strong> Biblioteca Elses.
            </p>
          </Section>

          <Section title="9. Supuestos">
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>La institución proveerá las dos VPS con las especificaciones indicadas.</li>
              <li>La base de datos MariaDB será accesible desde la VPS de la API y su esquema no cambiará durante el proyecto.</li>
              <li>La base de datos incluye la información necesaria para categorizar y buscar novelas (categoría y título).</li>
              <li>El rector responderá a los diseños en un plazo razonable.</li>
              <li>El equipo tendrá disponibilidad durante los 2 meses del proyecto.</li>
              <li>El público objetivo son mayores de 16 años. El sistema no verifica la edad (no hay usuarios ni registro).</li>
            </ul>
          </Section>

          <Section title="10. Restricciones">
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>No se puede modificar la base de datos MariaDB.</li>
              <li>El esquema no tiene tablas de usuarios, favoritos ni "más vistos".</li>
              <li>Capítulos de un máximo de 4.000 caracteres (≈ 5 páginas), según la base provista.</li>
              <li>Listados de 20 novelas por página.</li>
              <li>Plazo límite de 2 meses desde la aceptación del acta.</li>
              <li>Presupuesto económico de USD 0 en mano de obra y USD 800 en tokens de IA.</li>
              <li>Recursos de la VPS de la API: 10 GB de RAM y 8 núcleos a 3 GHz.</li>
            </ul>
          </Section>

          <Section title="11. Riesgos de Alto Nivel">
            <Table
              columns={['#', 'Riesgo', 'Probabilidad', 'Impacto', 'Estrategia de mitigación']}
              rows={[
                ['R1', 'La API no soporta 10.000 lectores simultáneos con los recursos de la VPS', 'Media', 'Alto', 'Caché en RAM de capítulos, pruebas de carga tempranas, ajuste de pool de conexiones a MariaDB'],
                ['R2', 'El rector demora o rechaza los diseños', 'Media', 'Alto', 'Entregar diseños en etapas y acordar plazo de respuesta'],
                ['R3', 'Retrasos por ser una pasantía sin remuneración y con equipo estudiantil', 'Baja', 'Alto', 'Seguimiento semanal del PM, hitos con fecha óptima y límite'],
                ['R4', 'La base de datos no tiene los campos necesarios para categorías o búsqueda', 'Baja', 'Alto', 'Revisar el esquema en la primera semana'],
                ['R5', 'Agotar el presupuesto de tokens de IA', 'Baja', 'Alto', 'Seguimiento del consumo por integrante'],
                ['R6', 'El lector borra las cookies y pierde su último capítulo', 'Alta', 'Bajo', 'Aceptado como limitación (no hay cuentas de usuario); Redis solo persiste el dato mientras la cookie de sesión exista'],
                ['R7', 'Falla o caída del servicio Redis', 'Baja', 'Medio', 'Monitoreo del servicio y reinicio automático; si Redis no responde, el sitio sigue funcionando y solo se pierde la posición de lectura guardada'],
              ]}
            />
          </Section>

          <Section title="12. Interesados y Organización del Proyecto">
            <Table
              columns={['Función', 'Nombre', 'Rol y responsabilidades', 'Autoridad', 'Influencia']}
              rows={[
                ['Rector de la Biblioteca Elses (cliente)', 'Juan Henrique', 'Representa a la biblioteca. Acepta o rechaza los entregables.', 'Aprobación de entregables', 'Alta'],
                ['Project Manager', 'Eber Chiecher', 'Estudiante de Administración de Empresas. Punto de contacto de todas las partes interesadas, dirige y gestiona el proyecto.', 'Gestión del equipo y seguimiento', 'Alta'],
                ['Diseñadora UX', 'Delia Lucero', 'Estudiante de Diseño Gráfico. Diseña en Penpot átomos, moléculas y organismos, para escritorio y móvil.', 'Decisiones de diseño', 'Media'],
                ['Backend', 'Marcos Aurelio', 'Estudiante de Ingeniería en Sistemas. Configura la VPS, diseña la API REST con Java Spring y ejecuta pruebas de integración, carga y estrés.', 'Decisiones técnicas del backend', 'Media'],
                ['Frontend', 'Aristóteles', 'Estudiante de Ingeniería en Sistemas. Desarrolla la aplicación web con React.', 'Decisiones técnicas del frontend', 'Media'],
                ['Usuarios finales', 'Lectores mayores de 16 años', 'Leen novelas gratis.', '—', 'Baja'],
              ]}
            />
          </Section>

          <Section title="13. Criterios Generales de Éxito y Aceptación">
            <p className="text-gray-700">
              El rector Juan Henrique es quien acepta o rechaza los entregables. Un entregable se considera
              aceptado cuando cumple su criterio de la sección 6 y el rector lo confirma. El proyecto se
              considera exitoso cuando el sitio está publicado, soporta la prueba de 10.000 usuarios
              simultáneos y el rector acepta el resultado final dentro del plazo límite de 2 meses.
            </p>
          </Section>

          <Section title="14. Autorización del Proyecto">
            <p className="text-gray-700 mb-4">
              Al firmar, los abajo firmantes aprueban esta acta y autorizan el inicio del proyecto.
            </p>
            <Table
              columns={['Rol', 'Nombre', 'Firma', 'Fecha']}
              rows={[
                ['Rector de la Biblioteca Elses (cliente)', 'Juan Henrique', '', ''],
                ['Project Manager', 'Eber Chiecher', '', ''],
              ]}
            />
          </Section>
        </article>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="section-divider first:mt-0 first:border-t-0">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 font-serif">{title}</h2>
      {children}
    </section>
  )
}

function SubSection({ title, children }) {
  return (
    <div className="mb-5 last:mb-0">
      <h3 className="text-base font-semibold text-gray-800 mb-2 font-serif">{title}</h3>
      {children}
    </div>
  )
}

function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-300 my-3">
      <table className="doc-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
