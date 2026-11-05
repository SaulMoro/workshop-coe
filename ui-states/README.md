# ui-states

Estados de carga, vacíos y de error para listas React que leen datos del servidor.

- `skills/loading-states`: Suspense con un esqueleto que mantiene la forma de la lista.
- `skills/empty-states`: estado vacío con `EmptyState` cuando la lista no tiene elementos.
- `skills/api-errors`: errores de API con `ErrorBanner` y reintento.
- `instructions/ui.instructions.md`: hace que cada lista use empty-states.
- `hooks/check-loading.json`: comprueba el estado de carga al parar.
- `agents/ui-reviewer.agent.md`: revisa en su propio contexto los estados de carga y de error de una página.
