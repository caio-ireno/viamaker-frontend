import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDrawerContext } from '../shared/context/MenuOption'
import { Inicio } from '../pages/Inicio'
import { Produtos } from '../pages/Produtos'
import { Usuarios } from '../pages/Usuarios'

export const AppRoutes = () => {
  const { setDrawerOption } = useDrawerContext()

  useEffect(() => {
    setDrawerOption([
      {
        label: 'Inicio',
        path: '/inicio',
      },
      {
        label: 'Produtos',
        path: '/produtos',
      },

      {
        label: 'Usuarios',
        path: '/usuarios',
      },
    ])
  }, [setDrawerOption])

  return (
    <Routes>
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  )
}
