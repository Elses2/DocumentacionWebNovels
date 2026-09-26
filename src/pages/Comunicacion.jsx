import { Link } from 'react-router-dom'
import { ChevronRight, MessageSquare, Mail, Users, Video } from 'lucide-react'

const plan = [
  { stakeholder: 'ST-01 Patrocinador (Rosas)', info: 'Estado de hitos, riesgos, aprobaciones', channel: 'Reunión formal / informe escrito', frequency: 'Por hito (5 instancias)', responsible: 'PM (Mateo Astudillo)' },
  { stakeholder: 'ST-02 Bioingeniería', info: 'Requerimientos datos, formatos aceptados, fechas límite', channel: 'Reunión / correo', frequency: 'Quincenal / según necesidad', responsible: 'Asistente PM (Ignacio Ávila)' },
  { stakeholder: 'ST-03 Usuarios finales (ECS/EM)', info: 'Disponibilidad de plataforma, instructivos, demo', channel: 'Correo institucional / presentación', frequency: 'Final Hito 3 y en cierre', responsible: 'PM / Asistente PM' },
  { stakeholder: 'ST-04 a ST-09 Equipo de desarrollo', info: 'Estado de tareas, bloqueos, cambios de alcance', channel: 'Reunión de equipo (standup)', frequency: 'Semanal', responsible: 'PM' },
  { stakeholder: 'ST-10 Infraestructura/TI UNViMe', info: 'Requisitos técnicos de despliegue, ventanas de mantenimiento', channel: 'Correo / reunión técnica', frequency: 'Antes del Hito 5', responsible: 'Desarrollador Infra. (Eber Chiecher)' },
  { stakeholder: 'ST-11 Cátedras / evaluadores', info: 'Documentación formal del proyecto', channel: 'Entrega formal / presentación', frequency: 'Según cronograma académico', responsible: 'PM' },
]

export default function Comunicacion() {
  return (
    <div className="bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Gestión de Comunicaciones</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Gestión de Comunicaciones del Proyecto
            </h1>
          </div>
          <p className="text-slate-500 text-lg">Plan de Comunicaciones — BioSignal</p>
        </header>

        <article className="doc-article space-y-8">
          <Section title="1. Objetivo del Plan de Comunicaciones">
            <p className="text-gray-700">Asegurar que las personas correctas reciban la información correcta, en el momento adecuado, mediante los canales y formatos apropiados. El plan define qué información necesita cada parte interesada, con qué frecuencia, a través de qué medio y quién es responsable de comunicársela.</p>
          </Section>

          <Section title="2. Principios de Comunicación">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <h3 className="text-sm font-bold text-gray-700 mb-2 font-serif">Oportunidad</h3>
                <p className="text-sm text-gray-600">Información relevante comunicada en tiempo y forma, sin demoras innecesarias.</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <h3 className="text-sm font-bold text-gray-700 mb-2 font-serif">Claridad</h3>
                <p className="text-sm text-gray-600">Mensajes concisos, específicos y comprensibles para la audiencia destino.</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <h3 className="text-sm font-bold text-gray-700 mb-2 font-serif">Flujo bidireccional</h3>
                <p className="text-sm text-gray-600">Comunicación no solo informativa sino también de retroalimentación y escucha activa.</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-300">
                <h3 className="text-sm font-bold text-gray-700 mb-2 font-serif">Registro</h3>
                <p className="text-sm text-gray-600">Decisiones, acuerdos y actas documentados y accesibles para todas las partes.</p>
              </div>
            </div>
          </Section>

          <Section title="3. Matriz de Comunicación">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Interesado</th><th>Información que necesita</th><th>Canal</th><th>Frecuencia</th><th>Responsable</th></tr>
                </thead>
                <tbody>
                  {plan.map((p) => (
                    <tr key={p.stakeholder}>
                      <td className="font-medium">{p.stakeholder}</td>
                      <td>{p.info}</td>
                      <td>{p.channel}</td>
                      <td>{p.frequency}</td>
                      <td>{p.responsible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Canales de Comunicación">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ChannelCard name="Standup equipo" desc="Reunión diaria o semanal de 15 min para sincronización" use="Comunicación interna" />
              <ChannelCard name="Correo institucional" desc="Comunicaciones formales con patrocinador, facultad y usuarios" use="Comunicación externa" />
              <ChannelCard name="Reuniones formales" desc="Presentaciones de hito, revisiones y aprobaciones documentadas" use="Hitos clave" />
              <ChannelCard name="Plataforma mensajería" desc="Discord/Telegram para comunicación asíncrona y rápida" use="Equipo interno" />
            </div>
          </Section>

          <Section title="5. Reportes y Entregables de Comunicación">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Entregable</th><th>Descripción</th><th>Frecuencia</th><th>Destinatario</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">Informe de Hito</td><td>Estado de avance, riesgos, decisiones tomadas</td><td>Cada hito</td><td>Sponsor, equipo</td></tr>
                  <tr><td className="font-medium">Registro de decisiones</td><td>Actas de reuniones con acuerdos y responsables</td><td>Post-reunión</td><td>Todo el equipo</td></tr>
                  <tr><td className="font-medium">Boletín de avance</td><td>Resumen semanal de avances y bloqueos</td><td>Semanal</td><td>Equipo</td></tr>
                  <tr><td className="font-medium">Presentación de demo</td><td>Demostración funcional del sistema a usuarios</td><td>Fin Hito 3</td><td>Usuarios finales, Sponsor</td></tr>
                  <tr><td className="font-medium">Acta de Cierre</td><td>Evaluación final, lecciones aprendidas, firmas</td><td>Final proyecto</td><td>Sponsor, PM, equipo</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="6. Gestión de Conflictos de Comunicación">
            <SubSection title="6.1 Escalación">
              <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                <li>Discusión directa entre las partes involucradas</li>
                <li>Mediación del Director del Proyecto</li>
                <li>Escalamiento al Sponsor (Alejandro Rosas) si es necesario</li>
              </ol>
            </SubSection>
            <SubSection title="6.2 Bloques de comunicación">
              <p className="text-gray-700">Si un bloqueo de comunicación pone en riesgo el proyecto, el PM documenta el problema, notifica al interesado afectado y propone una solución en un plazo máximo de 48 horas.</p>
            </SubSection>
          </Section>

          <Section title="7. Aprobación">
            <p className="text-gray-700">Plan de Comunicaciones aprobado por el Director del Proyecto y el Patrocinador.</p>
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

function ChannelCard({ name, desc, use }) {
  return (
    <div className="p-5 bg-white rounded-lg border border-gray-300 hover:shadow-md transition-shadow">
      <h3 className="text-sm font-bold text-gray-800 mb-1 font-serif">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{desc}</p>
      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">{use}</span>
    </div>
  )
}
