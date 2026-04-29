import { axiosInstance } from '@/lib/axios'
import { API_ENDPOINTS } from '@/lib/constants'
import { AuthResponse, LoginCredentials, RegisterData } from '@/features/auth/types'
import { setToken, removeToken } from '@/lib/auth'

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    )
    setToken(response.data.token)
    return response.data
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    )
    setToken(response.data.token)
    return response.data
  },

  logout: async (): Promise<void> => {
    await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT)
    removeToken()
  },
}
