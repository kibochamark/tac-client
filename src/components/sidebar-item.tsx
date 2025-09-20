// components/SidebarItem.tsx
import React from 'react'
import type { IconType } from 'react-icons'
import { Button, Text } from '@mantine/core'
import { Badge, ActiveBadge } from './badge'

interface SidebarItemProps {
    id: string
    Icon: IconType
    title: string
    path: string
    count?: number
    isActive: boolean
    isCollapsed: boolean
    isMobile: boolean
    onClick: (path: string) => void
}

export const SidebarItem = ({
    Icon, title, count, path, isActive, isCollapsed, isMobile, onClick
}: SidebarItemProps) => {
    return (
        <Button
            onClick={() => onClick(path)}
            variant={isActive ? 'filled' : 'subtle'}
            color={isActive ? 'blue' : 'gray'}
            size="md"
            fullWidth
            justify={isCollapsed && !isMobile ? 'center' : 'flex-start'}
            leftSection={<Icon size={20} />}
            rightSection={(!isCollapsed || isMobile) && count ? (
                isActive ? (
                    <ActiveBadge count={count} />
                ) : (
                    <Badge count={count} variant="active" />
                )
            ) : undefined}
            title={(isCollapsed && !isMobile) ? title : undefined}
            style={{
                height: 'auto',
                padding: '12px 16px',
            }}
        >
            {(!isCollapsed || isMobile) && (
                <Text size="sm" fw={500} style={{ flex: 1 }} ta="left">
                    {title}
                </Text>
            )}
        </Button>
    )
}
