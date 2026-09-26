import { Link } from 'react-router-dom'
import {
  FileText, Target, BookOpen, Layers, Users,
  ShieldCheck, Hammer, MessageSquare, AlertTriangle, ShoppingCart, Calendar
} from 'lucide-react'

const sections = [
  { to: '/acta', icon: FileText, title: 'Acta de Constitución', desc: 'Documento fundacional del proyecto: director, patrocinadores, objetivos SMART, entregables y hitos.' },
  { to: '/alcance', icon: Target, title: 'Gestión del Alcance', desc: 'Enunciado del alcance del proyecto y del producto: inclusión, exclusión, restricciones y supuestos.' },
  { to: '/requisitos', icon: BookOpen, title: 'Requisitos del Proyecto', desc: 'Especificación completa de requisitos (BR, StR, RF, RNF, TR, PR, QR) conforme a IEEE 830.' },
  { to: '/edt', icon: Layers, title: 'EDT / WBS', desc: 'Estructura de Desglose del Trabajo — vista jerárquica visual de fases, subproductos y paquetes.' },
  { to: '/diccionario', icon: BookOpen, title: 'Diccionario de la EDT', desc: 'Fichas descriptivas de cada paquete de trabajo con RACI, fechas, riesgos y criterios de aceptación.' },
  { to: '/interesados', icon: Users, title: 'Partes Interesadas', desc: 'Registro de stakeholders, matriz poder/interés, estrategias de gestión y plan de comunicación.' },
  { to: '/calidad', icon: ShieldCheck, title: 'Documento de Calidad', desc: 'Plan de gestión de calidad: estándares, métricas, criterios de aceptación y proceso de auditoría.' },
  { to: '/recursos', icon: Hammer, title: 'Gestión de Recursos', desc: 'Plan de asignación de recursos humanos, materiales e infraestructura del proyecto.' },
  { to: '/comunicacion', icon: MessageSquare, title: 'Gestión de Comunicaciones', desc: 'Plan de comunicaciones: canales, frecuencia, responsable y formato para cada parte interesada.' },
  { to: '/riesgos', icon: AlertTriangle, title: 'Gestión de Riesgos', desc: 'Registro de riesgos, análisis cualitativo y cuantitativo, estrategias de respuesta y monitoreo.' },
  { to: '/adquisiciones', icon: ShoppingCart, title: 'Gestión de Adquisiciones', desc: 'Plan de adquisiciones: bienes y servicios externos, proceso de selección y gestión contractual.' },
  { to: '/cronograma', icon: Calendar, title: 'Cronograma del Proyecto', desc: 'Línea de tiempo por hitos: períodos, esfuerzo estimado y entregables clave.' },
]

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded border-2 border-gray-700 bg-gray-50 flex items-center justify-center">
              <span className="text-gray-800 font-serif font-bold text-sm tracking-widest">En</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-serif">
              ElsesNovels
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Plataforma web para la lectura de novelas de la Biblioteca Elses — UNViMe
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Documentación de gestión de proyectos · Carrera de Ingeniería en Sistemas de Información
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group doc-card p-5 block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-amber-50 group-hover:border-amber-300 group-hover:text-amber-800 transition-colors duration-150">
                  <s.icon className="w-4 h-4" />
                </div>
                <h2 className="text-sm font-bold text-gray-800 leading-tight font-serif">
                  {s.title}
                </h2>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom info */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800 mb-1">13</div>
              <div className="text-sm text-gray-500">Documentos de gestión</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800 mb-1">35</div>
              <div className="text-sm text-gray-500">Requisitos identificados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800 mb-1">5</div>
              <div className="text-sm text-gray-500">Hitos planificados</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
