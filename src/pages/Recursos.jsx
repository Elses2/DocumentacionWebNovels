import { Link } from 'react-router-dom'
import { ChevronRight, Hammer, Users, Building2, Clock } from 'lucide-react'

export default function Recursos() {
  return (
    <div className="bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Gestión de Recursos</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <Hammer className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Gestión de Recursos del Proyecto
            </h1>
          </div>
          <p className="text-slate-500 text-lg">Plan de Gestión de Recursos — BioSignal</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-10 p-4 bg-white rounded-lg border border-gray-300">
          <div className="flex items-center gap-2 text-sm text-gray-600"><Users className="w-4 h-4 text-amber-700" /><span>6 miembros del equipo</span></div>
          <div className="flex items-center gap-2 text-sm text-gray-600"><Building2 className="w-4 h-4 text-amber-700" /><span>Infraestructura UNViMe / Cloud</span></div>
          <div className="flex items-center gap-2 text-sm text-gray-600"><Clock className="w-4 h-4 text-amber-700" /><span>260–360 horas totales</span></div>
        </div>

        <article className="doc-article space-y-8">
          <Section title="1. Plan de Gestión de Recursos">
            <p className="text-gray-700">Define la identificación, adquisición, asignación, gestión y liberación de los recursos necesarios para el proyecto BioSignal. Incluye recursos humanos, infraestructura tecnológica, herramientas y materiales.</p>
          </Section>

          <Section title="2. Recursos Humanos">
            <SubSection title="2.1 Equipo del Proyecto">
              <div className="overflow-x-auto rounded-lg border border-gray-300">
                <table className="doc-table">
                  <thead>
                    <tr><th>Rol</th><th>Persona</th><th>Responsabilidad</th><th>Esfuerzo Estimado</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="font-medium">Director del Proyecto</td><td>Astudillo, Mateo Tomás</td><td>Gestión general, documentación, coordinación</td><td>~60 hs</td></tr>
                    <tr><td className="font-medium">Asistente PM</td><td>Ávila Gelbes, Ignacio N.</td><td>Documentación, seguimiento, comunicaciones</td><td>~30 hs</td></tr>
                    <tr><td className="font-medium">Desarrollador Backend / QA</td><td>Herrera, Germán E.</td><td>API, BD, pruebas backend, streaming</td><td>~85 hs</td></tr>
                    <tr><td className="font-medium">Desarrollador Backend / Infra.</td><td>Chiecher, Eber Blas</td><td>Infraestructura, despliegue, DevOps</td><td>~40 hs</td></tr>
                    <tr><td className="font-medium">Desarrollador Full-Stack / Soporte</td><td>Mosainer, Martín D.</td><td>Integración, soporte, frontend/backend</td><td>~30 hs</td></tr>
                    <tr><td className="font-medium">Desarrolladora Frontend</td><td>Pereyra, Rocío</td><td>Visor, UI/UX, renderizado gráfico</td><td>~80 hs</td></tr>
                  </tbody>
                </table>
              </div>
            </SubSection>

            <SubSection title="2.2 Roles y Responsabilidades (RACI)">
              <div className="overflow-x-auto rounded-lg border border-gray-300">
                <table className="doc-table">
                  <thead>
                    <tr><th>Actividad</th><th>R: Responsable</th><th>A: Aprobador</th><th>C: Consulta</th><th>I: Informado</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="font-medium">Documentación gestión</td><td>MA</td><td>IA</td><td>—</td><td>AR</td></tr>
                    <tr><td className="font-medium">Arquitectura y stack</td><td>EC</td><td>MA</td><td>GH,MM,RP</td><td>IA</td></tr>
                    <tr><td className="font-medium">Desarrollo Backend</td><td>GH</td><td>MA</td><td>EC</td><td>MM,RP</td></tr>
                    <tr><td className="font-medium">Desarrollo Frontend</td><td>RP</td><td>MA</td><td>MM</td><td>GH,EC</td></tr>
                    <tr><td className="font-medium">Infraestructura/Despliegue</td><td>EC</td><td>MA</td><td>MM</td><td>GH</td></tr>
                    <tr><td className="font-medium">QA y Pruebas</td><td>GH</td><td>MA</td><td>EC,RP</td><td>IA</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">MA = Mateo Astudillo · IA = Ignacio Ávila · EC = Eber Chiecher · GH = Germán Herrera · MM = Martín Mosainer · RP = Rocío Pereyra · AR = Alejandro Rosas</p>
            </SubSection>
          </Section>

          <Section title="3. Recursos de Infraestructura y Hardware">
            <SubSection title="3.1 Infraestructura de Desarrollo">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InfraCard name="Repositorio Git" provider="GitHub/GitLab institucional" cost="$0" />
                <InfraCard name="Entorno local" provider="Docker / Node.js / Navegador" cost="$0" />
                <InfraCard name="Servidor Desarrollo" provider="UNViMe / local" cost="$0" />
                <InfraCard name="Plataforma Cloud (Producción)" provider="Vercel / Render (capa gratuita)" cost="$0" />
              </div>
            </SubSection>
            <SubSection title="3.2 Herramientas de Desarrollo">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ToolCard name="Editor de código" detail="VS Code" />
                <ToolCard name="Control de versiones" detail="Git + GitHub/GitLab" />
                <ToolCard name="Framework Frontend" detail="React + Vite" />
                <ToolCard name="Estilizado" detail="Tailwind CSS" />
                <ToolCard name="Pruebas" detail="Vitest, Playwright" />
                <ToolCard name="Documentación" detail="Markdown / HTML" />
              </div>
            </SubSection>
            <SubSection title="3.3 Restricción de Infraestructura">
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <p className="text-sm font-semibold text-gray-800 font-serif">Costo directo de infraestructura: $0 USD</p>
                <p className="text-sm text-gray-700 mt-1">Se priorizan servidores institucionales de la UNViMe y plataformas cloud en capas gratuitas. No se permite la adquisición de licencias o servicios comerciales.</p>
              </div>
            </SubSection>
          </Section>

          <Section title="4. Plan de Adquisición de Recursos">
            <p className="text-gray-700">Dado el presupuesto de $0 USD, la adquisición de recursos se limita exclusivamente a:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Recursos humanos ya asignados al proyecto (estudiantes de Bioingeniería UNViMe)</li>
              <li>Servicios institucionales de la UNViMe (servidores, repositorio)</li>
              <li>Software de código abierto y capas gratuitas de proveedores cloud</li>
              <li>Archivos de señal biomédica de prueba (públicos o provistos por la facultad)</li>
            </ul>
          </Section>

          <Section title="5. Calendario de Recursos">
            <p className="text-gray-600 text-sm mb-3">Distribución del esfuerzo humano por fase (horas estimadas):</p>
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Fase</th><th>Período</th><th>PM</th><th>Backend</th><th>Frontend</th><th>Infra.</th><th>Total</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">Hito 1: Arquitectura</td><td>Ago 1–14</td><td>15</td><td>25</td><td>0</td><td>10</td><td className="font-bold">50</td></tr>
                  <tr><td className="font-medium">Hito 2: Backend</td><td>Ago 15–Sep 11</td><td>10</td><td>70</td><td>0</td><td>10</td><td className="font-bold">90</td></tr>
                  <tr><td className="font-medium">Hito 3: Frontend</td><td>Sep 12–Oct 23</td><td>5</td><td>10</td><td>80</td><td>5</td><td className="font-bold">100</td></tr>
                  <tr><td className="font-medium">Hito 4: Anotaciones</td><td>Oct 24–Nov 10</td><td>5</td><td>10</td><td>20</td><td>0</td><td className="font-bold">35</td></tr>
                  <tr><td className="font-medium">Hito 5: QA y Cierre</td><td>Nov 11–27</td><td>10</td><td>20</td><td>10</td><td>10</td><td className="font-bold">50</td></tr>
                  <tr><td className="font-semibold" colSpan={6}>Total</td><td className="font-bold">325*</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* El total se mantiene dentro del rango planificado de 260–360 horas. Algunas tareas se solapan entre fases.</p>
          </Section>

          <Section title="6. Gestión del Equipo">
            <SubSection title="6.1 Comunicación Interna">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Standups semanales</strong> — 15 min, vía Discord</li>
                <li><strong>Documentación asíncrona</strong> — Actualizaciones en repositorio y Diccionario EDT</li>
                <li><strong>Feedback continuo</strong> — Code reviews, pair programming</li>
              </ul>
            </SubSection>
            <SubSection title="6.2 Desarrollo de Capacidades">
              <p className="text-gray-700">Cada miembro desarrolla competencias específicas como parte de su formación académica: gestión de proyectos (PM), desarrollo backend y QA (GH), infraestructura (EC), frontend y renderizado (RP), integración full-stack (MM).</p>
            </SubSection>
            <SubSection title="6.3 Consideraciones de Disponibilidad">
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <p className="text-sm font-semibold text-gray-800 mb-1 font-serif">Calendario académico</p>
                <p className="text-sm text-gray-700">El cronograma contempla las semanas de menor dedicación durante períodos de exámenes (flexibilidad planificada entre Hito 2 y Hito 3). El margen permite absorber retrasos sin exceder el 30% de desviación permitida.</p>
              </div>
            </SubSection>
          </Section>

          <Section title="7. Aprobación">
            <p className="text-gray-700">Plan de Gestión de Recursos aprobado por el Director del Proyecto y el Patrocinador.</p>
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

function InfraCard({ name, provider, cost }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-300">
      <h3 className="text-sm font-bold text-gray-800 mb-1 font-serif">{name}</h3>
      <p className="text-sm text-gray-600">{provider}</p>
      <div className="text-xs font-semibold text-emerald-700 mt-2">Costo: {cost}</div>
    </div>
  )
}

function ToolCard({ name, detail }) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
      <h4 className="text-sm font-semibold text-gray-800 font-serif">{name}</h4>
      <p className="text-xs text-gray-500">{detail}</p>
    </div>
  )
}
