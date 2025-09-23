'use client'

import { Avatar, Box, Group, Paper, Stack, Text } from '@mantine/core'
import { BiBuilding, BiIdCard, BiTime } from 'react-icons/bi'
import { ProfileDetailsProps, DetailItemProps } from './types'

const DetailItem = ({ icon, label, value, color }: DetailItemProps) => (
  <Group gap="md" align="center">
    <Avatar size="sm" radius="xl" color={color} variant="light">
      {icon}
    </Avatar>
    <Box>
      <Text size="xs" c="dimmed" fw={500} tt="uppercase" lts="0.5px">
        {label}
      </Text>
      <Text size="sm" fw={500} c="dark">
        {value}
      </Text>
    </Box>
  </Group>
)

export const ProfileDetails = ({ user }: ProfileDetailsProps) => {
  const details = [
    {
      icon: <BiBuilding size={16} />,
      label: 'Hospital',
      value: user.hospital,
      color: 'blue'
    },
    {
      icon: <BiIdCard size={16} />,
      label: 'User ID',
      value: user.userId,
      color: 'green'
    },
    {
      icon: <BiTime size={16} />,
      label: 'Last Login',
      value: user.lastLogin,
      color: 'orange'
    }
  ]

  return (
    <Paper p="lg" radius={0} style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
      <Text fw={600} size="md" c="dark" mb="md">
        Details
      </Text>
      
      <Stack gap="md">
        {details.map((detail, index) => (
          <DetailItem
            key={index}
            icon={detail.icon}
            label={detail.label}
            value={detail.value}
            color={detail.color}
          />
        ))}
      </Stack>
    </Paper>
  )
}
