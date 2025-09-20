// components/SidebarFooter.tsx
import { Paper, Stack } from '@mantine/core'
import { SignOutButton } from './sign-out-button'
import { UserProfile } from './user-profile'


interface SidebarFooterProps {
    isCollapsed: boolean
    isMobile: boolean
    onNavigate: (path: string) => void
    onSignOut: () => void
}

export const SidebarFooter = ({
    isCollapsed,
    isMobile,
    onNavigate,
    onSignOut
}: SidebarFooterProps) => {
    const user = {
        name: "Sarah Johnson",
        role: "Nurse",
        initials: "SJ"
    }

    return (
        <Paper p="xs" withBorder radius={0} style={{ borderTop: '1px solid var(--mantine-color-gray-3)' }}>
            <Stack gap="xs">
                <UserProfile
                    isCollapsed={isCollapsed}
                    isMobile={isMobile}
                    onClick={() => onNavigate('/dashboard/profile')}
                    user={user}
                />

                <SignOutButton
                    isCollapsed={isCollapsed}
                    isMobile={isMobile}
                    onSignOut={onSignOut}
                />
            </Stack>
        </Paper>
    )
}
