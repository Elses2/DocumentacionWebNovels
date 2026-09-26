import { useState, useEffect, useRef } from 'react'

/* ─── EDT Tree Data (exact replica of EDT — ElsesNovels.html) ─── */
const treeData = {
  label: 'ElsesNovels — Plataforma web de lectura de novelas',
  type: 'root',
  children: [
    {
      label: '1.0 Gestión del Proyecto',
      type: 'fase',
      children: [
        {
          label: '1.1 Iniciación',
          type: 'sub',
          children: [
            { label: '1.1.1 Acta de Constitución del proyecto', type: 'paquete' },
            { label: '1.1.2 Registro de interesados', type: 'paquete' },
          ]
        },
        {
          label: '1.2 Requisitos y línea base del alcance',
          type: 'sub',
          children: [
            { label: '1.2.1 Documento de requisitos', type: 'paquete' },
            { label: '1.2.2 Matriz de trazabilidad de requisitos', type: 'paquete' },
            { label: '1.2.3 Enunciado del alcance del proyecto', type: 'paquete' },
            { label: '1.2.4 Estructura de desglose del trabajo (EDT/WBS)', type: 'paquete' },
            { label: '1.2.5 Diccionario de la EDT', type: 'paquete' },
          ]
        },
        {
          label: '1.3 Planificación de la dirección del proyecto',
          type: 'sub',
          children: [
            { label: '1.3.1 Plan para la dirección del proyecto', type: 'paquete' },
            { label: '1.3.2 Plan de gestión del alcance', type: 'paquete' },
            { label: '1.3.3 Plan de gestión de los requisitos', type: 'paquete' },
            { label: '1.3.4 Plan de gestión del cronograma', type: 'paquete' },
            { label: '1.3.5 Lista de actividades y desglose de tareas', type: 'paquete' },
            { label: '1.3.6 Plan de gestión de los costos', type: 'paquete' },
            { label: '1.3.7 Plan de gestión de la calidad', type: 'paquete' },
            { label: '1.3.8 Plan de gestión de los recursos', type: 'paquete' },
            { label: '1.3.9 Plan de gestión de las comunicaciones', type: 'paquete' },
            { label: '1.3.10 Plan de gestión de los riesgos', type: 'paquete' },
            { label: '1.3.11 Plan de gestión de las adquisiciones', type: 'paquete' },
            { label: '1.3.12 Plan de involucramiento de los interesados', type: 'paquete' },
            { label: '1.3.13 Plan de gestión de los cambios', type: 'paquete' },
            { label: '1.3.14 Plan de gestión de la configuración', type: 'paquete' },
            { label: '1.3.15 Línea base del cronograma', type: 'paquete' },
            { label: '1.3.16 Línea base de los costos', type: 'paquete' },
            { label: '1.3.17 Ciclo de vida y enfoque de desarrollo', type: 'paquete' },
          ]
        },
        {
          label: '1.4 Seguimiento y control',
          type: 'sub',
          children: [
            { label: '1.4.1 Reportes de avance y seguimiento', type: 'paquete' },
            { label: '1.4.2 Registro de riesgos', type: 'paquete' },
            { label: '1.4.3 Registro de incidentes/problemas (Issue Log)', type: 'paquete' },
            { label: '1.4.4 Registro de cambios (Change Log)', type: 'paquete' },
          ]
        },
        {
          label: '1.5 Cierre',
          type: 'sub',
          children: [
            { label: '1.5.1 Acta de cierre del proyecto', type: 'paquete' },
            { label: '1.5.2 Registro de lecciones aprendidas', type: 'paquete' },
          ]
        },
      ]
    },
    {
      label: '2.0 Infraestructura',
      type: 'fase',
      children: [
        {
          label: '2.1 Configuración de servidores (VPS)',
          type: 'sub',
          children: [
            { label: '2.1.1 VPS del frontend configurada con Nginx', type: 'paquete' },
            { label: '2.1.2 VPS de la API configurada con Redis', type: 'paquete' },
          ]
        },
      ]
    },
    {
      label: '3.0 Software: ElsesNovels',
      type: 'fase',
      children: [
        {
          label: '3.1 Diseño de interfaz (UX)',
          type: 'sub',
          children: [
            { label: '3.1.1 Diseños Penpot — versión escritorio', type: 'paquete' },
            { label: '3.1.2 Diseños Penpot — versión móvil', type: 'paquete' },
            { label: '3.1.3 Aceptación de diseños por el rector', type: 'paquete' },
          ]
        },
        {
          label: '3.2 API REST (backend)',
          type: 'sub',
          children: [
            { label: '3.2.1 Endpoints de catálogo y categorías', type: 'paquete' },
            { label: '3.2.2 Endpoint de búsqueda', type: 'paquete' },
            { label: '3.2.3 Endpoint de capítulos', type: 'paquete' },
            { label: '3.2.4 Persistencia de sesión en Redis', type: 'paquete' },
          ]
        },
        {
          label: '3.3 Aplicación web (frontend)',
          type: 'sub',
          children: [
            { label: '3.3.1 Catálogo paginado', type: 'paquete' },
            { label: '3.3.2 Filtro por categoría', type: 'paquete' },
            { label: '3.3.3 Buscador de novelas', type: 'paquete' },
            { label: '3.3.4 Lector de capítulos', type: 'paquete' },
            { label: '3.3.5 Cookie de sesión del lector', type: 'paquete' },
            { label: '3.3.6 Interfaz responsive (escritorio y móvil)', type: 'paquete' },
          ]
        },
      ]
    },
    {
      label: '4.0 Aseguramiento de Calidad',
      type: 'fase',
      children: [
        {
          label: '4.1 Verificación y validación',
          type: 'sub',
          children: [
            { label: '4.1.1 Pruebas de integración', type: 'paquete' },
            { label: '4.1.2 Pruebas de carga (10.000 usuarios simultáneos)', type: 'paquete' },
            { label: '4.1.3 Pruebas de estrés', type: 'paquete' },
            { label: '4.1.4 Pruebas de compatibilidad de navegadores', type: 'paquete' },
          ]
        },
      ]
    },
    {
      label: '5.0 Despliegue Final',
      type: 'fase',
      children: [
        {
          label: '5.1 Puesta en producción',
          type: 'sub',
          children: [
            { label: '5.1.1 Sistema desplegado en las VPS de producción', type: 'paquete' },
            { label: '5.1.2 Aceptación final del rector', type: 'paquete' },
          ]
        },
      ]
    },
  ]
}

export default function EDT() {
  const [escala, setEscala] = useState(1)
  const lienzoRef = useRef(null)
  const vistaRef = useRef(null)

  useEffect(() => {
    ajustar()
  }, [])

  function aplicar() {
    if (lienzoRef.current) {
      lienzoRef.current.style.zoom = escala
    }
  }

  function ajustar() {
    if (lienzoRef.current && vistaRef.current) {
      lienzoRef.current.style.zoom = 1
      const disp = vistaRef.current.clientWidth - 32
      const nuevaEscala = Math.min(1, disp / lienzoRef.current.offsetWidth)
      setEscala(nuevaEscala)
      requestAnimationFrame(() => {
        if (lienzoRef.current) {
          lienzoRef.current.style.zoom = nuevaEscala
        }
      })
    }
  }

  function mas() {
    setEscala(prev => {
      const nueva = Math.min(2, prev + 0.1)
      requestAnimationFrame(() => aplicar())
      return nueva
    })
  }

  function menos() {
    setEscala(prev => {
      const nueva = Math.max(0.3, prev - 0.1)
      requestAnimationFrame(() => aplicar())
      return nueva
    })
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-120px)]">
      {/* Top bar with legend and zoom controls */}
      <div className="edt-bar">
        <div className="edt-legend">
          <span><i style={{ background: '#e5e7eb', borderColor: '#374151' }}></i>Proyecto</span>
          <span><i style={{ background: '#dbeafe', borderColor: '#1d4ed8' }}></i>Fase</span>
          <span><i style={{ background: '#ffedd5', borderColor: '#c2410c' }}></i>Subproducto</span>
          <span><i style={{ background: '#dcfce7', borderColor: '#15803d' }}></i>Paquete de trabajo</span>
        </div>
        <button type="button" onClick={menos} aria-label="Alejar">−</button>
        <button type="button" onClick={mas} aria-label="Acercar">+</button>
        <button type="button" onClick={ajustar}>Ajustar al ancho</button>
      </div>

      {/* Viewport */}
      <div className="edt-vista" ref={vistaRef}>
        <div className="edt-lienzo" ref={lienzoRef}>
          {/* Root node */}
          <div className="edt-raiz-wrap">
            <div className="edt-node edt-raiz">ElsesNovels — Plataforma web de lectura de novelas</div>
          </div>

          {/* 5 Columns */}
          <div className="edt-fases">
            <EDTColumn colClass="edt-col-F1_1" node={treeData.children[0]} />
            <EDTColumn colClass="edt-col-F1_2" node={treeData.children[1]} />
            <EDTColumn colClass="edt-col-F1_3" node={treeData.children[2]} />
            <EDTColumn colClass="edt-col-F1_4" node={treeData.children[3]} />
            <EDTColumn colClass="edt-col-F1_5" node={treeData.children[4]} />
          </div>
        </div>
      </div>
    </div>
  )
}

function EDTColumn({ colClass, node }) {
  return (
    <div className={`edt-col ${colClass}`}>
      <EDTNode node={node} depth={0} />
    </div>
  )
}

function EDTNode({ node, depth }) {
  const hasChildren = node.children && node.children.length > 0

  if (!hasChildren) {
    return (
      <div className="edt-node edt-paq">
        {node.label}
      </div>
    )
  }

  return (
    <div>
      <div className={`edt-node edt-${node.type}`}>
        {node.label}
      </div>
      {depth < 5 && (
        <ul className="edt-tree">
          {node.children.map((child, i) => (
            <li key={i}>
              <div className="edt-row">
                <EDTNode node={child} depth={depth + 1} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
