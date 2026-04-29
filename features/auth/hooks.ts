import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authApi } from './api'
import { LoginCredentials, RegisterData } from './types'
import { useAuthStore } from './store'

export const useLogin = () => {
  const queryClient = useQueryClient()
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      setUser(data.user)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}

export const useRegister = () => {
  const queryClient = useQueryClient()
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation({
    mutationFn: (data: RegisterData) => authApi.register(data),
    onSuccess: (data) => {
      setUser(data.user)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  const clearUser = useAuthStore((state) => state.clearUser)

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      clearUser()
      queryClient.clear()
    },
  })
}
