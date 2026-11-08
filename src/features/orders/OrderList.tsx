import { use } from 'react'
import { ordersQuery } from './ordersQuery'
import type { Order, OrderStatus } from './types'

const statusStyle: Record<OrderStatus, string> = {
  pendiente: 'border-yellow text-ink',
  pagado: 'border-blue text-accent',
  enviado: 'border-ink-2 text-ink-2',
  cancelado: 'border-magenta text-magenta',
}

const money = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })

export function OrderList() {
  const orders = [...use(ordersQuery())].sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  return (
    <>
      <p className="sr-only" aria-live="polite">{orders.length} pedidos</p>
      <ul aria-label="Pedidos" className="divide-y divide-rule border border-rule bg-surface">
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </ul>
    </>
  )
}

function OrderRow({ order }: { order: Order }) {
  return (
    <li className="flex items-center gap-4 px-5 py-4">
      <span className="w-20 shrink-0 font-mono text-sm text-ink-2">{order.id}</span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{order.customer}</p>
        <p className="font-mono text-sm text-ink-2">{order.createdAt}</p>
      </div>
      <span className="font-mono text-sm font-semibold">{money.format(order.total)}</span>
      <span className={`w-24 rounded-full border px-3 py-1 text-center font-mono text-xs font-medium ${statusStyle[order.status]}`}>
        {order.status}
      </span>
    </li>
  )
}
