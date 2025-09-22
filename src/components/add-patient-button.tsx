// components/AddPatientButton.tsx
import React from 'react'
import { Button, Text } from '@mantine/core'
import { BiPlus } from 'react-icons/bi'

interface AddPatientButtonProps {
  isCollapsed: boolean
  isMobile: boolean
  onClick: () => void
}

export const AddPatientButton = ({ isCollapsed, isMobile, onClick }: AddPatientButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="filled"
      color="green"
      size="md"
      fullWidth
      justify={isCollapsed && !isMobile ? 'center' : 'flex-start'}
      leftSection={<BiPlus size={20} />}
      title={(isCollapsed && !isMobile) ? 'Add Patient' : undefined}
      style={{
        height: 'auto',
        padding: '12px 16px',
        background: 'linear-gradient(135deg, #4ade80 0%, #06b6d4 50%, #3b82f6 100%)',
      }}
    >
      {(!isCollapsed || isMobile) && (
        <Text size="sm" fw={500} style={{ flex: 1 }} ta="left">
          Add Patient
        </Text>
      )}
    </Button>
  )
}