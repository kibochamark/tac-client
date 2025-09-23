export const PATHS = {
  // Public pages
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',

  // Dashboard
  DASHBOARD: '/dashboard',
  
  // Patients
  PATIENTS: '/dashboard/patients',
  PATIENTS_ADD: '/dashboard/patients/add',
  PATIENTS_EDIT: (id: string) => `/dashboard/patients/edit/${id}`,
  PATIENTS_VIEW: (id: string) => `/dashboard/patients/view/${id}`,

  // Appointments
  APPOINTMENTS: '/dashboard/appointments',
  APPOINTMENTS_ADD: '/dashboard/appointments/add',
  APPOINTMENTS_EDIT: (id: string) => `/dashboard/appointments/edit/${id}`,
  APPOINTMENTS_VIEW: (id: string) => `/dashboard/appointments/view/${id}`,
  APPOINTMENTS_CALENDAR: '/dashboard/appointments/calendar',

  // Events
  EVENTS: '/dashboard/events',
  EVENTS_ADD: '/dashboard/events/add',
  EVENTS_EDIT: (id: string) => `/dashboard/events/edit/${id}`,
  EVENTS_VIEW: (id: string) => `/dashboard/events/view/${id}`,

  // Profile
  PROFILE: '/dashboard/profile',
  PROFILE_EDIT: '/dashboard/profile/edit',
  PROFILE_SETTINGS: '/dashboard/profile/settings',
} as const

// ========================================
// API ROUTES
// ========================================

export const API = {
  // Auth
  AUTH_LOGIN: '/api/auth/login',
  AUTH_LOGOUT: '/api/auth/logout',
  AUTH_REGISTER: '/api/auth/register',

  // Patients
  PATIENTS: '/api/patients',
  PATIENT: (id: string) => `/api/patients/${id}`,

  // Appointments
  APPOINTMENTS: '/api/appointments',
  APPOINTMENT: (id: string) => `/api/appointments/${id}`,

  // Events
  EVENTS: '/api/events',
  EVENT: (id: string) => `/api/events/${id}`,

  // User
  USER_PROFILE: '/api/user/profile',
} as const

// ========================================
// EXTERNAL LINKS
// ========================================

export const EXTERNAL = {
  DOCS: 'https://docs.example.com',
  SUPPORT: 'https://support.example.com',
  GITHUB: 'https://github.com/your-org/tac',
} as const

// ========================================
// UTILITY FUNCTIONS
// ========================================

export const isActiveRoute = (currentPath: string, targetPath: string): boolean => {
  if (targetPath === PATHS.DASHBOARD) {
    return currentPath === PATHS.DASHBOARD
  }
  return currentPath.startsWith(targetPath)
}

export const buildUrl = (path: string, params?: Record<string, string>): string => {
  let url = path
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`[${key}]`, value)
    })
  }
  return url
}

// Default export
export default PATHS
