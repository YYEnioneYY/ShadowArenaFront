import { mockHomeProfile } from '../../player/model/mockHomeProfile'

export interface MockUser {
  id: string
  email: string
  profile: typeof mockHomeProfile
}

export const demoCredentials = {
  email: 'a.polina.rya22@gmail.com',
  password: 'testtest',
} as const

export const mockAuthenticatedUser: MockUser = {
  id: 'warrior-morningstar-27',
  email: demoCredentials.email,
  profile: mockHomeProfile,
}
