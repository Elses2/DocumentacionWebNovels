import { Link } from 'react-router-dom'
import { ChevronRight, ShieldCheck, CheckCircle, AlertTriangle, FileCheck } from 'lucide-react'

export default function Calidad() {
  return (
    <div className="bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Documento de Calidad</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Documento de Calidad del Proyecto
            </h1>
          </div>
          <p className="text-slate-500 text-lg">Plan de Gestión de Calidad — BioSignal</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-10 p-4 bg-white rounded-lg border border-gray-300">
          <div className="flex items-center gap-2 text-sm text-gray-600"><FileCheck className="w-4 h-4 text-amber-700" /><span>Alinhado con QR-01 a QR-04</span></div>
          <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-amber-700" /><span>Cero fallas críticas</span></div>
        </div>

        <article className="doc-article space-y-8">
          <Section title="1. Objetivo del Plan de Calidad">
            <p className="text-gray-700">Establecer los estándares, políticas, procedimientos y herramientas de calidad que el equipo del proyecto BioSignal utilizará para asegurar que todos los entregables cumplan con los requisitos y criterios de aceptación definidos en el Acta de Constitución y el Documento de Requisitos.</p>
          </Section>

          <Section title="2. Política de Calidad">
            <div className="p-5 bg-white rounded-lg border border-gray-300">
              <p className="text-lg font-semibold text-gray-800 mb-2 font-serif">"Entregar un producto funcional, seguro y usable, verificado en cada hito, con cero fallas críticas al cierre del proyecto."</p>
              <ul className="text-sm text-gray-700 space-y-1 mt-3">
                <li>• Todos los módulos superan QA antes de su aceptación</li>
                <li>• La privacidad de datos es prioridad absoluta (anonimización irreversible)</li>
                <li>• La usabilidad es verificada con usuarios no técnicos (RNF-01)</li>
                <li>• El rendimiento es medido y documentado (RNF-01, QR-01)</li>
              </ul>
            </div>
          </Section>

          <Section title="3. Estándares de Calidad">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StandardCard code="QR-01" name="QA — Cero fallas críticas" desc="Todos los módulos deben superar pruebas de QA con cero fallas críticas antes de la fecha límite." method="Inspección / Informe de QA" />
              <StandardCard code="QR-02" name="Seguridad de datos" desc="Cumplimiento de anonimización irreversible conforme a normativas éticas de salud." method="Auditoría de datos" />
              <StandardCard code="QR-03" name="Portabilidad" desc="Funcionamiento equivalente en Chrome, Firefox y Edge sin diferencias perceptibles." method="Pruebas cruzadas" />
              <StandardCard code="QR-04" name="Eficiencia operativa" desc="Tiempo medio de carga por archivo inferior a 3 minutos para colaboradores." method="Pruebas de usuario" />
              <StandardCard code="RNF-01" name="Usabilidad" desc="Interfaz limpia e intuitiva para usuarios sin conocimientos de programación." method="Validación con usuarios" />
              <StandardCard code="RNF-02" name="Rendimiento" desc="Renderizado fluido: mínimo 30 FPS durante desplazamiento continuo; ≥100 muestras simultáneas." method="Pruebas de carga" />
            </div>
          </Section>

          <Section title="4. Métricas de Calidad Clave">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Métrica</th><th>Objetivo</th><th>Umbral mínimo</th><th>Método</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">Fallas críticas en QA</td><td>0</td><td>0 abiertas al cierre</td><td>Informe Hito 5</td></tr>
                  <tr><td className="font-medium">Latencia de carga inicial</td><td>&lt;10 segundos</td><td>&lt;15 segundos aceptable</td><td>Prueba de carga</td></tr>
                  <tr><td className="font-medium">Rendimiento (FPS)</td><td>≥30 FPS</td><td>≥20 FPS aceptable</td><td>Medición con profiler</td></tr>
                  <tr><td className="font-medium">Tiempo de carga de archivo</td><td>&lt;3 minutos</td><td>&lt;5 minutos aceptable</td><td>Prueba con usuario</td></tr>
                  <tr><td className="font-medium">Compatibilidad navegadores</td><td>100% funcional</td><td>Chrome, Firefox, Edge</td><td>Test cruzado</td></tr>
                  <tr><td className="font-medium">Anonimización</td><td>100% irreversible</td><td>Cero reidentificación</td><td>Auditoría de datos</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="5. Actividades de Calidad">
            <div className="space-y-4">
              <ActivityCard title="Revisiones de documento" desc="Revisión formal de actas, requisitos, EDT y documentación técnica en cada hito." who="PM, equipo" when="Al inicio de cada hito" />
              <ActivityCard title="Pruebas unitarias e integración" desc="Suite automatizada de pruebas backend y frontend con reporte de cobertura." who="Desarrolladores" when="Continuo" />
              <ActivityCard title="Pruebas de rendimiento" desc="Pruebas de estrés y carga sobre visor con registros extensos." who="QA / Backend" when="Hito 3 y Hito 5" />
              <ActivityCard title="Pruebas cruzadas de navegadores" desc="Validación funcional completa en Chrome, Firefox y Edge." who="QA" when="Hito 5" />
              <ActivityCard title="Auditoría de privacidad" desc="Verificación de que ningún dato personal o clínico es almacenado." who="PM, equipo" when="Hito 5" />
              <ActivityCard title="Validación de usabilidad" desc="Evaluación con usuarios no técnicos (RNF-01)." who="PM, UX" when="Hito 3" />
            </div>
          </Section>

          <Section title="6. Gestión de Defectos">
            <SubSection title="Clasificación de severidad">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SeverityCard level="Crítica" desc="Sistema no funcional o bloqueante. Debe resolverse inmediatamente." />
                <SeverityCard level="Alta" desc="Funcionalidad principal no disponible. Resolver en hito actual." />
                <SeverityCard level="Media" desc="Funcionalidad alternativa disponible. Resolver antes del cierre." />
                <SeverityCard level="Baja" desc="Mejora cosmética o menor. Resolver en iteraciones futuras." />
              </div>
            </SubSection>
          </Section>

          <Section title="7. Roles de Calidad">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Rol</th><th>Responsabilidad en calidad</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">Director del Proyecto (PM)</td><td>Aprueba planes de calidad; asegura recursos para QA</td></tr>
                  <tr><td className="font-medium">QA / Desarrolladores</td><td>Ejecutan pruebas, reportan defectos, mantienen suites automatizadas</td></tr>
                  <tr><td className="font-medium">Sponsor</td><td>Valida criterios de éxito de calidad</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="8. Aprobación">
            <p className="text-gray-700">Este Plan de Calidad es aprobado por el Director del Proyecto y el Patrocinador como marco de referencia para todas las actividades de aseguramiento de calidad del proyecto BioSignal.</p>
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

function StandardCard({ code, name, desc, method }) {
  return (
    <div className="doc-card p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="doc-code text-xs font-semibold text-amber-800">{code}</span>
        <h3 className="text-sm font-bold text-gray-800 font-serif">{name}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-2">{desc}</p>
      <div className="text-xs text-gray-500">Verificación: <span className="font-medium">{method}</span></div>
    </div>
  )
}

function ActivityCard({ title, desc, who, when }) {
  return (
    <div className="flex gap-3 p-4 bg-white rounded-lg border border-gray-300">
      <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
      <div>
        <h3 className="text-sm font-bold text-gray-800 font-serif">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">{desc}</p>
        <div className="text-xs text-gray-500">Responsable: <span className="font-medium">{who}</span> · Cuando: <span className="font-medium">{when}</span></div>
      </div>
    </div>
  )
}

function SeverityCard({ level, desc }) {
  const colors = {
    Crítica: 'bg-red-50 border-red-200 text-red-800',
    Alta: 'bg-orange-50 border-orange-200 text-orange-800',
    Media: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    Baja: 'bg-green-50 border-green-200 text-green-800',
  }
  return (
    <div className={`p-4 rounded-lg border ${colors[level]} text-sm`}>
      <h4 className="font-bold mb-1 font-serif">{level}</h4>
      <p>{desc}</p>
    </div>
  )
}
