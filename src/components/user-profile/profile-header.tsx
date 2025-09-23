'use client'

import { Avatar, Badge, Box, Group, Paper, Text } from '@mantine/core'
import { BiShield } from 'react-icons/bi'
import { ProfileHeaderProps } from './types'

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <Paper 
      p="xl" 
      radius={0} 
      style={{ 
        background: 'linear-gradient(135deg,rgb(64, 76, 131) 0%,rgb(80, 52, 109) 100%)',
        color: 'white'
      }}
    >
      <Group gap="lg" align="center">
        <Avatar
          size="xl"
          radius="xl"
          color="white"
          style={{ 
            color: '#667eea',
            fontWeight: 700,
            fontSize: '24px',
            border: '3px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          {user.initials}
        </Avatar>
        
        <Box style={{ flex: 1 }}>
          <Text fw={700} size="xl" c="white" mb="xs">
            {user.name}
          </Text>
          
          <Group gap="xs" mb="sm">
            <Badge
              size="lg"
              radius="xl"
              variant="light"
              color="white"
              leftSection={<BiShield size={14} />}
              style={{ 
                color: '#667eea',
                fontWeight: 600
              }}
            >
              {user.role}
            </Badge>
          </Group>
          
          <Text size="sm" c="rgba(255, 255, 255, 0.8)" fw={500}>
            {user.email}
          </Text>
        </Box>
      </Group>
    </Paper>
  )
}
