import { Link } from 'react-router-dom'
import { ChevronRight, AlertTriangle, TrendingUp, Shield, Target } from 'lucide-react'

const risks = [
  { id: 'R1', name: 'Retraso en entrega de datos', category: 'Técnico', probability: 'Media', impact: 'Alto', mitigation: 'Obtener señales desde Hito 1; fuentes alternativas (PhysioNet)', owner: 'PM (Astudillo)', status: 'Abierto' },
  { id: 'R2', name: 'Latencia/congelamiento del visualizador', category: 'Técnico', probability: 'Media', impact: 'Alto', mitigation: 'Chunking y renderizado acelerado (Canvas/WebGL)', owner: 'GH / EC', status: 'Abierto' },
  { id: 'R3', name: 'Reducción de horas por exámenes', category: 'Recurso', probability: 'Alta', impact: 'Medio', mitigation: 'Flexibilidad cronograma entre Hitos 2 y 3', owner: 'PM (Astudillo)', status: 'Abierto' },
  { id: 'R4', name: 'Cambio de alcance no controlado', category: 'Gestión', probability: 'Baja', impact: 'Alto', mitigation: 'Control de cambios formal vía PM', owner: 'PM (Astudillo)', status: 'Abierto' },
  { id: 'R5', name: 'Indisponibilidad de infraestructura', category: 'Externo', probability: 'Baja', impact: 'Medio', mitigation: 'Confirmar disponibilidad antes Hito 5', owner: 'EC', status: 'Abierto' },
  { id: 'R6', name: 'Vulnerabilidades de seguridad', category: 'Seguridad', probability: 'Baja', impact: 'Alto', mitigation: 'Pruebas de seguridad, manejo seguro de sesiones', owner: 'GH', status: 'Abierto' },
  { id: 'R7', name: 'Retroalimentación tardía de usuarios', category: 'Comunicación', probability: 'Media', impact: 'Medio', mitigation: 'Demo temprana (fin Hito 3) para recoger feedback', owner: 'PM', status: 'Abierto' },
]

export default function Riesgos() {
  const totalOpen = risks.filter(r => r.status === 'Abierto').length
  const highImpact = risks.filter(r => r.impact === 'Alto').length

  return (
    <div className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Gestión de Riesgos</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Gestión de Riesgos del Proyecto
            </h1>
          </div>
          <p className="text-slate-500 text-lg">Registro de Riesgos — BioSignal</p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10">
          <StatCard value={totalOpen} label="Riesgos abiertos" />
          <StatCard value={highImpact} label="Alto impacto" />
          <StatCard value="2" label="Riesgos técnicos principales" />
          <StatCard value="5" label="Hitos monitoreados" />
        </div>

        <article className="doc-article space-y-8">
          <Section title="1. Enfoque de Gestión de Riesgos">
            <p className="text-gray-700">La gestión de riesgos del proyecto BioSignal sigue el ciclo: Identificación → Análisis → Planificación de respuesta → Monitoreo y control. Todos los riesgos se registran en este documento y se evalúan según su probabilidad e impacto en los objetivos del proyecto.</p>
          </Section>

          <Section title="2. Evaluación de Riesgos">
            <p className="text-gray-700 mb-3">Cada riesgo se evalúa según su probabilidad de ocurrencia y su impacto en los objetivos del proyecto:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <h3 className="text-sm font-bold text-gray-800 mb-2 font-serif">Probabilidad</h3>
                <div className="space-y-1.5">
                  <ProbBar label="Alta" percent={70} />
                  <ProbBar label="Media" percent={45} />
                  <ProbBar label="Baja" percent={20} />
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <h3 className="text-sm font-bold text-gray-800 mb-2 font-serif">Impacto</h3>
                <div className="space-y-1.5">
                  <ProbBar label="Alto" percent={80} />
                  <ProbBar label="Medio" percent={50} />
                  <ProbBar label="Bajo" percent={25} />
                </div>
              </div>
            </div>
          </Section>

          <Section title="3. Registro de Riesgos">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>ID</th><th>Nombre</th><th>Categoría</th><th>Probabilidad</th><th>Impacto</th><th>Mitigación</th><th>Propietario</th><th>Estado</th></tr>
                </thead>
                <tbody>
                  {risks.map((r) => (
                    <tr key={r.id}>
                      <td><span className="doc-code font-semibold text-amber-800">{r.id}</span></td>
                      <td className="font-medium">{r.name}</td>
                      <td>{r.category}</td>
                      <td><RiskBadge level={r.probability} /></td>
                      <td><RiskBadge level={r.impact} /></td>
                      <td className="text-sm">{r.mitigation}</td>
                      <td className="text-sm">{r.owner}</td>
                      <td><StatusBadge status={r.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Riesgos del Acta de Constitución">
            <p className="text-gray-700 mb-3">Los riesgos principales del Acta de Constitución y su estado actual:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <RiskDetailCard id="R1" name="Retraso en entrega de datos" mitigation="Obtener señales de otras fuentes desde el Hito 1" />
              <RiskDetailCard id="R2" name="Rendimiento del visualizador" mitigation="Parseo por bloques (chunking) y renderizado Canvas/WebGL" />
              <RiskDetailCard id="R3" name="Disponibilidad del equipo" mitigation="Margen de flexibilidad entre Hitos 2 y 3" />
            </div>
          </Section>

          <Section title="5. Monitoreo y Control">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Reunión semanal:</strong> Revisión de riesgos en el standup del equipo</li>
              <li><strong>Reporte por hito:</strong> Actualización del registro en cada informe de hito</li>
              <li><strong>Escalación:</strong> Riesgos de alto impacto se escalan al Sponsor inmediatamente</li>
              <li><strong>Verificación:</strong> Verificar que las mitigaciones se ejecutan según plan</li>
              <li><strong>Cierre:</strong> Los riesgos se cierran cuando la amenaza ya no existe o la acción de respuesta fue completada</li>
            </ul>
          </Section>

          <Section title="6. Aprobación">
            <p className="text-gray-700">Registro de Riesgos aprobado por el Director del Proyecto y el Patrocinador.</p>
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

function StatCard({ value, label }) {
  return (
    <div className="p-4 rounded-lg border border-gray-300 bg-white">
      <div className="text-2xl font-extrabold text-gray-800">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  )
}

function RiskBadge({ level }) {
  const colors = { Alta: 'bg-red-100 text-red-800 border-red-200', Media: 'bg-orange-100 text-orange-800 border-orange-200', Baja: 'bg-green-100 text-green-800 border-green-200' }
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold border ${colors[level] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>{level}</span>
}

function StatusBadge({ status }) {
  return <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">{status}</span>
}

function RiskDetailCard({ id, name, mitigation }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-300">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="w-4 h-4 text-amber-700" />
        <span className="doc-code text-xs font-semibold text-amber-800">{id}</span>
        <span className="font-bold text-sm text-gray-800 font-serif">{name}</span>
      </div>
      <p className="text-sm text-gray-600"><strong>Mitigación:</strong> {mitigation}</p>
    </div>
  )
}

function ProbBar({ label, percent }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 w-16">{label}</span>
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-amber-400 rounded-full" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
