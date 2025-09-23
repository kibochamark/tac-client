// components/SidebarFooter.tsx
import { Paper, Stack } from '@mantine/core'
import { SignOutButton } from './sign-out-button'
import { UserProfile } from './user-profile'
import { UserProfileModal } from './user-profile-modal'


interface SidebarFooterProps {
    isCollapsed: boolean
    isMobile: boolean
    onSignOut: () => void
    isUserProfileModalOpen: boolean
    setIsUserProfileModalOpen: (open: boolean) => void
}

export const SidebarFooter = ({
    isCollapsed,
    isMobile,
    onSignOut,
    isUserProfileModalOpen,
    setIsUserProfileModalOpen
}: SidebarFooterProps) => {
    const user = {
        name: "Sarah Johnson",
        role: "Nurse",
        initials: "SJ"
    }

    return (
        <>
            <Paper p="xs" withBorder radius={0} style={{ borderTop: '1px solid var(--mantine-color-gray-3)' }}>
                <Stack gap="xs">
                    <UserProfile
                        isCollapsed={isCollapsed}
                        isMobile={isMobile}
                        onOpenModal={() => setIsUserProfileModalOpen(true)}
                        user={user}
                    />

                    <SignOutButton
                        isCollapsed={isCollapsed}
                        isMobile={isMobile}
                        onSignOut={onSignOut}
                    />
                </Stack>
            </Paper>

            <UserProfileModal
                opened={isUserProfileModalOpen}
                onClose={() => setIsUserProfileModalOpen(false)}
            />
        </>
    )
}
