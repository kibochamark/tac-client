'use client'

import { ActionIcon, Avatar, Badge, Box, Divider, Group, Paper, Text, Tooltip, Transition } from '@mantine/core'
import { BiCheck, BiTime, BiTrash } from 'react-icons/bi'
import { BiCheckCircle, BiError, BiErrorAlt, BiInfoCircle } from 'react-icons/bi'
import { Notification, NotificationItemProps } from './types'

const getNotificationConfig = (type: Notification['type']) => {
  switch (type) {
    case 'info':
      return { color: 'blue', icon: BiInfoCircle, bgColor: 'var(--mantine-color-blue-0)' }
    case 'warning':
      return { color: 'orange', icon: BiErrorAlt, bgColor: 'var(--mantine-color-orange-0)' }
    case 'success':
      return { color: 'green', icon: BiCheckCircle, bgColor: 'var(--mantine-color-green-0)' }
    case 'error':
      return { color: 'red', icon: BiError, bgColor: 'var(--mantine-color-red-0)' }
    default:
      return { color: 'gray', icon: BiInfoCircle, bgColor: 'var(--mantine-color-gray-0)' }
  }
}

const getTimeIcon = (time: string) => {
  if (time.includes('minute') || time.includes('hour')) {
    return <BiTime size={12} />
  }
  return null
}

export const NotificationItem = ({ 
  notification, 
  onMarkAsRead, 
  onDelete, 
  isLast 
}: NotificationItemProps) => {
  const config = getNotificationConfig(notification.type)
  const IconComponent = config.icon

  return (
    <Transition
      mounted={true}
      transition="slide-right"
      duration={200}
      timingFunction="ease-out"
    >
      {(styles) => (
        <Box style={styles}>
          <Paper
            p="lg"
            radius={0}
            style={{
              backgroundColor: notification.isRead
                ? 'transparent'
                : config.bgColor,
              borderLeft: `4px solid var(--mantine-color-${config.color}-6)`,
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = notification.isRead 
                ? 'var(--mantine-color-gray-0)' 
                : config.bgColor
              e.currentTarget.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = notification.isRead
                ? 'transparent'
                : config.bgColor
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            <Group justify="space-between" align="flex-start" wrap="nowrap">
              <Group gap="md" align="flex-start" style={{ flex: 1 }}>
                <Avatar
                  size="md"
                  radius="xl"
                  color={config.color}
                  variant="light"
                >
                  <IconComponent size={18} />
                </Avatar>
                
                <Box style={{ flex: 1, minWidth: 0 }}>
                  <Group gap="xs" mb="xs" align="center">
                    <Text 
                      fw={notification.isRead ? 500 : 700} 
                      size="sm"
                      c="dark"
                      style={{ 
                        textDecoration: notification.isRead ? 'none' : 'none',
                        lineHeight: 1.4
                      }}
                    >
                      {notification.title}
                    </Text>
                    {!notification.isRead && (
                      <Box
                        w={8}
                        h={8}
                        bg={config.color}
                        style={{ 
                          borderRadius: '50%',
                          animation: 'pulse 2s infinite'
                        }}
                      />
                    )}
                  </Group>
                  
                  <Text 
                    size="sm" 
                    c="dimmed" 
                    mb="sm"
                    style={{ 
                      lineHeight: 1.5,
                      wordBreak: 'break-word'
                    }}
                  >
                    {notification.message}
                  </Text>
                  
                  <Group gap="xs" align="center">
                    {getTimeIcon(notification.time)}
                    <Text size="xs" c="dimmed" fw={500}>
                      {notification.time}
                    </Text>
                    <Badge
                      size="xs"
                      color={config.color}
                      variant="light"
                      radius="sm"
                    >
                      {notification.type}
                    </Badge>
                  </Group>
                </Box>
              </Group>
              
              <Group gap="xs" ml="md">
                {!notification.isRead && (
                  <Tooltip label="Mark as read">
                    <ActionIcon
                      variant="subtle"
                      color={config.color}
                      size="md"
                      radius="xl"
                      onClick={() => onMarkAsRead(notification.id)}
                      style={{
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    >
                      <BiCheck size={16} />
                    </ActionIcon>
                  </Tooltip>
                )}
                <Tooltip label="Delete notification">
                  <ActionIcon
                    variant="subtle"
                    color="red"
                    size="md"
                    radius="xl"
                    onClick={() => onDelete(notification.id)}
                    style={{
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <BiTrash size={16} />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Group>
          </Paper>
          {!isLast && <Divider color="gray.2" />}
        </Box>
      )}
    </Transition>
  )
}
