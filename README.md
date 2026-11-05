# workshop-coe

Aplicación React de ejemplo del AI CoE de knowmad mood. Tiene dos páginas, **Usuarios** y **Pedidos**, con el sistema de diseño AI CoE (papel, tinta, las cuatro barras y IBM Plex).

## Arrancar

```sh
pnpm install
pnpm dev
```

Abre `http://localhost:5173/usuarios`.

La API simulada (`mock/`) responde en `/api/users` y `/api/orders`. Dos parámetros de la página cambian su respuesta:

- `?delay=2000` la retrasa dos segundos, por ejemplo en `/usuarios?delay=2000`.
- `?fail=1` devuelve un error 500, por ejemplo en `/pedidos?fail=1`.

## Estructura

```text
src/
  app/          rutas, layout y tokens de Tailwind (styles.css)
  features/
    users/      usuarios: página, componentes, api.ts y tipos
    orders/     pedidos: página, componentes, api.ts y tipos
  shared/
    api/        getJson, que reenvía ?delay y ?fail
    ui/         piezas comunes de la interfaz
mock/           API simulada para pnpm dev
```
