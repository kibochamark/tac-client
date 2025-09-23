'use client'

import { Badge, Group, Paper, Text } from '@mantine/core'
import { ProfilePermissionsProps } from './types'

interface PermissionBadgeProps {
  permission: string
  index: number
}

const PermissionBadge = ({ permission, index }: PermissionBadgeProps) => (
  <Badge
    key={index}
    size="md"
    radius="xl"
    variant="light"
    color="gray"
    style={{
      backgroundColor: 'var(--mantine-color-gray-1)',
      color: 'var(--mantine-color-gray-7)',
      fontWeight: 500,
      textTransform: 'capitalize',
      border: '1px solid var(--mantine-color-gray-3)'
    }}
  >
    {permission}
  </Badge>
)

export const ProfilePermissions = ({ permissions }: ProfilePermissionsProps) => {
  return (
    <Paper p="lg" radius={0} style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
      <Text fw={600} size="md" c="dark" mb="md">
        Permissions
      </Text>
      
      <Group gap="xs" wrap="wrap">
        {permissions.map((permission, index) => (
          <PermissionBadge
            key={index}
            permission={permission}
            index={index}
          />
        ))}
      </Group>
    </Paper>
  )
}
