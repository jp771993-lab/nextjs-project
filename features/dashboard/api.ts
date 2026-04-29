import { DashboardStats } from './types'

export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    return {
      totalUsers: 0,
      totalRevenue: 0,
      activeProjects: 0,
    }
  },
}
