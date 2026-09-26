import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded border-2 border-gray-700 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-800 font-serif font-bold text-sm tracking-wider">En</span>
            </div>
            <span className="font-serif text-lg font-semibold text-gray-800 tracking-tight">
              ElsesNovels
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
