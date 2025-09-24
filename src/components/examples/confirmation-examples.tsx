'use client'

import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { useState } from 'react'
import { BiTrash, BiEdit, BiSave, BiLogOut, BiUser } from 'react-icons/bi'
import { toast } from 'sonner'
import { ConfirmDialog } from '@/components/common/confirm-dialog'
import { useConfirmDialog } from '@/hooks/useConfirmDialog'

const ConfirmationExamples = () => {
  const confirmDialog = useConfirmDialog()
  const [, setIsLoading] = useState(false)

  const handleDelete = () => {
    confirmDialog.openConfirmDialog(
      {
        title: 'Delete Item',
        message: 'Are you sure you want to delete this item? This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        confirmColor: 'red',
        icon: <BiTrash size={24} color="var(--mantine-color-red-6)" />
      },
      async () => {
        setIsLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsLoading(false)
        toast.success('Item deleted successfully!')
      }
    )
  }

  const handleEdit = () => {
    confirmDialog.openConfirmDialog(
      {
        title: 'Edit Item',
        message: 'Do you want to edit this item? Any unsaved changes will be lost.',
        confirmText: 'Edit',
        cancelText: 'Cancel',
        confirmColor: 'blue',
        icon: <BiEdit size={24} color="var(--mantine-color-blue-6)" />
      },
      () => {
        toast.info('Opening edit mode...')
      }
    )
  }

  const handleSave = () => {
    confirmDialog.openConfirmDialog(
      {
        title: 'Save Changes',
        message: 'Are you sure you want to save these changes?',
        confirmText: 'Save',
        cancelText: 'Cancel',
        confirmColor: 'green',
        icon: <BiSave size={24} color="var(--mantine-color-green-6)" />
      },
      () => {
        toast.success('Changes saved successfully!')
      }
    )
  }

  const handleLogout = () => {
    confirmDialog.openConfirmDialog(
      {
        title: 'Sign Out',
        message: 'Are you sure you want to sign out? You will need to log in again.',
        confirmText: 'Sign Out',
        cancelText: 'Stay Logged In',
        confirmColor: 'orange',
        icon: <BiLogOut size={24} color="var(--mantine-color-orange-6)" />
      },
      () => {
        toast.info('Signing out...')
      }
    )
  }

  const handleProfileUpdate = () => {
    confirmDialog.openConfirmDialog(
      {
        title: 'Update Profile',
        message: 'This will update your profile information. Continue?',
        confirmText: 'Update Profile',
        cancelText: 'Cancel',
        confirmColor: 'violet',
        icon: <BiUser size={24} color="var(--mantine-color-violet-6)" />
      },
      () => {
        toast.success('Profile updated successfully!')
      }
    )
  }

  return (
    <Paper p="md" radius="md" withBorder>
      <Stack gap="md">
        <Title order={3}>Confirmation Dialog Examples</Title>
        <Text size="sm" c="dimmed">
          Click the buttons below to see different types of confirmation dialogs in action.
        </Text>

        <Group gap="sm">
          <Button
            color="red"
            variant="outline"
            leftSection={<BiTrash size={16} />}
            onClick={handleDelete}
          >
            Delete Item
          </Button>

          <Button
            color="blue"
            variant="outline"
            leftSection={<BiEdit size={16} />}
            onClick={handleEdit}
          >
            Edit Item
          </Button>

          <Button
            color="green"
            variant="outline"
            leftSection={<BiSave size={16} />}
            onClick={handleSave}
          >
            Save Changes
          </Button>

          <Button
            color="orange"
            variant="outline"
            leftSection={<BiLogOut size={16} />}
            onClick={handleLogout}
          >
            Sign Out
          </Button>

          <Button
            color="violet"
            variant="outline"
            leftSection={<BiUser size={16} />}
            onClick={handleProfileUpdate}
          >
            Update Profile
          </Button>
        </Group>

        <ConfirmDialog
          opened={confirmDialog.opened}
          onClose={confirmDialog.closeConfirmDialog}
          onConfirm={confirmDialog.onConfirm || (() => {})}
          title={confirmDialog.options?.title}
          message={confirmDialog.options?.message || ''}
          confirmText={confirmDialog.options?.confirmText}
          cancelText={confirmDialog.options?.cancelText}
          confirmColor={confirmDialog.options?.confirmColor}
          isLoading={confirmDialog.isLoading}
          icon={confirmDialog.options?.icon}
        />
      </Stack>
    </Paper>
  )
}

export default ConfirmationExamples
