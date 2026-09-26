import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Acta from './pages/Acta'
import Alcance from './pages/Alcance'
import Requisitos from './pages/Requisitos'
import EDT from './pages/EDT'
import Diccionario from './pages/Diccionario'
import Interesados from './pages/Interesados'
import Calidad from './pages/Calidad'
import Recursos from './pages/Recursos'
import Comunicacion from './pages/Comunicacion'
import Riesgos from './pages/Riesgos'
import Adquisiciones from './pages/Adquisiciones'
import Cronograma from './pages/Cronograma'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acta" element={<Acta />} />
          <Route path="/alcance" element={<Alcance />} />
          <Route path="/requisitos" element={<Requisitos />} />
          <Route path="/edt" element={<EDT />} />
          <Route path="/diccionario" element={<Diccionario />} />
          <Route path="/interesados" element={<Interesados />} />
          <Route path="/calidad" element={<Calidad />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/comunicacion" element={<Comunicacion />} />
          <Route path="/riesgos" element={<Riesgos />} />
          <Route path="/adquisiciones" element={<Adquisiciones />} />
          <Route path="/cronograma" element={<Cronograma />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
