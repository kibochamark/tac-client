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
      color="blue"
      size="md"
      fullWidth
      justify={isCollapsed && !isMobile ? 'center' : 'flex-start'}
      leftSection={isCollapsed && !isMobile ? undefined : <BiPlus size={20} />}
      title={(isCollapsed && !isMobile) ? 'Add Patient' : undefined}
      style={{
        height: 'auto',
        padding: isCollapsed && !isMobile ? '12px 8px' : '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed && !isMobile ? 'center' : 'flex-start',
      }}
    >
      {isCollapsed && !isMobile ? (
        <BiPlus size={20} />
      ) : (
        <Text size="sm" fw={500} style={{ flex: 1 }} ta="left">
          Add Patient
        </Text>
      )}
    </Button>
  )
}