export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded border-2 border-gray-500 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-700 font-serif font-bold text-xs tracking-wider">En</span>
              </div>
              <span className="text-base font-serif font-semibold text-white">ElsesNovels</span>
            </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Plataforma web para la lectura de novelas de la Biblioteca Elses — UNViMe.
              </p>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Proyecto Académico
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Carrera de Ingeniería en Sistemas de Información — Universidad Nacional de Villa Mercedes (UNViMe)
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mt-2">
              Documentación de gestión de proyectos — Acta de Constitución, Requisitos, EDT y más.
            </p>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Información
            </h3>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400">
                © {currentYear} ElsesNovels — Todos los derechos reservados.
              </span>
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Proyecto académico sin fines comerciales.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-600">
          ElsesNovels — Plataforma de Lectura de Novelas
        </div>
      </div>
    </footer>
  )
}
