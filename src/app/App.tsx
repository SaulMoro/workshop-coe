import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { Layout } from './Layout'
import { UsersPage } from '../features/users/UsersPage'
import { OrdersPage } from '../features/orders/OrdersPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/usuarios" replace />} />
          <Route path="usuarios" element={<UsersPage />} />
          <Route path="pedidos" element={<OrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
