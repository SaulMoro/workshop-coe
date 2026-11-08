import { fetchOrders } from './api'
import type { Order } from './types'

let orders: Promise<Order[]> | undefined

export function ordersQuery(): Promise<Order[]> {
  orders ??= fetchOrders()
  return orders
}

export function resetOrdersQuery(): void {
  orders = undefined
}
