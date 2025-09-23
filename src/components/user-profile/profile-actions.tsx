'use client'

import { Button, Group, Paper } from '@mantine/core'
import { SettingsIcon } from 'lucide-react'
import { BiLock } from 'react-icons/bi'
import { ProfileActionsProps, ActionButtonProps } from './types'

const ActionButton = ({ 
  icon, 
  label, 
  onClick, 
  color = 'blue',
  shadowColor = 'rgba(0, 0, 0, 0.15)'
}: ActionButtonProps) => (
  <Button
    variant="light"
    size="md"
    radius="xl"
    leftSection={icon}
    onClick={onClick}
    color={color}
    style={{
      fontWeight: 600,
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)'
      e.currentTarget.style.boxShadow = `0 4px 12px ${shadowColor}`
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
    }}
  >
    {label}
  </Button>
)

export const ProfileActions = ({ onSettings, onChangePassword }: ProfileActionsProps) => {
  return (
    <Paper p="lg" radius={0}>
      <Group gap="md" grow>
        <ActionButton
          icon={<SettingsIcon size={18} />}
          label="Settings"
          onClick={onSettings}
        />
        
        <ActionButton
          icon={<BiLock size={18} />}
          label="Change Password"
          onClick={onChangePassword}
          color="red"
          shadowColor="rgba(239, 68, 68, 0.3)"
        />
      </Group>
    </Paper>
  )
}
