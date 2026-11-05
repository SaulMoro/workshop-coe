import { Suspense } from 'react'
import { PageHeader } from '../../shared/ui/PageHeader'
import { ListSkeleton } from '../../shared/ui/ListSkeleton'
import { UserList } from './UserList'

export function UsersPage() {
  return (
    <>
      <PageHeader kicker="Equipo" title="Usuarios" lead="Las personas que trabajan en los proyectos del taller." />
      <Suspense fallback={<ListSkeleton rows={5} label="Cargando usuarios" />}>
        <UserList />
      </Suspense>
    </>
  )
}
