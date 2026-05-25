import { useState, type PropsWithChildren } from 'react'
import {
  demoCredentials,
  mockAuthenticatedUser,
  type MockUser,
} from '../../../entities/user/model/mockUser'
import { AuthContext, type LoginPayload, type LoginResult } from './AuthContext'

const authStorageKey = 'shadow-arena.demo-session'

function readStoredUser() {
  const sessionId = sessionStorage.getItem(authStorageKey)
  const rememberedId = localStorage.getItem(authStorageKey)

  if (
    sessionId === mockAuthenticatedUser.id ||
    rememberedId === mockAuthenticatedUser.id
  ) {
    return mockAuthenticatedUser
  }

  return null
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<MockUser | null>(readStoredUser)

  function login({ email, password, remember }: LoginPayload): LoginResult {
    const emailMatches =
      email.trim().toLowerCase() === demoCredentials.email.toLowerCase()
    const passwordMatches = password === demoCredentials.password

    if (!emailMatches || !passwordMatches) {
      return {
        success: false,
        message: 'Incorrect email or password. Try the demo warrior account.',
      }
    }

    sessionStorage.removeItem(authStorageKey)
    localStorage.removeItem(authStorageKey)

    const storage = remember ? localStorage : sessionStorage
    storage.setItem(authStorageKey, mockAuthenticatedUser.id)
    setUser(mockAuthenticatedUser)

    return { success: true }
  }

  function logout() {
    sessionStorage.removeItem(authStorageKey)
    localStorage.removeItem(authStorageKey)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: user !== null, login, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
