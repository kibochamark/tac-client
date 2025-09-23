// components/NotificationButton.tsx
import React from 'react'
import { Button, Text, Box } from '@mantine/core'
import { BiBell } from 'react-icons/bi'
import Badge from './common/badge'

interface NotificationButtonProps {
    isCollapsed: boolean
    isMobile: boolean
    onOpenModal: () => void
    hasNotifications?: boolean
    count?: number
}

export const NotificationButton = ({
    isCollapsed,
    isMobile,
    onOpenModal,
    hasNotifications = true,
    count
}: NotificationButtonProps) => {
    return (
        <Button
            onClick={onOpenModal}
            variant="subtle"
            color="gray"
            size="md"
            fullWidth
            justify={isCollapsed && !isMobile ? 'center' : 'flex-start'}
            leftSection={<BiBell size={20} />}
            rightSection={(!isCollapsed || isMobile) && count ? (
                <Badge count={count} variant="notification" />
            ) : undefined}
            title={(isCollapsed && !isMobile) ? 'Notifications' : undefined}
            style={{
                height: 'auto',
                padding: '12px 16px',
                position: 'relative',
            }}
        >
            {(!isCollapsed || isMobile) && (
                <Text size="sm" fw={500} style={{ flex: 1 }} ta="left">
                    Notifications
                </Text>
            )}
            {hasNotifications && (isCollapsed && !isMobile) && (
                <Box
                    style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        width: 8,
                        height: 8,
                        backgroundColor: 'red',
                        borderRadius: '50%',
                    }}
                />
            )}
        </Button>
    )
}
