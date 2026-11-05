import { NavLink, Outlet } from 'react-router'
import { Brand } from '../shared/ui/Brand'

const links = [
  { to: '/usuarios', label: 'Usuarios' },
  { to: '/pedidos', label: 'Pedidos' },
]

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-rule bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <Brand />
          <nav aria-label="Secciones" className="flex gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'border-b-2 px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.14em] transition-colors',
                    isActive ? 'border-blue text-ink' : 'border-transparent text-ink-2 hover:text-ink',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="label">AI Center of Excellence</span>
          <span className="label">knowmad mood</span>
        </div>
      </footer>
    </div>
  )
}
