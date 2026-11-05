import { Suspense, useState } from 'react'
import { PageHeader } from '../../shared/ui/PageHeader'
import { ListSkeleton } from '../../shared/ui/ListSkeleton'
import { ApiErrorBoundary } from '../../shared/ui/ApiErrorBoundary'
import { resetOrdersQuery } from './ordersQuery'
import { OrderList } from './OrderList'

export function OrdersPage() {
  const [attempt, setAttempt] = useState(0)
  const retry = () => {
    resetOrdersQuery()
    setAttempt((value) => value + 1)
  }

  return (
    <>
      <PageHeader kicker="Ventas" title="Pedidos" lead="Los pedidos de los clientes, del más reciente al más antiguo." />
      <ApiErrorBoundary key={attempt} onRetry={retry}>
        <Suspense fallback={<ListSkeleton rows={6} label="Cargando pedidos" />}>
          <OrderList />
        </Suspense>
      </ApiErrorBoundary>
    </>
  )
}
