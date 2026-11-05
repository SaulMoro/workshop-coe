import { getJson } from '../../shared/api/http'
import type { User } from './types'

export function fetchUsers(): Promise<User[]> {
  return getJson<User[]>('/api/users')
}
