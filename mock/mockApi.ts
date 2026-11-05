import type { Plugin } from 'vite'
import users from './data/users.json'
import orders from './data/orders.json'

const routes: Record<string, unknown> = {
  '/api/users': users,
  '/api/orders': orders,
}

// API simulada para el servidor de desarrollo.
// ?delay=2000 retrasa la respuesta y ?fail=1 devuelve un 500.
export function mockApi(): Plugin {
  return {
    name: 'workshop-mock-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url ?? '/', 'http://localhost')
        const body = routes[url.pathname]
        if (body === undefined) return next()

        const delay = Number(url.searchParams.get('delay') ?? 300)
        const fail = url.searchParams.get('fail') === '1'

        setTimeout(() => {
          res.setHeader('Content-Type', 'application/json')
          if (fail) {
            res.statusCode = 500
            res.end(JSON.stringify({ message: 'El servidor no responde' }))
            return
          }
          res.end(JSON.stringify(body))
        }, Number.isFinite(delay) ? delay : 0)
      })
    },
  }
}
