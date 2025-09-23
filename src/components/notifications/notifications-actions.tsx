'use client'

import { Button, Paper } from '@mantine/core'
import { BiCheck } from 'react-icons/bi'
import { NotificationsActionsProps } from './types'

export const NotificationsActions = ({ 
  unreadCount, 
  onMarkAllAsRead 
}: NotificationsActionsProps) => {
  if (unreadCount === 0) {
    return null
  }

  return (
    <Paper 
      p="md" 
      radius={0} 
      style={{ 
        borderBottom: '1px solid var(--mantine-color-gray-2)',
        background: 'var(--mantine-color-blue-0)'
      }}
    >
      <Button
        variant="light"
        size="sm"
        leftSection={<BiCheck size={16} />}
        onClick={onMarkAllAsRead}
        fullWidth
        radius="xl"
        color="blue"
      >
        Mark all as read ({unreadCount})
      </Button>
    </Paper>
  )
}
