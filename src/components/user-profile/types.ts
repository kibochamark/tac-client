export interface UserProfile {
  name: string
  role: string
  initials: string
  email: string
  hospital: string
  userId: string
  lastLogin: string
  permissions: string[]
}

export interface ProfileHeaderProps {
  user: {
    name: string
    role: string
    initials: string
    email: string
  }
}

export interface ProfileDetailsProps {
  user: {
    hospital: string
    userId: string
    lastLogin: string
  }
}

export interface ProfilePermissionsProps {
  permissions: string[]
}

export interface ProfileActionsProps {
  onSettings: () => void
  onChangePassword: () => void
}

export interface DetailItemProps {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}

export interface ActionButtonProps {
  icon: React.ReactNode
  label: string
  onClick: () => void
  color?: string
  shadowColor?: string
}
