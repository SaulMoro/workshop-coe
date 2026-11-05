import { PageHeader } from '../../shared/ui/PageHeader'
import { UserList } from './UserList'

export function UsersPage() {
  return (
    <>
      <PageHeader kicker="Equipo" title="Usuarios" lead="Las personas que trabajan en los proyectos del taller." />
      <UserList />
    </>
  )
}
