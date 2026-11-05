import { PageHeader } from '../../shared/ui/PageHeader'

export function OrdersPage() {
  return (
    <>
      <PageHeader kicker="Ventas" title="Pedidos" lead="Los pedidos de los clientes, del más reciente al más antiguo." />
      <div className="border border-dashed border-rule bg-surface/60 px-6 py-12 text-center">
        <p className="label">Todavía no hay listado</p>
        <p className="mt-2 text-ink-2">
          Los datos ya están en <code className="font-mono text-sm text-ink">fetchOrders()</code>.
        </p>
      </div>
    </>
  )
}
