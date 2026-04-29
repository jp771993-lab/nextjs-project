import { authService } from '@/services/auth.service'
import { AuthResponse, LoginCredentials, RegisterData } from './types'

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return authService.login(credentials)
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    return authService.register(data)
  },

  logout: async (): Promise<void> => {
    return authService.logout()
  },
}
