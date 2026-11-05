import { useEffect, useState } from 'react'
import { fetchUsers } from './api'
import type { User } from './types'

export function useUsers(): User[] {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    let active = true
    fetchUsers().then((result) => {
      if (active) setUsers(result)
    })
    return () => {
      active = false
    }
  }, [])

  return users
}
