import { fetchUsers } from './api'
import type { User } from './types'

let users: Promise<User[]> | undefined

// Una sola petición compartida, que use() puede leer dentro de Suspense.
export function usersQuery(): Promise<User[]> {
  users ??= fetchUsers()
  return users
}
