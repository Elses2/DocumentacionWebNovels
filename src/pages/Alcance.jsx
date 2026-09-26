import { Link } from 'react-router-dom'
import { ChevronRight, Target, FileCheck, AlertCircle, Ban, Lock } from 'lucide-react'

export default function Alcance() {
  return (
    <div className="bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Gestión del Alcance</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Enunciado del Alcance del Proyecto
            </h1>
          </div>
          <p className="text-slate-500 text-lg">Proyecto ElsesNovels — Plataforma de Lectura de Novelas</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-10 p-4 bg-white rounded-lg border border-gray-300">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FileCheck className="w-4 h-4 text-amber-700" />
            <span>Documento base: Acta de Constitución</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Lock className="w-4 h-4 text-amber-700" />
            <span>Restricción de esfuerzo: $0 USD (pasantía no remunerada)</span>
          </div>
        </div>

        <article className="doc-article space-y-8">
          <Section title="Descripción">
            <p className="text-gray-700 leading-relaxed">
              El proyecto <strong>"ElsesNovels"</strong> consiste en el diseño, desarrollo e implementación de una plataforma web para la visualización y lectura por capítulos del catálogo de novelas de la Biblioteca Elses, ya almacenado en una base de datos relacional MariaDB provista por la institución. Su propósito es ofrecer un canal digital gratuito, sin necesidad de registro, que permita a cualquier persona mayor de 16 años disfrutar del catálogo cultural de la biblioteca desde escritorio o desde el celular.
            </p>
          </Section>

          <Section title="PROYECTO: Alcance">
            <p className="text-gray-700 mb-3">El alcance del proyecto abarca el ciclo completo desde la configuración de la infraestructura hasta el despliegue en producción y la aceptación final del rector (Release 1.0).</p>
            <br />
            <p className="text-gray-700 mb-3"><em>Incluye:</em></p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Gestión del proyecto bajo un esfuerzo de mano de obra de $0 USD (equipo en pasantía no remunerada) y un presupuesto de tokens de IA de hasta USD 800, aportado por la Biblioteca Elses, dentro de un plazo óptimo de 1 mes y límite de 2 meses desde la aceptación del Acta de Constitución.</li>
              <li>Configuración de las VPS institucionales para el frontend (Nginx) y para la API (incluyendo Redis).</li>
              <li>Diseño de interfaces en Penpot (escritorio y móvil) y su validación y aceptación por parte del rector antes de cerrar el desarrollo del frontend.</li>
              <li>Desarrollo de la API REST (Spring Boot) y de la aplicación web (React) que exponen el catálogo de la Biblioteca Elses, sin modificar la base de datos MariaDB.</li>
              <li>Ejecución de pruebas de integración, carga (10.000 usuarios simultáneos) y estrés.</li>
              <li>Despliegue de la plataforma completa en las VPS institucionales de producción.</li>
              <li>Cierre formal del proyecto, incluyendo la aceptación final del rector.</li>
            </ul>
            <br />
            <p className="text-gray-700"><em>En síntesis: el alcance del proyecto comprende todo el trabajo necesario —y únicamente ese trabajo— para entregar exitosamente el producto ElsesNovels con las características especificadas, dentro del tiempo, costo y calidad definidos en el Acta de Constitución.</em></p>

            <p className="text-gray-700 mt-4 mb-3"><em>No incluye:</em></p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Soporte técnico y mantenimiento de los servidores (frontend y API) posteriores a los 2 meses de duración del proyecto: a partir de la entrega, la operación diaria queda a cargo de la Biblioteca Elses (aclaración de límites de fases u operaciones, requisito TR-05).</li>
              <li>Modificación de la base de datos MariaDB de la Biblioteca Elses, bajo ninguna circunstancia (StR-02 / QR-02).</li>
              <li>Adquisición de hardware, licencias comerciales o servicios pagos de terceros que excedan los USD 800 de tokens de IA aportados por la biblioteca (coherente con la restricción de $0 USD en mano de obra).</li>
              <li>Uso de Redis como caché general de todo el catálogo: su única función es persistir el último capítulo leído por sesión (RQ1/RNF-02 del caché volátil de catálogo).</li>
              <li>Documentación técnica de arquitectura y manuales de usuario del producto: no se elaboran en este proyecto. La documentación del proyecto en sí (Acta de Constitución, Documento de Requisitos, Matriz de Requisitos y este Enunciado del Alcance) sí está contemplada y ya forma parte de los artefactos del proyecto.</li>
            </ul>

            <SubSection title="Entregables — Documentación y Cierre">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Reportes de QA:</strong> evidencia de las pruebas de integración, carga y estrés ejecutadas (QR-01). <em>Propuesto por: Equipo de desarrollo. Aprobado por: Eber Chiecher (PM).</em></li>
                <li><strong>Acta de cierre del proyecto:</strong> documento firmado por el rector que deja constancia de la aceptación final y de que el soporte y mantenimiento post-entrega no están incluidos (TR-05). <em>Propuesto por: Equipo de desarrollo. Aprobado por: Eber Chiecher (PM).</em></li>
              </ul>
            </SubSection>

            <SubSection title="Criterios de Aceptación asociados">
              <p className="text-gray-700">
                <strong>Costo:</strong> evidencia comprobable de que el proyecto se ejecutó con $0 USD de mano de obra y que el gasto en tokens de IA no superó los USD 800 aportados por la Biblioteca Elses (BR-02, PR-02, PR-03).
              </p>
            </SubSection>

            <SubSection title="Supuestos">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>La institución proveerá las dos VPS con las especificaciones indicadas (frontend: 3 GB RAM / 4 núcleos; API: 10 GB RAM / 8 núcleos).</li>
                <li>La base de datos MariaDB será accesible desde la VPS de la API y su esquema no cambiará durante el proyecto.</li>
                <li>La base de datos incluye la información necesaria para categorizar y buscar novelas (categoría y título).</li>
                <li>El rector responderá a los diseños en un plazo razonable.</li>
                <li>El equipo tendrá disponibilidad durante los 2 meses del proyecto.</li>
              </ul>
            </SubSection>

            <SubSection title="Exclusiones">
              <p className="text-gray-700">Sustitución de cualquier sistema interno de gestión bibliotecaria de la Biblioteca Elses: ElsesNovels es un canal de lectura complementario para el público, no un reemplazo de los sistemas administrativos o de gestión de la institución.</p>
            </SubSection>

            <SubSection title="Restricciones">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Tiempo:</strong> plazo óptimo de 1 mes, límite de 2 meses desde la aceptación del Acta de Constitución.</li>
                <li><strong>Costo:</strong> mano de obra $0 USD; presupuesto de tokens de IA de hasta USD 800, aportado por la Biblioteca Elses.</li>
                <li><strong>Recursos de infraestructura:</strong> VPS fijas provistas por la institución (frontend: 3 GB RAM / 4 núcleos a 3 GHz; API: 10 GB RAM / 8 núcleos a 3 GHz), sin posibilidad de ampliación dentro del proyecto.</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="PRODUCTO: Alcance">
            <p className="text-gray-700 mb-3">El alcance del producto comprende las funcionalidades y características del sistema final "ElsesNovels":</p>
            <br />
            <p className="text-gray-700 mb-3"><em>Incluye:</em></p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><em>Catálogo:</em> listado paginado de novelas, 20 por página, con filtro por categoría (una página por categoría) y buscador desde la barra de navegación (RF-01, RF-02, RF-03).</li>
              <li><em>Lectura por capítulos:</em> visualización del contenido de cada novela dividido en capítulos, respetando el límite de 4.000 caracteres tal como está en la base de datos (RF-04).</li>
              <li><em>Identificación sin registro:</em> cookie de sesión que identifica al lector sin pedirle cuenta ni datos personales (RF-05).</li>
              <li><em>Persistencia de lectura:</em> guardado en Redis del último capítulo leído por sesión, recuperable incluso tras un reinicio del servidor de la API (RF-06, RF-07, RNF-03).</li>
              <li><em>API REST:</em> endpoints para consultar catálogo, categorías, búsqueda y capítulos, sin modificar la base de datos MariaDB (RF-08).</li>
              <li><em>Interfaz responsive:</em> funcionamiento correcto en escritorio y en dispositivos móviles, según los diseños aceptados por el rector (RNF-04).</li>
              <li><em>Rendimiento:</em> soporte de 10.000 usuarios simultáneos solicitando un capítulo, con tasa de error menor al 1 % y percentil 95 de respuesta menor o igual a 2 segundos (BR-04, RNF-01).</li>
              <li><em>Compatibilidad de navegadores:</em> funcionamiento correcto en las dos últimas versiones estables de Google Chrome, Mozilla Firefox, Microsoft Edge y Safari, tanto en escritorio como en dispositivos móviles (RNF-06).</li>
            </ul>

            <p className="text-gray-700 mt-4 mb-3"><em>No incluye:</em></p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Cuentas de usuario, perfiles, favoritos, calificaciones o reseñas de novelas: el esquema de la base de datos provista no tiene tablas para eso (StR-02).</li>
              <li>Traducción del catálogo a otros idiomas además del original en que está cargado en la base de datos.</li>
              <li>Persistencia del caché general del catálogo: solo el último capítulo leído se persiste en Redis; el resto del caché en RAM se pierde si la API se reinicia (RNF-02).</li>
              <li>Verificación de la edad de los lectores: el público objetivo son mayores de 16 años, pero el sistema no lo comprueba, dado que no hay usuarios ni registro.</li>
              <li><em>[POR CONFIRMAR]</em> Aplicaciones móviles nativas o clientes de escritorio instalables: no está mencionado explícitamente en el Acta de Constitución, pero se infiere porque el producto se describe siempre como una "página web" / "aplicación web".</li>
            </ul>

            <SubSection title="Entregables — Software">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Configuración de infraestructura:</strong> VPS del frontend con Nginx y VPS de la API con Redis (E2, E3, E8).</li>
                <li><strong>API REST:</strong> desarrollada en Java Spring Boot, conectada a la base de datos MariaDB (E4).</li>
                <li><strong>Aplicación web:</strong> desarrollada en React, con catálogo paginado, buscador, filtro por categoría y lector de capítulos (E5).</li>
                <li><strong>Módulo de sesión y persistencia de lectura:</strong> cookie de sesión y guardado del último capítulo leído en Redis (E6).</li>
                <li><strong>Diseños de interfaz:</strong> mockups en Penpot (átomos, moléculas y organismos) para escritorio y móvil, aceptados por el rector (E1).</li>
                <li><strong>Reportes de pruebas:</strong> evidencia de las pruebas de integración, carga y estrés (E7).</li>
              </ul>
            </SubSection>

            <SubSection title="Criterios de Aceptación asociados">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Catálogo y paginación:</strong> cada página del catálogo muestra exactamente 20 novelas, salvo la última (RF-01).</li>
                <li><strong>Rendimiento y concurrencia:</strong> la prueba de carga con 10.000 usuarios simultáneos solicitando un capítulo cumple una tasa de error menor al 1 % y un percentil 95 de respuesta menor o igual a 2 segundos (RNF-01, BR-04).</li>
                <li><strong>Persistencia de sesión:</strong> tras reiniciar la API, un lector con cookie de sesión válida retoma exactamente en el capítulo donde había quedado (RF-07, RNF-03).</li>
                <li><strong>Diseño:</strong> existe una aceptación formal del rector sobre los diseños Penpot antes de cerrar el desarrollo del frontend (TR-04).</li>
                <li><strong>Integridad de datos:</strong> al cierre del proyecto, el esquema y los datos de MariaDB son idénticos a los provistos al inicio (StR-02, QR-02).</li>
              </ul>
            </SubSection>

            <SubSection title="Supuestos">
              <p className="text-gray-700">El público objetivo son mayores de 16 años; el sistema no verifica la edad, dado que no hay usuarios ni registro.</p>
              <p className="text-gray-700 mt-2"><em>[POR CONFIRMAR]</em> Los lectores finales dispondrán de una conexión a internet estable y utilizarán navegadores web modernos y actualizados: no está enunciado explícitamente en el Acta de Constitución ni en el Documento de Requisitos, se propone por analogía con el requisito de compatibilidad entre navegadores (QR-03).</p>
            </SubSection>

            <SubSection title="Exclusiones">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Calificaciones y reseñas de novelas (RF-09):</strong> evaluado y desaprobado por el equipo. Requeriría tablas de usuarios, cuentas y reseñas que no existen en el esquema de MariaDB provisto y no está contemplado en el presupuesto ni en el plazo de 2 meses.</li>
                <li><strong>Traducción del catálogo a múltiples idiomas (RF-10):</strong> evaluado y desaprobado por el equipo. La base de datos provista solo contiene el contenido en su idioma original; traducirlo excede el alcance, el presupuesto de tokens de IA y el plazo de 2 meses.</li>
              </ul>
            </SubSection>

            <SubSection title="Restricciones">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Técnicas:</strong> el contenido de cada capítulo no puede exceder los 4.000 caracteres, tal como está estructurada la base de datos provista por la biblioteca; el sistema no puede modificar dicha estructura.</li>
                <li><strong>Técnicas — Compatibilidad de navegadores:</strong> el sistema debe soportar las dos últimas versiones estables de Google Chrome, Mozilla Firefox, Microsoft Edge y Safari, en escritorio y en dispositivos móviles (Android e iOS) (RNF-06).</li>
              </ul>
            </SubSection>
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
