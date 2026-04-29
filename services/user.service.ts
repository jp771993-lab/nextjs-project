import { axiosInstance } from '@/lib/axios'
import { API_ENDPOINTS } from '@/lib/constants'
import { UserProfile } from '@/features/user/types'

export const userService = {
  getProfile: async (): Promise<UserProfile> => {
    const response = await axiosInstance.get<UserProfile>(
      API_ENDPOINTS.USER.PROFILE
    )
    return response.data
  },

  updateProfile: async (data: Partial<UserProfile>): Promise<UserProfile> => {
    const response = await axiosInstance.patch<UserProfile>(
      API_ENDPOINTS.USER.PROFILE,
      data
    )
    return response.data
  },
}
