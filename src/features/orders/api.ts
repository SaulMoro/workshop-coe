import { getJson } from '../../shared/api/http'
import type { Order } from './types'

export function fetchOrders(): Promise<Order[]> {
  return getJson<Order[]>('/api/orders')
}
