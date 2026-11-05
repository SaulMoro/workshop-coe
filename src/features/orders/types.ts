export type OrderStatus = 'pendiente' | 'pagado' | 'enviado' | 'cancelado'

export type Order = {
  id: string
  customer: string
  total: number
  status: OrderStatus
  createdAt: string
}
