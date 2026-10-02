import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Inicio } from './pages/inicio.jsx'
import { Cita } from './pages/cita.jsx'
import { CitaAgendada } from './pages/cita-agendada.jsx'

import './estilos.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<Inicio/>} />
        <Route path='/cita' element={<Cita/>}/>
        <Route path='/citaagendada' element={<CitaAgendada/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
