import { useUsers } from './useUsers'
import type { User } from './types'

export function UserList() {
  const users = useUsers()

  return (
    <ul className="divide-y divide-rule border border-rule bg-surface">
      {users.map((user) => (
        <UserRow key={user.id} user={user} />
      ))}
    </ul>
  )
}

function UserRow({ user }: { user: User }) {
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <li className="flex items-center gap-4 px-5 py-4">
      <span
        aria-hidden="true"
        className="grid size-11 shrink-0 place-items-center rounded-full bg-sunken font-mono text-sm font-semibold text-ink-2"
      >
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{user.name}</p>
        <p className="truncate font-mono text-sm text-ink-2">{user.email}</p>
      </div>
      <span className="hidden text-sm text-ink-2 sm:block">{user.team}</span>
      <span className="rounded-full border border-accent px-3 py-1 font-mono text-xs font-medium text-accent">
        {user.role}
      </span>
    </li>
  )
}
