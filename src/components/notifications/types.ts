export interface Notification {
  id: string
  title: string
  message: string
  time: string
  type: 'info' | 'warning' | 'success' | 'error'
  isRead: boolean
}

export interface NotificationsHeaderProps {
  totalCount: number
  unreadCount: number
  onClose: () => void
}

export interface NotificationItemProps {
  notification: Notification
  onMarkAsRead: (id: string) => void
  onDelete: (id: string) => void
  isLast: boolean
}

export interface NotificationsListProps {
  notifications: Notification[]
  onMarkAsRead: (id: string) => void
  onDelete: (id: string) => void
}

export interface NotificationsActionsProps {
  unreadCount: number
  onMarkAllAsRead: () => void
}

export interface NotificationsModalProps {
  opened: boolean
  onClose: () => void
  notifications?: Notification[]
}
