'use client'

import { Avatar, Box, Text } from '@mantine/core'
import { BiBell } from 'react-icons/bi'

export const NotificationsEmpty = () => {
  return (
    <Box p="xl" ta="center">
      <Avatar 
        size="xl" 
        radius="xl" 
        color="gray" 
        variant="light" 
        mx="auto" 
        mb="md"
      >
        <BiBell size={32} />
      </Avatar>
      <Text c="dimmed" size="md" fw={500}>
        No notifications yet
      </Text>
      <Text c="dimmed" size="sm" mt="xs">
        You&apos;ll see important updates here
      </Text>
    </Box>
  )
}
