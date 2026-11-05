type ErrorBannerProps = {
  title?: string
  message: string
  onRetry?: () => void
}

// Así muestra el equipo cualquier error de API.
export function ErrorBanner({ title = 'No se han podido cargar los datos', message, onRetry }: ErrorBannerProps) {
  return (
    <div role="alert" className="flex items-start gap-4 border border-magenta/40 border-l-4 border-l-magenta bg-surface px-5 py-4">
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 font-mono text-sm text-ink-2">{message}</p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="border border-ink px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] hover:bg-ink hover:text-paper"
        >
          Reintentar
        </button>
      )}
    </div>
  )
}
