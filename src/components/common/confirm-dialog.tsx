'use client'

import { Button, Group, Modal, Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { BiQuestionMark } from 'react-icons/bi'

interface ConfirmDialogProps {
  opened: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
  message: string
  confirmText?: string
  cancelText?: string
  confirmColor?: string
  isLoading?: boolean
  icon?: React.ReactNode
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  opened,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmColor = 'red',
  isLoading = false,
  icon
}) => {
  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      size="sm"
      centered
      radius="md"
    >
      <Stack gap="md">
        <Group gap="sm">
          {icon || <BiQuestionMark size={24} color="var(--mantine-color-orange-6)" />}
          <Text size="sm" c="dimmed">
            {message}
          </Text>
        </Group>

        <Group justify="flex-end" gap="sm" mt="md">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
            size="sm"
          >
            {cancelText}
          </Button>
          <Button
            color={confirmColor}
            onClick={handleConfirm}
            loading={isLoading}
            size="sm"
          >
            {confirmText}
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default ConfirmDialog
