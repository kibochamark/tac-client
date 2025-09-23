'use client'

import {
    ActionIcon,
    Avatar,
    Box,
    Flex,
    Group,
    Modal,
    Text,
    Tooltip
} from '@mantine/core'
import { BiUser, BiX } from 'react-icons/bi'
import { ProfileHeader, ProfileDetails, ProfilePermissions, ProfileActions } from './user-profile/'

interface UserProfileModalProps {
  opened: boolean
  onClose: () => void
  user?: {
    name: string
    role: string
    initials: string
    email: string
    hospital: string
    userId: string
    lastLogin: string
    permissions: string[]
  }
}

const defaultUser = {
  name: "Sarah Johnson",
  role: "Nurse",
  initials: "SJ",
  email: "sarah.johnson@hospital.com",
  hospital: "General Hospital",
  userId: "1",
  lastLogin: "2025-09-23 09:15",
  permissions: [
    "view patients",
    "edit patients", 
    "log events",
    "schedule appointments"
  ]
}

export const UserProfileModal = ({
  opened,
  onClose,
  user = defaultUser,
}: UserProfileModalProps) => {
  const handleSettings = () => {
    console.log('Open settings')
    // TODO: Implement settings functionality
  }

  const handleChangePassword = () => {
    console.log('Change password')
    // TODO: Implement change password functionality
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Flex align="center" justify="space-between" w="100%">
          <Group gap="sm">
            <Avatar
              size="sm"
              radius="xl"
              color="blue"
              variant="light"
            >
              <BiUser size={16} />
            </Avatar>
            <Text fw={700} size="lg" c="dark">
              User Profile
            </Text>
          </Group>
          <Tooltip label="Close profile">
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
      }
      size="md"
      centered
      radius="xl"
      shadow="xl"
      styles={{
        header: {
          padding: '24px 28px 20px',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        },
        body: {
          padding: 0,
        },
        content: {
          borderRadius: '16px',
          overflow: 'hidden',
        },
      }}
    >
       <Box>
         <ProfileHeader 
           user={{
             name: user.name,
             role: user.role,
             initials: user.initials,
             email: user.email
           }}
         />

         <ProfileDetails 
           user={{
             hospital: user.hospital,
             userId: user.userId,
             lastLogin: user.lastLogin
           }}
         />

         <ProfilePermissions permissions={user.permissions} />

         <ProfileActions 
           onSettings={handleSettings}
           onChangePassword={handleChangePassword}
         />
       </Box>
    </Modal>
  )
}

export default UserProfileModal
