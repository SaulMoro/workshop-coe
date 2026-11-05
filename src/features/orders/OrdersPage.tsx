import { Suspense } from 'react'
import { PageHeader } from '../../shared/ui/PageHeader'
import { ListSkeleton } from '../../shared/ui/ListSkeleton'
import { OrderList } from './OrderList'

export function OrdersPage() {
  return (
    <>
      <PageHeader kicker="Ventas" title="Pedidos" lead="Los pedidos de los clientes, del más reciente al más antiguo." />
      <Suspense fallback={<ListSkeleton rows={6} label="Cargando pedidos" />}>
        <OrderList />
      </Suspense>
    </>
  )
}
