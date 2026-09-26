import { Link } from 'react-router-dom'
import { ChevronRight, ShoppingCart, FileCheck, ClipboardList, Handshake } from 'lucide-react'

export default function Adquisiciones() {
  return (
    <div className="bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li><ChevronRight className="w-4 h-4 mx-1" /></li>
            <li className="text-gray-800 font-medium" aria-current="page">Gestión de Adquisiciones</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded border-2 border-gray-500 bg-gray-50 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">
              Gestión de las Adquisiciones del Proyecto
            </h1>
          </div>
          <p className="text-slate-500 text-lg">Plan de Adquisiciones — BioSignal</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-10 p-4 bg-white rounded-lg border border-gray-300">
          <div className="flex items-center gap-2 text-sm text-gray-600"><FileCheck className="w-4 h-4 text-amber-700" /><span>Presupuesto infraestructura: $0 USD</span></div>
          <div className="flex items-center gap-2 text-sm text-gray-600"><ClipboardList className="w-4 h-4 text-amber-700" /><span>4 categorías de adquisición</span></div>
        </div>

        <article className="doc-article space-y-8">
          <Section title="1. Enfoque de Gestión de Adquisiciones">
            <p className="text-gray-700">El Plan de Adquisiciones define los bienes y servicios externos que el proyecto necesita, el proceso para seleccionar proveedores, negociar contratos y gestionar las adquisiciones durante el ciclo de vida del proyecto BioSignal.</p>
          </Section>

          <Section title="2. Restricción Presupuestaria">
            <div className="p-6 bg-white rounded-lg border border-gray-300 text-center">
              <p className="text-3xl font-extrabold text-gray-800 mb-2 font-serif">$0 USD</p>
              <p className="text-sm text-gray-600">Costo directo de adquisiciones permitidas — Solo servicios gratuitos o institucionales</p>
            </div>
          </Section>

          <Section title="3. Bienes y Servicios a Adquirir">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>ID</th><th>Categoría</th><th>Descripción</th><th>Tipo</th><th>Proveedor</th><th>Costo</th></tr>
                </thead>
                <tbody>
                  <tr><td><span className="doc-code text-amber-800">AC-01</span></td><td className="font-medium">Infraestructura Cloud</td><td>Plataforma de despliegue en capa gratuita</td><td>Servicio</td><td>Vercel / Render</td><td className="text-emerald-700 font-semibold">$0</td></tr>
                  <tr><td><span className="doc-code text-amber-800">AC-02</span></td><td className="font-medium">Infraestructura Institucional</td><td>Servidores UNViMe para producción</td><td>Servicio</td><td>UNViMe</td><td className="text-emerald-700 font-semibold">$0</td></tr>
                  <tr><td><span className="doc-code text-amber-800">AC-03</span></td><td className="font-medium">Software de Desarrollo</td><td>Herramientas de código abierto (VS Code, Git, etc.)</td><td>Licencia OSS</td><td>Comunidad</td><td className="text-emerald-700 font-semibold">$0</td></tr>
                  <tr><td><span className="doc-code text-amber-800">AC-04</span></td><td className="font-medium">Librerías y Frameworks</td><td>React, Tailwind, Lucide, WFDB</td><td>Licencia OSS</td><td>Comunidad</td><td className="text-emerald-700 font-semibold">$0</td></tr>
                  <tr><td><span className="doc-code text-amber-800">AC-05</span></td><td className="font-medium">Señales Biomédicas</td><td>Archivos .edf de prueba/anónimos</td><td>Dato</td><td>Bioingeniería / PhysioNet</td><td className="text-emerald-700 font-semibold">$0</td></tr>
                  <tr><td><span className="doc-code text-amber-800">AC-06</span></td><td className="font-medium">Hosting de Desarrollo</td><td>Entornos locales y repositorio</td><td>Infraestructura</td><td>UNViMe / Local</td><td className="text-emerald-700 font-semibold">$0</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. Proceso de Adquisición">
            <div className="space-y-4">
              <StepCard n="1" title="Identificación" desc="Determinar qué bienes o servicios se necesitan y documentar los requisitos." />
              <StepCard n="2" title="Solicitud de Propuestas" desc="Solicitar ofertas a proveedores potenciales (institucionales, cloud, comunidad open source)." />
              <StepCard n="3" title="Evaluación" desc="Evaluar propuestas según criterios: costo, calidad, disponibilidad, soporte y alineación con restricciones del proyecto." />
              <StepCard n="4" title="Selección y Contratación" desc="Seleccionar proveedor y formalizar acuerdo o contrato." />
              <StepCard n="5" title="Gestión y Monitoreo" desc="Monitorear el cumplimiento del contrato y la calidad de lo adquirido." />
              <StepCard n="6" title="Cierre" desc="Verificar entrega completa y cerrar la adquisición." />
            </div>
          </Section>

          <Section title="5. Criterios de Selección de Proveedores">
            <div className="overflow-x-auto rounded-lg border border-gray-300">
              <table className="doc-table">
                <thead>
                  <tr><th>Criterio</th><th>Peso</th><th>Descripción</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-medium">Costo</td><td>Alto</td><td>Prioridad máxima: soluciones $0 o institucionales</td></tr>
                  <tr><td className="font-medium">Disponibilidad</td><td>Alto</td><td>El recurso debe estar disponible cuando se necesite</td></tr>
                  <tr><td className="font-medium">Soporte técnico</td><td>Medio</td><td>Documentación, comunidad activa o soporte institucional</td></tr>
                  <tr><td className="font-medium">Escalabilidad</td><td>Medio</td><td>Puede crecer con las necesidades del proyecto</td></tr>
                  <tr><td className="font-medium">Alineación con restricciones</td><td>Alto</td><td>Compatibilidad con formato .edf, navegadores, anonimización</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="6. Gestión de Relaciones con Proveedores">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProviderCard name="Vercel / Render" type="Cloud hosting" contact="Técnico" />
              <ProviderCard name="UNViMe" type="Infraestructura institucional" contact="Área de TI" />
              <ProviderCard name="GitHub/GitLab" type="Repositorio y control de versiones" contact="Técnico" />
              <ProviderCard name="Comunidad Open Source" type="Librerías y frameworks" contact="Comunidad" />
            </div>
          </Section>

          <Section title="7. Aprobación">
            <p className="text-gray-700">Plan de Adquisiciones aprobado por el Director del Proyecto y el Patrocinador.</p>
            <div className="flex items-center gap-4 mt-4">
              <div className="p-4 border border-gray-300 rounded-lg text-sm">
                <p className="font-medium font-serif">Patrocinador: Rosas, Alejandro</p>
                <p className="text-gray-500">Director de EICA</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg text-sm">
                <p className="font-medium font-serif">PM: Astudillo, Mateo T.</p>
                <p className="text-gray-500">Director del Proyecto</p>
              </div>
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

function SubSection({ title, children }) {
  return (
    <div className="mb-5 last:mb-0">
      <h3 className="text-base font-semibold text-gray-800 mb-2 font-serif">{title}</h3>
      {children}
    </div>
  )
}

function StepCard({ n, title, desc }) {
  return (
    <div className="flex gap-3 p-4 bg-white rounded-lg border border-gray-300">
      <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold text-sm flex items-center justify-center flex-shrink-0 border border-gray-200">{n}</div>
      <div>
        <h3 className="text-sm font-bold text-gray-800 font-serif">{title}</h3>
        <p className="text-sm text-gray-600 mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

function ProviderCard({ name, type, contact }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-gray-800 font-serif">{name}</h3>
        <Handshake className="w-4 h-4 text-amber-700" />
      </div>
      <p className="text-sm text-gray-600 mb-1">{type}</p>
      <p className="text-xs text-gray-500">Contacto: {contact}</p>
    </div>
  )
}
