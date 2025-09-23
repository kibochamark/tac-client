'use client'

import { ActionIcon, Avatar, Badge, Box, Flex, Group, Text, Tooltip } from '@mantine/core'
import { BiBell, BiX } from 'react-icons/bi'
import { NotificationsHeaderProps } from './types'

export const NotificationsHeader = ({ 
  totalCount, 
  unreadCount, 
  onClose 
}: NotificationsHeaderProps) => {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <Group gap="sm">
        <Avatar
          size="sm"
          radius="xl"
          color="blue"
          variant="light"
        >
          <BiBell size={16} />
        </Avatar>
        <Box>
          <Text fw={700} size="lg" c="dark">
            Notifications
          </Text>
          <Text size="xs" c="dimmed">
            {totalCount} total notifications
          </Text>
        </Box>
        {unreadCount > 0 && (
          <Badge 
            color="red" 
            size="lg" 
            radius="xl"
            variant="filled"
            style={{ 
              animation: 'pulse 2s infinite',
              boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.7)'
            }}
          >
            {unreadCount}
          </Badge>
        )}
      </Group>
      <Tooltip label="Close notifications">
        <ActionIcon
          variant="subtle"
          color="gray"
          onClick={onClose}
          size="lg"
          radius="xl"
        >
          <BiX size={18} />
        </ActionIcon>
      </Tooltip>
    </Flex>
  )
}
