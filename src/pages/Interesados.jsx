import { Link } from 'react-router-dom'
import { ChevronRight, Users, Scale, UserCheck, MapPin } from 'lucide-react'

const stakeholders = [
  { code: 'ST-01', name: 'Alejandro Rosas', role: 'Director de EICA', type: 'Interno / Institucional', projectRole: 'Patrocinador (Sponsor)' },
  { code: 'ST-02', name: 'Grupo Admin. Bioingeniería', role: 'Colaboradores de carga', type: 'Interno / Institucional', projectRole: 'Proveen señales EDF' },
  { code: 'ST-03', name: 'Estudiantes/Docentes ECS/EM', role: 'Usuarios finales', type: 'Externo/Interno UNViMe', projectRole: 'Clientes académicos' },
  { code: 'ST-04', name: 'Mateo Tomás Astudillo', role: 'Director del Proyecto', type: 'Interno', projectRole: 'PM' },
  { code: 'ST-05', name: 'Ignacio Nicolás Ávila Gelbes', role: 'Asistente PM', type: 'Interno', projectRole: 'Asistente PM' },
  { code: 'ST-06', name: 'Germán Ezequiel Herrera', role: 'Desarrollador Backend', type: 'Interno', projectRole: 'Backend / QA' },
  { code: 'ST-07', name: 'Eber Blas Chiecher', role: 'Desarrollador Infra.', type: 'Interno', projectRole: 'Backend / Infra.' },
  { code: 'ST-08', name: 'Rocío Pereyra', role: 'Desarrolladora Frontend', type: 'Interno', projectRole: 'Frontend' },
  { code: 'ST-09', name: 'Martín David Mosainer', role: 'Desarrollador Full-Stack', type: 'Interno', projectRole: 'Full-Stack / Soporte' },
  { code: 'ST-10', name: 'Área Infraestructura/TI UNViMe', role: 'Infraestructura', type: 'Interno / Institucional', projectRole: 'Servidores de despliegue' },
  { code: 'ST-11', name: 'Cátedras de Bioingeniería', role: 'Evaluadores académicos', type: 'Interno / Institucional', projectRole: 'Evaluación' },
]

const powerInterest = [
  { name: 'ST-01 Sponsor', power: 'Alto', interest: 'Alto', quadrant: 'Gestionar de cerca', strategy: 'Informar y consultar activamente; hitos clave y aprobaciones' },
  { name: 'ST-02 Bioingeniería', power: 'Medio', interest: 'Alto', quadrant: 'Mantener informado/satisfecho', strategy: 'Coordinación frecuente; riesgo crítico R1' },
  { name: 'ST-03 Usuarios finales', power: 'Bajo', interest: 'Alto', quadrant: 'Mantener informado', strategy: 'Comunicación periódica sobre avances' },
  { name: 'ST-04/05 PM y Asistente', power: 'Alto', interest: 'Alto', quadrant: 'Gestionar de cerca', strategy: 'Rol activo, comunicación directa' },
  { name: 'ST-06 a ST-09 Desarrolladores', power: 'Medio', interest: 'Alto', quadrant: 'Mantener satisfecho/informado', strategy: 'Standups, claridad de tareas, reconocimiento' },
  { name: 'ST-10 Infra/TI UNViMe', power: 'Medio', interest: 'Bajo', quadrant: 'Mantener satisfecho', strategy: 'Coordinación puntual antes Hito 5' },
  { name: 'ST-11 Cátedras/evaluadores', power: 'Medio', interest: 'Medio', quadrant: 'Mantener informado', strategy: 'Entrega documentación en evaluación' },
]

const communication = [
  { stakeholder: 'ST-01 Sponsor', info: 'Estado hitos, riesgos, aprobaciones', channel: 'Reunión formal / informe escrito', freq: 'Por hito', resp: 'PM (Astudillo)' },
  { stakeholder: 'ST-02 Bioingeniería', info: 'Requerimientos datos, fechas límite', channel: 'Reunión / correo', freq: 'Quincenal', resp: 'Asistente PM (Ávila)' },
  { stakeholder: 'ST-03 Usuarios finales', info: 'Plataforma, instructivos, demo', channel: 'Correo / presentación', freq: 'Fin Hito 3 y cierre', resp: 'PM / Asistente PM' },
  { stakeholder: 'ST-04 a ST-09 Equipo', info: 'Tareas, bloqueos, cambios', channel: 'Standup', freq: 'Semanal', resp: 'PM' },
  { stakeholder: 'ST-10 Infra/TI', info: 'Requisitos despliegue', channel: 'Correo / reunión técnica', freq: 'Antes Hito 5', resp: 'Chiecher' },
  { stakeholder: 'ST-11 Cátedras', info: 'Documentación formal', channel: 'Entrega / presentación', freq: 'Según cronograma', resp: 'PM' },
]

export default function Interesados() {
  return (
    <div className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Partes Interesadas</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <Users className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Plan de Gestión de Partes Interesadas
            </h1>
          </div>
          <p className="text-slate-500 text-lg">Proyecto BioSignal — UNViMe</p>
        </header>

        <article className="doc-article space-y-8">
          <Section title="1. Propósito del Documento">
            <p className="text-gray-700">Este documento identifica a todas las personas, grupos y organizaciones que pueden afectar o verse afectadas por el proyecto BioSignal, analiza sus expectativas, su nivel de interés e influencia sobre el proyecto, y define las estrategias de comunicación y participación necesarias para gestionar su involucramiento de forma efectiva a lo largo del ciclo de vida del proyecto.</p>
            <p className="text-gray-500 text-sm mt-2">No define asignaciones de trabajo del EDT ni responsabilidades técnicas de ejecución (corresponden al Diccionario EDT y RACI). El foco es gestión de expectativas, comunicación y relación.</p>
          </Section>

          <Section title="2. Identificación de Interesados (Registro de Stakeholders)">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>ID</th><th>Interesado / Grupo</th><th>Tipo</th><th>Rol respecto al proyecto</th></tr>
                </thead>
                <tbody>
                  {stakeholders.map((s) => (
                    <tr key={s.code}>
                      <td><span className="doc-code font-semibold text-amber-800">{s.code}</span></td>
                      <td className="font-medium">{s.name}</td>
                      <td>{s.type}</td>
                      <td>{s.projectRole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="3. Clasificación por Poder e Interés (Matriz Poder/Interés)">
            <p className="text-gray-600 text-sm mb-3">Estrategia según combinación de poder e interés:</p>
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Interesado</th><th>Poder</th><th>Interés</th><th>Cuadrante</th><th>Estrategia</th></tr>
                </thead>
                <tbody>
                  {powerInterest.map((p) => (
                    <tr key={p.name}>
                      <td className="font-medium">{p.name}</td>
                      <td>{p.power}</td>
                      <td>{p.interest}</td>
                      <td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">{p.quadrant}</span></td>
                      <td>{p.strategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Nivel de Involucramiento Actual vs. Deseado">
            <p className="text-gray-600 text-sm mb-3">Escala: Desconocedor (D) · Reticente (R) · Neutral (N) · Partidario (A) · Líder (L)</p>
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Interesado</th><th>Actual</th><th>Deseado</th><th>Brecha / Acción</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">ST-01 Sponsor</td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">A</span></td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">L</span></td><td>Reportes por hito para validación continua</td></tr>
                  <tr><td className="font-medium">ST-02 Bioingeniería</td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">N</span></td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">A</span></td><td>Acercamiento desde Hito 1 (mitiga R1)</td></tr>
                  <tr><td className="font-medium">ST-03 Usuarios finales</td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">D</span></td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">A</span></td><td>Demo temprana (fin Hito 3) para adopción</td></tr>
                  <tr><td className="font-medium">ST-04 a ST-09 Equipo</td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">A</span></td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">L</span></td><td>Mantener motivación y comunicación fluida</td></tr>
                  <tr><td className="font-medium">ST-10 Infra/TI</td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">N</span></td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">A</span></td><td>Contacto formal antes Hito 5</td></tr>
                  <tr><td className="font-medium">ST-11 Cátedras</td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">N</span></td><td><span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">A</span></td><td>Presentaciones formales en evaluación</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="5. Requisitos de Comunicación por Interesado">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Interesado</th><th>Información que necesita</th><th>Canal</th><th>Frecuencia</th><th>Responsable</th></tr>
                </thead>
                <tbody>
                  {communication.map((c) => (
                    <tr key={c.stakeholder}>
                      <td className="font-medium">{c.stakeholder}</td>
                      <td>{c.info}</td>
                      <td>{c.channel}</td>
                      <td>{c.freq}</td>
                      <td>{c.resp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="6. Intereses, Expectativas y Motivaciones por Interesado">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ExpectCard code="ST-01" name="Sponsor — Alejandro Rosas" items={[
                'Que la UNViMe cuente con una herramienta propia que reduzca la dependencia de plataformas externas (LightWAVE/PhysioNet)',
                'Fortalecer la vinculación entre la carrera de Bioingeniería y las Escuelas de Ciencias de la Salud y Medicina',
                'Que el proyecto se ejecute sin comprometer presupuesto institucional (costo $0 USD)',
                'Contar con un caso de éxito institucional que pueda mostrarse ante autoridades superiores',
              ]} />
              <ExpectCard code="ST-02" name="Bioingeniería — Colaboradores" items={[
                'Disponer de un repositorio propio y centralizado para organizar señales biomédicas',
                'Que la carga y gestión de metadatos sea simple y rápida (menos de 3 minutos por registro)',
                'Ver reconocido su aporte de datos como parte fundacional del catálogo del sistema',
              ]} />
              <ExpectCard code="ST-03" name="Usuarios Finales (ECS/EM)" items={[
                'Poder acceder a señales clínicas reales (anonimizadas) para prácticas académicas sin instalar software',
                'Una herramienta de visualización simple e intuitiva que no interrumpa sus tiempos de clase o estudio',
                'Que la plataforma efectivamente se adopte como material de cátedra, mejorando su formación práctica',
              ]} />
              <ExpectCard code="ST-04 a ST-09" name="Equipo de Gestión y Desarrollo" items={[
                'Entregar el proyecto exitosamente dentro del plazo y del rango de horas estimado',
                'Desarrollar y demostrar competencias de gestión de proyectos aplicadas a un caso real',
                'Construir un antecedente sólido (portfolio) que respalde su perfil profesional',
              ]} />
              <ExpectCard code="ST-10" name="Infraestructura/TI UNViMe" items={[
                'Que el despliegue no genere sobrecarga ni riesgos de seguridad sobre la infraestructura institucional',
                'Recibir requerimientos técnicos claros y con anticipación, no sobre la fecha límite',
              ]} />
              <ExpectCard code="ST-11" name="Cátedras / Evaluadores Académicos" items={[
                'Que el proyecto cumpla con los criterios formales de gestión de proyectos exigidos por la carrera',
                'Evidencia clara y documentada del proceso (acta, requisitos, EDT, riesgos, cierre) para la evaluación',
              ]} />
            </div>
          </Section>

          <Section title="7. Estrategias de Gestión de Interesados Clave">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Interesado</th><th>Riesgo de no gestionarlo bien</th><th>Estrategia de mitigación</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">ST-01 Sponsor</td><td>Pérdida de apoyo institucional o demoras en aprobaciones</td><td>Reportes cortos y puntuales por cada hito; escalar riesgos temprano, no al final</td></tr>
                  <tr><td className="font-medium">ST-02 Bioingeniería</td><td>Retraso en la entrega de señales EDF (Riesgo R1 del Acta)</td><td>Solicitar datos desde el Hito 1; tener fuentes alternativas (ej. PhysioNet) como respaldo</td></tr>
                  <tr><td className="font-medium">ST-03 Usuarios finales</td><td>Baja adopción de la plataforma al finalizar el proyecto</td><td>Involucrarlos con una demo temprana (fin del Hito 3) para recoger feedback antes del cierre</td></tr>
                  <tr><td className="font-medium">ST-04 a ST-09 Equipo</td><td>Sobrecarga o desmotivación durante períodos de exámenes (Riesgo R3)</td><td>Flexibilidad de cronograma ya prevista entre Hitos 2 y 3; comunicación abierta sobre disponibilidad</td></tr>
                  <tr><td className="font-medium">ST-10 Infraestructura/TI</td><td>Indisponibilidad de infraestructura cerca de la fecha límite</td><td>Confirmar disponibilidad y permisos con anticipación al Hito 5, no durante</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="8. Revisión y Actualización del Documento">
            <p className="text-gray-700">Este documento debe revisarse en cada cambio de hito o ante la incorporación de un nuevo interesado no contemplado originalmente. Es responsabilidad del Director del Proyecto (Mateo Astudillo) y su Asistente (Ignacio Ávila Gelbes) mantenerlo actualizado.</p>
          </Section>

          <Section title="9. Aprobación">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Firma</th><th>Rol</th><th>Fecha</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">Rosas, Alejandro</td><td>Director de EICA (Sponsor)</td><td></td></tr>
                  <tr><td className="font-medium">Astudillo, Mateo Tomás</td><td>Director del Proyecto (PM)</td><td></td></tr>
                </tbody>
              </table>
            </div>
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

function ExpectCard({ code, name, items }) {
  return (
    <div className="doc-card p-5">
      <div className="flex items-center gap-2 mb-3">
        <UserCheck className="w-4 h-4 text-amber-700" />
        <span className="doc-code text-xs font-semibold text-amber-800">{code}</span>
        <h3 className="text-sm font-bold text-gray-800 font-serif">{name}</h3>
      </div>
      <ul className="text-sm text-gray-600 space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2"><span className="text-amber-400 flex-shrink-0">•</span>{item}</li>
        ))}
      </ul>
    </div>
  )
}
