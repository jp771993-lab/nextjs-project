import { userService } from '@/services/user.service'
import { UserProfile } from './types'

export const userApi = {
  getProfile: async (): Promise<UserProfile> => {
    return userService.getProfile()
  },

  updateProfile: async (
    data: Partial<UserProfile>
  ): Promise<UserProfile> => {
    return userService.updateProfile(data)
  },
}
