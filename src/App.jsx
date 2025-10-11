import { useState } from 'react'
import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import Producto from './pages/producto'
import Usuario from './pages/usuario'
function App() {

  return (
    <BrowserRouter>
      <nav>
        <NavLink to={"/"} className={({ isActive }) => isActive ? 'active' : ''}> Home </NavLink>
        <NavLink to={"/producto"}> Producto </NavLink>
        <NavLink to={"/usuario"} >  Usuario </NavLink>
      </nav>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/producto' element={<Producto />}>
          <Route path='carro' element={<h1>esto es un carro</h1>} />
          <Route path='moto' element={<h1>esto es una moto</h1>} />
        </Route>
        <Route path='/usuario' element={<Usuario />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
