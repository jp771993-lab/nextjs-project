import { useAuthStore } from '@/features/auth/store'

export const useAuth = () => {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  return {
    user,
    isAuthenticated: isAuthenticated(),
  }
}
