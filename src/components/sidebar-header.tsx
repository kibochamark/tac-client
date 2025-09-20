// components/SidebarHeader.tsx
import React from 'react'
import { Paper, Group, Text, ActionIcon, Avatar, Stack } from '@mantine/core'
import { BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'

interface SidebarHeaderProps {
    isCollapsed: boolean
    isMobile: boolean
    toggleSidebar: () => void
    setIsMobileMenuOpen: (open: boolean) => void
}

export const SidebarHeader = ({
    isCollapsed,
    isMobile,
    toggleSidebar,
    setIsMobileMenuOpen
}: SidebarHeaderProps) => {
    return (
        <Paper p="md" withBorder radius={0} style={{ position: 'relative' }}>
            {!isMobile && (
                <ActionIcon
                    onClick={toggleSidebar}
                    variant="filled"
                    color="gray"
                    size="sm"
                    radius="xl"
                    style={{
                        position: 'absolute',
                        right: -12,
                        top: 32,
                        zIndex: 10,
                    }}
                >
                    {isCollapsed ? <BiChevronRight size={16} /> : <BiChevronLeft size={16} />}
                </ActionIcon>
            )}

            {isMobile && (
                <ActionIcon
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="filled"
                    color="gray"
                    size="sm"
                    radius="xl"
                    style={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        zIndex: 10,
                    }}
                >
                    <BiX size={20} />
                </ActionIcon>
            )}

            <Group gap="sm" align="center">
                <Avatar
                    size="md"
                    radius="xl"
                    gradient={{ from: 'purple', to: 'blue', deg: 45 }}
                    color="purple"
                >
                    <FaRegHeart size={16} />
                </Avatar>
                
                {(!isCollapsed || isMobile) && (
                    <Stack gap={0}>
                        <Text size="sm" fw={600} c="dark">
                            TAC System
                        </Text>
                        <Text size="xs" c="dimmed">
                            General Hospital
                        </Text>
                    </Stack>
                )}
            </Group>
        </Paper>
    )
}
