'use client'

import React, { useState } from 'react'
import { Box, Modal } from '@mantine/core'
import { 
  NotificationsHeader, 
  NotificationsList, 
  NotificationsActions,
  Notification 
} from './notifications/'

interface NotificationsModalProps {
  opened: boolean
  onClose: () => void
  notifications?: Notification[]
}

const sampleNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Appointment Scheduled',
    message: 'Dr. Smith has scheduled a new appointment for tomorrow at 2:00 PM',
    time: '2 minutes ago',
    type: 'info',
    isRead: false,
  },
  {
    id: '2',
    title: 'Patient Check-in Reminder',
    message: 'John Doe is due for check-in in 15 minutes',
    time: '5 minutes ago',
    type: 'warning',
    isRead: false,
  },
  {
    id: '3',
    title: 'Prescription Ready',
    message: 'Prescription for Sarah Johnson is ready for pickup',
    time: '1 hour ago',
    type: 'success',
    isRead: true,
  },
  {
    id: '4',
    title: 'System Maintenance',
    message: 'Scheduled maintenance will occur tonight from 11 PM to 1 AM',
    time: '3 hours ago',
    type: 'info',
    isRead: true,
  },
  {
    id: '5',
    title: 'Emergency Alert',
    message: 'Emergency contact protocol activated for patient in Room 204',
    time: '4 hours ago',
    type: 'error',
    isRead: false,
  },
  {
    id: '6',
    title: 'Lab Results Available',
    message: 'Blood test results for Michael Brown are now available in the system',
    time: '6 hours ago',
    type: 'success',
    isRead: true,
  },
  {
    id: '7',
    title: 'Insurance Verification',
    message: 'Insurance verification pending for patient Jennifer Wilson',
    time: '1 day ago',
    type: 'warning',
    isRead: false,
  },
]


export const NotificationsModal = ({
  opened,
  onClose,
  notifications = sampleNotifications,
}: NotificationsModalProps) => {
  const [localNotifications, setLocalNotifications] = useState(notifications)
  const unreadCount = localNotifications.filter(n => !n.isRead).length

  // Add CSS animations
  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
        }
      }
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  const handleMarkAsRead = (id: string) => {
    setLocalNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    )
  }

  const handleDelete = (id: string) => {
    setLocalNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    )
  }

  const handleMarkAllAsRead = () => {
    setLocalNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    )
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <NotificationsHeader
          totalCount={localNotifications.length}
          unreadCount={unreadCount}
          onClose={onClose}
        />
      }
      size="lg"
      centered
      radius="xl"
      shadow="xl"
      styles={{
        header: {
          padding: '24px 28px 20px',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        },
        body: {
          padding: 0,
        },
        content: {
          borderRadius: '16px',
          overflow: 'hidden',
        },
      }}
    >
      <Box>
        <NotificationsActions
          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
        />

        <NotificationsList
          notifications={localNotifications}
          onMarkAsRead={handleMarkAsRead}
          onDelete={handleDelete}
        />
      </Box>
    </Modal>
  )
}

export default NotificationsModal
