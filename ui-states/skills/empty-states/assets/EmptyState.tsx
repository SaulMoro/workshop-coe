type EmptyStateProps = { title: string; hint?: string }

// Estado vacío de una lista: el mismo marco que la lista, con borde discontinuo.
export function EmptyState({ title, hint }: EmptyStateProps) {
  return (
    <div role="status" className="border border-dashed border-rule bg-surface/60 px-6 py-12 text-center">
      <p className="label">{title}</p>
      {hint && <p className="mt-2 text-ink-2">{hint}</p>}
    </div>
  )
}
