'use client'

import { ScrollArea, Stack } from '@mantine/core'
import { NotificationItem } from './notification-item'
import { NotificationsEmpty } from './notifications-empty'
import { NotificationsListProps } from './types'

export const NotificationsList = ({ 
  notifications, 
  onMarkAsRead, 
  onDelete 
}: NotificationsListProps) => {
  if (notifications.length === 0) {
    return <NotificationsEmpty />
  }

  return (
    <ScrollArea h={500}>
      <Stack gap={0}>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDelete={onDelete}
            isLast={index === notifications.length - 1}
          />
        ))}
      </Stack>
    </ScrollArea>
  )
}
