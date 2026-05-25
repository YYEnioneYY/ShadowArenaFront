import { createContext } from 'react'
import type { MockUser } from '../../../entities/user/model/mockUser'

export interface LoginPayload {
  email: string
  password: string
  remember: boolean
}

export interface LoginResult {
  success: boolean
  message?: string
}

export interface AuthContextValue {
  isAuthenticated: boolean
  user: MockUser | null
  login: (payload: LoginPayload) => LoginResult
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)
