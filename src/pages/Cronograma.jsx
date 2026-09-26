import { Link } from 'react-router-dom'
import { ChevronRight, Calendar, Clock, Flag, FileCheck } from 'lucide-react'

const milestones = [
  { id: 'Hito 1', name: 'Arquitectura Base', period: '01/Ago – 14/Ago', effort: '~35 hs', color: 'blue', deliverable: 'Entorno de desarrollo, repositorio inicial y prueba de lectura de señales vía consola con librería WFDB.' },
  { id: 'Hito 2', name: 'Desarrollo del Motor Backend', period: '15/Ago – 11/Sep', effort: '~80 hs', color: 'indigo', deliverable: 'API REST completa para conversión y streaming de muestras biomédicas en formato JSON con metadatos.' },
  { id: 'Hito 3', name: 'Visor Frontend de Señales', period: '12/Sep – 23/Oct', effort: '~120 hs', color: 'purple', deliverable: 'Interfaz web interactiva funcional con renderizado Canvas/WebGL, controles de zoom, paneo y amplitud.' },
  { id: 'Hito 4', name: 'Módulo de Anotaciones', period: '24/Oct – 10/Nov', effort: '~35 hs', color: 'pink', deliverable: 'Módulo de lectura/escritura de marcadores de eventos fisiológicos persistentes en base de datos.' },
  { id: 'Hito 5', name: 'QA, Optimización y Entrega Final', period: '11/Nov – 27/Nov', effort: '~40 hs', color: 'green', deliverable: 'Pruebas de estrés, corrección de bugs, despliegue en servidor de producción (Release 1.0) y entrega de documentación.' },
]

const schedule = [
  { week: '01/Ago', activity: 'Inicio proyecto · Acta de Constitución', hito: '1' },
  { week: '05/Ago', activity: 'Scope Statement · EDT y Diccionario', hito: '1' },
  { week: '11/Ago', activity: 'Prueba de concepto WFDB', hito: '1' },
  { week: '15/Ago', activity: 'Modelo de datos · Diseño API REST', hito: '2' },
  { week: '01/Sep', activity: 'Autenticación · Ingesta EDF', hito: '2' },
  { week: '12/Sep', activity: 'Streaming JSON · Mockups UI', hito: '2/3' },
  { week: '23/Oct', activity: 'Visor Frontend funcional', hito: '3' },
  { week: '24/Oct', activity: 'Módulo de Anotaciones', hito: '4' },
  { week: '11/Nov', activity: 'QA · Pruebas cruzadas', hito: '5' },
  { week: '27/Nov', activity: 'Despliegue Release 1.0 · Cierre', hito: '5' },
]

export default function Cronograma() {
  return (
    <div className="bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Cronograma del Proyecto</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Cronograma del Proyecto
            </h1>
          </div>
          <p className="text-slate-500 text-lg">Período: 1 de Agosto – 27 de Noviembre de 2026</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-10 p-4 bg-white rounded-lg border border-gray-300">
          <div className="flex items-center gap-2 text-sm text-gray-600"><Calendar className="w-4 h-4 text-amber-700" /><span>4 meses de duración</span></div>
          <div className="flex items-center gap-2 text-sm text-gray-600"><Clock className="w-4 h-4 text-amber-700" /><span>260–360 horas de esfuerzo</span></div>
          <div className="flex items-center gap-2 text-sm text-gray-600"><Flag className="w-4 h-4 text-amber-700" /><span>5 hitos planificados</span></div>
        </div>

        <article className="doc-article space-y-8">
          <Section title="1. Línea de Tiempo General">
            <div className="relative overflow-x-auto rounded-lg border border-gray-300">
              <div className="min-w-[700px] p-4">
                <div className="relative mb-6">
                  <div className="h-4 bg-gray-300 rounded-full" />
                  <div className="absolute top-0 left-0 right-0 h-full flex">
                    {Array.from({ length: 17 }).map((_, i) => (
                      <div key={i} className="flex-1 border-l border-white/30" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>01</span><span>15</span><span>01</span><span>15</span><span>01</span><span>15</span><span>27</span>
                </div>
              </div>
            </div>
          </Section>

          <Section title="2. Hitos del Proyecto">
            <div className="grid grid-cols-1 gap-4">
              {milestones.map((m) => (
                <div key={m.id} className="doc-card p-5">
                  <div className="flex flex-wrap items-start gap-4">
                    <div className={`w-12 h-12 rounded flex items-center justify-center flex-shrink-0 text-white font-bold text-lg`}
                      style={{ backgroundColor: m.color === 'blue' ? '#2563eb' : m.color === 'indigo' ? '#4f46e5' : m.color === 'purple' ? '#7c3aed' : m.color === 'pink' ? '#db2777' : '#16a34a' }}>
                      {m.id.replace('Hito ', 'H')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-900 font-serif">{m.name}</h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">{m.period}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{m.deliverable}</p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 text-gray-600 border border-gray-200"><Clock className="w-3 h-3" /> {m.effort}</span>
                        <span className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 text-gray-600 border border-gray-200"><Flag className="w-3 h-3" /> {m.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="3. Detalle del Cronograma Semanal">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Semana / Fecha</th><th>Actividad Principal</th><th>Hito</th></tr>
                </thead>
                <tbody>
                  {schedule.map((s, i) => (
                    <tr key={i}>
                      <td className="font-medium whitespace-nowrap">{s.week}</td>
                      <td>{s.activity}</td>
                      <td><span className="doc-code text-xs text-amber-800">{s.hito}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Esfuerzo por Hito">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {milestones.map((m) => (
                <div key={m.id} className="p-4 bg-white rounded-lg border border-gray-300 text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl font-extrabold text-gray-800 mb-1">{m.effort}</div>
                  <div className="text-xs font-semibold text-gray-700 mb-1">{m.id}</div>
                  <div className="text-xs text-gray-500">{m.name.split(' ').slice(0, 2).join(' ')}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-300 text-center">
              <span className="text-lg font-bold text-gray-800">~310 hs</span>
              <span className="text-sm text-gray-500 ml-2">Total (dentro del rango 260–360 hs planificado)</span>
            </div>
          </Section>

          <Section title="5. Dependencias entre Hitos">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Hito</th><th>Depende de</th><th>Requisito previo</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">Hito 1</td><td>—</td><td>Acta de Constitución aprobada</td></tr>
                  <tr><td className="font-medium">Hito 2</td><td>Hito 1</td><td>Entorno + POC WFDB + Arquitectura definida</td></tr>
                  <tr><td className="font-medium">Hito 3</td><td>Hito 2</td><td>API funcional + Backend probado</td></tr>
                  <tr><td className="font-medium">Hito 4</td><td>Hito 2/3</td><td>BD disponible + Visor funcional</td></tr>
                  <tr><td className="font-medium">Hito 5</td><td>Hito 4</td><td>Todos los módulos completos</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="6. Gestión del Cronograma">
            <SubSection title="6.1 Seguimiento">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Semanal:</strong> Comparar avance real vs. planificado</li>
                <li><strong>Por hito:</strong> Evaluar cumplimiento de entregables y fechas</li>
                <li><strong>Desviación:</strong> Si excede 30%, activar plan de recuperación</li>
              </ul>
            </SubSection>
            <SubSection title="6.2 Control de Cambios de Cronograma">
              <p className="text-gray-700">Toda modificación al cronograma requiere aprobación formal del Director del Proyecto y notificación al Sponsor. Se documenta en el Diccionario EDT (0.1.4).</p>
            </SubSection>
            <SubSection title="6.3 Ventana de Flexibilidad">
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <p className="text-sm font-semibold text-gray-800 mb-1 font-serif">Período de exámenes (Ago–Sep)</p>
                <p className="text-sm text-gray-700">Se planifica margen de flexibilidad entre Hitos 2 y 3 para absorber reducción de dedicación durante períodos de exámenes (Riesgo R3).</p>
              </div>
            </SubSection>
          </Section>

          <Section title="7. Aprobación">
            <p className="text-gray-700">Cronograma del Proyecto aprobado por el Director del Proyecto y el Patrocinador como línea base oficial de ejecución.</p>
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
