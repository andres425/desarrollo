import { useState } from 'react'
import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import Producto from './pages/producto'
import Usuario from './pages/usuario'
import Carro  from './pages/carro'
import Moto from './pages/moto'
import Spotify from './pages/spotify'
function App() {

  return (
    <BrowserRouter>
      <nav>
        <NavLink to={"/"} className={({ isActive }) => isActive ? 'active' : ''}> Home </NavLink>
        <NavLink to={"/producto"}> Producto </NavLink>
        <NavLink to={"/usuario"} >  Usuario </NavLink>
        <NavLink to={"/carro"}>Carro</NavLink>
        <NavLink to={"/moto"}>Moto</NavLink>
        <NavLink to={"/spotify"}>Spotify</NavLink>
      </nav>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/producto' element={<Producto />}>
  
        </Route>
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/carro' element={<Carro/>} />
        <Route path='/moto' element={<Moto/>} />
        <Route path='/spotify' element={<Spotify/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
