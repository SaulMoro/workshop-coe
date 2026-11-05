import { Suspense, useState } from 'react'
import { PageHeader } from '../../shared/ui/PageHeader'
import { ListSkeleton } from '../../shared/ui/ListSkeleton'
import { ApiErrorBoundary } from '../../shared/ui/ApiErrorBoundary'
import { resetUsersQuery } from './usersQuery'
import { UserList } from './UserList'

export function UsersPage() {
  const [attempt, setAttempt] = useState(0)
  const retry = () => {
    resetUsersQuery()
    setAttempt((value) => value + 1)
  }

  return (
    <>
      <PageHeader kicker="Equipo" title="Usuarios" lead="Las personas que trabajan en los proyectos del taller." />
      <ApiErrorBoundary key={attempt} onRetry={retry}>
        <Suspense fallback={<ListSkeleton rows={5} label="Cargando usuarios" />}>
          <UserList />
        </Suspense>
      </ApiErrorBoundary>
    </>
  )
}
